import type { CampaignUser, User, UserVideo } from ".prisma/main/client";
import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";
import type { Route } from "./+types/getUserData.$id.$videoLimit";

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
  params: { id, videoLimit },
}: Route.LoaderArgs): Promise<ApiResponse> {
  if (!id) {
    throw Response.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const videoLimitNumber = Number.parseInt(videoLimit || "0", 10);
    console.log("videoLimit", request.url);

    const userData = await db.user.findUnique({
      where: { id },
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

    const [videoCount, likeCount] = await Promise.all([
      db.userVideo.count({
        where: {
          campaignUserId: { in: userData.campaignUsers.map((cu) => cu.id) },
        },
      }),
      db.userVideo
        .aggregate({
          _sum: {
            likeCount: true,
          },
          where: {
            campaignUserId: { in: userData.campaignUsers.map((cu) => cu.id) },
          },
        })
        .then((res) => res._sum.likeCount || 0),
    ]);

    if (videoLimitNumber === 0) {
      return { userData, videoCount, likeCount };
    }

    const videos = await db.userVideo.findMany({
      where: {
        campaignUserId: { in: userData.campaignUsers.map((cu) => cu.id) },
      },
      orderBy: { viewCount: "desc" },
      take: videoLimitNumber,
    });

    return { userData, videoCount, likeCount, videos };
  } catch (error) {
    logger.error("Error fetching user data:", error);
    throw Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
