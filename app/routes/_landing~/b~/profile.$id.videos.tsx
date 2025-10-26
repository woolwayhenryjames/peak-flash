import VideoLibraryPage from "~/components/VideoLibraryPage";
import { getVideosPaginated } from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/profile.$id.videos";

export async function loader({ request, params }: Route.LoaderArgs) {
  if (!params.id) {
    throw new Response("user ID is required", { status: 400 });
  }
  const user = await db.user.findUnique({
    where: { id: params.id },
  });
  if (!user) {
    throw new Response("User not found", { status: 404 });
  }
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);
  const limit = Number.parseInt(url.searchParams.get("limit") || "10", 10);
  const pagination = await getVideosPaginated(
    undefined,
    params.id,
    page,
    limit
  );

  return { ...pagination, user };
}

export default function ProfileVideos({
  loaderData,
  params,
}: Route.ComponentProps) {
  return (
    <VideoLibraryPage
      loaderData={loaderData}
      title={`${loaderData.user.name}'s Videos`}
      uri={`/b/profile/${params.id}/videos`}
    />
  );
}
