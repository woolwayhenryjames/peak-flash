import type { Campaign } from '@prisma/client';
import { Link } from 'react-router';
import GlowContainer from '../GlowContainer';

interface CampaignWithParticipation
  extends Omit<Campaign, 'createdAt' | 'updatedAt'> {
  isParticipating: boolean;
  userRank?: number | null;
  userPoints?: number;
  videoCount?: number;
}

interface CampaignListProps {
  campaigns?: CampaignWithParticipation[];
  type?: 'default' | 'spark-points';
}

const formatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  compactDisplay: 'short',
});

export default function CampaignList({
  campaigns = [],
  type = 'default',
}: CampaignListProps) {
  return (
    <div className="flex flex-col justify-center gap-2.5 md:flex-row md:flex-wrap md:gap-4">
      {campaigns.length === 0 ? (
        <div className="rounded-2xl border border-[#2D3338] bg-gradient-to-br from-[#20202D] to-[#101013] px-4 py-6 text-center">
          <p className="text-[#878788] text-sm">
            No active campaigns available
          </p>
        </div>
      ) : (
        campaigns.map((campaign) => {
          const status = getStatusDisplay(campaign);

          return (
            <Link
              className="block flex-1 rounded-2xl border border-[#2D3338] bg-gradient-to-br from-[#20202D] to-[#101013] px-4 py-2.5"
              key={campaign.id}
              to={`/campaigns/${campaign.id}`}
              viewTransition
            >
              <div className="flex items-center gap-3">
                <div className="w-[60%]">
                  <div className="mb-1 flex items-center gap-2">
                    {campaign.image ? (
                      <img
                        alt={campaign.name}
                        className="size-5 object-cover"
                        src={campaign.image}
                      />
                    ) : (
                      <div className="size-5 rounded-lg bg-gradient-to-br from-gray-500 to-gray-700 text-center font-bold text-xs">
                        {campaign.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                    <h4 className="font-medium text-sm text-white">
                      {campaign.name}
                    </h4>
                  </div>
                  {type === 'default' ? (
                    <p className="text-[#878788] text-xs">
                      Pool: {formatter.format(campaign.poolSize)} Tokens
                    </p>
                  ) : (
                    <p className="text-[#878788] text-xs">
                      <span>
                        {formatter.format(campaign.videoCount || 0)} videos
                      </span>
                      {' • '}
                      <span>
                        Spark Points:{' '}
                        {formatter.format(campaign.userPoints || 0)}
                      </span>
                    </p>
                  )}
                </div>
                <div className="w-[40%] border-[#2D3338] border-l pl-3">
                  <div className="text-right">
                    {type === 'default' ? (
                      <span
                        className={`bg-gradient-to-r ${status.gradient} bg-clip-text font-normal text-transparent text-xs`}
                      >
                        {status.text}
                      </span>
                    ) : (
                      <p className="text-[#878788] text-xs">
                        {formatter.format(campaign.poolSize)} Tokens
                      </p>
                    )}
                    <div className="flex flex-col items-end">
                      {campaign.isParticipating && campaign.userRank ? (
                        <GlowContainer className="w-fit rounded-md py-1">
                          <span className="text-white text-xs">
                            #{campaign.userRank}&nbsp;&gt;
                          </span>
                        </GlowContainer>
                      ) : (
                        <p className="text-right font-light text-[#888888] text-xs">
                          {calculateRemainingDays(campaign.endDate)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

function calculateRemainingDays(endDate: string | Date): string {
  const end = new Date(endDate);
  const now = new Date();
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) {
    return 'Ended';
  }
  if (diffDays === 1) {
    return 'Remaining 1 day';
  }
  return `Remaining ${diffDays} days`;
}

function getStatusDisplay(campaign: CampaignWithParticipation) {
  if (!campaign.endDate || new Date(campaign.endDate) < new Date()) {
    return {
      text: 'Ended',
      gradient: 'from-[#878788] to-[#575655]',
    };
  }

  if (campaign.isParticipating) {
    return {
      text: 'Participating',
      gradient: 'from-[#2BDACE] to-[#C4FFFB]',
    };
  }

  return {
    text: 'Available',
    gradient: 'from-[#FD2B70] to-[#FF89B0]',
  };
}
