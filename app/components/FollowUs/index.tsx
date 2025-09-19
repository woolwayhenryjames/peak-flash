import GlowContainer from '../GlowContainer';
import tiktokIcon from './assets/tiktok.svg';
import twitterIcon from './assets/x.svg';

export default function FollowUs() {
  return (
    <div>
      {/* Horizontal Divider */}
      <div className="w-full border-[#2D3338]/50 border-t" />

      {/* Social Platforms */}
      <div className="flex gap-8">
        {/* TikTok Section */}
        <div className="mx-auto flex max-w-[140px] flex-1 flex-col items-center gap-6 pt-3">
          <div className="flex flex-col gap-4">
            <img alt="" className="size-8" src={tiktokIcon} />
            <div className="space-y-2">
              <div className="font-normal text-sm text-white">
                Follow on TikTok
              </div>
              <div className="font-normal text-[#A7A7A7] text-xs">
                @takeapeakai
              </div>
            </div>
          </div>

          {/* Follow Button */}
          <a
            className="w-full"
            href="https://www.tiktok.com/@takeapeakai"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GlowContainer>Follow</GlowContainer>
          </a>
        </div>

        {/* Vertical Divider - Hidden on mobile, shown on desktop */}
        <div className="w-px self-stretch bg-[#2D3338]/50" />

        {/* Twitter Section */}
        <div className="mx-auto flex max-w-[140px] flex-1 flex-col items-center gap-6 pt-3">
          <div className="flex flex-col gap-4">
            <img alt="" className="size-8" src={twitterIcon} />
            <div className="space-y-2">
              <div className="font-normal text-sm text-white">
                Follow on Twitter
              </div>
              <div className="font-normal text-[#A7A7A7] text-xs">
                @TakeAPeakAI
              </div>
            </div>
          </div>

          {/* Follow Button */}
          <a
            className="w-full"
            href="https://twitter.com/TakeAPeakAI"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GlowContainer>Follow</GlowContainer>
          </a>
        </div>
      </div>
    </div>
  );
}
