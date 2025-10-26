import { Link } from "react-router";
import VideoCard from "~/components/VideoCard";
import type { Route } from "../+types/_b_dashboard";

export default function RelatedVideos({
  campaignId,
  topVideos,
}: {
  campaignId: string;
  topVideos: Route.ComponentProps["loaderData"]["topVideos"];
}) {
  return (
    <div className="flex-1 rounded-xl border border-[#2D3338] pt-6.5">
      <div className="flex flex-col items-center justify-between rounded-xl border border-[#2D3338] p-6">
        <div className="mb-5 flex w-full items-center gap-2">
          <svg
            fill="none"
            height="21"
            viewBox="0 0 13 12"
            width="23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>video icon</title>
            <path
              d="M0 3C0 2.17266 0.647743 1.5 1.44444 1.5H7.22222C8.01892 1.5 8.66667 2.17266 8.66667 3V9C8.66667 9.82734 8.01892 10.5 7.22222 10.5H1.44444C0.647743 10.5 0 9.82734 0 9V3ZM12.6186 2.33906C12.8533 2.47031 13 2.72344 13 3V9C13 9.27656 12.8533 9.52969 12.6186 9.66094C12.3839 9.79219 12.0995 9.77812 11.876 9.62344L9.70938 8.12344L9.38889 7.90078V4.09922L9.70938 3.87656L11.876 2.37656C12.0972 2.22422 12.3816 2.20781 12.6186 2.33906Z"
              fill="#FF7B7D"
            />
          </svg>

          <h4 className="font-medium text-white text-xl">Related Videos</h4>

          <Link
            className="ml-auto text-[#ACACAC] text-sm underline"
            to={`/b/campaigns/${campaignId}/videos`}
            viewTransition
          >
            View All
          </Link>
        </div>

        <div className="@container w-full space-y-[10px]">
          {topVideos.length > 0 ? (
            topVideos.map((video) => (
              <VideoCard
                className="h-26"
                creator={video.campaignUser.user.name}
                key={video.id}
                kindleScore={video.campaignUser.user.kindleScore || 0}
                video={video}
              />
            ))
          ) : (
            <div className="flex items-center justify-center py-8 text-gray-400">
              <p>No videos found for this campaign</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
