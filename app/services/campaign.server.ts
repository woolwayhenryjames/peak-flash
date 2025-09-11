import type { Campaign, User } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { db } from './db.server';

export interface CampaignWithUserRank extends Campaign {
  userRank: number | null;
  isParticipating: boolean;
  participants: number;
}

export interface PaginatedCampaignsResult {
  campaigns: CampaignWithUserRank[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

/**
 * Type definition for user rank query results
 */
type UserRankQueryResult = {
  campaignId: string;
  userId: string;
  score: number;
  user_rank: bigint;
};

/**
 * Calculate user ranks and participant counts for campaigns using optimized queries.
 * Uses MySQL's RANK() window function for efficient ranking calculation.
 */
export async function getCampaignsWithUserRanks(
  campaigns: Campaign[],
  user: User & { campaignUsers: Array<{ campaignId: string; score: number }> }
): Promise<CampaignWithUserRank[]> {
  // Get campaign IDs for the query
  const campaignIds = campaigns.map((c) => c.id);

  // If no campaigns, return empty campaigns with zero participants
  if (campaignIds.length === 0) {
    return campaigns.map((campaign) => ({
      ...campaign,
      userRank: null,
      isParticipating: false,
      participants: 0,
    }));
  }

  // Get participant counts for all campaigns
  const participantCounts = await db.campaignUser.groupBy({
    by: ['campaignId'],
    where: {
      campaignId: {
        in: campaignIds,
      },
    },
    _count: {
      userId: true,
    },
  });

  // Create a lookup map for participant counts
  const participantCountsMap = new Map<string, number>(
    participantCounts.map((result) => [result.campaignId, result._count.userId])
  );

  // If user has no participations, return campaigns with participant counts but no ranks
  if (!user.campaignUsers.length) {
    return campaigns.map((campaign) => ({
      ...campaign,
      userRank: null,
      isParticipating: false,
      participants: participantCountsMap.get(campaign.id) ?? 0,
    }));
  }

  // Optimized query using MySQL's RANK() window function with proper type safety
  const sqlQuery = Prisma.sql`
    SELECT 
      cu.campaignId,
      cu.userId,
      cu.score,
      RANK() OVER (PARTITION BY cu.campaignId ORDER BY cu.score DESC) as user_rank
    FROM CampaignUser cu
    WHERE cu.campaignId IN (${Prisma.join(campaignIds.map((id) => Prisma.sql`${id}`))})
      AND cu.userId = ${user.id}
  `;
  let ranksResult: UserRankQueryResult[] = [];
  try {
    ranksResult = await db.$queryRaw<UserRankQueryResult[]>(sqlQuery);
  } catch (error) {
    console.error('Failed to get user campaign ranks:', error);
    return campaigns.map((campaign) => ({
      ...campaign,
      userRank: null,
      isParticipating: campaignIds.includes(campaign.id),
      participants: participantCountsMap.get(campaign.id) ?? 0,
    }));
  }

  // Create a lookup map for ranks (convert bigint to number)
  // TypeScript now knows campaignId is definitely a string due to our type definition
  const userRanksMap = new Map<string, number>(
    ranksResult.map((result) => [result.campaignId, Number(result.user_rank)])
  );

  // Add user ranks, participation status, and participant counts to campaigns
  return campaigns.map((campaign) => ({
    ...campaign,
    userRank: userRanksMap.get(campaign.id) ?? null,
    isParticipating: userRanksMap.has(campaign.id),
    participants: participantCountsMap.get(campaign.id) ?? 0,
  }));
}

/**
 * Get active campaigns with user participation and ranking information with pagination.
 */
export async function getCampaignsForUser(
  user: User & { campaignUsers: Array<{ campaignId: string; score: number }> },
  where: Prisma.CampaignWhereInput = {},
  page = 1,
  limit = 10
): Promise<PaginatedCampaignsResult> {
  // Ensure page and limit are positive integers
  const normalizedPage = Math.max(1, Math.floor(page));
  const normalizedLimit = Math.max(1, Math.min(10, Math.floor(limit)));
  const offset = (normalizedPage - 1) * normalizedLimit;

  // Get total count of active campaigns
  const totalCount = await db.campaign.count({
    where,
  });

  // Get paginated campaigns
  const campaigns = await db.campaign.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    skip: offset,
    take: normalizedLimit,
  });

  // Calculate pagination metadata
  const totalPages = Math.ceil(totalCount / normalizedLimit);
  const hasNextPage = normalizedPage < totalPages;
  const hasPreviousPage = normalizedPage > 1;

  const campaignsWithRanks = await getCampaignsWithUserRanks(campaigns, user);

  return {
    campaigns: campaignsWithRanks,
    pagination: {
      page: normalizedPage,
      limit: normalizedLimit,
      total: totalCount,
      totalPages,
      hasNextPage,
      hasPreviousPage,
    },
  };
}

export async function getCampaignLeaderboard(id: string, page = 1, limit = 10) {
  // Ensure page and limit are positive integers
  const normalizedPage = Math.max(1, Math.floor(page));
  const normalizedLimit = Math.max(1, Math.min(10, Math.floor(limit)));
  const offset = (normalizedPage - 1) * normalizedLimit;

  // Get total count of active campaigns
  const totalCount = await db.campaignUser.count({
    where: { campaignId: id },
  });

  // Get paginated campaigns
  const campaignUsers = await db.campaignUser.findMany({
    where: { campaignId: id },
    orderBy: { score: 'desc' },
    skip: offset,
    take: normalizedLimit,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  // Calculate pagination metadata
  const totalPages = Math.ceil(totalCount / normalizedLimit);
  const hasNextPage = normalizedPage < totalPages;
  const hasPreviousPage = normalizedPage > 1;

  return {
    campaignUsers,
    pagination: {
      page: normalizedPage,
      limit: normalizedLimit,
      total: totalCount,
      totalPages,
      hasNextPage,
      hasPreviousPage,
    },
  };
}
