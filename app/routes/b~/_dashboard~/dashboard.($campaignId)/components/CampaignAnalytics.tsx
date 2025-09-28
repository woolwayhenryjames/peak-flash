import GlowContainer from "~/components/GlowContainer";
import { formatNumber, getRemainingDays } from "~/lib/utils";
import type { Route } from "../+types/_b_dashboard";

export default function CampaignAnalytics({
  campaign,
}: {
  campaign: Route.ComponentProps["loaderData"]["campaign"];
}) {
  const { status, daysLeftText } = getRemainingDays(
    campaign?.startDate ?? new Date(),
    campaign?.endDate ?? new Date()
  );
  return (
    <div className="rounded-xl border border-[#2D3338] pt-6.5 pl-6.5">
      <div className="flex flex-col gap-20 rounded-xl border border-[#2D3338] p-6">
        {/* Campaign Header */}
        <div className="flex justify-between">
          <div className="space-y-3">
            {/* Campaign Logo and Name */}
            <div className="flex gap-2">
              {campaign?.image && (
                <img
                  alt={`${campaign.name} logo`}
                  className="h-5 w-5"
                  src={campaign.image}
                />
              )}
              <h4 className="font-medium text-[#EFEFEF] text-xl">
                {campaign?.name}
              </h4>
            </div>

            {/* Campaign Description */}
            <p className="text-[#D8D8D8] text-xs">{campaign?.description}</p>
          </div>

          {/* Time and Status */}
          <div className="flex h-fit items-center gap-2">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <title>Clock icon</title>
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="9"
                stroke="#9D9D9D"
                strokeWidth="1.4"
              />
              <path
                d="M12 7v5l3 3"
                stroke="#9D9D9D"
                strokeLinecap="round"
                strokeWidth="1.4"
              />
            </svg>
            <span className="text-[#9D9D9D] text-xs">{daysLeftText}</span>
            <div className="h-1 w-1 rounded-full bg-[#9D9D9D]" />
            <span className="text-[#9D9D9D] text-sm">{status}</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex items-center justify-evenly gap-6">
          {/* Prize Pool */}
          <div className="flex flex-col gap-2">
            <div className="bg-gradient-to-r from-[#B871FF] to-[#2CFFBC] bg-clip-text font-medium text-transparent text-xl">
              $&nbsp;{formatNumber(campaign?.poolSize)}&nbsp;
              {campaign?.poolUnit && (
                <span className="font-light text-xs">
                  in {campaign.poolUnit}
                </span>
              )}
            </div>
            <div className="font-light text-[#A7A7A7] text-xs">Prize Pool</div>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-white/10" />

          {/* Participants */}
          <div className="flex flex-col gap-2">
            <div className="bg-gradient-to-r from-[#B871FF] to-[#2CFFBC] bg-clip-text font-medium text-transparent text-xl">
              {formatNumber(campaign?._count.campaignUsers)}
            </div>
            <div className="font-light text-[#A7A7A7] text-xs">
              Participants
            </div>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-white/10" />

          {/* Status */}
          <div className="flex flex-col gap-2">
            <div className="bg-gradient-to-r from-[#BE7DFF] to-[#55FCFF] bg-clip-text font-medium text-transparent text-xl">
              {status}
            </div>
            <div className="font-light text-[#A7A7A7] text-xs">Status</div>
          </div>
        </div>
        <a
          className="w-1/2 self-end"
          href={`/b/campaigns/${campaign?.id}`}
          type="button"
        >
          <GlowContainer>Details</GlowContainer>
        </a>
      </div>
    </div>
  );
}
