import { Outlet } from "react-router";
import Header from "~/components/Header";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_layout";

// Admin emails list - same as in admin routes
const allowedAdminEmails = [
  "arslanablikim",
  "jenniffergzz",
  "jen_sunny0",
  "qtchcom",
  "0x13b057da716a5d527dd2a5890eecb3fc72982cbd",
];

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    return null;
  }

  const userData = user.value;
  const isAdmin = allowedAdminEmails.includes(userData.email);

  // Check if business user owns any campaigns or if user is admin
  let hasCampaigns = false;
  if (isAdmin) {
    // Admins always have access to dashboard
    hasCampaigns = true;
  } else if (userData.isBusiness) {
    const campaignCount = await db.campaign.count({
      where: { ownerId: userData.id },
    });
    hasCampaigns = campaignCount > 0;
  }

  return {
    ...userData,
    hasCampaigns,
    isAdmin,
  };
}

export default function LandingLayout({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header user={loaderData} />
      <Outlet />
    </div>
  );
}
