/** biome-ignore-all lint/performance/noBarrelFile: react router */

import { redirect } from "react-router";
import { db } from "~/services/db.server";
import type { Route } from "./+types/campaigns.$id";

export { default, meta } from "../_landing~/campaigns.$id~/_campaign";

export async function loader({ params }: Route.LoaderArgs) {
  const campaign = await db.campaign.findUnique({
    where: { id: params.id },
  });
  if (!campaign) {
    throw redirect("/");
  }

  // Get top 5 participants for leaderboard
  const topParticipants = await db.campaignUser.findMany({
    where: { campaignId: params.id },
    orderBy: { score: "desc" },
    take: 5,
    include: {
      user: {
        select: {
          name: true,
          image: true,
          email: true,
        },
      },
    },
  });

  return {
    campaign,
    topParticipants,
  };
}
