import type { Campaign } from '@prisma/client';
import { Link } from 'react-router';
import GlowContainer from '../GlowContainer';

interface CampaignWithParticipation
  extends Omit<Campaign, 'createdAt' | 'updatedAt'> {
  isParticipating: boolean;
  userRank?: number | null;
}

interface ActiveCampaignsProps {
  campaigns?: CampaignWithParticipation[];
}

export default function ActiveCampaigns({
  campaigns = [],
}: ActiveCampaignsProps) {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>gift</title>
            <path
              d="M12.1746 21.6538V7.69012M10.5496 6.85244C10.7224 6.89123 10.9046 6.84368 11.0291 6.71922C11.1535 6.59476 11.201 6.41253 11.1623 6.23973C11.0071 5.60595 10.4356 3.4837 9.84873 2.89684C9.11757 2.16568 7.92757 2.16263 7.20002 2.89017C6.47253 3.61767 6.47547 4.80767 7.20669 5.53888C7.80316 6.13535 9.91581 6.6973 10.5496 6.85244ZM12.3242 6.23968C12.2854 6.41255 12.3329 6.59471 12.4574 6.71917C12.5818 6.84363 12.7641 6.89111 12.9369 6.85239C13.5706 6.69723 15.6929 6.12569 16.2797 5.53883C17.0109 4.80767 17.014 3.61767 16.2864 2.89012C15.5589 2.16263 14.3689 2.16557 13.6377 2.89679C13.0412 3.49326 12.4793 5.60591 12.3242 6.23968ZM3.09821 12.5774H20.9018C21.2874 12.5774 21.6 12.2648 21.6 11.8792V8.38831C21.6 8.00271 21.2874 7.69012 20.9018 7.69012H3.09821C2.71261 7.69012 2.40002 8.00271 2.40002 8.38831V11.8792C2.40002 12.2648 2.71261 12.5774 3.09821 12.5774ZM19.8546 12.5774V20.9556C19.8546 21.3412 19.542 21.6538 19.1564 21.6538H4.84366C4.45807 21.6538 4.14548 21.3412 4.14548 20.9556V12.5774H19.8546Z"
              stroke="url(#paint0_linear_153_1105)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_153_1105"
                x1="-8.50037"
                x2="38"
                y1="11.9998"
                y2="12"
              >
                <stop stopColor="#6D7077" />
                <stop offset="0.495192" stopColor="#FEFEFE" />
                <stop offset="1" stopColor="#3C4041" />
              </linearGradient>
            </defs>
          </svg>

          <h3 className="white-gradient-text font-medium text-xl">
            Active Campaigns
          </h3>
        </div>
        <div className="relative">
          <a
            className="border-[#505050] border-b pb-0.5 text-[#AEAEAE] text-xs hover:text-white"
            href="/ascent"
          >
            View All
          </a>
        </div>
      </div>

      <div className="space-y-2.5">
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
                className="rounded-2xl border border-[#2D3338] bg-gradient-to-br from-[#20202D] to-[#101013] px-4 py-2.5"
                key={campaign.id}
                to={`/campaigns/${campaign.id}`}
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
                    <p className="text-[#878788] text-xs">
                      Pool: {campaign.poolSize.toLocaleString()} Tokens
                    </p>
                  </div>
                  <div className="w-[40%] border-[#2D3338] border-l pl-3">
                    <div className="text-right">
                      <span
                        className={`bg-gradient-to-r ${status.gradient} bg-clip-text font-normal text-transparent text-xs`}
                      >
                        {status.text}
                      </span>
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
    </>
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
