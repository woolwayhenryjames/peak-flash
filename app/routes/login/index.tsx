import { useSearchParams } from 'react-router';
import GlowContainer from '~/components/GlowContainer';
import { authClient } from '~/lib/auth-client';
import bg from './assets/bg.avif';
import tiktokIcon from './assets/tiktok-icon.svg';
import FeatureItems from './components/FeatureItems';
export function meta() {
  return [
    { title: 'Sign In to Peak AI - Start Earning with Crypto & AI Campaigns' },
    {
      name: 'description',
      content:
        'Join Peak AI and start earning Kindle Score points through crypto and AI campaigns. Connect with TikTok to participate in exclusive campaigns and climb the leaderboard.',
    },
    {
      name: 'keywords',
      content:
        'Peak AI login, TikTok sign in, crypto campaigns, AI campaigns, social earning, Kindle Score, referral rewards, campaign participation',
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Peak AI' },

    // Open Graph
    { property: 'og:title', content: 'Join Peak AI - Start Earning Today' },
    {
      property: 'og:description',
      content:
        'Connect your TikTok account and start earning rewards through crypto and AI campaigns. Join thousands of users already earning on Peak AI.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Peak AI' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Join Peak AI - Crypto & AI Campaign Platform',
    },
    {
      name: 'twitter:description',
      content:
        'Connect with TikTok and start earning through exclusive campaigns. Track your progress and compete with others!',
    },
  ];
}

export default function SignIn() {
  const [searchParams] = useSearchParams();

  const signIn = async () => {
    try {
      const inviterId = searchParams.get('inviter');
      if (inviterId) {
        console.log(`Starting OAuth flow with inviter: ${inviterId}`);
        // Store inviter ID in session storage so it persists through OAuth redirect
        sessionStorage.setItem('pendingInviterId', inviterId);
      }

      await authClient.signIn.social({
        provider: 'tiktok',
      });
    } catch (error) {
      console.error('Error during sign in:', error);
      // You could show a user-friendly error message here
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-8">
      {/* Header Section */}
      <div className="mb-16 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative z-0 mb-3 flex h-64 w-full max-w-xl flex-col items-center justify-center">
          <img
            alt="Background"
            className="-z-1 absolute inset-0 aspect-1280/832 w-full object-cover"
            src={bg}
          />
          <img
            alt="Peak AI Logo"
            className="size-24"
            src="/icons/web-app-manifest-512x512.png"
          />
          <h1 className="font-poppins font-semibold text-[32px] text-white leading-[48px]">
            Peak AI
          </h1>
        </div>

        {/* Subtitle */}
        <div className="space-y-1">
          <p className="text-lg text-white">
            AI-powered Crypto Distribution OS
          </p>
          <p className="text-white text-xs">Turn Attention into Capital.</p>
        </div>

        {/* Invite Banner */}
        {searchParams.get('inviter') && (
          <div className="mx-auto mt-4 max-w-sm rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-3">
            <p className="text-center text-purple-200 text-sm">
              🎉 You've been invited to join Peak AI!
            </p>
            <p className="text-center text-purple-300 text-xs">
              Sign up to earn bonus rewards
            </p>
          </div>
        )}

        {/* Sign In Button */}
        <div className="mt-14 w-full">
          <button className="w-[95%]" onClick={signIn} type="button">
            <GlowContainer>
              {/* TikTok Icon */}
              <img alt="TikTok" className="size-6" src={tiktokIcon} />
              <span className="font-poppins text-lg text-white">
                Sign in with TikTok
              </span>
            </GlowContainer>
          </button>

          <p className="mx-auto mt-6 max-w-[95%] text-center text-[#ACAEB1] text-xs leading-6">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-10 w-full">
        {/* Title with underline effect */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-medium font-poppins text-lg text-white">
            Why choose Peak AI ?
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
