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
    <div
      className="container mx-auto space-y-8 rounded-xl border border-[#2d3338] p-6 md:space-y-16 md:pb-16"
      style={{
        background:
          "linear-gradient(290deg, rgba(45, 51, 56, 0.06) 7.74%, rgba(127, 144, 158, 0.14) 92.27%)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 font-medium text-lg text-white md:gap-4 md:text-2xl">
          <img alt="Data" className="size-5 md:size-9" src={DataIcon} />
          Raw data
        </div>
        <div className="flex items-center">
          <select
            className="cursor-pointer appearance-none border-none bg-transparent pr-8 text-[#CFCFCF] text-sm outline-none md:text-lg"
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
      <div className="grid grid-cols-3 place-items-center gap-6 md:grid-cols-6">
        <AnalyticsCard
          icon={
            <img alt="Participants" className="size-4" src={ParticipantsIcon} />
          }
          title="Total Participants"
          value={formatNumber(totalParticipants)}
        />
        <AnalyticsCard
          icon={<img alt="Videos" className="size-4" src={VideosIcon} />}
          title="Videos Submitted"
          value={formatNumber(videosSubmitted)}
        />
        <AnalyticsCard
          icon={<img alt="Likes" className="size-4" src={LikesIcon} />}
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
          title="Total Shares"
          value={formatNumber(totalShares)}
        />
        <AnalyticsCard
          icon={<img alt="Views" className="size-4" src={ViewsIcon} />}
          title="Total Views"
          value={formatNumber(totalViews)}
        />
      </div>
    </div>
  );
}
