import type { ActionFunctionArgs } from "react-router";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";

export async function action({ request }: ActionFunctionArgs) {
  // Get the authenticated user
  const userResult = await getDbUser(request);
  if (userResult.isErr()) {
    return new Response("Unauthorized", { status: 401 });
  }
  if (userResult.value.isBusiness) {
    return new Response("Forbidden", { status: 403 });
  }

  const user = userResult.value;
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const { taskId } = await request.json();
  if (!taskId) {
    return new Response("Task ID is required", { status: 400 });
  }
  const task = await db.task.findUnique({
    where: { id: taskId },
  });
  if (!task) {
    return new Response("Task not found", { status: 404 });
  }
  if (task.type === "FOLLOW_X") {
    if (!task.actionUrl) {
      logger.warn("FOLLOW_X task missing action URL", { taskId });
      return new Response("Task misconfigured", { status: 422 });
    }

    const twitterHandle = extractXHandle(task.actionUrl);
    if (!twitterHandle) {
      logger.warn("Unable to extract X handle from action URL", {
        actionUrl: task.actionUrl,
      });
      return new Response("Task misconfigured", { status: 422 });
    }

    const twitterAccount = await db.account.findFirst({
      where: { userId: user.id, providerId: "twitter" },
      select: {
        accountId: true,
        accessToken: true,
        accessTokenExpiresAt: true,
      },
    });

    if (!(twitterAccount?.accountId && twitterAccount.accessToken)) {
      return new Response("Link your X account to complete this task", {
        status: 400,
      });
    }

    if (
      twitterAccount.accessTokenExpiresAt &&
      twitterAccount.accessTokenExpiresAt.getTime() <= Date.now()
    ) {
      return new Response("Re-connect your X account and try again", {
        status: 401,
      });
    }

    const targetUserId = await getXUserId(
      twitterHandle,
      twitterAccount.accessToken
    );
    if (!targetUserId) {
      logger.warn("Failed to resolve X user ID", { twitterHandle });
      return new Response("Unable to verify follow status", { status: 502 });
    }

    const hasFollowed = await userFollowsTargetOnX({
      accessToken: twitterAccount.accessToken,
      followerUserId: twitterAccount.accountId,
      targetUserId,
    });

    if (hasFollowed === null) {
      logger.error("Twitter API permission error", {
        userId: user.id,
        taskId,
      });
      return new Response(
        "Twitter permission error. Please reconnect your X account with updated permissions.",
        { status: 403 }
      );
    }

    if (!hasFollowed) {
      return new Response("Follow the X account to finish this task", {
        status: 400,
      });
    }
  }
  const updatedTask = await db.taskUser.create({
    data: { taskId, userId: user.id },
  });
  return Response.json(updatedTask);
}

function extractXHandle(url: string): string | null {
  try {
    const parsed = new URL(url);
    const segments = parsed.pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return null;
    }
    const handle = segments[0]?.startsWith("@")
      ? segments[0].slice(1)
      : segments[0];
    return handle ? handle.split("?")[0] : null;
  } catch {
    return null;
  }
}

async function getXUserId(
  handle: string,
  accessToken: string
): Promise<string | null> {
  const data = await twitterFetch<{
    data?: { id: string };
  }>(
    `https://api.twitter.com/2/users/by/username/${handle}?user.fields=id`,
    accessToken
  );
  return data?.data?.id ?? null;
}

async function userFollowsTargetOnX({
  followerUserId,
  targetUserId,
  accessToken,
}: {
  followerUserId: string;
  targetUserId: string;
  accessToken: string;
}): Promise<boolean> {
  const MAX_PAGES = 5;
  let paginationToken: string | undefined;

  for (let page = 0; page < MAX_PAGES; page++) {
    const url = new URL(
      `https://api.twitter.com/2/users/${followerUserId}/following`
    );
    url.searchParams.set("max_results", "1000");
    url.searchParams.set("user.fields", "id");
    if (paginationToken) {
      url.searchParams.set("pagination_token", paginationToken);
    }

    const response = await twitterFetch<{
      data?: Array<{ id: string }>;
      meta?: { next_token?: string };
    }>(url.toString(), accessToken);

    if (!response) {
      return false;
    }

    if (response.data?.some((user) => user.id === targetUserId)) {
      return true;
    }

    paginationToken = response.meta?.next_token;
    if (!paginationToken) {
      break;
    }
  }

  return false;
}

async function twitterFetch<T>(
  url: string,
  accessToken: string,
  timeoutMs = 5000
): Promise<T | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      logger.warn("Twitter API request failed", {
        status: response.status,
        url,
        error: errorBody,
      });
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    logger.error("Twitter API request error", { url, error });
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
