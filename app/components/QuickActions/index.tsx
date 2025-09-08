import GlowContainer from '../GlowContainer';
import diamondIcon from './assets/diamond-icon.svg';
import usersIcon from './assets/users-icon.svg';

export default function QuickActions() {
  return (
    <div className="mt-18 w-full">
      {/* Header with diamond icon */}
      <div className="mb-8 flex items-center gap-1">
        <img alt="" className="h-6 w-6 flex-shrink-0" src={diamondIcon} />
        <h3 className="white-gradient-text font-semibold text-xl">
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
          <div className="flex items-center gap-4">
            <div className="w-full space-y-1.5">
              <div className="text-[#E8E8E8] text-xs">Invite Link</div>
              <div className="break-all text-[#858585] text-xs">
                https://distant.app/invite/10000
              </div>
            </div>

            <GlowContainer
              className="w-fit rounded-sm px-3 py-1 text-sm"
              noShimmer
            >
              Copy
            </GlowContainer>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#2D3338]" />

          {/* Share Button */}
          <GlowContainer>Share</GlowContainer>
        </div>
      </div>
    </div>
  );
}
