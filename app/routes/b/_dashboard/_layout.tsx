import type { Prisma } from ".prisma/main/client";
import { ChevronDownIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import RawData from "~/components/RawData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_layout";

export async function loader({ request }: Route.LoaderArgs) {
  // Get all campaigns for the dropdown
  const campaigns = await db.campaign.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  // Check if a specific campaign is selected
  const url = new URL(request.url);
  const selectedCampaignId = url.searchParams.get("d");

  // Build where clause for video filtering
  const videoFilter: Prisma.UserVideoWhereInput = selectedCampaignId
    ? {
        active: true,
        campaignUser: { campaignId: selectedCampaignId },
      }
    : { active: true };

  // Get analytics data
  const [totalParticipants, videosSubmitted, videoStats] = await Promise.all([
    // Count unique users who have joined campaigns (filtered if needed)
    selectedCampaignId
      ? db.campaignUser.count({
          where: { campaignId: selectedCampaignId },
        })
      : db.campaignUser
          .findMany({
            select: { userId: true },
            distinct: ["userId"],
          })
          .then((users) => users.length),

    // Count total videos submitted (filtered if needed)
    db.userVideo.count({
      where: videoFilter,
    }),

    // Get aggregated video stats (likes, comments, shares, views) (filtered if needed)
    db.userVideo.aggregate({
      where: videoFilter,
      _sum: {
        likeCount: true,
        commentCount: true,
        shareCount: true,
        viewCount: true,
      },
    }),
  ]);

  return {
    campaigns,
    analytics: {
      totalParticipants,
      videosSubmitted,
      totalLikes: videoStats._sum.likeCount || 0,
      totalComments: videoStats._sum.commentCount || 0,
      totalShares: videoStats._sum.shareCount || 0,
      totalViews: videoStats._sum.viewCount || 0,
    },
  };
}

export default function Dashboard({
  params: { campaignId },
  loaderData: { analytics, campaigns },
}: Route.ComponentProps) {
  return (
    <div>
      {/* Analytics Center Title */}
      <div
        className="flex h-51 items-center justify-start px-18"
        style={{
          background:
            "linear-gradient(to bottom left, #FDFFF7 0%, #91BBB4 27%, #604D6C 40%, #02030D 50%) bottom right / 60% 50% no-repeat, linear-gradient(to top left, #FDFFF7 0%, #91BBB4 27%, #604D6C 40%, #02030D 50%) top right / 60% 50% no-repeat",
        }}
      >
        <h2 className="font-medium text-2xl text-[#f9f9fb]">
          Analytics
          <br />
          Center
        </h2>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 px-18 pb-14"
        style={{
          background:
            "linear-gradient(180deg, #02040D 0%, #0A1517 30.78%, #130F1C 67.5%, #090608 100%)",
        }}
      >
        <RawData
          campaigns={campaigns}
          totalComments={analytics.totalComments}
          totalLikes={analytics.totalLikes}
          totalParticipants={analytics.totalParticipants}
          totalShares={analytics.totalShares}
          totalViews={analytics.totalViews}
          videosSubmitted={analytics.videosSubmitted}
        />
        <div className="my-18 h-px w-full bg-gradient-to-r from-transparent via-[#6c6c6c]/50 to-transparent" />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flame icon</title>
              <path
                d="M12.0001 21.5999C8.03005 21.5999 4.80005 18.5578 4.80005 14.8186C4.80005 9.5999 12.0002 2.3999 12.0002 2.3999C12.0002 2.3999 19.2 9.5999 19.2 14.8186C19.2 18.5579 15.9702 21.5999 12.0001 21.5999ZM12.0001 21.5999C10.0151 21.5999 8.40005 20.0789 8.40005 18.2093C8.40005 15.5999 12.0001 11.9999 12.0001 11.9999C12.0001 11.9999 15.6 15.5999 15.6 18.2093C15.6 20.0789 13.9851 21.5999 12.0001 21.5999Z"
                stroke="url(#paint0_linear_666_3330)"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_666_3330"
                  x1="2.07384"
                  x2="28.0428"
                  y1="11.9999"
                  y2="11.9999"
                >
                  <stop stopColor="#6D7077" />
                  <stop offset="0.363695" stopColor="#FEFEFE" />
                  <stop offset="1" stopColor="#3C4041" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="font-semibold text-white text-xl">
              Campaign Analytics
            </h3>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex w-fit items-center gap-2 rounded-lg border border-[#707070] bg-transparent px-6 py-3 text-[#C2C2C2] text-base focus:border-[#707070] focus:ring-0"
                type="button"
              >
                <span>
                  {
                    (campaigns.find((c) => c.id === campaignId) ?? campaigns[0])
                      .name
                  }
                </span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-[#707070] bg-[#1a1a1a]">
              {campaigns.map((campaign) => (
                <DropdownMenuItem
                  className="text-[#C2C2C2] focus:bg-[#2a2a2a] focus:text-white"
                  key={campaign.id}
                >
                  <NavLink to={`./dashboard/${campaign.id}`}>
                    {campaign.name}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
