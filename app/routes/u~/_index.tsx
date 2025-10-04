import { Link, redirect } from "react-router";
import CampaignList from "~/components/CampaignList";
import FirstGetScoreDialog from "~/components/Dialogs/FirstGetScoreDialog";
import FirstOpenHomeDialog from "~/components/Dialogs/FirstOpenHomeDialog";
import FollowUs from "~/components/FollowUs";
import { HomeSeparator } from "~/components/HomeSeperator";
import KindleScoreCard from "~/components/KindleScoreCard";
import QuickActions from "~/components/QuickActions";
import StartEarningSection from "~/components/StartEarningSection";
import { getDbUser } from "~/services/auth.server";
import { getCampaignsForUser } from "~/services/campaign.server";
import { getUserKindleRank } from "~/services/user-ranking.server";
import type { Route } from "./+types/_index";

export function meta({ data }: Route.MetaArgs) {
  const user = data?.user;
  const campaigns = data?.campaigns || [];
  const userRank = user?.kindleRank || "N/A";
  const userScore = user?.kindleScore || 0;

  return [
    { title: "Peak AI - Your Crypto & AI Campaign Dashboard" },
    {
      name: "description",
      content: `Welcome to Peak AI! Track your Kindle Score (${userScore} points), compete in campaigns, and earn rewards. Currently ranked #${userRank} with ${campaigns.length} active campaigns.`,
    },
    {
      name: "keywords",
      content:
        "Peak AI, crypto campaigns, AI campaigns, Kindle Score, leaderboard, TikTok rewards, campaign dashboard, social earning",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Peak AI" },

    // Open Graph
    {
      property: "og:title",
      content: "Peak AI - Your Crypto & AI Campaign Dashboard",
    },
    {
      property: "og:description",
      content: `Track your progress with ${userScore} Kindle Score points, ranked #${userRank}. Join campaigns and earn rewards on Peak AI.`,
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Peak AI" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Peak AI - Your Campaign Dashboard" },
    {
      name: "twitter:description",
      content: `Track campaigns, earn Kindle Score points, and compete on leaderboards. Currently at ${userScore} points!`,
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect("/");
  }

  // Get user with kindle rank and active campaigns with user participation
  const [kindleRank, campaigns] = await Promise.all([
    getUserKindleRank(user.value.id),
    getCampaignsForUser(user.value, { endDate: { gte: new Date() } }, 1, 3),
  ]);

  return {
    user: { ...user.value, kindleRank },
    campaigns: campaigns.campaigns,
  };
}

export default function Hub({
  loaderData: { user, campaigns },
}: Route.ComponentProps) {
  const userScore =
    user.kindleScore != null ? Math.round(user.kindleScore) : null;
  return (
    <>
      <div className="flex flex-col justify-evenly gap-6 px-6 pt-6 md:px-18">
        <KindleScoreCard rank={user.kindleRank ?? 1} score={userScore} />
        <StartEarningSection />
      </div>
      <HomeSeparator />
      <div className="space-y-6 from-[#090917] to-black px-6 max-md:bg-gradient-to-b md:mx-auto md:mt-6 md:px-18">
        <div className="mb-10 flex items-center justify-between md:px-6">
          <div className="flex items-center gap-1">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>gift</title>
              <path
                d="M12.1746 21.6538V7.69012M10.5496 6.85244C10.7224 6.89123 10.9046 6.84368 11.0291 6.71922C11.1535 6.59476 11.201 6.41253 11.1623 6.23973C11.0071 5.60595 10.4356 3.4837 9.84873 2.89684C9.11757 2.16568 7.92757 2.16263 7.20002 2.89017C6.47253 3.61767 6.47547 4.80767 7.20669 5.53888C7.80316 6.13535 9.91581 6.6973 10.5496 6.85244ZM12.3242 6.23968C12.2854 6.41255 12.3329 6.59471 12.4574 6.71917C12.5818 6.84363 12.7641 6.89111 12.9369 6.85239C13.5706 6.69723 15.6929 6.12569 16.2797 5.53883C17.0109 4.80767 17.014 3.61767 16.2864 2.89012C15.5589 2.16263 14.3689 2.16557 13.6377 2.89679C13.0412 3.49326 12.4793 5.60591 12.3242 6.23968ZM3.09821 12.5774H20.9018C21.2874 12.5774 21.6 12.2648 21.6 11.8792V8.38831C21.6 8.00271 21.2874 7.69012 20.9018 7.69012H3.09821C2.71261 7.69012 2.40002 8.00271 2.40002 8.38831V11.8792C2.40002 12.2648 2.71261 12.5774 3.09821 12.5774ZM19.8546 12.5774V20.9556C19.8546 21.3412 19.542 21.6538 19.1564 21.6538H4.84366C4.45807 21.6538 4.14548 21.3412 4.14548 20.9556V12.5774H19.8546Z"
                stroke="url(#paint0_linear_153_1105)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_153_1105"
                  x1="-8.50037"
                  x2="38"
                  y1="11.9998"
                  y2="12"
                >
                  <stop stopColor="#6D7077" />
                  <stop offset="0.495192" stopColor="#FEFEFE" />
                  <stop offset="1" stopColor="#3C4041" />
                </linearGradient>
              </defs>
            </svg>

            <h3 className="font-medium text-white text-xl">Active Campaigns</h3>
          </div>
          <Link
            className="border-[#505050] border-b pb-0.5 text-[#AEAEAE] text-xs hover:text-white"
            to="/u/ascent?status=active"
          >
            View All
          </Link>
        </div>
        <CampaignList campaigns={campaigns} />
        <QuickActions />
        <div className="mt-18 w-full">
          <div className="mb-7 flex items-center gap-1">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Sun</title>
              <path
                d="M12 5.51342V2.3999M12 21.5999V18.4864M18.4865 11.9999H21.6M2.40002 11.9999H5.51354M16.587 7.41348L18.7885 5.2119M5.21128 18.7881L7.41286 16.5866M16.587 16.5863L18.7885 18.7879M5.21128 5.21166L7.41286 7.41325M15.5688 11.8733C15.5688 13.8616 13.957 15.4733 11.9688 15.4733C9.98055 15.4733 8.36877 13.8616 8.36877 11.8733C8.36877 9.88512 9.98055 8.27334 11.9688 8.27334C13.957 8.27334 15.5688 9.88512 15.5688 11.8733Z"
                stroke="url(#paint0_linear_131_3020)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_131_3020"
                  x1="-7.00037"
                  x2="35.9996"
                  y1="11.9995"
                  y2="11.9995"
                >
                  <stop stopColor="#6D7077" />
                  <stop offset="0.495192" stopColor="#FEFEFE" />
                  <stop offset="1" stopColor="#3C4041" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="font-semibold text-white text-xl">Follow Us</h3>
          </div>
          <FollowUs />
        </div>
      </div>
      <FirstOpenHomeDialog />
      <FirstGetScoreDialog score={userScore} />
    </>
  );
}
