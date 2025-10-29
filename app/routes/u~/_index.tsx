import { Link, redirect } from "react-router";
import CampaignList from "~/components/CampaignList";
import FirstGetScoreDialog from "~/components/Dialogs/FirstGetScoreDialog";
import FirstOpenHomeDialog from "~/components/Dialogs/FirstOpenHomeDialog";
import FlashList from "~/components/FlashList";
import FollowUs from "~/components/FollowUs";
import { HomeSeparator } from "~/components/HomeSeperator";
import KindleScoreCard from "~/components/KindleScoreCard";
import QuickActions from "~/components/QuickActions";
import StartEarningSection from "~/components/StartEarningSection";
import { getDbUser } from "~/services/auth.server";
import { getCampaignsForUser } from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_index";

export function meta({ data }: Route.MetaArgs) {
  const user = data?.user;
  const campaigns = data?.campaigns || [];
  const userRank = user?.rank || "N/A";
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
  const campaigns = await getCampaignsForUser(
    user.value,
    { endDate: { gte: new Date() } },
    1,
    3
  );

  const flashs = await db.flash.findMany({
    where: {
      status: "ACTIVE",
      startAt: { lte: new Date() },
      OR: [{ endAt: null }, { endAt: { gte: new Date() } }],
    },
    orderBy: {
      startAt: "desc",
    },
  });

  return {
    user: user.value,
    campaigns: campaigns.campaigns,
    flashs: flashs.map((f) => ({
      ...f,
      perUserPrize: f.perUserPrize?.toNumber() ?? null,
      prizePool: f.prizePool?.toNumber() ?? null,
    })),
  };
}

export default function Hub({
  loaderData: { user, campaigns, flashs },
}: Route.ComponentProps) {
  const userScore =
    user.kindleScore != null ? Math.round(user.kindleScore) : null;
  return (
    <>
      <div className="flex flex-col justify-evenly gap-6 px-6 pt-6 md:px-18">
        <KindleScoreCard rank={user.rank ?? 1} score={userScore} />
        <StartEarningSection />
      </div>
      <HomeSeparator />
      <div className="space-y-6 from-[#090917] to-black px-6 max-md:bg-linear-to-b md:mx-auto md:mt-6 md:px-18">
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
        <div className="mb-10 flex items-center justify-between md:px-6">
          <div className="flex items-center gap-1">
            <svg
              fill="none"
              height="23"
              viewBox="0 0 23 23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>settings gear</title>
              <path
                d="M6.62388 0.94812H16.0864V2.84432H19.8714V11.3772H17.9789V4.74053H16.0864V6.63673H6.62388V4.74053H4.73137V19.9102H11.3551V21.8064H2.83887V2.84432H6.62388V0.94812ZM8.51639 4.74053H14.1939V2.84432H8.51639V4.74053ZM18.9252 13.0364V14.341C19.6017 14.5155 20.2045 14.8719 20.6795 15.3574L21.8084 14.7041L22.7547 16.3462L21.6267 16.9985C21.8106 17.6629 21.8106 18.365 21.6267 19.0294L22.7547 19.6817L21.8084 21.3238L20.6795 20.6705C20.2045 21.155 19.6008 21.5124 18.9252 21.6869V22.9915H17.0327V21.6869C16.3665 21.5144 15.7599 21.1629 15.2783 20.6705L14.1494 21.3238L13.2032 19.6817L14.3311 19.0294C14.147 18.365 14.147 17.6629 14.3311 16.9985L13.2032 16.3462L14.1494 14.7041L15.2783 15.3574C15.7599 14.865 16.3665 14.5135 17.0327 14.341V13.0364H18.9252ZM16.322 17.0971C16.1667 17.3776 16.0853 17.6932 16.0855 18.014C16.0855 18.3458 16.1716 18.6587 16.322 18.9308L16.3561 18.9905C16.5241 19.2715 16.7618 19.5041 17.0463 19.6656C17.3307 19.8271 17.652 19.912 17.9789 19.912C18.3058 19.912 18.6272 19.8271 18.9116 19.6656C19.196 19.5041 19.4338 19.2715 19.6017 18.9905L19.6358 18.9308C19.7863 18.6587 19.8714 18.3458 19.8714 18.014C19.8714 17.6821 19.7863 17.3692 19.6358 17.0971L19.6017 17.0374C19.4338 16.7564 19.196 16.5238 18.9116 16.3623C18.6272 16.2008 18.3058 16.1159 17.9789 16.1159C17.652 16.1159 17.3307 16.2008 17.0463 16.3623C16.7618 16.5238 16.5241 16.7564 16.3561 17.0374L16.322 17.0971Z"
                fill="url(#paint0_linear_1297_5513)"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1297_5513"
                  x1="-0.931599"
                  x2="34.9845"
                  y1="11.9698"
                  y2="11.9698"
                >
                  <stop stop-color="#6D7077" />
                  <stop offset="0.363695" stop-color="#FEFEFE" />
                  <stop offset="1" stop-color="#3C4041" />
                </linearGradient>
              </defs>
            </svg>

            <h3 className="font-medium text-white text-xl">Flash Tasks</h3>
          </div>
          <Link
            className="border-[#505050] border-b pb-0.5 text-[#AEAEAE] text-xs hover:text-white"
            to="/u/flash"
          >
            View All
          </Link>
        </div>
        <FlashList flashs={flashs} />
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
