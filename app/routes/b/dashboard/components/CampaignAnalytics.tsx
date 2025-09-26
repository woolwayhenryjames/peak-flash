import GlowContainer from "~/components/GlowContainer";

export default function CampaignAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
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
              stroke-linejoin="round"
              stroke-width="2"
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
                <stop stop-color="#6D7077" />
                <stop offset="0.363695" stop-color="#FEFEFE" />
                <stop offset="1" stop-color="#3C4041" />
              </linearGradient>
            </defs>
          </svg>
          <h3 className="font-semibold text-white text-xl">
            Campaign Analytics
          </h3>
        </div>
        <div className="rounded-lg border border-[#707070] px-6 py-3">
          <div className="flex items-center gap-6">
            <span className="text-[#C2C2C2] text-base">Infinity Ground</span>
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
              <title>Dropdown arrow</title>
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Campaign Card */}
      <div className="rounded-xl border border-[#2D3338] pt-6.5 pl-6.5">
        <div className="flex flex-col gap-20 rounded-xl border border-[#2D3338] p-6">
          {/* Campaign Header */}
          <div className="flex justify-between">
            <div className="space-y-3">
              {/* Campaign Logo and Name */}
              <div className="flex gap-2">
                {/* Placeholder Logo */}
                <div className="flex h-5 w-5 items-center justify-center">
                  <svg fill="none" height="19" viewBox="0 0 19 19" width="19">
                    <title>Campaign logo</title>
                    <rect
                      fill="white"
                      height="6.37"
                      width="12.75"
                      x="0"
                      y="4.25"
                    />
                    <rect
                      fill="white"
                      height="6.37"
                      width="12.75"
                      x="6.37"
                      y="8.5"
                    />
                    <rect
                      fill="white"
                      height="6.37"
                      width="19.12"
                      x="0"
                      y="0"
                    />
                    <rect
                      fill="white"
                      height="6.37"
                      width="19.12"
                      x="0"
                      y="12.75"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-[#EFEFEF] text-xl">
                  Infinity Ground
                </h4>
              </div>

              {/* Campaign Description */}
              <p className="text-[#D8D8D8] text-xs">
                AI-Powered Web3 IDE Platform
              </p>
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
              <span className="text-[#9D9D9D] text-xs">1 days left</span>
              <div className="h-1 w-1 rounded-full bg-[#9D9D9D]" />
              <span className="text-[#9D9D9D] text-sm">Active</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-evenly gap-6">
            {/* Prize Pool */}
            <div className="flex flex-col gap-2">
              <div className="bg-gradient-to-r from-[#B871FF] to-[#2CFFBC] bg-clip-text font-medium text-transparent text-xl">
                50K
              </div>
              <div className="font-light text-[#A7A7A7] text-xs">
                Prize Pool
              </div>
            </div>

            {/* Divider */}
            <div className="h-16 w-px bg-white/10" />

            {/* Participants */}
            <div className="flex flex-col gap-2">
              <div className="bg-gradient-to-r from-[#B871FF] to-[#2CFFBC] bg-clip-text font-medium text-transparent text-xl">
                1.2K
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
                Active
              </div>
              <div className="font-light text-[#A7A7A7] text-xs">Status</div>
            </div>
          </div>
          <button className="w-1/2 self-end" type="button">
            <GlowContainer>Details</GlowContainer>
          </button>
        </div>
      </div>
    </div>
  );
}
