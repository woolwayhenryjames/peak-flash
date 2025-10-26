import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useFetcher, useNavigate } from "react-router";
import ExpandedUserProfile from "~/components/ExpandedUserProfile";
import GlowContainer from "~/components/GlowContainer";
import { cn } from "~/lib/utils";

type ILoaderData = {
  users: {
    id: string;
    email: string;
    kindleScore: number | null;
  }[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};

export default function KindleScoresPage({
  loaderData,
  uri,
}: {
  uri: string;
  loaderData: ILoaderData;
}) {
  const fetcher = useFetcher<ILoaderData>();
  const navigate = useNavigate();

  // State management
  const [users, setUsers] = useState(loaderData.users);
  const currentPage = useRef(1);
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
        <table className="w-full table-fixed divide-y divide-[#3c3c3d] text-white!">
          <thead>
            <tr>
              <th className="w-18" />
              <th className="whitespace-nowrap py-3 text-left font-medium text-gray-500 text-sm tracking-wider md:text-lg">
                Name
              </th>
              <th className="w-28 whitespace-nowrap py-3 text-left font-medium text-gray-500 text-sm tracking-wider md:text-lg">
                KINDLE Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3c3c3d]">
            {users.map((user, index) => (
              <Fragment key={user.id}>
                <tr>
                  <td className="whitespace-nowrap py-4 text-center text-sm md:text-lg">
                    {index + 1}
                  </td>
                  <td className="truncate whitespace-nowrap py-4 text-sm md:text-lg">
                    @{user.email}
                  </td>
                  <td className="whitespace-nowrap py-4 text-sm md:text-lg">
                    <div className="flex items-center justify-around gap-6">
                      {Math.round(user.kindleScore || 0)}
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
                              "h-4 w-4 transition-transform",
                              expandedUserId === user.id ? "rotate-180" : ""
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

      {/* Back to Hub */}
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
  );
}
