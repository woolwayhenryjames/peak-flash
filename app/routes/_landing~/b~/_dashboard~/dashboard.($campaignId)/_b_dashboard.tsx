import type { Campaign } from ".prisma/main/client";
import { redirect } from "react-router";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_b_dashboard";
import CampaignAnalytics from "./components/CampaignAnalytics";
import RankingCard from "./components/RankingCard";
import RelatedVideos from "./components/RelatedVideos";

export function meta({ data }: Route.MetaArgs) {
  const campaignName = data?.campaign?.name || "";

  return [
    {
      title: `${campaignName} Dashboard - Peak AI`,
    },
    {
      name: "description",
      content: `View analytics and leaderboard for ${campaignName} campaign. Track Spark Score and Kindle Score rankings in real-time.`,
    },
    {
      name: "keywords",
      content: `${campaignName}, Peak AI dashboard, campaign analytics, Spark Score, Kindle Score, leaderboard, campaign participants`,
    },
    {
      property: "og:title",
      content: `${campaignName} Campaign Dashboard - Peak AI`,
    },
    {
      property: "og:description",
      content: `Real-time analytics and rankings for ${campaignName} campaign. See top performers and track campaign progress.`,
    },
  ];
}

export async function loader({
  request,
  params: { campaignId },
}: Route.LoaderArgs) {
  // Check authentication
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect("/");
  }

  const userData = user.value;

  // Check if user is a business user or admin
  if (!(userData.isBusiness || userData.isAdmin)) {
    throw redirect("/");
  }

  // Fetch campaign based on user type and campaignId
  let campaign: (Campaign & { _count: { campaignUsers: number } }) | null =
    null;

  if (campaignId) {
    // Specific campaign requested
    if (userData.isAdmin) {
      campaign = await db.campaign.findUnique({
        where: { id: campaignId },
        include: { _count: { select: { campaignUsers: true } } },
      });
    } else {
      campaign = await db.campaign.findUnique({
        where: {
          id: campaignId,
          ownerId: userData.id,
        },
        include: { _count: { select: { campaignUsers: true } } },
      });
    }
  } else if (userData.isAdmin) {
    // No specific campaign, admin gets first available
    campaign = await db.campaign.findFirst({
      orderBy: { name: "asc" },
      include: { _count: { select: { campaignUsers: true } } },
    });
  } else {
    // No specific campaign, business user gets first owned
    campaign = await db.campaign.findFirst({
      where: { ownerId: userData.id },
      orderBy: { name: "asc" },
      include: { _count: { select: { campaignUsers: true } } },
    });
  }

  if (!campaign) {
    // Campaign not found or not accessible
    throw redirect("/b/dashboard");
  }

  // Get top 3 participants for leaderboard
  const topSpark = await db.campaignUser.findMany({
    where: { campaignId: campaign.id },
    orderBy: { score: "desc" },
    take: 3,
    include: {
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          image: true,
        },
      },
    },
  });

  const topKindle = await db.user.findMany({
    where: {
      campaignUsers: {
        some: {
          campaignId: campaign.id,
        },
      },
    },
    orderBy: { kindleScore: "desc" },
    take: 3,
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      kindleScore: true,
      rank: true,
    },
  });

  const topVideos = await db.userVideo.findMany({
    where: {
      campaignUser: {
        campaignId: campaign.id,
      },
    },
    orderBy: { viewCount: "desc" },
    take: 3,
    include: {
      campaignUser: {
        include: {
          user: {
            select: {
              name: true,
              image: true,
              kindleScore: true,
            },
          },
        },
      },
    },
  });

  return { campaign, topSpark, topKindle, topVideos };
}

