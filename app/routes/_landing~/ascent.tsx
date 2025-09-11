import type { Prisma } from '@prisma/client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, redirect, useFetcher, useSearchParams } from 'react-router';
import CampaignCard from '~/components/CampaignCard';
import GlowContainer from '~/components/GlowContainer';
import { cn } from '~/lib/utils';
import { getDbUser } from '~/services/auth.server';
import { getCampaignsForUser } from '~/services/campaign.server';
import type { Route } from './+types/ascent';

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
    <div className="container mx-auto p-6">
      {/* Header */}
      <svg
        className="h-auto w-full"
        fill="none"
        viewBox="0 0 339 75"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>PEAK.AI</title>
        <path
          d="M338.104.8v72.7h-12.099V.8h12.099zm-10.099 70.7h8.099V2.8h-8.099v68.7z"
          fill="url(#prefix__paint0_linear_217_2533)"
          opacity=".3"
          stroke="#000"
        />
        <path
          d="M292.474 1.2l.119.33 25.824 71.3.243.67h-12.791l-.12-.33-5.48-15.17h-28.293l-5.243 14.51h-.001l-.239.66-.119.33H253.58l.244-.67 25.928-71.3.119-.33h12.603zm-36.038 70.3h8.535l5.48-15.17.12-.33h31.102l.12.33 5.48 15.17h8.537L291.071 3.2h-9.8l-24.835 68.3zm30.157-57.769l12.599 35.2.24.669h-26.62l.239-.67 12.6-35.199.471-1.314.471 1.314zM275.651 47.6h20.941l-10.471-29.25-10.47 29.25z"
          fill="url(#prefix__paint0_linear_217_2533)"
          opacity=".3"
          stroke="#000"
        />
        <path
          d="M242.025 58.7c2.075 0 3.872.767 5.291 2.27l.797.843h-.07c.985 1.318 1.482 2.863 1.482 4.587l-.008.393c-.08 1.78-.709 3.358-1.871 4.679l.004.005-.334.353c-1.419 1.503-3.216 2.27-5.291 2.27-2.121 0-3.972-.752-5.46-2.24-1.487-1.487-2.239-3.338-2.239-5.46 0-2.121.751-3.973 2.239-5.46 1.488-1.488 3.339-2.24 5.46-2.24zm-.005 2c-1.602.002-2.938.551-4.041 1.653l-.208.22c-.963 1.059-1.445 2.325-1.445 3.827l.007.3.018.273c.117 1.35.657 2.502 1.628 3.473 1.104 1.104 2.443 1.654 4.046 1.654 1.531 0 2.8-.545 3.837-1.644l.01-.01c1.036-1.036 1.582-2.278 1.647-3.747l.006-.299c0-1.604-.549-2.943-1.653-4.047l-.01-.01c-.971-1.028-2.143-1.57-3.538-1.637v.001l-.304-.007z"
          fill="url(#prefix__paint0_linear_217_2533)"
          opacity=".3"
          stroke="#000"
        />
        <path
          d="M189.862.8v29.863L216.342.967l.149-.167h15.553l-.756.836-32.197 35.557 32.513 35.47.768.837h-15.976l-.149-.165L189.862 44.1v29.4h-12.099V.8h12.099zm-10.099 70.7h8.099V38.9l.871.965L217.284 71.5h10.542l-31.132-33.962-.308-.336.305-.338L227.534 2.8h-10.147l-28.652 32.133-.873.98V2.8h-8.099v68.7z"
          fill="url(#prefix__paint0_linear_217_2533)"
          opacity=".3"
          stroke="#000"
        />
        <path
          d="M144.231 1.2l.12.33 25.824 71.3.243.67h-12.791l-.12-.33L152.026 58h-28.293l-5.242 14.51h-.001l-.239.66-.119.33h-12.794l.244-.67 25.928-71.3.119-.33h12.602zm-36.038 70.3h8.536l5.48-15.17.12-.33h31.102l.12.33 5.48 15.17h8.536L142.829 3.2h-9.8l-24.836 68.3zm30.158-57.769l12.599 35.2.239.669h-26.62l.24-.67 12.6-35.199.471-1.314.471 1.314zM127.409 47.6h20.941l-10.471-29.25-10.47 29.25z"
          fill="url(#prefix__paint0_linear_217_2533)"
          opacity=".3"
          stroke="#000"
        />
        <path
          d="M99.61.7v10.5h-28.4v20.3h25.4V42h-25.4v21h28.4v10.5h-40.5V.7h40.5zm-38.5 70.8h36.5V65h-28.4V40h25.4v-6.5h-25.4V9.2h28.4V2.7h-36.5v68.8z"
          fill="url(#prefix__paint0_linear_217_2533)"
          opacity=".3"
          stroke="#000"
        />
        <path
          d="M25.2.8l.753.006c7.734.118 13.87 2.078 18.172 6.098l.926.866h-.04c3.865 3.975 5.789 8.986 5.789 14.93l-.006.577c-.13 5.936-2.28 10.969-6.451 15.001-4.189 4.047-10.404 5.998-18.366 6.117l-.777.005H13.3v29.1H1.2V.8h24zm-22 70.7h8.1V42.4h13.896l.752-.005c7.432-.11 12.95-1.874 16.636-5.21l.374-.35c3.773-3.65 5.718-8.174 5.836-13.605l.006-.53c0-5.87-2.017-10.634-6.04-14.332l-.002-.003c-3.819-3.568-9.404-5.446-16.834-5.56v0l-.728-.005H3.2v68.7zm22-62.2c4.995 0 8.835 1.087 11.429 3.348C39.236 14.921 40.5 18.304 40.5 22.7v.009l-.014.751v.01c-.144 3.806-1.38 6.826-3.748 8.998l-.007.006-.229.203-.006.006c-2.376 2.039-5.861 3.082-10.379 3.205l-.917.012H11.3V9.3h13.9zM13.3 33.9h11.9l.899-.012c4.399-.124 7.409-1.17 9.288-2.893l.367-.356c1.782-1.832 2.746-4.415 2.746-7.939 0-4.01-1.14-6.761-3.185-8.544-1.954-1.703-4.96-2.724-9.242-2.845L25.2 11.3H13.3v22.6z"
          fill="url(#prefix__paint0_linear_217_2533)"
          opacity=".3"
          stroke="#000"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="prefix__paint0_linear_217_2533"
            x1="173"
            x2="169.5"
            y1="-69.5"
            y2="72"
          >
            <stop stopColor="#6D7077" />
            <stop offset=".495" stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#000101" />
          </linearGradient>
        </defs>
      </svg>

      {/* Filter Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="flex gap-[10px] rounded-lg bg-gray-900/50 p-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleFilterChange(tab.key)}
              type="button"
            >
              <GlowContainer
                className={cn(
                  'rounded-[10px] px-4 py-1 font-normal text-sm text-white transition-colors',
                  currentStatus === tab.key
                    ? 'bg-linear-70 from-[#5449DB] via-33% via-[#342B86] to-[#0E0A23]'
                    : 'border-[0.7px] border-gradient-to-b from-[#B8B8B8] to-[#4E4E4E] hover:text-[#8080DA]'
                )}
              >
                {tab.label}
              </GlowContainer>
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
        <div className="flex flex-col gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id}>
              <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
              <div className="w-full rounded-xl border border-[#2D3338] pt-4 pl-4">
                <CampaignCard campaign={campaign} type="detail" />
              </div>
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
          viewTransition
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
