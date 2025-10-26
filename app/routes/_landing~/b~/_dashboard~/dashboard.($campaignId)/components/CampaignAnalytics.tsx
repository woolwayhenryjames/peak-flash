import { Link } from "react-router";
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
    <div className="flex-1 rounded-xl border border-[#2D3338] pt-6.5 pl-6.5">
      <div className="flex h-full flex-col gap-4 rounded-xl border border-[#2D3338] px-9 py-11 md:gap-12.5">
        {/* Campaign Header */}
        <div className="flex flex-col gap-4.5">
          <div className="flex items-center justify-start gap-2">
            {/* Campaign Logo */}
            {campaign?.image && (
              <img
                alt={`${campaign.name} logo`}
                className="size-5 md:size-9"
                src={campaign.image}
              />
            )}

            {/* Campaign Name */}
            <h4 className="font-normal text-[#CACACA] text-xl leading-6 md:text-4xl">
              {campaign?.name}
            </h4>
          </div>

          {/* Campaign Description */}
          <p className="text-[#cacaca] text-xs md:text-base">
            {campaign?.description}
          </p>

          {/* Time and Status */}
          <div className="flex items-center gap-1">
            {/* Clock and Days Left */}
            <div className="flex items-center gap-2">
              <svg
                className="size-3 text-white md:size-6"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Clock icon</title>
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M12 7v5l3 3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="text-[#9D9D9D] text-xs leading-6 md:text-base">
                {daysLeftText}
              </span>
            </div>

            {/* Status Badge */}
            <div className="ml-1 flex items-center gap-3">
              <div className="h-1 w-1 rounded-full bg-[#9D9D9D]" />
              <span className="text-[#9D9D9D] text-xs leading-6 md:text-base">
                {status}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around gap-3 md:gap-7">
          {/* Prize Pool */}
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="bg-gradient-to-r from-[#B871FF] to-[#2CFFBC] bg-clip-text text-center font-medium text-transparent text-xl leading-10 md:text-3xl">
              {formatNumber(campaign?.poolSize)}
              {campaign?.poolUnit && (
                <span className="font-light text-xs">
                  &nbsp;in {campaign.poolUnit}
                </span>
              )}
            </div>
            <div className="text-center font-light text-[#A7A7A7] text-xs leading-6 md:text-base">
              Prize Pool
            </div>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-white/10" />

          {/* Participants */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <div className="bg-gradient-to-r from-[#B871FF] to-[#2CFFBC] bg-clip-text text-center font-medium text-transparent text-xl leading-10 md:text-3xl">
              {formatNumber(campaign?._count.campaignUsers)}
            </div>
            <div className="text-center font-light text-[#A7A7A7] text-xs leading-6 md:text-base">
              Participants
            </div>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-white/10" />

          {/* Status */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <div className="bg-gradient-to-r from-[#BE7DFF] to-[#55FCFF] bg-clip-text text-center font-medium text-transparent text-xl leading-10 md:text-3xl">
              {status}
            </div>
            <div className="text-center font-light text-[#A7A7A7] text-xs leading-6 md:text-base">
              Status
            </div>
          </div>
        </div>

        {/* Details Button */}
        <Link
          className="my-auto w-full"
          to={`/b/campaigns/${campaign?.id}`}
          type="button"
        >
          <GlowContainer>Details</GlowContainer>
        </Link>
      </div>
    </div>
  );
}
