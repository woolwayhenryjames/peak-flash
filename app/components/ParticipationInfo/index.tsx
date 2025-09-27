import type { CampaignUser, UserVideo } from ".prisma/main/client";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import { MoreVideosDialog } from "~/components/Dialogs/MoreVideosDialog";
import GlowContainer from "~/components/GlowContainer";
import { cn } from "~/lib/utils";
import profileIcon from "./assets/profile.svg";

export default function ParticipationInfo({
  expand,
  setExpand,
  campaignUser,
  userRank,
}: {
  expand: boolean;
  setExpand: (expand: boolean) => void;
  campaignUser:
    | Pick<CampaignUser, "id" | "videoCount" | "score">
    | null
    | undefined;
  userRank: number | null | undefined;
}) {
  const [showMoreVideos, setShowMoreVideos] = useState(false);
  const fetcher = useFetcher<UserVideo[]>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: we don't want to refetch on every refetch, that would be infinite loop
  useEffect(() => {
    if (campaignUser?.id) {
      fetcher.load(`/api/getVideos/${campaignUser.id}`);
    }
  }, [campaignUser?.id]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-center rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/90 to-black/90 p-4">
          <div className="flex w-full items-center gap-4">
            <img alt="Profile icon" className="size-13" src={profileIcon} />

            <div className="flex w-full flex-col gap-3">
              <h3 className="font-medium text-lg text-white">
                Profile Performance
              </h3>
              <div className="flex items-center gap-3">
                <button
                  className="flex-1"
                  onClick={() => setExpand(!expand)}
                  type="button"
                >
                  <GlowContainer className="rounded-sm px-4 py-1 text-sm">
                    {expand ? "Collapse" : "Expand"}
                    <svg
                      className={cn(
                        "ml-2 inline size-5 transition-transform",
                        expand ? "rotate-180" : ""
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
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {expand && (
          <div className="flex flex-col items-center">
            {/* Vertical dotted line connector */}
            <div className="h-6 w-px border-gray-600 border-l border-dashed" />

            {/* Spark Points Section */}
            <div className="w-full rounded-xl border border-gray-700 bg-black/50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-medium text-gray-100 text-xl">
                  Spark Points
                </h4>
                <span className="font-medium text-2xl text-gray-100">
                  {Math.round(campaignUser?.score ?? 0)}
                </span>
              </div>
              <p className="mb-4 text-gray-500 text-xs">
                Current Performance Score
              </p>

              {/* Progress Bar */}
              <div className="relative h-3 w-full rounded-full bg-gray-800">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#8080DA] to-[#1BCFDE]"
                  style={{ width: `${(campaignUser?.score ?? 0) / 3}%` }}
                />
              </div>

              <p className="mt-4 text-gray-500 text-xs">
                Spark Points measure user engagement in campaigns based on
                content interactions, quality scores, and account ratings,
                updated every 24 hours.
              </p>
            </div>

            {/* Vertical dotted line connector */}
            <div className="h-6 w-px border-gray-600 border-l border-dashed" />

            {/* Performance Stats */}
            <div className="flex w-full gap-4">
              <div className="flex flex-1 flex-col gap-2 rounded-lg border border-[#9c9c9c]/20 p-3">
                <p className="bg-gradient-to-r from-[#694AFF] to-[#69D7FF] bg-clip-text font-medium text-transparent text-xl">
                  {campaignUser?.videoCount ?? 0}
                </p>
                <p className="text-gray-500 text-xs">Posted Videos</p>
              </div>
              <div className="flex flex-1 flex-col gap-2 rounded-lg border border-[#9c9c9c]/20 p-3">
                <p className="bg-gradient-to-r from-[#694AFF] to-[#69D7FF] bg-clip-text font-medium text-transparent text-xl">
                  #{userRank ?? "-"}
                </p>
                <p className="text-gray-500 text-xs">Current Rank</p>
              </div>
            </div>

            {/* Vertical dotted line connector */}
            <div className="h-6 w-px border-gray-600 border-l border-dashed" />

            {/* Recent Videos */}
            <div
              className={cn(
                "flex w-full gap-4",
                fetcher.data && fetcher.data.length > 1 && "justify-center"
              )}
            >
              {fetcher.data?.slice(0, 3).map((video) => (
                <a
                  className="relative h-[130px] w-[107px] overflow-hidden rounded-lg bg-gray-800"
                  href={video.videoUrl ?? undefined}
                  key={video.videoId}
                  rel="noopener noreferrer"
                  style={{
                    backgroundImage: `url(${video.coverUrl})`,
                  }}
                  target="_blank"
                >
                  <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded bg-black/70 px-2 py-1">
                    <svg className="h-3 w-3 fill-gray-300" viewBox="0 0 10 10">
                      <title>Views</title>
                      <polygon points="0,0 10,5 0,10" />
                    </svg>
                    <span className="text-[10px] text-gray-300">
                      {video.viewCount ?? 0}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {fetcher.data && fetcher.data.length > 3 && (
              <button
                className="mt-4 text-[#ababa] text-sm underline"
                onClick={() => setShowMoreVideos(true)}
                type="button"
              >
                Show All
              </button>
            )}
          </div>
        )}
      </div>
      <MoreVideosDialog
        setShow={setShowMoreVideos}
        show={showMoreVideos}
        videos={fetcher.data ?? []}
      />
    </div>
  );
}
