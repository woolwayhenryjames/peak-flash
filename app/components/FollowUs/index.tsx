import GlowContainer from '../GlowContainer';
import sunIcon from './assets/sun-icon.svg';
import tiktokBg from './assets/tiktok-bg.svg';
import tiktokIcon from './assets/tiktok-icon.svg';
import twitterBg from './assets/twitter-bg.svg';
import twitterIcon from './assets/twitter-icon.svg';

export default function FollowUs() {
  return (
    <div className="mt-18 w-full">
      {/* Header */}
      <div className="mb-7 flex items-center gap-1">
        <img alt="" className="h-6 w-6 flex-shrink-0" src={sunIcon} />
        <h3 className="white-gradient-text font-semibold text-xl">Follow Us</h3>
      </div>

      {/* Social Links Container */}
      <div className="space-y-8">
        {/* Horizontal Divider */}
        <div className="w-full border-[#2D3338]/50 border-t" />

        {/* Social Platforms */}
        <div className="flex gap-8">
          {/* TikTok Section */}
          <div className="mx-auto flex max-w-[140px] flex-1 flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              {/* TikTok Icon */}
              <div className="relative">
                <img alt="" className="h-8 w-8" src={tiktokBg} />
                <img
                  alt=""
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-4 w-4 transform"
                  src={tiktokIcon}
                />
              </div>
              <div className="space-y-2 text-center">
                <div className="font-normal text-sm text-white">
                  Follow on TikTok
                </div>
                <div className="font-normal text-[#A7A7A7] text-xs">
                  @peak.ai
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <a
              className="w-full"
              href="https://www.tiktok.com/@peak.ai"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GlowContainer>Follow</GlowContainer>
            </a>
          </div>

          {/* Vertical Divider - Hidden on mobile, shown on desktop */}
          <div className="min-h-[120px] w-px bg-[#2D3338]/50" />

          {/* Twitter Section */}
          <div className="mx-auto flex max-w-[140px] flex-1 flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              {/* Twitter Icon */}
              <div className="relative">
                <img alt="" className="h-8 w-8" src={twitterBg} />
                <img
                  alt=""
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-4 w-5 transform"
                  src={twitterIcon}
                />
              </div>
              <div className="space-y-2 text-center">
                <div className="font-normal text-sm text-white">
                  Follow on Twitter
                </div>
                <div className="font-normal text-[#A7A7A7] text-xs">
                  @peakboom_ai
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <a
              className="w-full"
              href="https://twitter.com/peakboom_ai"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GlowContainer>Follow</GlowContainer>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
