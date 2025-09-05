import sunIcon from './assets/sun-icon.svg';
import tiktokBg from './assets/tiktok-bg.svg';
import tiktokIcon from './assets/tiktok-icon.svg';
import twitterBg from './assets/twitter-bg.svg';
import twitterIcon from './assets/twitter-icon.svg';

export default function FollowUs() {
  const handleTikTokFollow = () => {
    window.open(
      'https://www.tiktok.com/@distant',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleTwitterFollow = () => {
    window.open(
      'https://twitter.com/distantapp',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="mx-auto w-full p-4 sm:p-6">
      {/* Header */}
      <div className="mb-12 flex items-center justify-center gap-2 sm:mb-16">
        <img alt="" className="h-6 w-6 flex-shrink-0" src={sunIcon} />
        <h3 className="bg-gradient-to-r from-[#6D7077] via-[#FEFEFE] to-[#3C4041] bg-clip-text font-semibold text-transparent text-xl">
          Follow Us
        </h3>
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
                  @distant
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <div className="relative">
              <button
                className="flex items-center justify-center gap-2 rounded-[10px] border border-[#B8B8B8]/50 bg-transparent px-6 py-3 transition-colors hover:border-white/20 hover:bg-white/5 active:scale-95"
                onClick={handleTikTokFollow}
                type="button"
              >
                <span className="font-normal text-sm text-white">Follow</span>
              </button>
              {/* Subtle glow effect */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[10px] opacity-20 blur-sm"
                style={{
                  background:
                    'linear-gradient(134deg, rgba(255, 255, 255, 0.1) 34%, rgba(255, 255, 255, 0.02) 99%)',
                }}
              />
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile, shown on desktop */}
          <div className="hidden min-h-[120px] w-px self-stretch bg-[#2D3338]/50 sm:block" />

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
                  @distant
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <div className="relative">
              <button
                className="flex items-center justify-center gap-2 rounded-[10px] border border-[#B8B8B8]/50 bg-transparent px-6 py-3 transition-colors hover:border-white/20 hover:bg-white/5 active:scale-95"
                onClick={handleTwitterFollow}
                type="button"
              >
                <span className="font-normal text-sm text-white">Follow</span>
              </button>
              {/* Subtle glow effect */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[10px] opacity-20 blur-sm"
                style={{
                  background:
                    'linear-gradient(134deg, rgba(255, 255, 255, 0.1) 34%, rgba(255, 255, 255, 0.02) 99%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full border-[#2D3338]/50 border-t" />
      </div>
    </div>
  );
}
