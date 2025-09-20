import { useState } from 'react';
import { redirect } from 'react-router';
import CampaignList from '~/components/CampaignList';
import { getDbUser } from '~/services/auth.server';
import { getCampaignsForUser } from '~/services/campaign.server';
import { getUserKindleRank } from '~/services/user-ranking.server';
import type { Route } from './+types/_profile';
import starIcon from './assets/star-icon.svg';

export function meta({ data }: Route.MetaArgs) {
  const user = data?.user;
  const campaigns = data?.campaigns || [];
  const totalVideos = data?.totalVideos || 0;
  const userRank = user?.kindleRank || 'N/A';
  const userScore = user?.kindleScore || 0;
  const username = 'User';

  return [
    { title: `${username}'s Profile - Peak AI` },
    {
      name: 'description',
      content: `View ${username}'s Peak AI profile. Ranked #${userRank} with ${userScore} Kindle Score points across ${campaigns.length} campaigns and ${totalVideos} videos submitted.`,
    },
    {
      name: 'keywords',
      content:
        'Peak AI profile, user stats, Kindle Score, campaign history, leaderboard ranking, video submissions, crypto rewards',
    },
    { name: 'robots', content: 'noindex, nofollow' }, // Private user profiles should not be indexed
    { name: 'author', content: 'Peak AI' },

    // Open Graph
    { property: 'og:title', content: `${username}'s Peak AI Profile` },
    {
      property: 'og:description',
      content: `Peak AI user profile for ${username}. Ranked #${userRank} with ${userScore} points across ${campaigns.length} campaigns.`,
    },
    { property: 'og:type', content: 'profile' },
    { property: 'og:site_name', content: 'Peak AI' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: `${username} on Peak AI` },
    {
      name: 'twitter:description',
      content: `Check out ${username}'s performance on Peak AI - ${userScore} Kindle Score points and ranked #${userRank}!`,
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect('/login');
  }

  // Get user with kindle rank and their campaigns
  const [kindleRank, userCampaigns] = await Promise.all([
    getUserKindleRank(user.value.id),
    getCampaignsForUser(
      user.value,
      {
        id: { in: user.value.campaignUsers.map((cu) => cu.campaignId) },
      },
      1,
      100
    ),
  ]);

  return {
    user: { ...user.value, kindleRank },
    campaigns: userCampaigns.campaigns.map((campaign) => {
      const campaignUser = user.value.campaignUsers.find(
        (cu) => cu.campaignId === campaign.id
      );
      return {
        ...campaign,
        videoCount: campaignUser?.videoCount || 0,
      };
    }),
    totalVideos: user.value.campaignUsers.reduce(
      (sum, cu) => sum + cu.videoCount,
      0
    ), // Total videos submitted
  };
}

const showCampaignsLimit = 3;

export default function Profile({
  loaderData: { user, campaigns, totalVideos },
}: Route.ComponentProps) {
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);
  const displayedCampaigns = showAllCampaigns
    ? campaigns
    : campaigns.slice(0, showCampaignsLimit);
  return (
    <div className="flex flex-col gap-6 p-4 md:px-18">
      {/* Header Profile Info */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          {/* Avatar */}
          <div className="relative h-22 w-22">
            <div className="h-full w-full overflow-hidden rounded-full bg-gray-700">
              {user.image ? (
                <img
                  alt={user.name}
                  className="h-full w-full object-cover"
                  src={user.image}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#8080DA] to-[#9595FF] font-bold text-2xl text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* User Info */}
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-lg text-white">{user.name}</h1>
            <p className="font-normal text-sm text-white/80">@{user.email}</p>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="rounded-2xl border border-white/10 bg-linear-124 from-[#292929]/60 to-[#191616]/60 px-3 py-4 pt-1">
        {/* Logo placeholder */}
        <svg
          className="h-8 w-12"
          fill="none"
          viewBox="0 0 48 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>master card</title>
          <circle cx="25.0001" cy="15" fill="#681BF7" r="11.25" />
          <circle cx="11.25" cy="15" fill="#00EBC4" opacity="0.75" r="11.25" />
        </svg>

        {/* Score Stats */}
        <div className="mb-5 flex items-center justify-around">
          <div className="flex flex-col items-center gap-1">
            <span className="font-semibold text-2xl text-white">
              {user.kindleScore != null
                ? Math.round(user.kindleScore)
                : 'Grading'}
            </span>
            <span className="font-light text-[#C0C0C0] text-xs">
              KINDLE Score
            </span>
          </div>

          <div className="h-14 w-px bg-[#5D5D5D]" />

          <div className="flex flex-col items-center gap-1">
            <span className="font-semibold text-2xl text-white">
              {user.kindleScore != null ? `#${user.kindleRank}` : 'N/A'}
            </span>
            <span className="font-light text-[#C0C0C0] text-xs">
              Global Rank
            </span>
          </div>
        </div>
      </div>
      {/* Campaign and Video Stats */}
      <div className="flex gap-3">
        <div className="flex flex-1 flex-col gap-2 rounded-md border border-[#9c9c9c]/20 p-3">
          <span className="bg-linear-to-r from-[#6CFBD3] from-[24%] to-[#A194F0] to-[95%] bg-clip-text font-medium text-transparent text-xl">
            {campaigns.length}
          </span>
          <span className="font-light text-[#A7A7A7] text-xs">Campaigns</span>
        </div>

        <div className="flex flex-1 flex-col gap-2 rounded-md border border-[#9c9c9c]/20 p-3">
          <span className="bg-linear-to-r from-[#6CFBD3] from-[24%] to-[#A194F0] to-[95%] bg-clip-text font-medium text-transparent text-xl">
            {totalVideos}
          </span>
          <span className="font-light text-[#A7A7A7] text-xs">
            Posted Videos
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 h-px w-75 bg-gray-600/50" />

      {/* My Campaigns Section */}
      <div className="flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img alt="Star icon" className="h-6 w-6" src={starIcon} />
            <h2 className="font-semibold text-white text-xl">My Campaigns</h2>
          </div>
        </div>

        <CampaignList campaigns={displayedCampaigns} type="spark-points" />
        {campaigns.length > showCampaignsLimit && (
          <button
            className="mx-auto text-[#ababab] text-sm underline"
            onClick={() => setShowAllCampaigns(!showAllCampaigns)}
            type="button"
          >
            {showAllCampaigns ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>
    </div>
  );
}
