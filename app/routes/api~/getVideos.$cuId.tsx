import type { LoaderFunctionArgs } from "react-router";
import { db } from "~/services/db.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const cuId = params.cuId;
  if (!cuId) {
    throw new Response("Campaign User ID is required", { status: 400 });
  }
  const videos = await db.userVideo.findMany({
    where: {
      campaignUserId: Number(cuId),
      active: true,
    },
    orderBy: {
      totalScore: "desc",
    },
  });
  return Response.json(videos);
}
