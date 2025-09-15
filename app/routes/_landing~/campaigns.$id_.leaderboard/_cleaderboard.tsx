import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useFetcher } from 'react-router';
import { getDbUser } from '~/services/auth.server';
import {
  getCampaignLeaderboard,
  getCampaignsWithUserRanks,
} from '~/services/campaign.server';
import { db } from '~/services/db.server';
import type { Route } from './+types/_cleaderboard';
import bg from './assets/bg.avif';

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw new Response('Unauthorized', { status: 401 });
  }
  if (!params.id) {
    throw new Response('Campaign ID is required', { status: 400 });
  }
  const campaign = await db.campaign.findUnique({
    where: { id: params.id },
  });
  if (!campaign) {
    throw new Response('Campaign not found', { status: 404 });
  }
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get('page') || '1', 10);
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
  const fetcher = useFetcher<typeof loader>();

  // State management
  const [campaignUsers, setCampaignUsers] = useState(loaderData.campaignUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(
    loaderData.pagination.hasNextPage
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Intersection observer ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Load more campaigns
  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore || fetcher.state !== 'idle') {
      return;
    }

    setIsLoadingMore(true);
    const nextPage = currentPage + 1;

    fetcher.load(`/campaigns/${params.id}/leaderboard?page=${nextPage}`);
  }, [hasNextPage, isLoadingMore, fetcher, currentPage, params.id]);

  // Handle fetcher data
  useEffect(() => {
    if (fetcher.data && fetcher.state === 'idle') {
      const data = fetcher.data;
      if (currentPage === 1) {
        // New filter - replace campaigns
        setCampaignUsers(data.campaignUsers);
      } else {
        // Append campaigns for pagination
        setCampaignUsers((prev) => [...prev, ...data.campaignUsers]);
      }
      setCurrentPage(data.pagination.page);
      setHasNextPage(data.pagination.hasNextPage);
      setIsLoadingMore(false);
    }
  }, [fetcher.data, fetcher.state, currentPage]);

  // Initialize campaigns from loader data
  useEffect(() => {
    setCampaignUsers(loaderData.campaignUsers);
    setCurrentPage(loaderData.pagination.page);
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
    <>
      <div
        className="flex aspect-390/131 w-full items-center gap-3 bg-center bg-cover pl-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="white-gradient-text font-medium text-2xl tracking-tight">
            Spark Points
          </div>
          <div className="font-normal text-[#d7d7d7] text-xs">
            {loaderData.campaignWithRanks.name} Campaign
          </div>
        </div>
      </div>
      <div
        className="container mx-auto min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #000001 0%, #151411 30.78%, #241F1A 71.63%, #151512 100%)',
        }}
      >
        <div className="mx-auto mb-6 h-px w-[80%] bg-[#6c6c6c]/50" />
        <div className="mx-6 flex items-center justify-between rounded-xl border border-[#2d3338] p-4">
          <div className="flex items-end gap-4">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-600">
              <img
                alt={
                  loaderData.user?.name
                    ? loaderData.user.name.substring(0, 4).toUpperCase()
                    : 'U'
                }
                className="h-full w-full object-cover"
                src={loaderData.user?.image || ''}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <h3 className="white-gradient-text font-medium">
                @{loaderData.user?.email || 'User'}
              </h3>
              <div className="flex items-center gap-2">
                <p className="font-light text-[#9f9f9f] text-xs">5 videos</p>
                <div className="rounded bg-linear-57 from-[#fdffa7] to-[#57ffd5] px-3 py-0.5 font-medium text-black text-xs">
                  #{loaderData.campaignWithRanks.userRank || 0}
                </div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="bg-linear-57 from-[#fdffa7] to-[#57ffd5] bg-clip-text font-semibold text-2xl text-transparent">
              {loaderData.campaignWithRanks.userScore || 0}
            </p>
            <p className="text-gray-400 text-xs">Spark Points</p>
          </div>
        </div>
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
              {loaderData.campaignWithRanks.poolSize || 0}
            </span>
            <span className="font-light text-[#A7A7A7] text-xs">
              Token Pool
            </span>
          </div>
        </div>

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
              stroke-width="1.5"
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
                <stop stop-color="#6D7077" />
                <stop offset="0.495192" stop-color="#FEFEFE" />
                <stop offset="1" stop-color="#3C4041" />
              </linearGradient>
            </defs>
          </svg>

          <h3 className="white-gradient-text font-semibold text-xl">
            {loaderData.campaignWithRanks.name} Leaders
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
                <th className="whitespace-nowrap py-3 text-left font-medium text-gray-500 text-xs tracking-wider">
                  Name
                </th>
                <th className="w-28 whitespace-nowrap py-3 text-left font-medium text-gray-500 text-xs tracking-wider">
                  Spark Points
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3c3c3d]">
              {campaignUsers.map((campaign, index) => (
                <tr key={campaign.id}>
                  <td className="whitespace-nowrap py-4 text-center">
                    {index + 1}
                  </td>
                  <td className="truncate whitespace-nowrap py-4">
                    @{campaign.user.email}
                  </td>
                  <td className="whitespace-nowrap py-4">{campaign.score}</td>
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
          <Link
            className="text-[#8080DA] text-sm transition-colors hover:text-white"
            to={`/campaigns/${params.id}`}
            viewTransition
          >
            ← Back to Campaign
          </Link>
        </div>
      </div>
    </>
  );
}
