import type { Campaign, CampaignUser } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Link, useFetcher } from 'react-router';

const formatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  compactDisplay: 'short',
});

export default function InviteeCampaigns({
  userId,
  inviter,
}: {
  userId: string;
  inviter: { campaignUsers: CampaignUser[] };
}) {
  const [showAll, setShowAll] = useState(false);
  const fetcher = useFetcher<{
    campaignUsers: Array<CampaignUser & { campaign: Campaign }>;
  }>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: only want to run on userId change
  useEffect(() => {
    fetcher.load(`/api/getCampainUser/${userId}`);
  }, [userId]);

  if (fetcher.state === 'loading' || fetcher.state === 'submitting') {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-400">Loading campaigns...</div>
      </div>
    );
  }

  const campaignUsers = fetcher.data?.campaignUsers || [];

  if (campaignUsers.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-400">No campaigns found for this user.</div>
      </div>
    );
  }
  const displayedCampaigns = showAll
    ? campaignUsers
    : campaignUsers.slice(0, 3);

  return (
    <div className="space-y-3">
      {displayedCampaigns.map((cu) => (
        <Link
          className="flex flex-col gap-5 p-4"
          key={cu.id}
          to={`/campaigns/${cu.campaignId}`}
        >
          {/* Campaign Title */}
          <h3 className="font-medium text-[#F8F8F8] text-base leading-tight tracking-wide underline">
            {cu.campaign.name}
          </h3>

          {/* Stats Container */}
          <div className="relative">
            {/* Main Stats Row */}
            <div className="flex items-center justify-between gap-6 px-6 py-2">
              {/* Spark Points */}
              <div className="flex flex-col gap-2">
                <span className="bg-gradient-to-r from-[#E29FF0] via-[#FDCAB4] to-[#FDCAB4] bg-clip-text font-medium text-transparent text-xl leading-tight">
                  {formatter.format(cu.score)}
                </span>
                <span className="font-light text-[#A7A7A7] text-xs leading-tight">
                  Spark Point
                </span>
              </div>

              {/* Invite Reward */}
              <div className="flex flex-col gap-2">
                <span className="bg-gradient-to-r from-[#E29FF0] via-[#FDCAB4] to-[#FDCAB4] bg-clip-text font-medium text-transparent text-xl leading-tight">
                  {inviter.campaignUsers.some(
                    (iCU) => iCU.campaignId === cu.campaignId
                  )
                    ? formatter.format(cu.score / 10)
                    : 0}
                </span>
                <span className="font-light text-[#A7A7A7] text-xs leading-tight">
                  Invite Reward
                </span>
              </div>
            </div>

            {/* Divider Lines */}
            <div className="-translate-x-0.5 absolute top-0 left-1/2 h-full w-px bg-[#5F5F5F]/80" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-[#5F5F5F]/80" />
          </div>
        </Link>
      ))}
      {campaignUsers.length > 3 && (
        <button
          className="w-full text-center text-[#ababab] text-sm underline"
          onClick={() => setShowAll(!showAll)}
          type="button"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      )}
    </div>
  );
}
