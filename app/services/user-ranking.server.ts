import type { User } from ".prisma/main/client";
import { logger } from "~/services/logger.server";
import { db } from "./db.server";

export interface UserWithKindleRank extends User {
  kindleRank: number;
}

export interface PaginatedLeaderboardResult {
  users: User[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export async function getUserKindleRank(userId: string): Promise<number> {
  try {
    const result = await db.user.findUnique({
      where: { id: userId },
      select: {
        rank: true,
      },
    });
    return result?.rank ?? 1;
  } catch (error) {
    logger.error("Failed to get user kindle rank:", error);
    return 1; // Return default rank on error
  }
}

/**
 * Get global leaderboard with pagination (Top 100 users only)
 * Returns top users by kindle score with their ranks
 */
export async function getGlobalLeaderboard(
  page = 1,
  limit = 10
): Promise<PaginatedLeaderboardResult> {
  // Ensure page and limit are positive integers
  const normalizedPage = Math.max(1, Math.floor(page));
  const normalizedLimit = Math.max(1, Math.min(50, Math.floor(limit))); // Max 50 per page
  const offset = (normalizedPage - 1) * normalizedLimit;

  try {
    // Get total count of users with kindle scores > 0, but limit to top 100
    const totalCount = Math.min(100, await db.user.count());

    // Don't fetch beyond the top 100 users
    if (offset >= 100) {
      return {
        users: [],
        pagination: {
          page: normalizedPage,
          limit: normalizedLimit,
          total: totalCount,
          totalPages: Math.ceil(totalCount / normalizedLimit),
          hasNextPage: false,
          hasPreviousPage: true,
        },
      };
    }

    // Calculate how many users to actually fetch (don't exceed top 100)
    const actualLimit = Math.min(normalizedLimit, 100 - offset);

    // Get paginated users with ranks using raw query for better performance
    const result = await db.user.findMany({
      where: { rank: { not: null } },
      orderBy: { rank: "asc" },
      skip: offset,
      take: actualLimit,
    });

    // Calculate pagination metadata (considering top 100 limit)
    const totalPages = Math.ceil(totalCount / normalizedLimit);
    const hasNextPage =
      normalizedPage < totalPages && offset + actualLimit < 100;
    const hasPreviousPage = normalizedPage > 1;

    return {
      users: result,
      pagination: {
        page: normalizedPage,
        limit: normalizedLimit,
        total: totalCount,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      },
    };
  } catch (error) {
    logger.error("Failed to get global leaderboard:", error);
    // Return empty result on error
    return {
      users: [],
      pagination: {
        page: normalizedPage,
        limit: normalizedLimit,
        total: 0,
        totalPages: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };
  }
}
