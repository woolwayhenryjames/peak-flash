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
    <div className="w-[425px] p-6">
      {/* Header */}
      <div className="mb-[77px] flex items-center gap-1">
        <img alt="" className="h-6 w-6" src={sunIcon} />
        <h3 className="bg-gradient-to-r from-[#6D7077] via-[#FEFEFE] to-[#3C4041] bg-clip-text font-semibold text-transparent text-xl">
          Follow Us
        </h3>
      </div>

      {/* Social Links Container */}
      <div className="flex flex-wrap gap-6">
        {/* Divider Line */}
        <div className="h-0 w-[350px] border-[#2D3338] border-t opacity-50" />

        {/* TikTok Section */}
        <div className="flex w-[121px] flex-col gap-9">
          <div className="flex flex-col gap-[18px]">
            {/* TikTok Icon and Info */}
            <div className="relative h-8 w-8">
              <img alt="" className="h-8 w-8" src={tiktokBg} />
              <img
                alt=""
                className="absolute top-[7.33px] left-[8.55px] h-[17.53px] w-[15.18px]"
                src={tiktokIcon}
              />
            </div>
            <div className="flex flex-col gap-[11px]">
              <div className="font-normal text-sm text-white">
                Follow on TikTok
              </div>
              <div className="font-normal text-[#A7A7A7] text-xs">@distant</div>
            </div>
          </div>

          {/* Follow Button */}
          <div className="relative h-[45px] w-[119px]">
            <button
              className="flex h-[45px] w-[119px] items-center justify-center gap-[10px] rounded-[10px] border border-gradient-to-b bg-transparent from-[#B8B8B8] to-[#4E4E4E] px-[31px] py-[13px] transition-colors hover:bg-white/5"
              onClick={handleTikTokFollow}
              type="button"
            >
              <span className="font-normal text-sm text-white">Follow</span>
            </button>
            {/* Gradient overlay effect */}
            <div
              className="pointer-events-none absolute top-[1.29px] left-[10px] h-[6.43px] w-[102px] opacity-75 blur-sm"
              style={{
                background:
                  'linear-gradient(134deg, rgba(255, 255, 255, 1) 34%, rgba(255, 255, 255, 0.14) 99%)',
                boxShadow:
                  '0px 10px 25px 0px rgba(63, 107, 255, 0.57), 0px 9px 10.399999618530273px 0px rgba(243, 120, 120, 0.25)',
              }}
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-[134px] w-0 border-[#2D3338] border-l opacity-50" />

        {/* Twitter Section */}
        <div className="flex w-[119px] flex-col gap-9">
          <div className="flex flex-col gap-[18px]">
            {/* Twitter Icon and Info */}
            <div className="relative h-8 w-8">
              <img alt="" className="h-8 w-8" src={twitterBg} />
              <img
                alt=""
                className="absolute top-[7.06px] left-[6.44px] h-[17.89px] w-[19.11px]"
                src={twitterIcon}
              />
            </div>
            <div className="flex flex-col gap-[11px]">
              <div className="font-normal text-sm text-white">
                Follow on Twitter
              </div>
              <div className="font-normal text-[#A7A7A7] text-xs">@distant</div>
            </div>
          </div>

          {/* Follow Button */}
          <div className="relative h-[45px] w-[119px]">
            <button
              className="flex h-[45px] w-[119px] items-center justify-center gap-[10px] rounded-[10px] border border-gradient-to-b bg-transparent from-[#B8B8B8] to-[#4E4E4E] px-[31px] py-[13px] transition-colors hover:bg-white/5"
              onClick={handleTwitterFollow}
              type="button"
            >
              <span className="font-normal text-sm text-white">Follow</span>
            </button>
            {/* Gradient overlay effect */}
            <div
              className="pointer-events-none absolute top-[1.29px] left-[10px] h-[6.43px] w-[102px] opacity-75 blur-sm"
              style={{
                background:
                  'linear-gradient(134deg, rgba(255, 255, 255, 1) 34%, rgba(255, 255, 255, 0.14) 99%)',
                boxShadow:
                  '0px 10px 25px 0px rgba(63, 107, 255, 0.57), 0px 9px 10.399999618530273px 0px rgba(243, 120, 120, 0.25)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
