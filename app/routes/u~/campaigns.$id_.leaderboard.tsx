import SparkPointsPage from "~/components/SparkPointsPage";
import { formatNumber } from "~/lib/utils";
import { getDbUser } from "~/services/auth.server";
import {
  getCampaignLeaderboard,
  getCampaignsWithUserRanks,
} from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/campaigns.$id_.leaderboard";

export function meta({ data }: Route.MetaArgs) {
  const campaign = data?.campaignWithRanks;
  const currentPage = data?.pagination?.page || 1;
  const totalParticipants = data?.pagination?.total || 0;

  const campaignName = campaign?.name || "Campaign";
  const poolSize = campaign?.poolSize || 0;
  const isActive = campaign?.endDate
    ? new Date(campaign.endDate) > new Date()
    : false;
  const status = isActive ? "Active" : "Ended";

  return [
    {
      title: `${campaignName} Leaderboard - Peak AI ${currentPage > 1 ? `(Page ${currentPage})` : ""}`,
    },
    {
      name: "description",
      content: `View the leaderboard for ${campaignName} campaign on Peak AI. ${status} campaign with $${poolSize} prize pool and ${totalParticipants} participants competing for rewards.`,
    },
    {
      name: "keywords",
      content: `${campaignName} leaderboard, Peak AI campaign ranking, crypto campaign results, AI campaign winners, ${status.toLowerCase()} campaign`,
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Peak AI" },

    // Open Graph
    { property: "og:title", content: `${campaignName} Leaderboard - Peak AI` },
    {
      property: "og:description",
      content: `Check out who's leading in the ${campaignName} campaign! ${status} with $${poolSize} prize pool and ${totalParticipants} participants.`,
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Peak AI" },
    ...(campaign?.image
      ? [{ property: "og:image", content: campaign.image }]
      : []),

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${campaignName} Leaderboard` },
    {
      name: "twitter:description",
      content: `See who's winning the ${campaignName} campaign on Peak AI! $${poolSize} prize pool up for grabs.`,
    },
    ...(campaign?.image
      ? [{ name: "twitter:image", content: campaign.image }]
      : []),
  ];
}

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw new Response("Unauthorized", { status: 401 });
  }
  if (!params.id) {
    throw new Response("Campaign ID is required", { status: 400 });
  }
  const campaign = await db.campaign.findUnique({
    where: { id: params.id },
  });
  if (!campaign) {
    throw new Response("Campaign not found", { status: 404 });
  }
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);
  const [leaderboard, campaignWithRanks] = await Promise.all([
    getCampaignLeaderboard(params.id, page, 10),
    getCampaignsWithUserRanks([campaign], user.value),
  ]);

  return {
    ...leaderboard,
    user: user.value,
    campaignWithRanks: campaignWithRanks[0],
  };
}

export default function Leaderboard({
  loaderData,
  params,
}: Route.ComponentProps) {
  return (
    <SparkPointsPage
      loaderData={{ ...loaderData, campaign: loaderData.campaignWithRanks }}
      uri={`/u/campaigns/${params.id}/leaderboard`}
    >
      <div className="mx-auto mb-6 h-px w-[80%] bg-[#6c6c6c]/50" />
      {!loaderData.user.isBusiness && (
        <div className="mx-6 flex items-center justify-between rounded-xl border border-[#2d3338] p-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-600">
              <img
                alt={
                  loaderData.user?.name
                    ? loaderData.user.name.substring(0, 4).toUpperCase()
                    : "U"
                }
                className="h-full w-full object-cover"
                src={loaderData.user?.image || ""}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <h3 className="font-medium text-white">
                @{loaderData.user?.email || "User"}
              </h3>
              {loaderData.campaignWithRanks.userRank && (
                <div className="rounded bg-linear-57 from-[#fdffa7] to-[#57ffd5] px-3 py-0.5 font-medium text-black text-xs">
                  #{loaderData.campaignWithRanks.userRank}
                </div>
              )}
            </div>
          </div>

          <div className="text-right">
            <p className="bg-linear-57 from-[#fdffa7] to-[#57ffd5] bg-clip-text font-semibold text-2xl text-transparent">
              {Math.round(loaderData.campaignWithRanks.userScore || 0)}
            </p>
            <p className="text-gray-400 text-xs">Spark Points</p>
          </div>
        </div>
      )}
      <div className="mx-6 my-8 flex gap-3">
        <div className="flex flex-1 flex-col gap-2 rounded-md border border-[#9c9c9c]/20 p-3">
          <span className="bg-linear-57 from-[#fdffa7] to-[#57ffd5] bg-clip-text font-medium text-transparent text-xl">
            {loaderData.pagination.total || 0}
          </span>
          <span className="font-light text-[#A7A7A7] text-xs">
            Participants
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 rounded-md border border-[#9c9c9c]/20 p-3">
          <span className="bg-linear-57 from-[#fdffa7] to-[#57ffd5] bg-clip-text font-medium text-transparent text-xl">
            $&nbsp;
            {formatNumber(loaderData.campaignWithRanks.poolSize)}
            &nbsp;
            {loaderData.campaignWithRanks.poolUnit && (
              <span className="font-light text-xs">
                in {loaderData.campaignWithRanks.poolUnit}
              </span>
            )}
          </span>
          <span className="font-light text-[#A7A7A7] text-xs">Prize Pool</span>
        </div>
      </div>
    </SparkPointsPage>
  );
}
