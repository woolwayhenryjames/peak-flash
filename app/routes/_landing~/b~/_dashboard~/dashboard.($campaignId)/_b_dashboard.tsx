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
  let campaign: Awaited<ReturnType<typeof db.campaign.findUnique>> = null;

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
            <div className="flex items-center gap-[7px]">
              <svg
                fill="none"
                height="14"
                viewBox="0 0 17 14"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Spark icon</title>
                <g clipPath="url(#clip0_666_3384)">
                  <path
                    d="M13.5326 13.034H3.46602C3.33797 13.0358 3.21585 13.0877 3.1263 13.1781C3.03675 13.2686 2.98702 13.3904 2.98797 13.517C2.98797 13.783 3.20398 14 3.46602 14H13.5326C13.6607 13.9982 13.7828 13.9463 13.8723 13.8559C13.9619 13.7654 14.0116 13.6436 14.0107 13.517C14.0116 13.3904 13.9619 13.2686 13.8723 13.1781C13.7828 13.0877 13.6607 13.0358 13.5326 13.034ZM15.84 3.1801C15.2012 3.1801 14.6814 3.7037 14.6814 4.3512C14.6814 4.6753 14.8124 4.9686 15.0234 5.1821L11.6304 7.1701L8.954 2.2267C9.36264 2.0489 9.64806 1.6394 9.64806 1.1613C9.64806 0.5201 9.13389 0 8.49932 0C7.86547 0 7.3506 0.5201 7.3506 1.1613C7.3506 1.6394 7.63601 2.0475 8.04465 2.2267L5.36829 7.1701L1.97593 5.18C2.18627 4.9686 2.31729 4.6753 2.31729 4.3498C2.31729 3.7037 1.79958 3.178 1.15864 3.178C0.517707 3.178 0 3.703 0 4.3512C0 4.9973 0.517707 5.5223 1.15864 5.5223C1.21814 5.5223 1.26983 5.4971 1.32649 5.4887L3.05313 11.5199C3.06304 11.557 3.09562 11.5752 3.11758 11.6018C3.12253 11.6102 3.12891 11.6158 3.13387 11.6242C3.15511 11.6473 3.17069 11.676 3.19902 11.6893C3.24364 11.7215 3.29534 11.7453 3.35695 11.7453H13.6403C13.7019 11.7453 13.7536 11.7215 13.7982 11.6893C13.8265 11.6739 13.8414 11.6473 13.8634 11.6242C13.8683 11.6151 13.8761 11.6102 13.8797 11.6018C13.9009 11.5738 13.9328 11.5549 13.9441 11.5199L15.6707 5.4887C15.7274 5.4971 15.7784 5.5223 15.8386 5.5223C16.4774 5.5223 16.9972 4.9987 16.9972 4.3512C16.9987 3.7037 16.4809 3.1801 15.84 3.1801Z"
                    fill="#E6E6E6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_666_3384">
                    <rect fill="white" height="14" width="17" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="font-medium text-base text-white">
                Spark Rankings
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
            <div className="flex items-center gap-[3px]">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>medal icon</title>
                <path
                  d="M13.144 6.081L14.344 4H18.964L16.859 7.645C15.7754 6.8135 14.496 6.27488 13.144 6.081ZM12 21C10.2898 20.9991 8.63904 20.3722 7.35941 19.2375C6.07979 18.1029 5.25982 16.539 5.0543 14.8412C4.84878 13.1434 5.27193 11.429 6.24386 10.0218C7.2158 8.61464 8.66927 7.61194 10.3299 7.20303C11.9905 6.79412 13.7434 7.00729 15.2576 7.80231C16.7718 8.59732 17.9426 9.91917 18.5489 11.5183C19.1552 13.1174 19.1551 14.8832 18.5487 16.4823C17.9422 18.0814 16.7713 19.4031 15.257 20.198L11.925 16.311C11.9731 16.2915 12.0269 16.2915 12.075 16.311L14.053 17.115C14.0845 17.1279 14.1188 17.1325 14.1526 17.1284C14.1864 17.1243 14.2186 17.1116 14.2462 17.0916C14.2737 17.0715 14.2957 17.0448 14.31 17.0139C14.3243 16.983 14.3305 16.949 14.328 16.915L14.174 14.785C14.1711 14.7331 14.1879 14.682 14.221 14.642L15.597 13.01C15.6189 12.984 15.6338 12.9529 15.6403 12.9195C15.6468 12.8861 15.6447 12.8517 15.6342 12.8193C15.6237 12.787 15.6051 12.7579 15.5803 12.7347C15.5554 12.7116 15.525 12.6952 15.492 12.687L13.419 12.175C13.3684 12.1622 13.3246 12.1303 13.297 12.086L12.17 10.273C12.1521 10.2441 12.127 10.2202 12.0973 10.2036C12.0675 10.187 12.034 10.1784 12 10.1784C11.966 10.1784 11.9325 10.187 11.9027 10.2036C11.873 10.2202 11.8479 10.2441 11.83 10.273L10.703 12.086C10.6754 12.1303 10.6316 12.1622 10.581 12.175L8.508 12.687C8.475 12.6952 8.44462 12.7116 8.41974 12.7347C8.39485 12.7579 8.37628 12.787 8.36577 12.8193C8.35526 12.8517 8.35317 12.8861 8.35968 12.9195C8.36619 12.9529 8.3811 12.984 8.403 13.01L9.779 14.642C9.813 14.682 9.829 14.734 9.826 14.786L9.672 16.916C9.66966 16.9499 9.67598 16.9838 9.69038 17.0146C9.70477 17.0453 9.72676 17.0719 9.75428 17.0918C9.78179 17.1117 9.81392 17.1243 9.84764 17.1284C9.88135 17.1324 9.91555 17.1278 9.947 17.115L11.925 16.311L12 21ZM5 4L7.115 7.664C8.19526 6.82878 9.47215 6.28538 10.823 6.086L9.62 4H5Z"
                  fill="#DBDBDB"
                />
                <path
                  d="M11.925 16.3101L12 21.0001C13.1348 21.0018 14.2529 20.7265 15.257 20.1981L11.925 16.3111V16.3101Z"
                  fill="#DBDBDB"
                />
              </svg>

              <h4 className="font-medium text-base text-white">
                KINDLE Score Rankings
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