export default function Dashboard({
  loaderData: { campaign, topSpark, topKindle, topVideos },
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto space-y-6 pt-6">
      <div className="flex justify-between gap-7">
        <CampaignAnalytics campaign={campaign} />
        <RelatedVideos campaignId={campaign.id} topVideos={topVideos} />
      </div>

      {/* Rankings Section */}
      <div className="space-y-15">
        {/* Spark Rankings */}
        <div className="space-y-[25px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 rounded-lg border border-[#1c1e1f] bg-linear-234 from-[#2d3338]/5 to-[#7e8f9e]/10 px-2 py-3">
              <svg
                fill="none"
                height="18"
                viewBox="0 0 22 18"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>spark icon</title>
                <g clipPath="url(#clip0_1164_2268)">
                  <path
                    d="M17.5128 16.758H4.48544C4.31973 16.7604 4.16169 16.827 4.0458 16.9433C3.92991 17.0597 3.86556 17.2163 3.86679 17.379C3.86679 17.721 4.14633 18 4.48544 18H17.5128C17.6785 17.9976 17.8366 17.931 17.9525 17.8147C18.0683 17.6983 18.1327 17.5417 18.1315 17.379C18.1327 17.2163 18.0683 17.0597 17.9525 16.9433C17.8366 16.827 17.6785 16.7604 17.5128 16.758ZM20.4988 4.0887C19.6721 4.0887 18.9994 4.7619 18.9994 5.5944C18.9994 6.0111 19.169 6.3882 19.4421 6.6627L15.0511 9.2187L11.5875 2.8629C12.1164 2.6343 12.4857 2.1078 12.4857 1.4931C12.4857 0.6687 11.8203 0 10.9991 0C10.1788 0 9.51254 0.6687 9.51254 1.4931C9.51254 2.1078 9.88189 2.6325 10.4107 2.8629L6.9472 9.2187L2.55708 6.66C2.82929 6.3882 2.99885 6.0111 2.99885 5.5926C2.99885 4.7619 2.32887 4.086 1.49942 4.086C0.669974 4.086 0 4.761 0 5.5944C0 6.4251 0.669974 7.1001 1.49942 7.1001C1.57641 7.1001 1.64332 7.0677 1.71664 7.0569L3.95111 14.8113C3.96394 14.859 4.0061 14.8824 4.03451 14.9166C4.04093 14.9274 4.04917 14.9346 4.05559 14.9454C4.08309 14.9751 4.10325 15.012 4.13991 15.0291C4.19765 15.0705 4.26456 15.1011 4.34429 15.1011H17.6521C17.7319 15.1011 17.7988 15.0705 17.8565 15.0291C17.8932 15.0093 17.9124 14.9751 17.9408 14.9454C17.9472 14.9337 17.9573 14.9274 17.9619 14.9166C17.9894 14.8806 18.0306 14.8563 18.0453 14.8113L20.2798 7.0569C20.3531 7.0677 20.4191 7.1001 20.497 7.1001C21.3237 7.1001 21.9964 6.4269 21.9964 5.5944C21.9983 4.7619 21.3283 4.0887 20.4988 4.0887Z"
                    fill="#E7FF79"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1164_2268">
                    <rect fill="white" height="18" width="22" />
                  </clipPath>
                </defs>
              </svg>

              <h4 className="font-semibold text-white text-xl">
                Spark Points Leaderboard
              </h4>
            </div>
            <span className="cursor-not-allowed text-[#ACACAC] text-sm opacity-50">
              View All
            </span>
          </div>

          <div className="space-y-[14px]">
            {topSpark.map((participant, index) => (
              <RankingCard
                campaignId={campaign.id}
                key={participant.user.email}
                points={participant.score.toFixed(0)}
                pointsLabel="Spark Points"
                rank={(index + 1).toString()}
                user={participant.user}
              />
            ))}
          </div>
        </div>

        {/* KINDLE Score Rankings */}
        <div className="space-y-[25px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 rounded-lg border border-[#1c1e1f] bg-linear-234 from-[#2d3338]/5 to-[#7e8f9e]/10 px-2 py-3">
              <svg
                fill="none"
                height="28"
                viewBox="0 0 28 28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>medal icon</title>
                <path
                  d="M15.3346 7.09458L16.7346 4.66675H22.1246L19.6688 8.91925C18.4046 7.94916 16.912 7.32078 15.3346 7.09458ZM14 24.5001C12.0047 24.4991 10.0789 23.7676 8.58596 22.4439C7.09307 21.1201 6.13644 19.2956 5.89666 17.3148C5.65689 15.334 6.15056 13.334 7.28449 11.6922C8.41841 10.0505 10.1141 8.88068 12.0515 8.40362C13.9889 7.92656 16.0339 8.17526 17.8005 9.10278C19.5671 10.0303 20.933 11.5724 21.6404 13.4381C22.3477 15.3038 22.3476 17.3638 21.6401 19.2294C20.9325 21.095 19.5665 22.6371 17.7998 23.5644L13.9125 19.0296C13.9686 19.0069 14.0314 19.0069 14.0875 19.0296L16.3951 19.9676C16.4319 19.9826 16.4719 19.988 16.5114 19.9832C16.5508 19.9784 16.5884 19.9636 16.6205 19.9402C16.6527 19.9169 16.6783 19.8857 16.695 19.8496C16.7117 19.8136 16.7189 19.7739 16.716 19.7342L16.5363 17.2492C16.5329 17.1887 16.5525 17.1291 16.5911 17.0824L18.1965 15.1784C18.222 15.1481 18.2394 15.1117 18.247 15.0728C18.2546 15.0339 18.2522 14.9937 18.2399 14.956C18.2277 14.9183 18.206 14.8843 18.177 14.8573C18.1479 14.8303 18.1125 14.8111 18.074 14.8016L15.6555 14.2042C15.5964 14.1893 15.5454 14.1521 15.5131 14.1004L14.1983 11.9852C14.1774 11.9515 14.1482 11.9236 14.1135 11.9043C14.0788 11.885 14.0397 11.8748 14 11.8748C13.9603 11.8748 13.9212 11.885 13.8865 11.9043C13.8518 11.9236 13.8226 11.9515 13.8016 11.9852L12.4868 14.1004C12.4546 14.1521 12.4036 14.1893 12.3445 14.2042L9.92598 14.8016C9.88748 14.8111 9.85204 14.8303 9.82301 14.8573C9.79398 14.8843 9.7723 14.9183 9.76004 14.956C9.74779 14.9937 9.74534 15.0339 9.75294 15.0728C9.76054 15.1117 9.77793 15.1481 9.80348 15.1784L11.4088 17.0824C11.4485 17.1291 11.4671 17.1897 11.4636 17.2504L11.284 19.7354C11.2812 19.7749 11.2886 19.8145 11.3054 19.8504C11.3222 19.8863 11.3479 19.9173 11.38 19.9405C11.4121 19.9638 11.4496 19.9784 11.4889 19.9832C11.5282 19.9879 11.5681 19.9825 11.6048 19.9676L13.9125 19.0296L14 24.5001ZM5.83331 4.66675L8.30081 8.94141C9.56112 7.96699 11.0508 7.33302 12.6268 7.10041L11.2233 4.66675H5.83331Z"
                  fill="#5FFFCC"
                />
                <path
                  d="M13.9125 19.0278L14 24.4995C15.3239 24.5016 16.6283 24.1804 17.7999 23.5638L13.9125 19.029V19.0278Z"
                  fill="#5FFFCC"
                />
              </svg>

              <h4 className="font-semibold text-white text-xl">
                KINDLE Score Leaderboard
              </h4>
            </div>
            <span className="cursor-not-allowed text-[#ACACAC] text-sm opacity-50">
              View All
            </span>
          </div>

          <div className="space-y-[14px]">
            {topKindle.map((user, index) => (
              <RankingCard
                key={user.name}
                points={user.kindleScore?.toFixed(0) || "0"}
                pointsLabel="KINDLE Score"
                rank={(index + 1).toString()}
                user={user}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
