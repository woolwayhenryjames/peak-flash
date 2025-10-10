import { Outlet, redirect } from "react-router";
import { AdminSidebar } from "~/components/AdminSidebar";
import Footer from "~/components/Footer";
import type { ContextType } from "~/lib/useUser";
import { getDbUser } from "~/services/auth.server";
import type { Route } from "./+types/_layout";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr() || !user.value.isAdmin) {
    throw redirect("/");
  }
  return user.value;
}

export default function AdminLayout({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-900">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-auto">
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet context={{ user: loaderData } satisfies ContextType} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
