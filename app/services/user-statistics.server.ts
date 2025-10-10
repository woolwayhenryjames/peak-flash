import type { Result } from "neverthrow";
import { err, ok } from "neverthrow";
import { db } from "~/services/db.server";

export interface UserStatistics {
  // Total and daily stats
  totalUsers: number;
  todayNewUsers: number;
  yesterdayNewUsers: number;
  dayBeforeYesterdayNewUsers: number;

  // User categories based on account type
  creatorsCount: number; // Individual users (isBusiness = false)
  enterprisesCount: number; // Business users (isBusiness = true)

  // Wallet address statistics
  totalWalletAddresses: number;
  emailEqualsWallet: number; // Users where email == walletAddress
  emailNotEqualsWallet: number; // Users where email != walletAddress

  // Campaign participation
  totalCampaignParticipants: number;
  campaignParticipation: Array<{
    campaignId: string;
    campaignName: string;
    participantCount: number;
  }>;
}

export async function getUserStatistics(): Promise<
  Result<UserStatistics, string>
> {
  try {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const dayBeforeYesterday = new Date(
      yesterday.getTime() - 24 * 60 * 60 * 1000
    );

    // Execute all queries in parallel for better performance
    const [
      totalUsers,
      todayNewUsers,
      yesterdayNewUsers,
      dayBeforeYesterdayNewUsers,
      creatorsCount,
      enterprisesCount,
      walletStats,
      campaignParticipation,
    ] = await Promise.all([
      // Total users
      db.user.count(),

      // Today's new users
      db.user.count({
        where: {
          createdAt: {
            gte: today,
          },
        },
      }),

      // Yesterday's new users
      db.user.count({
        where: {
          createdAt: {
            gte: yesterday,
            lt: today,
          },
        },
      }),

      // Day before yesterday's new users
      db.user.count({
        where: {
          createdAt: {
            gte: dayBeforeYesterday,
            lt: yesterday,
          },
        },
      }),

      // Creators (individual users)
      db.user.count({
        where: {
          isBusiness: false,
        },
      }),

      // Enterprises (business users)
      db.user.count({
        where: {
          isBusiness: true,
        },
      }),

      // Wallet address statistics using raw SQL for complex conditions
      db.$queryRaw<
        Array<{
          totalWalletAddresses: bigint;
          emailEqualsWallet: bigint;
          emailNotEqualsWallet: bigint;
        }>
      >`
        SELECT 
          COUNT(CASE WHEN walletAddress IS NOT NULL THEN 1 END) as totalWalletAddresses,
          COUNT(CASE WHEN walletAddress IS NOT NULL AND email = walletAddress THEN 1 END) as emailEqualsWallet,
          COUNT(CASE WHEN walletAddress IS NOT NULL AND email != walletAddress THEN 1 END) as emailNotEqualsWallet
        FROM User
      `,

      // Campaign participation data
      db.campaign.findMany({
        select: {
          id: true,
          name: true,
          _count: {
            select: {
              campaignUsers: true,
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      }),
    ]);

    // Get total campaign participants (unique users across all campaigns)
    const totalCampaignParticipants = await db.campaignUser
      .groupBy({
        by: ["userId"],
      })
      .then((groups) => groups.length);

    // Process wallet stats result
    const walletStatsResult = walletStats[0];
    const processedWalletStats = {
      totalWalletAddresses: Number(walletStatsResult.totalWalletAddresses),
      emailEqualsWallet: Number(walletStatsResult.emailEqualsWallet),
      emailNotEqualsWallet: Number(walletStatsResult.emailNotEqualsWallet),
    };

    // Process campaign participation data
    const processedCampaignParticipation = campaignParticipation.map(
      (campaign) => ({
        campaignId: campaign.id,
        campaignName: campaign.name,
        participantCount: campaign._count.campaignUsers,
      })
    );

    const statistics: UserStatistics = {
      totalUsers,
      todayNewUsers,
      yesterdayNewUsers,
      dayBeforeYesterdayNewUsers,
      creatorsCount,
      enterprisesCount,
      ...processedWalletStats,
      totalCampaignParticipants,
      campaignParticipation: processedCampaignParticipation,
    };

    return ok(statistics);
  } catch (error) {
    console.error("Error fetching user statistics:", error);
    return err("Failed to fetch user statistics");
  }
}
