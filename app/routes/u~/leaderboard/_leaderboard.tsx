import { redirect } from "react-router";
import KindleScoresPage from "~/components/KindleScoresPage";
import { getDbUser } from "~/services/auth.server";
import { getGlobalLeaderboard } from "~/services/user-ranking.server";
import type { Route } from "./+types/_leaderboard";
import bg from "./assets/bg.avif";

export function meta({ data }: Route.MetaArgs) {
  const userRank = data?.user?.rank || "N/A";
  const currentPage = data?.pagination?.page || 1;
  const totalUsers = data?.pagination?.total || 0;

  return [
    {
      title: `Global Leaderboard - Peak AI Rankings ${currentPage > 1 ? `(Page ${currentPage})` : ""}`,
    },
    {
      name: "description",
      content: `Explore Peak AI's global leaderboard with ${totalUsers} users competing for the top Kindle Score rankings. See who's leading in crypto and AI campaigns, track your position at rank #${userRank}.`,
    },
    {
      name: "keywords",
      content:
        "Peak AI leaderboard, global rankings, Kindle Score rankings, crypto campaign leaders, AI campaign winners, user competition, top performers",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Peak AI" },

    // Open Graph
    {
      property: "og:title",
      content: "Peak AI Global Leaderboard - See Who's Leading",
    },
    {
      property: "og:description",
      content: `Check out the top performers on Peak AI! ${totalUsers} users competing for Kindle Score supremacy. Where do you rank?`,
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Peak AI" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Peak AI Global Leaderboard" },
    {
      name: "twitter:description",
      content: `Discover the top Kindle Score performers across ${totalUsers} Peak AI users. Compete in campaigns and climb the rankings!`,
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect("/");
  }

  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);

  // Get global leaderboard data with pagination
  const leaderboardData = await getGlobalLeaderboard(page, 10);

  return {
    users: leaderboardData.users,
    pagination: leaderboardData.pagination,
    user: user.value,
  };
}

export default function Leaderboard({ loaderData }: Route.ComponentProps) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0B0B1D 0%, #141419 30.78%, #08080F 71.63%, #0D0D1A 100%)",
      }}
    >
      <div
        className="flex aspect-390/131 w-full items-center gap-3 bg-center bg-cover pl-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="font-medium text-2xl text-white tracking-tight">
            Peekaboos&nbsp;&nbsp;(Top 100)
          </div>
          <div className="font-normal text-[#d7d7d7] text-xs">
            Global Peekaboos
          </div>
        </div>
      </div>
      <div className="mx-auto mb-6 h-px w-[80%] bg-[#6c6c6c]/50" />
      <div className="mx-6 my-12 flex items-center justify-between rounded-xl border border-gray-700 p-4">
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
            {loaderData.user?.kindleScore != null && (
              <div className="rounded bg-linear-26 from-[#7364ff] to-[#37bcff] px-3 py-0.5 font-medium text-black text-xs">
                #{loaderData.user?.rank || 0}
              </div>
            )}
          </div>
        </div>

        {loaderData.user?.kindleScore != null ? (
          <div className="text-right">
            <p className="bg-linear-137 from-amber-400 to-blue-400 bg-clip-text font-semibold text-2xl text-transparent">
              {Math.round(loaderData.user?.kindleScore || 0)}
            </p>
            <p className="text-gray-400 text-xs">KINDLE Score</p>
          </div>
        ) : (
          <div className="bg-linear-114 from-[#7465ff] from-[12.87%] to-[#38bdff] to-[51.12%] bg-clip-text font-semibold text-transparent text-xs">
            Grading
          </div>
        )}
      </div>
      <KindleScoresPage loaderData={loaderData} uri="/leaderboard" />
    </div>
  );
}
