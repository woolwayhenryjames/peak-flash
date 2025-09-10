import { redirect } from 'react-router';
import CampaignList from '~/components/CampaignList';
import { getDbUser } from '~/services/auth.server';
import { getCampaignsForUser } from '~/services/campaign.server';
import { getUserKindleRank } from '~/services/user-ranking.server';
import type { Route } from './+types/index';
import starIcon from './assets/star-icon.svg';

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
      10
    ),
  ]);

  return {
    user: { ...user.value, kindleRank },
    campaigns: userCampaigns.campaigns,
    totalVideos: user.value.campaignUsers.reduce(
      (sum, cu) => sum + cu.baseScore / 10,
      0
    ), // Assuming 10 points per video
  };
}

export default function Profile({
  loaderData: { user, campaigns, totalVideos },
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-6 p-4">
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
              {(user.kindleScore / 10).toFixed(1)}
            </span>
            <span className="font-light text-[#C0C0C0] text-xs">
              KINDLE Score
            </span>
          </div>

          <div className="h-14 w-px bg-[#5D5D5D]" />

          <div className="flex flex-col items-center gap-1">
            <span className="font-semibold text-2xl text-white">
              #{user.kindleRank}
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
          <span className="bg-linear-[114deg] from-[#694AFF] from-[12.87%] to-[#69D7FF] to-[51.12%] bg-clip-text font-medium text-transparent text-xl">
            {campaigns.length}
          </span>
          <span className="font-light text-[#A7A7A7] text-xs">Campaigns</span>
        </div>

        <div className="flex flex-1 flex-col gap-2 rounded-md border border-[#9c9c9c]/20 p-3">
          <span className="bg-linear-[114deg] from-[#694AFF] from-[12.87%] to-[#69D7FF] to-[51.12%] bg-clip-text font-medium text-transparent text-xl">
            {totalVideos}
          </span>
          <span className="font-light text-[#A7A7A7] text-xs">
            Videos Posted
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 h-px w-75 bg-gray-600/50" />

      {/* My Campaigns Section */}
      <div className="flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img alt="Star icon" className="h-6 w-6" src={starIcon} />
            <h2 className="white-gradient-text font-semibold text-xl">
              My Campaigns
            </h2>
          </div>
        </div>

        <CampaignList campaigns={campaigns} type="spark-points" />
      </div>
    </div>
  );
}
