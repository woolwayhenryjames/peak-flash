import { useSearchParams } from "react-router";
import { formatNumber } from "~/lib/utils";
import AnalyticsCard from "./AnalyticsCard";
import CommentsIcon from "./assets/comments-icon.svg";
// Import icons from assets
import DataIcon from "./assets/data-icon.svg";
import LikesIcon from "./assets/likes-icon.svg";
import ParticipantsIcon from "./assets/participants-icon.svg";
import SharesIcon from "./assets/shares-icon.svg";
import VideosIcon from "./assets/videos-icon.svg";
import ViewsIcon from "./assets/views-icon.svg";

interface RawDataProps {
  totalParticipants: number | null | undefined;
  videosSubmitted: number | null | undefined;
  totalLikes: number | null | undefined;
  totalComments: number | null | undefined;
  totalShares: number | null | undefined;
  totalViews: number | null | undefined;
  campaigns: Array<{ id: string; name: string }> | null | undefined;
}

export default function RawData({
  totalParticipants,
  videosSubmitted,
  totalLikes,
  totalComments,
  totalShares,
  totalViews,
  campaigns,
}: RawDataProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCampaign = searchParams.get("d") || "all";

  const handleCampaignChange = (campaignId: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (campaignId === "all") {
      newParams.delete("d");
    } else {
      newParams.set("d", campaignId);
    }
    setSearchParams(newParams);
  };
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img alt="Data" className="size-5" src={DataIcon} />
          <h3 className="font-semibold text-white text-xl">Raw data</h3>
        </div>
        <div className="flex items-center">
          <select
            className="cursor-pointer appearance-none border-none bg-transparent pr-8 text-[#CFCFCF] text-sm outline-none"
            onChange={(e) => handleCampaignChange(e.target.value)}
            value={selectedCampaign}
          >
            <option value="all">All Campaigns</option>
            {campaigns?.map((campaign) => (
              <option key={campaign.id} value={campaign.id}>
                {campaign.name}
              </option>
            ))}
          </select>
          <svg
            className="-ml-6 pointer-events-none h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <title>Dropdown arrow</title>
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Analytics Cards Grid */}
      <div
        className="rounded-xl border border-[#2d3338] px-5 py-9"
        style={{
          background:
            "linear-gradient(249deg, rgba(15, 16, 21, 0.55) 9.26%, rgba(18, 19, 23, 0.55) 38.41%, rgba(31, 25, 44, 0.55) 87.29%, rgba(21, 22, 31, 0.55) 114.78%)",
        }}
      >
        <div className="grid grid-cols-3 gap-6">
          <AnalyticsCard
            icon={
              <img
                alt="Participants"
                className="size-4"
                src={ParticipantsIcon}
              />
            }
            title="Total Participants"
            value={formatNumber(totalParticipants)}
          />
          <AnalyticsCard
            icon={<img alt="Videos" className="size-4" src={VideosIcon} />}
            showDivider
            title="Videos Submitted"
            value={formatNumber(videosSubmitted)}
          />
          <AnalyticsCard
            icon={<img alt="Likes" className="size-4" src={LikesIcon} />}
            showDivider
            title="Total Likes"
            value={formatNumber(totalLikes)}
          />
          <AnalyticsCard
            icon={<img alt="Comments" className="size-4" src={CommentsIcon} />}
            title="Total Comments"
            value={formatNumber(totalComments)}
          />
          <AnalyticsCard
            icon={<img alt="Shares" className="size-4" src={SharesIcon} />}
            showDivider
            title="Total Shares"
            value={formatNumber(totalShares)}
          />
          <AnalyticsCard
            icon={<img alt="Views" className="size-4" src={ViewsIcon} />}
            showDivider
            title="Total Views"
            value={formatNumber(totalViews)}
          />
        </div>
      </div>
    </div>
  );
}
