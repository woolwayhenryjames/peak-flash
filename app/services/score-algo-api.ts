import type { JsonObject } from ".prisma/main/internal/prismaNamespace";
import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";

export async function checkUserCampaignAlgo(userEmail: string) {
  const campains = await db.campaign.findMany({
    select: { joinRequirement: true },
  });
  const keywordsList = campains.map(
    (campaign) =>
      ((campaign.joinRequirement as JsonObject)?.[
        "Required Tags"
      ] as string[]) || []
  );
  const algoTasks = await db.$queryRaw<{ keyword: string }[]>`
SELECT
  tiktok_creator_score.keyword_scores.keyword
FROM
	tiktok_creator_score.keyword_scores
	INNER JOIN
	tiktok_creator_score.users
	ON
		tiktok_creator_score.keyword_scores.user_id = tiktok_creator_score.users.id
WHERE tiktok_creator_score.users.username = ${userEmail};
  `;
  for (const task of keywordsList) {
    const matchingTask = algoTasks.find(
      (algoTask) =>
        algoTask.keyword.split(" | ").sort().join(" | ") ===
        task.sort().join(" | ")
    );
    if (!matchingTask) {
      // Execute in next tick to avoid blocking current execution
      process.nextTick(() => {
        fireAndForgetFetch(userEmail, task).catch(() => {
          // Silently handle any unhandled rejections
        });
      });
    }
  }
}

export async function checkAllUserCampaignAlgo() {
  const users = await db.user.findMany({
    select: { email: true },
    where: { isBusiness: false },
  });
  const campains = await db.campaign.findMany({
    select: { joinRequirement: true },
  });
  const emailSet = new Set(users.map((user) => user.email));
  const keywordsList = campains.map(
    (campaign) =>
      ((campaign.joinRequirement as JsonObject)?.[
        "Required Tags"
      ] as string[]) || []
  );
  const taskList = [...emailSet].flatMap((email) =>
    keywordsList.map((keywords) => ({ email, keywords }))
  );
  const algoTasks = await db.$queryRaw<{ username: string; keyword: string }[]>`
SELECT
  tiktok_creator_score.keyword_scores.keyword, 
  tiktok_creator_score.users.username
FROM
	tiktok_creator_score.keyword_scores
	INNER JOIN
	tiktok_creator_score.users
	ON
		tiktok_creator_score.keyword_scores.user_id = tiktok_creator_score.users.id;
  `;

  // Collect missing tasks for batch processing
  const missingTasks: Array<{ email: string; keywords: string[] }> = [];

  for (const task of taskList) {
    const matchingTask = algoTasks.find(
      (algoTask) =>
        algoTask.username === task.email &&
        algoTask.keyword.split(" | ").sort().join(" | ") ===
          task.keywords.sort().join(" | ")
    );
    if (!matchingTask) {
      missingTasks.push(task);
    }
  }

  // Process missing tasks in batches to prevent overwhelming the API
  if (missingTasks.length > 0) {
    logger.info(`Processing ${missingTasks.length} missing tasks in batches`);
    // Execute batch processing asynchronously without awaiting
    processBatchedRequests(missingTasks).catch((error) => {
      logger.error("Error in batch processing:", error);
    });
  }
}

export async function updateUserPoints() {
  try {
    await db.$executeRaw`CALL UpdateUsers();`;
  } catch (error) {
    logger.error("Error updating user points:", error);
  }
}

// Fire-and-forget fetch with timeout to prevent event loop blocking
async function fireAndForgetFetch(username: string, keywords: string[]) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

  try {
    const response = await fetch(
      `${import.meta.env.MODE === "production" ? "http://172.31.28.161:3333" : "http://localhost:3333"}/api/addUser`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, keywords }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (response.ok) {
      logger.info("Task sent successfully for", { username, keywords });
      return;
    }

    logger.error("Failed to send task:", {
      status: response.status,
      username,
      keywords,
    });
  } catch (error) {
    clearTimeout(timeoutId);
    // Ignore AbortErrors from timeout, log other errors
    if (error instanceof Error && error.name !== "AbortError") {
      logger.error("Error sending task:", error);
    }
  }
}

// Batch process requests with concurrency limit to prevent API overload
async function processBatchedRequests(
  tasks: Array<{ email: string; keywords: string[] }>
) {
  const BATCH_SIZE = 10; // Process 10 requests at a time
  const DELAY_BETWEEN_BATCHES = 100; // 100ms delay between batches

  for (let i = 0; i < tasks.length; i += BATCH_SIZE) {
    const batch = tasks.slice(i, i + BATCH_SIZE);

    // Process batch concurrently but with limit
    const batchPromises = batch.map(
      (task) =>
        new Promise<void>((resolve) => {
          process.nextTick(() => {
            fireAndForgetFetch(task.email, task.keywords)
              .catch(() => {
                // Silently handle any unhandled rejections
              })
              .finally(() => resolve());
          });
        })
    );

    // Wait for current batch to complete
    await Promise.all(batchPromises);

    // Add small delay between batches to prevent overwhelming the API
    if (i + BATCH_SIZE < tasks.length) {
      await new Promise((resolve) =>
        setTimeout(resolve, DELAY_BETWEEN_BATCHES)
      );
    }
  }
}
