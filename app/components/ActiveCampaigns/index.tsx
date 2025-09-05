export default function ActiveCampaigns() {
  return (
    <div className="rounded-2xl border border-[#2D3338] bg-gradient-to-br from-[#20202D] to-[#101013] p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <svg
            className="stroke-current"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Gift Icon</title>
            <path
              d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
              strokeWidth="1.4"
            />
            <path
              d="M9 5H7C5.89543 5 5 5.89543 5 7V9M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 4V6C15 7.10457 14.1046 8 13 8H11C9.89543 8 9 7.10457 9 6V5ZM9 5V9M5 9V17C5 18.1046 5.89543 19 7 19H9M9 19V15M9 19H17C18.1046 19 19 18.1046 19 17V15M9 15H19V9C19 7.89543 18.1046 7 17 7H15M9 15V9M15 7V9M9 9H15"
              strokeWidth="1.4"
            />
          </svg>
          <h3 className="bg-gradient-to-r from-[#6D7077] via-[#FEFEFE] to-[#3C4041] bg-clip-text font-medium text-transparent text-xl">
            Active Campaigns
          </h3>
        </div>
        <div className="relative">
          <a
            className="border-[#505050] border-b pb-0.5 text-[#AEAEAE] text-xs hover:text-white"
            href="/campaigns"
          >
            View All
          </a>
        </div>
      </div>

      <div className="space-y-2.5">
        {/* 0G Campaign */}
        <div className="rounded-2xl border border-[#2D3338] bg-gradient-to-br from-[#20202D] to-[#101013] px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-[#575655] bg-[#4C4C4C]">
              {/* 0G Logo placeholder */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 font-bold text-xs">
                0G
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm text-white">0G Campaign</h4>
              <p className="text-[#878788] text-xs">Pool: 30,000 Tokens</p>
            </div>
            <div className="border-[#2D3338] border-l pl-3">
              <div className="text-right">
                <span className="bg-gradient-to-r from-[#FD2B70] to-[#FF89B0] bg-clip-text font-normal text-transparent text-xs">
                  Available
                </span>
                <p className="text-right font-light text-[#888888] text-xs">
                  Remaining 5 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infinity Ground Campaign */}
        <div className="rounded-2xl border border-[#2D3338] bg-gradient-to-br from-[#20202D] to-[#101013] px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                className="text-white"
                fill="none"
                height="19"
                viewBox="0 0 19 19"
                width="19"
              >
                <title>Infinity Symbol</title>
                <path d="M0 4.25H12.75V6.37H0V4.25Z" fill="currentColor" />
                <path d="M6.37 8.5H19.12V10.62H6.37V8.5Z" fill="currentColor" />
                <path d="M0 0H19.12V2.12H0V0Z" fill="currentColor" />
                <path d="M0 12.75H19.12V14.87H0V12.75Z" fill="currentColor" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm text-white">
                Infinity Ground
              </h4>
              <p className="text-[#878788] text-xs">Pool: 50,000 Tokens</p>
            </div>
            <div className="border-[#2D3338] border-l pl-3">
              <div className="text-right">
                <span className="bg-gradient-to-r from-[#2BDACE] to-[#C4FFFB] bg-clip-text font-normal text-transparent text-xs">
                  Participating
                </span>
                <div className="mt-1 flex items-center gap-1">
                  <div className="relative rounded border border-[#B8B8B8]/50 bg-gradient-to-b from-[#D9D9D9] to-transparent px-2 py-1">
                    <span className="text-white text-xs">#8</span>
                    <svg
                      className="ml-1 inline stroke-white"
                      height="10"
                      strokeWidth="1.4"
                      viewBox="0 0 5 10"
                      width="5"
                    >
                      <title>Dropdown Arrow</title>
                      <path d="M1 1L4 5L1 9" fill="none" />
                    </svg>
                    {/* Shimmer effect */}
                    <div
                      className="-skew-x-12 absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{ filter: 'blur(4px)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
