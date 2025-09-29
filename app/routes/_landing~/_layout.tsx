import { Outlet } from "react-router";
import Header from "~/components/Header";
import { getDbUser } from "~/services/auth.server";
import type { Route } from "./+types/_layout";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    return null;
  }
  return user.value;
}

export default function LandingLayout({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header user={loaderData} />
      <Outlet />
    </div>
  );
}
