import type { User } from 'better-auth';
import { Outlet, redirect, useLocation, useOutletContext } from 'react-router';
import BottomNav from '~/components/BottomNav';
import { auth } from '~/services/auth.server';
import type { Route } from './+types/index';

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
  const pageName = getPageName(location.pathname);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-radial from-[#12121e] to-[#0f1012] px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <h1 className="font-semibold text-[#f9f9fb] text-lg">{pageName}</h1>
          {loaderData?.image && (
            <img
              alt={loaderData.name || 'User avatar'}
              className="h-8 w-8 rounded-full object-cover"
              src={loaderData.image}
            />
          )}
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
