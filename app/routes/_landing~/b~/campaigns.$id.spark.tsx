import SparkPointsPage from "~/components/SparkPointsPage";
import { getDbUser } from "~/services/auth.server";
import { getCampaignLeaderboard } from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/campaigns.$id.spark";

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
  const leaderboard = await getCampaignLeaderboard(params.id, page, 10);

  return {
    ...leaderboard,
    campaign,
  };
}

export default function Leaderboard({
  loaderData,
  params,
}: Route.ComponentProps) {
  return (
    <SparkPointsPage
      loaderData={loaderData}
      uri={`/u/campaigns/${params.id}/leaderboard`}
    />
  );
}
