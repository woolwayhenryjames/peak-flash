import { useCallback, useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router";
import UserProfileTooltip from "~/components/UserProfileTooltip";
import { formatNumber } from "~/lib/utils";
import { getGlobalLeaderboard } from "~/services/user-ranking.server";
import type { Route } from "./+types/leaderboard";

export function meta({ data }: Route.MetaArgs) {
  const currentPage = data?.pagination?.page || 1;
  const totalUsers = data?.pagination?.total || 0;

  return [
    {
      title: `Global Leaderboard - Peak AI Rankings ${currentPage > 1 ? `(Page ${currentPage})` : ""}`,
    },
    {
      name: "description",
      content: `Explore Peak AI's global leaderboard with ${totalUsers} users competing for the top Kindle Score rankings. See who's leading in crypto and AI campaigns.`,
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

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);
  return getGlobalLeaderboard(page, 10);
}

export default function Leaderboard({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher<typeof loader>();

  // State management
  const [users, setUsers] = useState(loaderData.users);
  const currentPage = useRef(1);
  const [hasNextPage, setHasNextPage] = useState(
    loaderData.pagination.hasNextPage
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Intersection observer ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Load more users
  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore || fetcher.state !== "idle") {
      return;
    }

    setIsLoadingMore(true);
    const nextPage = currentPage.current + 1;

    fetcher.load(`/leaderboard?page=${nextPage}`);
  }, [hasNextPage, isLoadingMore, fetcher]);

  // Handle fetcher data
  useEffect(() => {
    if (fetcher.data && fetcher.state === "idle") {
      const data = fetcher.data;
      setUsers((prev) => [...prev, ...data.users]);
      currentPage.current = data.pagination.page;
      setHasNextPage(data.pagination.hasNextPage);
      setIsLoadingMore(false);
    }
  }, [fetcher.data, fetcher.state]);

  // Initialize users from loader data
  useEffect(() => {
    setUsers(loaderData.users);
    currentPage.current = loaderData.pagination.page;
    setHasNextPage(loaderData.pagination.hasNextPage);
    setIsLoadingMore(false);
  }, [loaderData]);

  // Set up intersection observer
  useEffect(() => {
    const loadMoreElement = loadMoreRef.current;
    if (!loadMoreElement) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(loadMoreElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore]);

  return (
    <div className="bg-black">
      <div
        className="bg-center bg-cover pt-20 pb-10"
        style={{
          background:
            "radial-gradient(99.68% 99.68% at 49.71% -5.81%, #707070 0%, #564731 25%, #241D13 40%, #120D0C 63.23%, #000 100%)",
        }}
      >
        <div className="container mx-auto flex flex-col gap-6 p-4 md:gap-14 lg:px-[8%]">
          <div className="text-[#f2edea] text-xl md:text-7xl">Peekaboos</div>
          <div className="font-light text-[#cacaca] text-xs md:text-2xl">
            Intelligent scoring system that discovers rising micro influencers
            and viral content—AI reveals hidden impact and breakout potential.
          </div>
        </div>
      </div>
      <div className="container mx-auto min-h-screen px-4 lg:px-[8%]">
        {/* Loading state for filter changes */}
        {isLoadingMore && users.length === 0 && (
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
              <span>Loading leaderboard...</span>
            </div>
          </div>
        )}

        {/* User Cards */}
        {users.length > 0 && (
          <table className="my-10 w-full table-auto md:my-25 [&_td]:py-2 [&_td]:md:py-4 [&_th]:py-2 [&_th]:md:py-4">
            <thead>
              <tr className="border-[#3C3C3D] border-b text-[#ADADAD] text-xs md:text-lg">
                <th className="text-left font-light md:pr-8">Rank</th>
                <th className="text-left font-light md:pr-8">Sparkers</th>
                <th className="text-left font-light md:pr-8">
                  <span className="max-md:hidden">KINDLE</span> Score
                </th>
                <th className="text-left font-light md:pr-8">Followers</th>
                <th className="text-left font-light">Likes</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserProfileTooltip
                  backgroundColor="#1D1B19"
                  key={user.id}
                  user={user}
                >
                  <tr
                    className="cursor-pointer text-white text-xs transition-colors duration-200 hover:bg-white/5 md:text-lg"
                    key={user.rank}
                  >
                    <td className="font-semibold text-lg md:pr-8 md:text-xl">
                      {user.rank}
                    </td>
                    <td className="font-medium md:pr-8">
                      {user.name ?? user.email}
                    </td>
                    <td className="font-medium md:pr-8">
                      {user.kindleScore?.toFixed(0) ?? 0}
                    </td>
                    <td className="font-medium md:pr-8">
                      {formatNumber(user.followerCount)}
                    </td>
                    <td className="font-medium">
                      {formatNumber(user.likeCount)}
                    </td>
                  </tr>
                </UserProfileTooltip>
              ))}
            </tbody>
          </table>
        )}

        {/* Load more trigger */}
        {hasNextPage && (
          <div className="py-8" ref={loadMoreRef}>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
                <span>Loading more leaderboard...</span>
              </div>
            </div>
          </div>
        )}

        {/* End of results message */}
        {!hasNextPage && users.length > 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500 text-sm">
              You've reached the end of the leaderboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
