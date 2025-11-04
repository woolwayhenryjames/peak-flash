import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";

/**
 * Save Twitter handle to the database when user links their Twitter account
 */
export async function saveTwitterHandle({
  accountId,
  twitterHandle,
}: {
  accountId: string;
  twitterHandle: string;
}) {
  try {
    // First find the user by account
    const account = await db.account.findFirst({
      where: { accountId },
      include: { user: true },
    });

    if (!account) {
      logger.error(`Account not found with accountId: ${accountId}`);
      return;
    }

    // Update the user with the Twitter handle
    await db.user.update({
      where: { id: account.userId },
      data: { twitterHandle },
    });

    logger.info(
      `Twitter handle saved for user ${account.userId}: @${twitterHandle}`
    );
  } catch (error) {
    logger.error(
      `Failed to save Twitter handle with accountId ${accountId}:`,
      error
    );
  }
}
