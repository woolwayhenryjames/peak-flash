import type { User } from '@prisma/client';
import { db } from './db.server';

export interface UserWithKindleRank extends User {
  kindleRank: number;
}

/**
 * Calculate a user's kindle rank based on their kindle score
 * Uses an optimized query with MySQL's RANK() window function
 */
export async function getUserKindleRank(userId: string): Promise<number> {
  const result = await db.$queryRaw<Array<{ user_rank: bigint }>>`
    SELECT 
      user_rank
    FROM (
      SELECT 
        id,
        kindleScore,
        RANK() OVER (ORDER BY kindleScore DESC) as user_rank
      FROM User
    ) ranked_users
    WHERE id = ${userId}
  `;

  return result.length > 0 ? Number(result[0].user_rank) : 1;
}

/**
 * Get a user with their kindle rank
 */
export async function getUserWithKindleRank(
  userId: string
): Promise<UserWithKindleRank | null> {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { campaignUsers: true },
  });

  if (!user) {
    return null;
  }

  const kindleRank = await getUserKindleRank(userId);

  return {
    ...user,
    kindleRank,
  };
}
