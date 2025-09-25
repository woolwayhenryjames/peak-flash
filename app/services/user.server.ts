import { err, ok } from "neverthrow";
import {
  cleanupOldUserAvatars,
  uploadImageFromUrl,
} from "~/services/aws-s3.server";
import { logger } from "~/services/logger.server";
import { db } from "./db.server";

export const getUserInviteRecords = async (userId: string) => {
  const inviteRecords = await db.user.findMany({
    where: {
      inviterId: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return inviteRecords.map((record) => ({
    ...record,
    timeAgo: getTimeAgo(record.createdAt),
    avatar: record.image || getInitials(record.name || record.email),
  }));
};

export const getUserInviteStats = async (userId: string) => {
  const inviteCount = await db.user.count({
    where: {
      inviterId: userId,
    },
  });

  return {
    inviteCount,
    rewardRate: 10, // 10% as defined in the business logic
  };
};

// Helper function to get time ago string
function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);

  if (diffInDays === 0) {
    return "Today";
  }
  if (diffInDays === 1) {
    return "1 day ago";
  }
  if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  }
  if (diffInWeeks === 1) {
    return "1 week ago";
  }
  return `${diffInWeeks} weeks ago`;
}

// Helper function to get initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}

// Helper function to check if an image URL needs to be persisted to S3
function isExternalImageUrl(imageUrl: string): boolean {
  return (
    imageUrl.includes("tiktok") ||
    imageUrl.includes("muscdn.com") ||
    imageUrl.includes("bytedns.net") ||
    // Add other external image domains that have expiration
    !imageUrl.startsWith("/")
  );
}

// Invite-related functions
export const validateInviteCode = async (inviterId: string) => {
  try {
    const inviter = await db.user.findUnique({
      where: { id: inviterId },
      select: { id: true },
    });
    return inviter ? ok(inviter) : err(new Error("inviter not found"));
  } catch (error) {
    return err(error as Error);
  }
};

export const processInviteSignup = async (
  newUserId: string,
  inviterId: string
) => {
  try {
    logger.info(
      `Processing invite signup: newUserId=${newUserId}, inviterId=${inviterId}`
    );

    // Validate that the inviter exists
    const inviter = await db.user.findUnique({
      where: { id: inviterId },
      select: { id: true, name: true },
    });

    if (!inviter) {
      logger.error(`Inviter ${inviterId} not found`);
      return err(new Error("Inviter not found"));
    }

    // Check if the new user already has an inviter (prevent duplicate invites)
    const existingUser = await db.user.findUnique({
      where: { id: newUserId },
      select: { inviterId: true },
    });

    if (existingUser?.inviterId) {
      logger.info(
        `User ${newUserId} already has inviter ${existingUser.inviterId}, skipping`
      );
      return ok(existingUser);
    }

    // Update the new user with the inviter relationship
    const user = await db.user.update({
      where: { id: newUserId },
      data: { inviterId },
    });

    logger.info(`Successfully set inviter ${inviterId} for user ${newUserId}`);
    return ok(user);
  } catch (error) {
    logger.error("Error processing invite signup:", error);
    return err(error);
  }
};

export const persistUserImage = async (user: {
  id: string;
  image?: string | null;
}) => {
  if (user.image) {
    try {
      let imageUrl = user.image;
      logger.info(`Persisting image for user ${user.id}: ${user.image}`);

      // Check if the image URL is from external source with expiration
      if (isExternalImageUrl(user.image)) {
        try {
          // Upload the TikTok avatar to S3 and get the permanent URL
          imageUrl = await uploadImageFromUrl(user.image, user.id);

          // Cleanup old avatars (keep latest 3) - don't await to avoid blocking
          cleanupOldUserAvatars(user.id, 3).catch((cleanupError) =>
            logger.error("Failed to cleanup old avatars:", cleanupError)
          );
        } catch (uploadError) {
          logger.error("Failed to upload TikTok avatar to S3:", uploadError);
          // Continue with the original URL if S3 upload fails
          // This ensures the function doesn't fail completely
        }
      }

      await db.user.update({
        where: { id: user.id },
        data: { image: imageUrl },
      });
      return ok(true);
    } catch (error) {
      logger.error("Error persisting user image:", error);
      return err(error as Error);
    }
  }
  return ok(false);
};
