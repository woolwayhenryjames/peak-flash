import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";
import { getUserInfo } from "~/services/tiktok-api.server";

export async function updateAllUserInfo() {
  // First get users with null followerCount (never updated)
  const usersWithNullFollowerCount = await db.user.findMany({
    where: {
      isBusiness: false,
      followerCount: null,
    },
    select: { id: true, email: true },
    orderBy: { updatedAt: "asc" },
  });

  // Then get users with existing followerCount (previously updated)
  const usersWithFollowerCount = await db.user.findMany({
    where: {
      isBusiness: false,
      followerCount: { not: null },
    },
    select: { id: true, email: true },
    orderBy: { updatedAt: "asc" },
  });

  // Process null followerCount users first, then existing users
  const users = [...usersWithNullFollowerCount, ...usersWithFollowerCount];

  for (const user of users) {
    await updateUserInfo({ user });
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
