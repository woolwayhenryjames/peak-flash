import type { UserVideo } from ".prisma/main/client";
import { useEffect } from "react";
import { useFetcher } from "react-router";
import { cn, formatNumber } from "~/lib/utils";
import type { ApiResponse } from "~/routes/api~/getUserData.$id.$videoLimit";
import VideoCard from "./VideoCard";

export default function ExpandedUserVideoData({
  user,
  campaignId,
}: {
  user: { id: string; email: string };
  campaignId: string;
}) {
  const fetcher = useFetcher<ApiResponse>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: only want to run on userId change
  useEffect(() => {
    if (user.id && fetcher.state === "idle" && !fetcher.data) {
      fetcher.load(`/api/getUserData/${user.id}/3`);
    }
  }, [user.id, campaignId]);

  const isLoading = fetcher.state === "loading";
  const userData = fetcher.data?.userData;
  const videos = fetcher.data?.videos;
  const error = fetcher.data?.error;
  const hasError =
    error || (!userData && fetcher.state === "idle" && fetcher.data);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center p-8">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </div>
      </div>
    );
  }

  if (hasError || !userData) {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center p-8">
          <p className="text-red-400 text-sm">
            {error || "Failed to load user data"}
          </p>
        </div>
      </div>
    );
  }

  const campaigns = userData.campaignUsers.map((cu, index) => ({
    name: cu.campaign.name,
    position: cu.rank || index + 1, // Use actual rank if available, otherwise use index
  }));

  return (
    <div className="mt-4 flex flex-col gap-px">
      {/* Stats Section */}
      <div className="flex flex-col items-center">
        {/* Divider Line */}
        <div
          className={cn("h-7 w-0 border-[#2D3338] border-l border-dashed")}
        />

        {/* Stats Cards */}
        <div className="flex w-full gap-6">
          {/* Posted Videos Card */}
          <div className="flex flex-1 gap-2.5 rounded-2 border border-white/20 px-7 py-6">
            <div className="flex flex-col items-end gap-2">
              <span
                className={cn(
                  "bg-gradient-to-r from-[#B871FF] to-[#2CFFBC]",
                  "bg-clip-text font-medium text-transparent text-xl leading-[1.5em]"
                )}
              >
                {formatNumber(fetcher.data?.videoCount)}
              </span>
              <span
                className={cn(
                  "font-light text-[#A7A7A7] text-xs leading-[1.5em]"
                )}
              >
                Posted Videos
              </span>
            </div>
          </div>

          {/* Total Likes Card */}
          <div className="flex flex-1 gap-2.5 rounded-2 border border-white/20 px-7 py-6">
            <div className="flex flex-col items-end gap-2">
              <span
                className={cn(
                  "bg-gradient-to-r from-[#B871FF] to-[#2CFFBC]",
                  "bg-clip-text font-medium text-transparent text-xl leading-[1.5em]"
                )}
              >
                {formatNumber(fetcher.data?.likeCount)}
              </span>
              <span
                className={cn(
                  "font-light text-[#A7A7A7] text-xs leading-[1.5em]"
                )}
              >
                Total Likes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Videos Section */}
      <div className="flex flex-col items-center">
        {/* Divider Line */}
        <div
          className={cn("h-7 w-0 border-[#2D3338] border-l border-dashed")}
        />

        <div
          className={cn(
            "flex w-full gap-2.5 rounded-2 border border-[#292F32]",
            "px-5 pt-2 pb-6"
          )}
        >
          <div className="flex w-full flex-col gap-6">
            <h3 className="font-medium text-sm text-white leading-[1.5em]">
              FEATURED VIDEOS
            </h3>

            <div className="flex flex-col items-center gap-8">
              <div className="flex w-full flex-col gap-8">
                <div className="flex flex-col gap-4">
                  {/* Render VideoCard components for each video */}
                  {videos && videos.length > 0 ? (
                    videos
                      .slice(0, 3)
                      .map((video: UserVideo) => (
                        <VideoCard
                          creator={`@${userData.name || "creator"}`}
                          key={video.id}
                          kindleScore={userData.kindleScore || 8.9}
                          video={video}
                        />
                      ))
                  ) : (
                    <div className="flex items-center justify-center py-8">
                      <span className="text-gray-400 text-sm">
                        No videos found
                      </span>
                    </div>
                  )}
                </div>

                {/* Divider Line */}
                <div className={cn("h-0 w-full border-[#414149] border-t")} />
              </div>

              {/* Cross-Campaign Positions */}
              <div className="flex w-full flex-col gap-6">
                <h3 className="font-medium text-sm text-white leading-[1.5em]">
                  Cross-Campaign Positions
                </h3>

                <div className="flex flex-col gap-7">
                  {campaigns.length > 0 ? (
                    campaigns.map((campaign, index) => (
                      <div className="flex flex-col gap-3" key={campaign.name}>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-end gap-6">
                            <div className="h-2 w-2 rounded-full bg-[#71FFCB]" />
                            <span
                              className={cn(
                                "font-normal text-[#C0C0C0] text-sm leading-[1.5em]"
                              )}
                            >
                              {campaign.name}
                            </span>
                          </div>
                          <span
                            className={cn(
                              "font-light text-[#D9D9D9] text-sm leading-[1.5em]"
                            )}
                          >
                            #{campaign.position}
                          </span>
                        </div>
                        {index < campaigns.length - 1 && (
                          <div
                            className={cn(
                              "h-0 w-full border-[#414149] border-t border-dashed"
                            )}
                          />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center justify-center py-8">
                      <span className="text-gray-400 text-sm">
                        No campaigns found
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
