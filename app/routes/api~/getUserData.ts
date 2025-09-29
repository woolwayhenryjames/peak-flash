import type { CampaignUser, User, UserVideo } from ".prisma/main/client";
import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";
import type { Route } from "./+types/getUserData";

export interface ApiResponse {
  userData: User & {
    campaignUsers: (CampaignUser & {
      campaign: {
        id: string;
        name: string;
      };
    })[];
  };
  videoCount: number;
  likeCount: number;
  videos?: UserVideo[];
  error?: string;
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<ApiResponse> {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  const videoLimit = Number.parseInt(
    url.searchParams.get("videoLimit") || "0",
    10
  );
  const campaignId = url.searchParams.get("campaignId");
  if (!userId) {
    throw Response.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const userData = await db.user.findUnique({
      where: { id: userId },
      include: {
        campaignUsers: {
          include: {
            campaign: {
              select: { id: true, name: true },
            },
          },
          orderBy: { score: "desc" }, // Order by score to calculate rank
        },
      },
    });

    if (!userData) {
      throw Response.json({ error: "User not found" }, { status: 404 });
    }

    // Filter campaignUserIds based on campaignId if provided
    const campaignUserIds = campaignId
      ? userData.campaignUsers
          .filter((cu) => cu.campaignId === campaignId)
          .map((cu) => cu.id)
      : userData.campaignUsers.map((cu) => cu.id);

    const [videoCount, likeCount] = await Promise.all([
      db.userVideo.count({
        where: {
          campaignUserId: { in: campaignUserIds },
        },
      }),
      db.userVideo
        .aggregate({
          _sum: {
            likeCount: true,
          },
          where: {
            campaignUserId: { in: campaignUserIds },
          },
        })
        .then((res) => res._sum.likeCount || 0),
    ]);

    if (videoLimit === 0) {
      return { userData, videoCount, likeCount };
    }

    const videos = await db.userVideo.findMany({
      where: {
        campaignUserId: { in: campaignUserIds },
      },
      orderBy: { viewCount: "desc" },
      take: videoLimit,
    });

    return { userData, videoCount, likeCount, videos };
  } catch (error) {
    logger.error("Error fetching user data:", error);
    throw Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
