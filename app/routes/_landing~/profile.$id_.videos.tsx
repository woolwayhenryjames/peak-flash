/** biome-ignore-all lint/performance/noBarrelFile: page */

import { getVideosPaginated } from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/profile.$id_.videos";

export { default } from "./campaigns.$id_.videos";

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
  const limit = Number.parseInt(url.searchParams.get("limit") || "10", 10);
  const campaignId = url.searchParams.get("campaignId") || undefined;

  return getVideosPaginated(campaignId, params.id, page, limit);
}
