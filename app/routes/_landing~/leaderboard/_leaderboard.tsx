import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Link, redirect, useFetcher } from 'react-router';
import GlowContainer from '~/components/GlowContainer';
import { cn } from '~/lib/utils';
import ExpandedUserProfile from '~/routes/_landing~/leaderboard/ExpandedUserProfile';
import { getDbUser } from '~/services/auth.server';
import {
  getGlobalLeaderboard,
  getUserKindleRank,
} from '~/services/user-ranking.server';
import type { Route } from './+types/_leaderboard';
import bg from './assets/bg.avif';

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect('/login');
  }

  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get('page') || '1', 10);

  // Get global leaderboard data with pagination
  const [leaderboardData, userKindleRank] = await Promise.all([
    getGlobalLeaderboard(page, 10),
    getUserKindleRank(user.value.id),
  ]);

  return {
    users: leaderboardData.users,
    pagination: leaderboardData.pagination,
    user: { ...user.value, rank: userKindleRank },
  };
}

export default function Leaderboard({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher<typeof loader>();

  // State management
  const [users, setUsers] = useState(loaderData.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(
    loaderData.pagination.hasNextPage
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);

  // Intersection observer ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Load more users
  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore || fetcher.state !== 'idle') {
      return;
    }

    setIsLoadingMore(true);
    const nextPage = currentPage + 1;

    fetcher.load(`/leaderboard?page=${nextPage}`);
  }, [hasNextPage, isLoadingMore, fetcher, currentPage]);

  // Handle fetcher data
  useEffect(() => {
    if (fetcher.data && fetcher.state === 'idle') {
      const data = fetcher.data;
      if (currentPage === 1) {
        // New filter - replace users
        setUsers(data.users);
      } else {
        // Append users for pagination
        setUsers((prev) => [...prev, ...data.users]);
      }
      setCurrentPage(data.pagination.page);
      setHasNextPage(data.pagination.hasNextPage);
      setIsLoadingMore(false);
    }
  }, [fetcher.data, fetcher.state, currentPage]);

  // Initialize users from loader data
  useEffect(() => {
    setUsers(loaderData.users);
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
    <div
      style={{
        backgroundImage:
          'linear-gradient(180deg, #0B0B1D 0%, #141419 30.78%, #08080F 71.63%, #0D0D1A 100%)',
      }}
    >
      <div
        className="flex aspect-390/131 w-full items-center gap-3 bg-center bg-cover pl-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="white-gradient-text font-medium text-2xl tracking-tight">
            Peekaboos(Top 100)
          </div>
          <div className="font-normal text-[#d7d7d7] text-xs">
            Global Peekaboos
          </div>
        </div>
      </div>
      <div className="mx-auto mb-6 h-px w-[80%] bg-[#6c6c6c]/50" />
      <div className="mx-6 flex items-center justify-between rounded-xl border border-gray-700 p-4">
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
            <div className="rounded bg-linear-26 from-[#7364ff] to-[#37bcff] px-3 py-0.5 font-medium text-black text-xs">
              #{loaderData.user?.rank || 0}
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className="bg-linear-137 from-amber-400 to-blue-400 bg-clip-text font-semibold text-2xl text-transparent">
            {loaderData.user?.kindleScore || 0}
          </p>
          <p className="text-gray-400 text-xs">KINDLE Score</p>
        </div>
      </div>
      <div className="container mx-auto min-h-screen">
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
          <table className="w-full table-fixed divide-y divide-[#3c3c3d]">
            <thead>
              <tr>
                <th className="w-18" />
                <th className="whitespace-nowrap py-3 text-left font-medium text-gray-500 text-xs tracking-wider">
                  Name
                </th>
                <th className="w-28 whitespace-nowrap py-3 text-left font-medium text-gray-500 text-xs tracking-wider">
                  KINDLE Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3c3c3d]">
              {users.map((user) => (
                <Fragment key={user.id}>
                  <tr>
                    <td className="whitespace-nowrap py-4 text-center">
                      {user.rank}
                    </td>
                    <td className="truncate whitespace-nowrap py-4">
                      @{user.email}
                    </td>
                    <td className="whitespace-nowrap py-4">
                      <div className="flex items-center gap-6">
                        {user.kindleScore}
                        <button
                          onClick={() =>
                            setExpandedUserId(
                              expandedUserId === user.id ? null : user.id
                            )
                          }
                          type="button"
                        >
                          <GlowContainer className="rounded-sm px-2 py-2">
                            <svg
                              className={cn(
                                'h-4 w-4 transition-transform',
                                expandedUserId === user.id ? 'rotate-180' : ''
                              )}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <title>Chevron down</title>
                              <path
                                d="M6 9l6 6 6-6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              />
                            </svg>
                          </GlowContainer>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedUserId === user.id && (
                    <tr>
                      <td className="px-4 pb-4" colSpan={3}>
                        <ExpandedUserProfile user={user} />
                      </td>
                    </tr>
                  )}
                </Fragment>
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
    </div>
  );
}
