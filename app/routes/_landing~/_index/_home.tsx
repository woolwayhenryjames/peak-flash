import Autoplay from "embla-carousel-autoplay";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import CarouselIndicator from "~/components/CarouselIndicator";
import GlowContainer from "~/components/GlowContainer";
import enterpriseIcon from "~/components/Header/MenuContent/assets/enterprise.svg";
import tiktokIcon from "~/components/Header/MenuContent/assets/tiktok.svg";
import UserProfileTooltip from "~/components/UserProfileTooltip";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "~/components/ui/shadcn-io/marquee";
import { useLogin } from "~/lib/useLogin";
import { formatNumber } from "~/lib/utils";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import { getGlobalLeaderboard } from "~/services/user-ranking.server";
import type { Route } from "./+types/_home";
import bgBottom from "./assets/bg-bottom.svg";
import bgBottomM from "./assets/bg-bottom-m.svg";
import bgHighlight from "./assets/bg-highlight.svg";
import bgHighlightM from "./assets/bg-highlight-m.svg";
import bgTop from "./assets/bg-top.svg";
import bgTopM from "./assets/bg-top-m.svg";
import ascentScreenshot from "./assets/carousel/ascent-screenshot.png";
import detailScreenshot from "./assets/carousel/detail-screenshot.png";
import homeScreenshot from "./assets/carousel/home-screenshot.png";
import inviteScreenshot from "./assets/carousel/invite-screenshot.png";
import profileScreenshot from "./assets/carousel/profile-screenshot.png";
import humanSignalIcon from "./assets/highlight/human-signal.svg";
import insightsIcon from "./assets/highlight/insights.svg";
import peopleIcon from "./assets/highlight/people.svg";
import robotBrainIcon from "./assets/highlight/robot-brain.svg";
import productHighlightImage from "./assets/product-highlight-title.svg";
import animocaBrandsLogo from "./assets/supporter/animoca-brands.png";
import aptosLogo from "./assets/supporter/aptos.png";
import bnbChainLogo from "./assets/supporter/bnb-chain.png";
import dwfLabsLogo from "./assets/supporter/dwf-labs.png";
import frachtisLogo from "./assets/supporter/frachtis.png";
import galxeLogo from "./assets/supporter/galxe.png";
// Supporter logos imports
import infinityGroundLogo from "./assets/supporter/infinity-ground.png";
import initiaLogo from "./assets/supporter/initia.png";
import kaiaLogo from "./assets/supporter/kaia.png";
import kuCoinVenturesLogo from "./assets/supporter/kucoin-ventures.png";
import marblexLogo from "./assets/supporter/marblex.png";
import mhVenturesLogo from "./assets/supporter/mh-ventures.png";
import nvidiaLogo from "./assets/supporter/nvidia.png";
import uxlinkLogo from "./assets/supporter/uxlink.png";
import yziLabsLogo from "./assets/supporter/yzi-labs.png";

