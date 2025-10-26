import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FetcherWithComponents } from "react-router";

export type PaginationState = {
  page: number;
  hasNextPage: boolean;
};

interface UseInfiniteScrollParams<
  TData extends { pagination: PaginationState },
  TItem,
> {
  fetcher: FetcherWithComponents<TData>;
  uri: string;
  initialItems: TItem[];
  initialPagination: PaginationState;
  selectItems: (data: TData) => TItem[];
  threshold?: number;
}

interface UseInfiniteScrollResult<TItem> {
  items: TItem[];
  hasNextPage: boolean;
  isLoadingMore: boolean;
  loadMoreRef: RefObject<HTMLDivElement | null>;
}

const DEFAULT_THRESHOLD = 0.1;

export const useInfiniteScroll = <
  TData extends { pagination: PaginationState },
  TItem,
>({
  fetcher,
  uri,
  initialItems,
  initialPagination,
  selectItems,
  threshold = DEFAULT_THRESHOLD,
}: UseInfiniteScrollParams<TData, TItem>): UseInfiniteScrollResult<TItem> => {
  const [items, setItems] = useState(initialItems);
  const [hasNextPage, setHasNextPage] = useState(initialPagination.hasNextPage);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const currentPageRef = useRef(initialPagination.page);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore || fetcher.state !== "idle") {
      return;
    }

    setIsLoadingMore(true);
    const nextPage = currentPageRef.current + 1;
    let separator = "?";
    if (uri.includes("?")) {
      separator = "";
      const hasTrailingDelimiter = uri.endsWith("?") || uri.endsWith("&");
      if (!hasTrailingDelimiter) {
        separator = "&";
      }
    }
    fetcher.load(`${uri}${separator}page=${nextPage}`);
  }, [fetcher, hasNextPage, isLoadingMore, uri]);

  const initialPage = initialPagination.page;
  const initialHasNextPage = initialPagination.hasNextPage;

  useEffect(() => {
    if (fetcher.state !== "idle") {
      return;
    }

    if (!fetcher.data) {
      if (isLoadingMore) {
        setIsLoadingMore(false);
      }

      return;
    }

    const data = fetcher.data;
    const nextItems = selectItems(data);

    setItems((prev) => prev.concat(nextItems));
    currentPageRef.current = data.pagination.page;
    setHasNextPage(data.pagination.hasNextPage);
    setIsLoadingMore(false);
  }, [fetcher.data, fetcher.state, isLoadingMore, selectItems]);

  useEffect(() => {
    setItems(initialItems);
    currentPageRef.current = initialPage;
    setHasNextPage(initialHasNextPage);
    setIsLoadingMore(false);
  }, [initialItems, initialHasNextPage, initialPage]);

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) {
      return;
    }

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries.at(0);
        if (entry?.isIntersecting) {
          loadMore();
        }
      },
      { threshold }
    );

    observerRef.current.observe(node);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loadMore, threshold]);

  return { items, hasNextPage, isLoadingMore, loadMoreRef };
};
