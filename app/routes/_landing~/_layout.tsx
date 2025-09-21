import type { User } from 'better-auth';
import { useEffect } from 'react';
import {
  Outlet,
  redirect,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router';
import BottomNav from '~/components/BottomNav';
import GlowContainer from '~/components/GlowContainer';
import ProfileDetails from '~/components/ProfileDetails';
import { auth } from '~/services/auth.server';
import type { Route } from './+types/_layout';

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  if (!session) {
    throw redirect('/login');
  }
  return session.user;
}

type ContextType = { user: User | null };

export function useUser() {
  return useOutletContext<ContextType>();
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const pageName = getPageName(location.pathname);

  // Check for pending inviter ID and process it
  useEffect(() => {
    const processPendingInvite = async () => {
      const pendingInviterId = sessionStorage.getItem('pendingInviterId');
      if (!pendingInviterId) {
        return;
      }
      try {
        await fetch('/api/process-invite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inviterId: pendingInviterId }),
        });
      } finally {
        sessionStorage.removeItem('pendingInviterId');
      }
    };

    processPendingInvite();
  }, []); // Run once on mount

  // Check if there are more than one segments (excluding empty strings)
  const segments = location.pathname.split('/').filter(Boolean);
  const showBackButton = segments.length > 1;

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="mx-auto min-h-screen max-w-[720px] bg-black pb-4">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-radial from-[#12121e] to-[#0f1012] px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="flex items-center gap-3">
            {showBackButton ? (
              <button
                aria-label="Go back"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#f9f9fb] transition-colors hover:bg-white/10"
                onClick={handleBackClick}
                type="button"
              >
                <GlowContainer className="rounded-sm px-2 py-1" noShimmer>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Back arrow</title>
                    <path
                      d="M15 19l-7-7 7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </GlowContainer>
              </button>
            ) : (
              <h1 className="font-semibold text-[#f9f9fb] text-lg">
                {pageName}
              </h1>
            )}
          </div>
          <ProfileDetails user={loaderData} />
        </div>
      </header>
      <Outlet context={{ user: loaderData } satisfies ContextType} />
      <BottomNav />
    </div>
  );
}

// Helper function to get page name from pathname
const getPageName = (pathname: string) => {
  // Remove leading slash and split by slash
  const segments = pathname.split('/').filter(Boolean);

  // If no segments, return 'Home'
  if (segments.length === 0) {
    return 'Home';
  }

  // Get the last segment and format it
  const lastSegment = segments.at(-1) || '';

  // Convert kebab-case or snake_case to title case
  return lastSegment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
