import { db } from "~/services/db.server";
import type { Route } from "./+types/getCampainUser.$uid";

export async function loader({ params }: Route.LoaderArgs) {
  const { uid } = params;

  // Fetch campaign user data based on the uid
  const campaignUsers = await db.campaignUser.findMany({
    where: { userId: uid },
    include: {
      campaign: true,
    },
  });
  return {
    campaignUsers,
  };
}
