import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useFetcher } from "react-router";
import VideoCard from "~/components/VideoCard";
import { getCampaignVideos } from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/campaigns.$id_.videos";

export async function loader({ request, params }: Route.LoaderArgs) {
  if (!params.id) {
    throw new Response("Campaign ID is required", { status: 400 });
  }
  const campaign = await db.campaign.findUnique({
    where: { id: params.id },
  });
  if (!campaign) {
    throw new Response("Campaign not found", { status: 404 });
  }
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);

  return getCampaignVideos(params.id, page, 10);
}

export default function CampaignVideos({
  loaderData,
  params,
}: Route.ComponentProps) {
  const fetcher = useFetcher<typeof loader>();

  // State management
  const [campaignVideos, setCampaignVideos] = useState(
    loaderData.campaignVideos
  );
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

    fetcher.load(`/campaigns/${params.id}/videos?page=${nextPage}`);
  }, [hasNextPage, isLoadingMore, fetcher, params.id]);

  // Handle fetcher data
  useEffect(() => {
    if (fetcher.data && fetcher.state === "idle") {
      const data = fetcher.data;
      setCampaignVideos((prev) => [...prev, ...data.campaignVideos]);
      currentPage.current = data.pagination.page;
      setHasNextPage(data.pagination.hasNextPage);
      setIsLoadingMore(false);
    }
  }, [fetcher.data, fetcher.state]);

  // Initialize campaigns from loader data
  useEffect(() => {
    setCampaignVideos(loaderData.campaignVideos);
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
    <>
      <div
        className="flex aspect-390/131 w-full items-center gap-3 bg-center bg-cover pl-10 md:pl-28"
        style={{
          backgroundImage:
            "radial-gradient(83.25% 83.25% at 50% 0%, #707070 0%, #523248 30%, #261727 60%, #0E0C12 87.69%, #0A0A0A 100%)",
        }}
      >
        <div className="">
          <div className="font-medium text-2xl text-white tracking-tight">
            PeakAI Campaign Videos
          </div>
        </div>
      </div>
      <div
        className="container mx-auto min-h-screen md:px-18"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #000001 0%, #151411 30.78%, #241F1A 71.63%, #151512 100%)",
        }}
      >
        <div className="mx-6 mb-7 flex items-center gap-1">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 23 24"
            width="23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Video Library Icon</title>
            <path
              d="M21.8633 6.17758L18.2696 8.22242C18.2514 8.23266 18.2308 8.23796 18.2099 8.23778C18.189 8.23761 18.1685 8.23198 18.1505 8.22145C18.1324 8.21091 18.1175 8.19584 18.1071 8.17773C18.0966 8.15962 18.0911 8.1391 18.0911 8.1182V4.45378C18.0911 4.42201 18.0785 4.39154 18.056 4.36907C18.0335 4.34661 18.0031 4.33398 17.9713 4.33398H1.07829C1.04652 4.33398 1.01605 4.34661 0.993582 4.36907C0.971117 4.39154 0.958496 4.42201 0.958496 4.45378V19.5475C0.958496 19.5793 0.971117 19.6098 0.993582 19.6322C1.01605 19.6547 1.04652 19.6673 1.07829 19.6673H17.9689C17.9846 19.6673 18.0002 19.6642 18.0148 19.6582C18.0293 19.6522 18.0425 19.6434 18.0536 19.6322C18.0647 19.6211 18.0736 19.6079 18.0796 19.5934C18.0856 19.5788 18.0887 19.5633 18.0887 19.5475V15.8831C18.0887 15.8622 18.0942 15.8417 18.1047 15.8236C18.1151 15.8055 18.13 15.7904 18.1481 15.7799C18.1661 15.7693 18.1866 15.7637 18.2075 15.7635C18.2284 15.7633 18.249 15.7686 18.2672 15.7789L21.8609 17.8237C21.8791 17.8339 21.8995 17.8392 21.9203 17.8391C21.9411 17.839 21.9615 17.8334 21.9795 17.8231C21.9975 17.8127 22.0125 17.7978 22.023 17.7798C22.0335 17.7619 22.0392 17.7415 22.0394 17.7207V6.2806C22.039 6.26015 22.0333 6.24016 22.0229 6.22253C22.0125 6.20491 21.9978 6.19023 21.9802 6.1799C21.9625 6.16957 21.9425 6.16394 21.9221 6.16353C21.9016 6.16312 21.8814 6.16796 21.8633 6.17758ZM16.2918 17.9902H2.75537C2.73964 17.9902 2.72406 17.9871 2.70953 17.9811C2.69499 17.9751 2.68179 17.9663 2.67067 17.9551C2.65954 17.944 2.65072 17.9308 2.6447 17.9163C2.63868 17.9018 2.63558 17.8862 2.63558 17.8704V6.13086C2.63558 6.11513 2.63868 6.09955 2.6447 6.08502C2.65072 6.07048 2.65954 6.05728 2.67067 6.04615C2.68179 6.03503 2.69499 6.02621 2.70953 6.02019C2.72406 6.01417 2.73964 6.01107 2.75537 6.01107H16.2918C16.3076 6.01107 16.3231 6.01417 16.3377 6.02019C16.3522 6.02621 16.3654 6.03503 16.3765 6.04615C16.3877 6.05728 16.3965 6.07048 16.4025 6.08502C16.4085 6.09955 16.4116 6.11513 16.4116 6.13086V17.8704C16.4116 17.8862 16.4085 17.9018 16.4025 17.9163C16.3965 17.9308 16.3877 17.944 16.3765 17.9551C16.3654 17.9663 16.3522 17.9751 16.3377 17.9811C16.3231 17.9871 16.3076 17.9902 16.2918 17.9902ZM20.1851 14.9415L18.1486 13.7832C18.1305 13.7727 18.1154 13.7577 18.1049 13.7396C18.0944 13.7215 18.0888 13.701 18.0887 13.6801V10.3236C18.0888 10.3027 18.0944 10.2822 18.1049 10.2641C18.1154 10.246 18.1305 10.231 18.1486 10.2205L20.1851 9.06216C20.2033 9.05192 20.2238 9.04663 20.2447 9.0468C20.2656 9.04697 20.2861 9.0526 20.3042 9.06314C20.3222 9.07367 20.3372 9.08874 20.3476 9.10685C20.358 9.12497 20.3635 9.14549 20.3635 9.16638V14.8397C20.363 14.8602 20.3572 14.8803 20.3467 14.8979C20.3361 14.9155 20.3213 14.9301 20.3035 14.9403C20.2857 14.9506 20.2655 14.956 20.245 14.9563C20.2245 14.9565 20.2043 14.9514 20.1863 14.9415H20.1851Z"
              fill="url(#paint0_linear_704_1751)"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_704_1751"
                x1="-3.03255"
                x2="34.9848"
                y1="12.0007"
                y2="12.0007"
              >
                <stop stop-color="#6D7077" />
                <stop offset="0.363695" stop-color="#FEFEFE" />
                <stop offset="1" stop-color="#3C4041" />
              </linearGradient>
            </defs>
          </svg>

          <h3 className="font-semibold text-white text-xl">Video Library</h3>
        </div>
        {/* Loading state for filter changes */}
        {isLoadingMore && campaignVideos.length === 0 && (
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
              <span>Loading videos...</span>
            </div>
          </div>
        )}

        {/* Campaign Cards */}
        {campaignVideos.length > 0 && (
          <div className="w-full space-y-4">
            {campaignVideos.map((campaign) => (
              <VideoCard
                creator={campaign.campaignUser.user.name}
                key={campaign.videoId}
                kindleScore={campaign.campaignUser.user.kindleScore ?? 0}
                video={campaign}
              />
            ))}
          </div>
        )}

        {/* Load more trigger */}
        {hasNextPage && (
          <div className="py-8" ref={loadMoreRef}>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
                <span>Loading more videos...</span>
              </div>
            </div>
          </div>
        )}

        {/* End of results message */}
        {!hasNextPage && campaignVideos.length > 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500 text-sm">
              You've reached the end of the video library.
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
