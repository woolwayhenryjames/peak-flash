import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, redirect, useFetcher } from 'react-router';
import { getDbUser } from '~/services/auth.server';
import { getCampaignLeaderboard } from '~/services/campaign.server';
import type { Route } from './+types/campaigns.$id_.leaderboard';
import bg from './leaderboard/assets/bg.avif';

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect('/login');
  }

  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get('page') || '1', 10);
  return getCampaignLeaderboard(params.id, page, 10);
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
            Campaign Leaderboard
          </div>
          <div className="font-normal text-[#d7d7d7] text-xs">Global Rank</div>
        </div>
      </div>
      <div
        className="container mx-auto min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #0B0B1D 0%, #141419 30.78%, #08080F 71.63%, #0D0D1A 100%)',
        }}
      >
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
                  Score
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
