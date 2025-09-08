import type { Prisma } from '@prisma/client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, redirect, useFetcher, useSearchParams } from 'react-router';
import CampaignCard from '~/components/CampaignCard';
import { cn } from '~/lib/utils';
import { getDbUser } from '~/services/auth.server';
import { getCampaignsForUser } from '~/services/campaign.server';
import type { Route } from './+types/_landing.ascent';

type CampaignStatus = 'all' | 'active' | 'ended' | 'new';

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect('/login');
  }

  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get('page') || '1', 10);
  const status = (url.searchParams.get('status') || 'all') as CampaignStatus;

  // Create filter conditions based on status
  let whereCondition: Prisma.CampaignWhereInput = {};
  const now = new Date();

  switch (status) {
    case 'active': {
      whereCondition = {
        startDate: { lte: now },
        endDate: { gt: now },
      };
      break;
    }
    case 'ended': {
      whereCondition = {
        endDate: { lte: now },
      };
      break;
    }
    case 'new': {
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      whereCondition = {
        startDate: { gte: sevenDaysAgo },
        endDate: { gt: now },
      };
      break;
    }
    default: {
      // 'all' case - no additional filter
      break;
    }
  }

  // Get paginated campaigns with user participation and ranking
  const result = await getCampaignsForUser(user.value, whereCondition, page, 6);

  return {
    ...result,
    currentStatus: status,
  };
}

export default function Ascent({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetcher = useFetcher<typeof loader>();

  // State management
  const [campaigns, setCampaigns] = useState(loaderData.campaigns);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(
    loaderData.pagination.hasNextPage
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Current status from URL params
  const currentStatus = (searchParams.get('status') || 'all') as CampaignStatus;

  // Intersection observer ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Handle filter change
  const handleFilterChange = useCallback(
    (status: CampaignStatus) => {
      const newParams = new URLSearchParams(searchParams);
      if (status === 'all') {
        newParams.delete('status');
      } else {
        newParams.set('status', status);
      }
      newParams.delete('page'); // Reset to first page
      setSearchParams(newParams, { replace: true });

      // Reset state
      setCampaigns([]);
      setCurrentPage(1);
      setIsLoadingMore(true);
    },
    [searchParams, setSearchParams]
  );

  // Load more campaigns
  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore || fetcher.state !== 'idle') {
      return;
    }

    setIsLoadingMore(true);
    const nextPage = currentPage + 1;

    fetcher.load(`/ascent?page=${nextPage}&status=${currentStatus}`);
  }, [hasNextPage, isLoadingMore, fetcher, currentPage, currentStatus]);

  // Handle fetcher data
  useEffect(() => {
    if (fetcher.data && fetcher.state === 'idle') {
      const data = fetcher.data;
      if (currentPage === 1) {
        // New filter - replace campaigns
        setCampaigns(data.campaigns);
      } else {
        // Append campaigns for pagination
        setCampaigns((prev) => [...prev, ...data.campaigns]);
      }
      setCurrentPage(data.pagination.page);
      setHasNextPage(data.pagination.hasNextPage);
      setIsLoadingMore(false);
    }
  }, [fetcher.data, fetcher.state, currentPage]);

  // Initialize campaigns from loader data
  useEffect(() => {
    setCampaigns(loaderData.campaigns);
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

  const filterTabs = [
    { key: 'all' as const, label: 'All' },
    { key: 'active' as const, label: 'Active' },
    { key: 'ended' as const, label: 'Ended' },
    { key: 'new' as const, label: 'New' },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="white-gradient-text mb-4 font-bold text-3xl">
            Ascent
          </h1>
          <p className="text-gray-400 text-lg">
            Discover and join active campaigns
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="flex gap-[10px] rounded-lg bg-gray-900/50 p-2">
            {filterTabs.map((tab) => (
              <button
                className={cn(
                  'rounded-[10px] px-8 py-3 font-normal text-sm text-white transition-colors',
                  currentStatus === tab.key
                    ? 'bg-gradient-to-r from-[#5449DB] via-[#342B86] to-[#0E0A23]'
                    : 'border-[0.7px] border-gradient-to-b from-[#B8B8B8] to-[#4E4E4E] hover:text-[#8080DA]'
                )}
                key={tab.key}
                onClick={() => handleFilterChange(tab.key)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading state for filter changes */}
        {isLoadingMore && campaigns.length === 0 && (
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
              <span>Loading campaigns...</span>
            </div>
          </div>
        )}

        {/* Campaign Cards */}
        {campaigns.length > 0 && (
          <div className="flex flex-col items-center gap-8">
            {campaigns.map((campaign, index) => (
              <div key={campaign.id}>
                {index > 0 && (
                  <div className="mb-8 h-px w-[300px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
                )}
                <CampaignCard
                  {...campaign}
                  participants={`${Math.floor(Math.random() * 1000) + 100}`} // Temporary until we add real participant count
                />
              </div>
            ))}
          </div>
        )}

        {/* No campaigns message */}
        {campaigns.length === 0 && !isLoadingMore && (
          <div className="py-12 text-center">
            <p className="text-gray-400 text-lg">
              No campaigns found for the selected filter.
            </p>
          </div>
        )}

        {/* Load more trigger */}
        {hasNextPage && (
          <div className="py-8" ref={loadMoreRef}>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
                <span>Loading more campaigns...</span>
              </div>
            </div>
          </div>
        )}

        {/* End of results message */}
        {!hasNextPage && campaigns.length > 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500 text-sm">
              You've reached the end of the campaigns.
            </p>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            className="text-[#8080DA] text-sm transition-colors hover:text-white"
            to="/"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
