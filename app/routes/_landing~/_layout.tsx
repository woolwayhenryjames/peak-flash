import { useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import type { ContextType } from "~/lib/useUser";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_layout";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    return null;
  }

  const userData = user.value;

  // Check if business user owns any campaigns or if user is admin
  let hasCampaigns = false;
  if (userData.isAdmin) {
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
  };
}

export default function LandingLayout({ loaderData }: Route.ComponentProps) {
  // Check for pending inviter ID and process it
  useEffect(() => {
    const processPendingInvite = async () => {
      const pendingInviterId = sessionStorage.getItem("pendingInviterId");
      if (!pendingInviterId) {
        return;
      }
      try {
        await fetch("/api/process-invite", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inviterId: pendingInviterId }),
        });
      } finally {
        sessionStorage.removeItem("pendingInviterId");
      }
    };

    processPendingInvite();
  }, []); // Run once on mount
  return (
    <div className="flex min-h-screen flex-col">
      <Header user={loaderData} />
      <Outlet context={{ user: loaderData } satisfies ContextType} />
      <Footer />
    </div>
  );
}
