import type { User } from "better-auth";
import { Outlet, redirect, useLocation, useOutletContext } from "react-router";
import { AppKitProvider } from "~/components/AppKitProvider";
import { auth } from "~/services/auth.server";
import type { Route } from "./+types/_layout";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  if (!session) {
    throw redirect("/login");
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
    <div
      className="mx-auto flex min-h-screen max-w-[720px] flex-col"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(11, 11, 33, 1) 55%, rgba(65, 65, 116, 1) 100%)",
      }}
    >
      {/* Header */}
      <header className="border-[#313335]/50 border-b bg-gradient-to-r from-[#121218] to-[#0F1012] p-8">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  alt="Logo"
                  className="size-5 object-contain invert"
                  src="/icons/favicon-96x96.png"
                />
                Peak AI
              </div>
              <div className="h-5 w-px bg-[#868686]" />
              <h1 className="font-light text-[#969696] text-lg">{pageName}</h1>
            </div>
            <button className="font-light text-[#F3EEEA] text-lg" type="button">
              About PeakAI
            </button>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9F9FB]">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600" />
          </div>
        </div>
      </header>
      <AppKitProvider>
        <Outlet context={{ user: loaderData } satisfies ContextType} />
      </AppKitProvider>
    </div>
  );
}

// Helper function to get page name from pathname
const getPageName = (pathname: string) => {
  // Remove leading slash and split by slash
  const segments = pathname.split("/").filter(Boolean);

  // If no segments, return 'Home'
  if (segments.length === 0) {
    return "Home";
  }

  // Get the last segment and format it
  const lastSegment = segments.at(-1) || "";

  // Convert kebab-case or snake_case to title case
  return lastSegment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
