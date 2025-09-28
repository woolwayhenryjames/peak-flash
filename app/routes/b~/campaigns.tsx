/** biome-ignore-all lint/performance/noBarrelFile: react router */
export { default, meta } from "../_landing~/ascent";

import type { Prisma } from ".prisma/main/client";
import { getCampaignsForUser } from "~/services/campaign.server";
import type { Route } from "./+types/campaigns";

type CampaignStatus = "all" | "active" | "ended" | "new";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);
  const status = (url.searchParams.get("status") || "all") as CampaignStatus;

  // Create filter conditions based on status
  let whereCondition: Prisma.CampaignWhereInput = {};
  const now = new Date();

  switch (status) {
    case "active": {
      whereCondition = {
        startDate: { lte: now },
        endDate: { gt: now },
      };
      break;
    }
    case "ended": {
      whereCondition = {
        endDate: { lte: now },
      };
      break;
    }
    case "new": {
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      whereCondition = {
        startDate: { gte: sevenDaysAgo },
        endDate: { gt: now },
      };
      break;
    }
    default: {
      // 'all' case - no additional filter
      break;
    }
  }

  // Get paginated campaigns with user participation and ranking
  const result = await getCampaignsForUser(
    {
      id: "-1",
      campaignUsers: [],
      inviterId: null,
      name: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      email: "",
      emailVerified: false,
      image: null,
      kindleScore: null,
      walletAddress: null,
      rank: null,
    }, // Dummy user object for non-authenticated context
    whereCondition,
    page,
    6
  );

  return {
    ...result,
    currentStatus: status,
  };
}
