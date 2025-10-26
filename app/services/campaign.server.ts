import type { Campaign, Prisma, User } from ".prisma/main/client";
import { checkAllUserCampaignAlgo } from "~/services/score-algo-api";
import { db } from "./db.server";

export interface CampaignWithUserRank extends Campaign {
  userRank: number | null;
  userScore: number | null;
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
 * Get campaigns with user ranks and participant counts.
 * Uses pre-calculated ranks from the database.
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
      userScore: null,
      isParticipating: false,
      participants: 0,
    }));
  }

  // Get participant counts for all campaigns
  const participantCounts = await db.campaignUser.groupBy({
    by: ["campaignId"],
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

  // Get user's campaign participation data with pre-calculated ranks
  const userCampaignData = await db.campaignUser.findMany({
    where: {
      userId: user.id,
      campaignId: {
        in: campaignIds,
      },
    },
    select: {
      campaignId: true,
      score: true,
      rank: true,
    },
  });

  // Create lookup maps for user data
  const userDataMap = new Map(
    userCampaignData.map((data) => [
      data.campaignId,
      { score: data.score, rank: data.rank },
    ])
  );

  // Add user ranks, participation status, and participant counts to campaigns
  return campaigns.map((campaign) => {
    const userData = userDataMap.get(campaign.id);
    return {
      ...campaign,
      userRank: userData?.rank ?? null,
      userScore: userData?.score ?? null,
      isParticipating: userData !== undefined,
      participants: participantCountsMap.get(campaign.id) ?? 0,
    };
  });
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
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
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
    orderBy: { score: "desc" },
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

/**
 * Get users who have joined a specific campaign, ordered by their user rank
 * @param campaignId - The ID of the campaign
 * @param page - Page number for pagination (1-based)
 * @param limit - Number of items per page
 * @returns Users with their campaign participation data, ordered by user rank
 */
export async function getCampaignUsersByUserRank(
  campaignId: string,
  page = 1,
  limit = 10
) {
  const offset = (page - 1) * limit;

  // Get total count of users in this campaign
  const totalCount = await db.campaignUser.count({
    where: { campaignId },
  });

  // Get campaign users with their user data, ordered by user rank
  const campaignUsers = await db.campaignUser.findMany({
    where: { campaignId },
    include: {
      user: true,
    },
    orderBy: {
      user: {
        kindleScore: "desc",
      },
    },
    skip: offset,
    take: limit,
  });

  return {
    campaignUsers,
    pagination: {
      page,
      limit,
      total: totalCount,
      totalPages: Math.ceil(totalCount / limit),
      hasNextPage: page * limit < totalCount,
      hasPreviousPage: page > 1,
    },
  };
}

export async function getVideosPaginated(
  campaignId?: string,
  userId?: string,
  page = 1,
  limit = 10
) {
  // Ensure page and limit are positive integers
  const normalizedPage = Math.max(1, Math.floor(page));
  const normalizedLimit = Math.max(1, Math.min(10, Math.floor(limit)));
  const offset = (normalizedPage - 1) * normalizedLimit;

  const filter: Prisma.UserVideoWhereInput = {
    active: true,
  };

  // Build campaignUser filter based on provided parameters
  if (campaignId && userId) {
    filter.campaignUser = { campaignId, userId };
  } else if (campaignId) {
    filter.campaignUser = { campaignId };
  } else if (userId) {
    filter.campaignUser = { userId };
  }

  // Get total count of active campaigns
  const totalCount = await db.userVideo.count({
    where: filter,
  });

  // Get paginated campaigns
  const campaignVideos = await db.userVideo.findMany({
    where: filter,
    orderBy: { viewCount: "desc" },
    skip: offset,
    take: normalizedLimit,
    include: {
      campaignUser: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
              kindleScore: true,
            },
          },
        },
      },
    },
  });

  // Calculate pagination metadata
  const totalPages = Math.ceil(totalCount / normalizedLimit);
  const hasNextPage = normalizedPage < totalPages;
  const hasPreviousPage = normalizedPage > 1;

  return {
    campaignVideos,
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

// Admin CRUD operations
export async function getAllCampaigns() {
  return await db.campaign.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    include: {
      _count: {
        select: { campaignUsers: true },
      },
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
}

export async function createCampaign(data: Prisma.CampaignCreateInput) {
  const result = await db.campaign.create({
    data,
  });
  await new Promise((res) => setTimeout(res, 1000));
  checkAllUserCampaignAlgo();
  return result;
}

export async function updateCampaign(
  id: string,
  data: Prisma.CampaignUpdateInput
) {
  return await db.campaign.update({
    where: { id },
    data,
  });
}

export async function deleteCampaign(id: string) {
  // Delete related campaign users first due to foreign key constraints
  await db.campaignUser.deleteMany({
    where: { campaignId: id },
  });

  return await db.campaign.delete({
    where: { id },
  });
}
