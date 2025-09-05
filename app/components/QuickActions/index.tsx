import diamondIcon from './assets/diamond-icon.svg';
import usersIcon from './assets/users-icon.svg';

export default function QuickActions() {
  return (
    <div className="w-full">
      {/* Header with diamond icon */}
      <div className="mb-7 flex items-center gap-1">
        <img alt="" className="h-6 w-6 flex-shrink-0" src={diamondIcon} />
        <h3 className="bg-gradient-to-r from-[#6D7077] via-[#FEFEFE] to-[#3C4041] bg-clip-text font-semibold text-transparent text-xl">
          Quick Actions
        </h3>
      </div>

      {/* Main content card */}
      <div className="rounded-2xl border border-[#2D3338] bg-gradient-to-b from-[#0F1118] to-[#181C2A] p-4">
        <div className="space-y-5">
          {/* Invite Friends Section */}
          <div className="w-full sm:w-auto">
            <div className="mb-5 flex items-center gap-1.5">
              <img alt="" className="h-5 w-5 flex-shrink-0" src={usersIcon} />
              <div>
                <h4 className="font-medium text-sm text-white">
                  Invite Friends
                </h4>
                <p className="text-[#676767] text-xs">Get 10% score rewards</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#2D3338]" />

          {/* Invite Link Section */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 lg:gap-12">
            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="text-[#E8E8E8] text-xs">Invite Link</div>
              <div className="break-all text-[#858585] text-xs">
                https://distant.app/invite/10000
              </div>
            </div>

            <div className="relative flex-shrink-0">
              <button
                className="rounded border border-gray-500/50 bg-gradient-to-b from-[#D9D9D9] to-transparent px-3 py-1.5 text-sm text-white shadow-[0px_10px_25px_0px_rgba(63,107,255,0.57),0px_9px_10.4px_0px_rgba(243,120,120,0.25)] sm:px-1 sm:py-0.5"
                style={{ filter: 'blur(0.5px)' }}
                type="button"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#2D3338]" />

          {/* Share Button */}
          <div className="relative">
            <button
              className="w-full rounded-[10px] border border-gray-500/50 py-3 text-sm text-white shadow-[0px_10px_25px_0px_rgba(63,107,255,0.57),0px_9px_10.4px_0px_rgba(243,120,120,0.25)] transition-colors hover:bg-white/5"
              style={{ filter: 'blur(0.5px)' }}
              type="button"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
