import { Outlet } from "react-router";
import Header from "~/components/Header";
import { auth } from "~/services/auth.server";
import type { Route } from "./+types/_layout";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  return session?.user;
}

export default function LandingLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
