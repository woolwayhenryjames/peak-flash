import GlowContainer from '~/components/GlowContainer';
import { authClient } from '~/lib/auth-client';
import bg from './assets/bg.avif';
import peakLogo from './assets/peak-logo.svg';
import tiktokIcon from './assets/tiktok-icon.svg';
import FeatureItems from './components/FeatureItems';

export default function SignIn() {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: 'tiktok',
    });
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-8">
      {/* Header Section */}
      <div className="mb-16 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative z-0 mb-3 flex h-64 w-full max-w-xl flex-col items-center justify-center gap-3">
          <img
            alt="Background"
            className="-z-1 absolute inset-0 aspect-1280/832 w-full object-cover"
            src={bg}
          />
          <img alt="Peak AI Logo" className="h-16 w-16" src={peakLogo} />
          <h1 className="bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text font-poppins font-semibold text-[32px] text-transparent leading-[48px]">
            Peak.AI
          </h1>
        </div>

        {/* Subtitle */}
        <div className="space-y-1">
          <p className="bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text font-poppins text-lg text-transparent">
            Web3 TikTok Reword Platform
          </p>
          <p className="bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text font-poppins text-transparent text-xs">
            Create content,earn real tokens
          </p>
        </div>

        {/* Sign In Button */}
        <div className="mt-14 w-full">
          <button className="w-[50vw]" onClick={signIn} type="button">
            <GlowContainer>
              {/* TikTok Icon */}
              <img alt="TikTok" className="h-6 w-6" src={tiktokIcon} />
              <span className="font-poppins text-lg text-white">
                Sign in with TikTok
              </span>
            </GlowContainer>
          </button>

          <p className="mt-6 bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text text-center font-poppins text-transparent text-xs leading-6">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full">
        {/* Title with underline effect */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-medium font-poppins text-lg text-white">
            Why choose Peak.AI ?
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-1 bg-white shadow-[0_0_0.91px_0_rgba(255,255,255,1),0_0_1.82px_0_rgba(255,255,255,1),0_0_6.38px_0_rgba(255,255,255,1),0_0_12.75px_0_rgba(255,255,255,1),0_0_21.86px_0_rgba(255,255,255,1),0_0_38.25px_0_rgba(255,255,255,1)]" />
            <div className="h-px w-14 bg-white shadow-[0_0_0.91px_0_rgba(255,255,255,1),0_0_1.82px_0_rgba(255,255,255,1),0_0_6.38px_0_rgba(255,255,255,1),0_0_12.75px_0_rgba(255,255,255,1),0_0_21.86px_0_rgba(255,255,255,1),0_0_38.25px_0_rgba(255,255,255,1)]" />
            <div className="h-px w-1 bg-white shadow-[0_0_0.91px_0_rgba(255,255,255,1),0_0_1.82px_0_rgba(255,255,255,1),0_0_6.38px_0_rgba(255,255,255,1),0_0_12.75px_0_rgba(255,255,255,1),0_0_21.86px_0_rgba(255,255,255,1),0_0_38.25px_0_rgba(255,255,255,1)]" />
          </div>
        </div>

        {/* Feature Items */}
        <FeatureItems />
      </div>
    </div>
  );
}