export function meta() {
  return [
    {
      title: "Peak AI - AI & Crypto Campaign Management Platform",
    },
    {
      name: "description",
      content: `Join Peak AI's revolutionary platform. Earn Kindle Score points, participate in crypto and AI campaigns, and climb the global leaderboard.`,
    },
    {
      name: "keywords",
      content:
        "Peak AI, crypto campaigns, AI campaigns, Kindle Score, TikTok campaigns, creator rewards, blockchain campaigns, social campaigns",
    },
    {
      property: "og:title",
      content: "Peak AI - Where Creators Meet Crypto & AI Campaigns",
    },
    {
      property: "og:description",
      content:
        "Participate in cutting-edge crypto and AI campaigns. Earn rewards, build your Kindle Score, and join a global community of creators.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    return {
      userData: null,
      hasCampaigns: false,
      globalLeaderboard: await getGlobalLeaderboard(1, 10),
    };
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
    userData,
    hasCampaigns,
    globalLeaderboard: await getGlobalLeaderboard(1, 10),
  };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { signInEnterprise, signInCreator } = useLogin();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div
        className="contents w-full items-center bg-[image:var(--bg-top)] bg-cover md:flex md:aspect-[1728/923]"
        style={
          {
            "--bg-top": `url("${bgTop}")`,
          } as CSSProperties
        }
      >
        <div className="container mx-auto flex flex-col-reverse gap-20 lg:flex-row lg:items-center lg:gap-31 lg:p-[8%]">
          {/* Hero Content */}
          <div className="flex flex-col gap-5 p-5 md:gap-20 lg:flex-1">
            <div className="flex flex-col gap-12">
              <div className="space-y-6">
                <h1 className="font-normal text-white text-xl leading-[1.5] md:text-6xl">
                  Ascend Influence. Attain the Peak. Amplify Results.
                </h1>
                <p className="font-light text-[#CBCBCB] text-xs leading-[1.5] md:max-w-[37.5rem] md:text-xl">
                  Experience the AI-powered Distribution OS that transforms
                  content into measurable results—for brands seeking reach, and
                  creators chasing recognition.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            {!loaderData.userData && (
              <div className="flex flex-col gap-4 md:flex-row">
                {/* Start as Enterprises Button */}
                <button
                  className="h-auto w-full md:w-auto"
                  onClick={signInEnterprise}
                  type="button"
                >
                  <GlowContainer className="h-auto w-full gap-4 overflow-hidden bg-gradient-to-r from-[#080C0D] to-[#3C5E66] px-7 py-5 md:w-auto">
                    <img alt="Logo" className="size-6" src={enterpriseIcon} />
                    <span className="font-normal text-2xl text-white">
                      Start as Enterprises
                    </span>
                  </GlowContainer>
                </button>

                {/* Start as Creators Button */}
                <button
                  className="h-auto w-full md:w-auto"
                  onClick={signInCreator}
                  type="button"
                >
                  <GlowContainer className="gap-4 px-10 py-5">
                    <img alt="Logo" className="size-6" src={tiktokIcon} />
                    <span className="font-normal text-2xl text-white">
                      Start as Creators
                    </span>
                  </GlowContainer>
                </button>
              </div>
            )}
            {loaderData.userData?.isBusiness ? (
              <div className="flex flex-col gap-4 md:flex-row">
                {loaderData.hasCampaigns ? (
                  <Link className="h-auto w-2/3 md:w-auto" to="/b/dashboard">
                    <GlowContainer className="gap-4 px-10 py-2 font-normal text-2xl text-white md:py-5">
                      My Space
                    </GlowContainer>
                  </Link>
                ) : (
                  <Link className="h-auto w-2/3 md:w-auto" to="/pricing">
                    <GlowContainer className="gap-4 px-10 py-2 font-normal text-2xl text-white md:py-5">
                      Create Campaign
                    </GlowContainer>
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4 md:flex-row">
                <Link className="h-auto w-2/3 md:w-auto" to="/u">
                  <GlowContainer className="gap-4 px-10 py-2 font-normal text-2xl text-white md:py-5">
                    Start Creating
                  </GlowContainer>
                </Link>
              </div>
            )}
          </div>

          {/* Screenshot carousel */}
          <div
            className="flex aspect-[390/400] items-end justify-center gap-8 bg-[image:var(--bg-top-mobile)] md:contents"
            style={
              {
                "--bg-top-mobile": `url("${bgTopM}")`,
              } as CSSProperties
            }
          >
            <div className="flex w-[244px] flex-col items-center gap-8 md:w-[371px]">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[plugin.current]}
                setApi={setApi}
              >
                <CarouselContent>
                  {carouselImages.map((image) => (
                    <CarouselItem key={image.id}>
                      <img
                        alt={image.alt}
                        className="mx-auto mb-4"
                        height="411"
                        src={image.src}
                        width="371"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Carousel Indicators */}
              <CarouselIndicator
                current={current}
                onSelect={scrollTo}
                total={carouselImages.length}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlight Section */}
      <div
        className="flex aspect-[390/658] w-full flex-col items-center bg-[image:var(--bg-bottom-mobile)] bg-cover px-5 max-md:mt-12 md:aspect-[1728/1006] md:bg-[image:var(--bg-bottom)]"
        style={
          {
            "--bg-bottom": `url("${bgBottom}")`,
            "--bg-bottom-mobile": `url("${bgBottomM}")`,
          } as CSSProperties
        }
      >
        <img
          alt="Product Highlight"
          className="md:hidden"
          height="18"
          src={productHighlightImage}
          width="148"
        />
        <div
          className="container flex flex-col items-center gap-8 bg-[image:var(--bg-highlight-mobile)] bg-cover bg-no-repeat max-md:mt-7 max-md:border max-md:border-white/15 max-md:p-7 md:mx-auto md:gap-16 md:bg-[image:var(--bg-highlight)] md:pt-11"
          style={
            {
              "--bg-highlight": `url("${bgHighlight}")`,
              "--bg-highlight-mobile": `url("${bgHighlightM}")`,
            } as CSSProperties
          }
        >
          <img
            alt="Product Highlight"
            className="hidden md:block"
            height="46"
            src={productHighlightImage}
            width="382"
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-20 md:p-20">
            {productHighlights.map((highlight) => (
              <div
                className="flex max-w-[15.5rem] flex-col items-center gap-4 md:gap-8"
                key={highlight.id}
              >
                {/* Icon Container */}
                <GlowContainer className="relative size-16 items-center justify-center rounded-lg border border-white/50 bg-transparent p-0 md:size-28">
                  <img
                    alt={highlight.title}
                    className="size-8 md:size-16"
                    src={highlight.icon}
                  />
                  {/* Gradient overlay effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-white/100 via-white/14 to-transparent opacity-[0.98] blur-sm" />
                </GlowContainer>

                {/* Text Content */}
                <div className="flex flex-col gap-2 text-center md:gap-4">
                  <h3 className="font-medium text-sm text-white md:text-2xl md:leading-[1.5]">
                    {highlight.title}
                  </h3>
                  <p className="font-normal text-[#979797] text-[10px] md:text-base md:leading-[1.5]">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen py-30 md:pt-40 md:pb-60">
        <div className="mb-12 text-center font-normal text-3xl text-white md:text-5xl">
          Supported By
        </div>
        {/* Logos wall */}
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent autoFill={true} pauseOnHover={true}>
            {supporterLogos.map((logo) => (
              <MarqueeItem key={logo.id}>
                <div className="flex items-center">
                  <img
                    alt={logo.alt}
                    className="h-6 w-auto object-contain md:h-12"
                    src={logo.src}
                  />
                  <div className="mx-5 flex items-center md:mx-10">
                    <div className="size-1.5 rounded-full bg-white/50" />
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
      <div
        className="w-full bg-[image:var(--bg-peekaboos-mobile)] md:bg-[image:var(--bg-peekaboos)]"
        style={
          {
            "--bg-peekaboos-mobile":
              "conic-gradient(from 185deg at -14% 0%, #000 0deg, #2C4271 162.69230604171753deg, #060112 290.7692241668701deg, #000 360deg)",
            "--bg-peekaboos":
              "conic-gradient(from 185deg at -14% -17.95%, #000 0deg, #2C4271 162.69230604171753deg, #060112 290.7692241668701deg, #000 360deg)",
          } as CSSProperties
        }
      >
        <div className="container mx-auto px-4 py-28 lg:px-[8%]">
          <div className="flex flex-col gap-9">
            <div className="text-3xl text-white leading-[80px] md:text-5xl">
              Peekaboos
            </div>
            <div className="font-light text-[#cacaca] text-xl">
              Intelligent scoring system that discovers rising micro influencers
              and viral content—AI reveals hidden impact and breakout potential.
            </div>
          </div>
          <table className="my-10 w-full table-auto md:my-30">
            <thead>
              <tr className="border-[#3C3C3D] border-b">
                <th className="py-4 text-left font-light text-[#ADADAD] text-lg md:pr-8">
                  Rank
                </th>
                <th className="py-4 text-left font-light text-[#ADADAD] text-lg md:pr-8">
                  Sparkers
                </th>
                <th className="py-4 text-left font-light text-[#ADADAD] text-lg md:pr-8">
                  <span className="max-md:hidden">KINDLE</span> Score
                </th>
                <th className="py-4 text-left font-light text-[#ADADAD] text-lg md:pr-8">
                  Followers
                </th>
                <th className="py-4 text-left font-light text-[#ADADAD] text-lg">
                  Likes
                </th>
              </tr>
            </thead>
            <tbody>
              {loaderData.globalLeaderboard.users.map((user) => (
                <UserProfileTooltip
                  backgroundColor="#2C2A39"
                  key={user.id}
                  user={user}
                >
                  <tr
                    className="cursor-pointer transition-colors duration-200 hover:bg-white/5"
                    key={user.rank}
                  >
                    <td className="py-4 font-semibold text-white text-xl md:pr-8">
                      {user.rank}
                    </td>
                    <td className="py-4 font-medium text-lg text-white md:pr-8">
                      {user.name ?? user.email}
                    </td>
                    <td className="py-4 font-medium text-lg text-white md:pr-8">
                      {user.kindleScore?.toFixed(0) ?? 0}
                    </td>
                    <td className="py-4 font-medium text-lg text-white md:pr-8">
                      {formatNumber(user.followerCount)}
                    </td>
                    <td className="py-4 font-medium text-lg text-white">
                      {formatNumber(user.likeCount)}
                    </td>
                  </tr>
                </UserProfileTooltip>
              ))}
            </tbody>
          </table>
          <div className="ml-auto md:w-1/5">
            <Link to="/leaderboard">
              <GlowContainer>View All</GlowContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Carousel images data
const carouselImages = [
  { id: 1, src: homeScreenshot, alt: "Home Screenshot" },
  { id: 2, src: ascentScreenshot, alt: "Ascent Screenshot" },
  { id: 3, src: detailScreenshot, alt: "Detail View Screenshot" },
  { id: 4, src: inviteScreenshot, alt: "Invite Screenshot" },
  { id: 5, src: profileScreenshot, alt: "Profile Screenshot" },
];

// Product highlight data
const productHighlights = [
  {
    id: 1,
    icon: robotBrainIcon,
    title: "Spark Micro-Intelligence",
    description: "Turn micro moments into macro momentum.",
  },
  {
    id: 2,
    icon: humanSignalIcon,
    title: "Ascend to the Peak, Faster",
    description:
      "Climb faster—spend less time on negotiations and coordination.",
  },
  {
    id: 3,
    icon: peopleIcon,
    title: "Build Unshakable Conviction",
    description:
      "Empower trusted partnerships—pay true contributors for actual results.",
  },
  {
    id: 4,
    icon: insightsIcon,
    title: "Objective Insights at Peak Scale",
    description:
      "Unlock fair, data-driven decisions—AI analyzes what humans can't.",
  },
];

// Supporter logos data
const supporterLogos = [
  { id: 1, src: aptosLogo, alt: "Aptos" },
  { id: 2, src: nvidiaLogo, alt: "NVIDIA" },
  { id: 3, src: infinityGroundLogo, alt: "Infinity Ground Logo" },
  { id: 4, src: dwfLabsLogo, alt: "DWF Labs" },
  { id: 5, src: kuCoinVenturesLogo, alt: "KuCoin Ventures" },
  { id: 6, src: yziLabsLogo, alt: "YZI Labs" },
  { id: 7, src: animocaBrandsLogo, alt: "Animoca Brands" },
  { id: 8, src: bnbChainLogo, alt: "BNB Chain" },
  { id: 9, src: frachtisLogo, alt: "Frachtis" },
  { id: 10, src: marblexLogo, alt: "Marblex" },
  { id: 11, src: galxeLogo, alt: "Galxe" },
  { id: 12, src: initiaLogo, alt: "Initia" },
  { id: 13, src: kaiaLogo, alt: "Kaia" },
  { id: 14, src: mhVenturesLogo, alt: "MH Ventures" },
  { id: 15, src: uxlinkLogo, alt: "UXLink" },
];
