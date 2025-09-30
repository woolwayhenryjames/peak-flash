import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";
import { getUserInfo } from "~/services/tiktok-api.server";

export async function updateAllUserInfo() {
  const users = await db.user.findMany({
    where: { isBusiness: false },
    select: { id: true, email: true },
    orderBy: { updatedAt: "asc" },
  });
  for (const user of users) {
    await updateUserInfo({ user });
    await new Promise((resolve) => setTimeout(resolve, 500)); // Rate limit to 2 requests per second
  }
}

export async function updateUserInfo({
  user: { id, email },
}: {
  user: { id: string; email: string };
}) {
  if (email.startsWith("0x") && email.length === 42) {
    logger.info(`Skipping update for wallet user: ${email}`);
    return;
  }
  const result = await getUserInfo(email);
  if (result.isOk()) {
    const userInfo = result.value;
    console.log(`Updating user info for ${email}:`, {
      bio: userInfo.signature,
      followerCount: userInfo.follower_count,
      followingCount: userInfo.following_count,
      isStar: userInfo.is_star,
      visibleVideosCount: userInfo.visible_videos_count,
      likeCount: userInfo.total_favorited,
    });
    await db.user.update({
      where: { id },
      data: {
        bio: userInfo.signature,
        followerCount: userInfo.follower_count,
        followingCount: userInfo.following_count,
        isStar: userInfo.is_star,
        visibleVideosCount: userInfo.visible_videos_count,
        likeCount: userInfo.total_favorited,
        updatedAt: new Date(),
      },
    });
  } else {
    logger.error(`Failed to update user info for ${email}: ${result.error}`);
  }
}
