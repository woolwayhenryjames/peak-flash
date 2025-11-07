import VideoLibraryPage from "~/components/VideoLibraryPage";
import { getVideosPaginated } from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/campaigns_.$id.videos";

export async function loader({ request, params }: Route.LoaderArgs) {
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
  const pagination = await getVideosPaginated(params.id, undefined, page, 10);

  return { ...pagination, campaign };
}

export default function CampaignVideos({
  loaderData,
  params,
}: Route.ComponentProps) {
  return (
    <VideoLibraryPage
      loaderData={loaderData}
      title={`${loaderData.campaign.name} Videos`}
      uri={`/b/campaigns/${params.id}/videos`}
    />
  );
}
