import { redirect } from "react-router";
import { getDbUser } from "~/services/auth.server";
import type { Route } from "./+types/_index";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr() || !user.value.isAdmin) {
    throw redirect("/");
  }

  // Redirect to campaigns as the default admin page
  throw redirect("/admin/campaigns");
}
