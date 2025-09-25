import type { ActionFunctionArgs } from "react-router";
import { getSessionUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";

export async function action({ request }: ActionFunctionArgs) {
  // Get the authenticated user
  const userResult = await getSessionUser(request);
  if (userResult.isErr()) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = userResult.value;
  try {
    if (request.method === "POST") {
      return bindWallet(request, user);
    }
    if (request.method === "DELETE") {
      return unbindWallet(user);
    }
    return new Response("Method not allowed", { status: 405 });
  } catch (error) {
    logger.error("Error in process-invite API:", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

async function bindWallet(request: Request, user: { id: string }) {
  // Parse the request body
  const { walletAddress } = await request.json();
  if (!walletAddress) {
    return new Response("Wallet address is required", { status: 400 });
  }
  const result = await db.user.update({
    where: { id: user.id },
    data: { walletAddress },
  });
  return Response.json(result);
}

async function unbindWallet(user: { id: string }) {
  const result = await db.user.update({
    where: { id: user.id },
    data: { walletAddress: null },
  });
  return Response.json(result);
}
