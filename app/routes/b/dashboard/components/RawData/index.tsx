import AnalyticsCard from "../AnalyticsCard";
import BookmarksIcon from "./assets/bookmarks-icon.svg";
import CommentsIcon from "./assets/comments-icon.svg";
// Import icons from assets
import DataIcon from "./assets/data-icon.svg";
import DownloadsIcon from "./assets/downloads-icon.svg";
import LikesIcon from "./assets/likes-icon.svg";
import ParticipantsIcon from "./assets/participants-icon.svg";
import SharesIcon from "./assets/shares-icon.svg";
import VideosIcon from "./assets/videos-icon.svg";
import ViewsIcon from "./assets/views-icon.svg";

export default function RawData() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img alt="Data" className="size-5" src={DataIcon} />
          <h3 className="font-semibold text-white text-xl">Raw data</h3>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center">
            <span className="text-[#CFCFCF] text-sm">All Campaigns</span>
            <svg
              className="ml-2 h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <title>Dropdown arrow</title>
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <span className="text-[#CFCFCF] text-sm">All time</span>
            <svg
              className="ml-2 h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <title>Dropdown arrow</title>
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
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
        <div className="grid grid-cols-4 gap-6">
          {/* Row 1 */}
          <AnalyticsCard
            icon={
              <img
                alt="Participants"
                className="size-4"
                src={ParticipantsIcon}
              />
            }
            title="Total Participants"
            value="2,156"
          />
          <AnalyticsCard
            icon={<img alt="Videos" className="size-4" src={VideosIcon} />}
            showDivider
            title="Videos Submitted"
            value="4,320"
          />
          <AnalyticsCard
            icon={<img alt="Likes" className="size-4" src={LikesIcon} />}
            showDivider
            title="Total Likes"
            value="156,780"
          />
          <AnalyticsCard
            icon={<img alt="Views" className="size-4" src={ViewsIcon} />}
            title="Total Views"
            value="2.4M"
          />

          {/* Row 2 */}
          <AnalyticsCard
            icon={<img alt="Comments" className="size-4" src={CommentsIcon} />}
            title="Total Comments"
            value="45,680"
          />
          <AnalyticsCard
            icon={<img alt="Shares" className="size-4" src={SharesIcon} />}
            showDivider
            title="Total Shares"
            value="12,340"
          />
          <AnalyticsCard
            icon={
              <img alt="Bookmarks" className="size-4" src={BookmarksIcon} />
            }
            showDivider
            title="Total Bookmarks"
            value="8,920"
          />
          <AnalyticsCard
            icon={
              <img alt="Downloads" className="size-4" src={DownloadsIcon} />
            }
            title="Total Downloads"
            value="3,456"
          />
        </div>
      </div>
    </div>
  );
}
