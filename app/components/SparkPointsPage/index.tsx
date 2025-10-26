import type { Campaign } from ".prisma/main/client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFetcher, useNavigate } from "react-router";
import type { getCampaignLeaderboard } from "~/services/campaign.server";
import bg from "./assets/bg.avif";

type ILoaderData = Awaited<ReturnType<typeof getCampaignLeaderboard>> & {
  campaign: Campaign;
};

export default function Leaderboard({
  loaderData,
  uri,
  children,
}: {
  loaderData: ILoaderData;
  uri: string;
  children?: React.ReactNode;
}) {
  const fetcher = useFetcher<ILoaderData>();
  const navigate = useNavigate();

  // State management
  const [campaignUsers, setCampaignUsers] = useState(loaderData.campaignUsers);
  const currentPage = useRef(1);
  const [hasNextPage, setHasNextPage] = useState(
    loaderData.pagination.hasNextPage
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Intersection observer ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Load more campaigns
  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore || fetcher.state !== "idle") {
      return;
    }

    setIsLoadingMore(true);
    const nextPage = currentPage.current + 1;

    fetcher.load(`${uri}?page=${nextPage}`);
  }, [hasNextPage, isLoadingMore, fetcher, uri]);

  // Handle fetcher data
  useEffect(() => {
    if (fetcher.data && fetcher.state === "idle") {
      const data = fetcher.data;
      setCampaignUsers((prev) => [...prev, ...data.campaignUsers]);
      currentPage.current = data.pagination.page;
      setHasNextPage(data.pagination.hasNextPage);
      setIsLoadingMore(false);
    }
  }, [fetcher.data, fetcher.state]);

  // Initialize campaigns from loader data
  useEffect(() => {
    setCampaignUsers(loaderData.campaignUsers);
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
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, #000001 0%, #151411 30.78%, #241F1A 71.63%, #151512 100%)",
      }}
    >
      <div
        className="flex w-full items-center gap-3 bg-center bg-cover bg-no-repeat pl-10 max-md:aspect-390/131 md:h-62 md:bg-contain md:bg-right md:pl-28"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto">
          <div className="font-medium text-2xl text-white tracking-tight md:text-5xl">
            Spark Points
          </div>
          <div className="font-normal text-[#d7d7d7] text-xs md:text-2xl">
            {loaderData.campaign.name} Campaign
          </div>
        </div>
      </div>
      <div className="container mx-auto min-h-screen md:px-18">
        {children}

        <div className="mx-6 mb-7 flex items-center gap-1">
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Flame icon</title>
            <path
              d="M13.7524 3.17224C13.7503 3.09602 13.6671 3.04639 13.6016 3.0855C10.1363 5.15576 10.2004 10.3491 10.2418 11.2901C10.2449 11.3611 10.1778 11.4112 10.1135 11.3809C9.71316 11.1924 8.5661 10.4823 8.50273 8.51531C8.50028 8.43898 8.41792 8.38991 8.35223 8.42885C6.34578 9.61803 5 11.8144 5 14.25C5 17.9779 8.134 21 12 21C15.866 21 19 17.9779 19 14.25C19 8.83413 13.8803 7.6694 13.7524 3.17224Z"
              stroke="url(#paint0_linear_346_1939)"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_346_1939"
                x1="-10"
                x2="48"
                y1="15"
                y2="15.5"
              >
                <stop stopColor="#6D7077" />
                <stop offset="0.495192" stopColor="#FEFEFE" />
                <stop offset="1" stopColor="#3C4041" />
              </linearGradient>
            </defs>
          </svg>

          <h3 className="font-semibold text-white text-xl">
            {loaderData.campaign.name} Leaders
          </h3>
        </div>
        {/* Loading state for filter changes */}
        {isLoadingMore && campaignUsers.length === 0 && (
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
              <span>Loading leaderboard...</span>
            </div>
          </div>
        )}

        {/* Campaign Cards */}
        {campaignUsers.length > 0 && (
          <table className="w-full table-fixed divide-y divide-[#3c3c3d]">
            <thead>
              <tr>
                <th className="w-18" />
                <th className="whitespace-nowrap py-3 text-left font-medium text-gray-500 text-sm tracking-wider md:text-lg">
                  Name
                </th>
                <th className="w-28 whitespace-nowrap py-3 text-left font-medium text-gray-500 text-sm tracking-wider md:text-lg">
                  Spark Points
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3c3c3d]">
              {campaignUsers.map((campaign, index) => (
                <tr key={campaign.id}>
                  <td className="whitespace-nowrap py-4 text-center text-sm md:text-lg">
                    {index + 1}
                  </td>
                  <td className="truncate whitespace-nowrap py-4 text-sm md:text-lg">
                    @{campaign.user.email}
                  </td>
                  <td className="whitespace-nowrap py-4 text-sm md:text-lg">
                    {Math.round(campaign.score)}
                  </td>
                </tr>
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
        {!hasNextPage && campaignUsers.length > 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500 text-sm">
              You've reached the end of the leaderboard.
            </p>
          </div>
        )}

        {/* Back to Campaign */}
        <div className="mt-12 text-center">
          <button
            className="text-[#8080DA] text-sm transition-colors hover:text-white"
            onClick={() => navigate(-1)}
            type="button"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
