import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import CarouselIndicator from "~/components/CarouselIndicator";
import GlowContainer from "~/components/GlowContainer";
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
import bgBottom from "./assets/bg-bottom.svg";
import bgTop from "./assets/bg-top.svg";
import ascentScreenshot from "./assets/carousel/ascent-screenshot.png";
import detailScreenshot from "./assets/carousel/detail-screenshot.png";
import homeScreenshot from "./assets/carousel/home-screenshot.png";
import inviteScreenshot from "./assets/carousel/invite-screenshot.png";
import profileScreenshot from "./assets/carousel/profile-screenshot.png";
import enterpriseIcon from "./assets/enterprise.svg";
import humanSignalIcon from "./assets/highlight/human-signal.svg";
import insightsIcon from "./assets/highlight/insights.svg";
import peopleIcon from "./assets/highlight/people.svg";
import robotBrainIcon from "./assets/highlight/robot-brain.svg";
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
import tiktokIcon from "./assets/tiktok.svg";

export default function Index() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    <div className="flex flex-col items-center justify-center bg-black p-4">
      <div
        className="flex aspect-[1728/923] w-full items-center bg-cover"
        style={{ backgroundImage: `url("${bgTop}")` }}
      >
        <div className="container mx-auto flex flex-col gap-20 lg:flex-row lg:items-center lg:gap-12">
          {/* Hero Content */}
          <div className="flex flex-col gap-20 lg:flex-1">
            <div className="flex flex-col gap-12">
              <div className="space-y-6">
                <h1 className="font-normal text-5xl text-white leading-[1.5] md:text-6xl">
                  Ascend Influence. Attain the Peak. Amplify Results.
                </h1>
                <p className="font-light text-[#CBCBCB] text-xl leading-[1.5] md:max-w-[37.5rem]">
                  Experience the AI-powered Distribution OS that transforms
                  content into measurable results—for brands seeking reach, and
                  creators chasing recognition.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 md:flex-row">
              {/* Start as Enterprises Button */}
              <GlowContainer className="h-auto w-full gap-4 overflow-hidden bg-gradient-to-r from-[#080C0D] to-[#3C5E66] md:w-auto">
                <img alt="Logo" className="size-6" src={enterpriseIcon} />
                <span className="font-normal text-2xl text-white">
                  Start as Enterprises
                </span>
              </GlowContainer>

              {/* Start as Creators Button */}
              <GlowContainer className="h-auto w-full gap-4 overflow-hidden md:w-auto">
                <img alt="Logo" className="size-6" src={tiktokIcon} />
                <span className="font-normal text-2xl text-white">
                  Start as Creators
                </span>
              </GlowContainer>
            </div>
          </div>

          {/* Screenshot carousel */}
          <div className="flex w-full flex-col items-center gap-8 lg:w-auto lg:flex-1">
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

      {/* Product Highlight Section */}
      <div
        className="flex aspect-[1728/1006] w-full items-center bg-cover"
        style={{ backgroundImage: `url("${bgBottom}")` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-16">
          <h2 className="text-center font-normal text-3xl text-white leading-[1.6] md:text-5xl">
            Product Highlight
          </h2>

          <div className="flex flex-wrap justify-evenly bg-black p-[5vw]">
            {productHighlights.map((highlight) => (
              <div
                className="flex max-w-[15.5rem] flex-col items-center gap-8"
                key={highlight.id}
              >
                {/* Icon Container */}
                <GlowContainer className="relative size-28 items-center justify-center rounded-lg border border-white/50 bg-transparent p-0">
                  <img
                    alt={highlight.title}
                    className="size-16"
                    src={highlight.icon}
                  />
                  {/* Gradient overlay effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-white/100 via-white/14 to-transparent opacity-[0.98] blur-sm" />
                </GlowContainer>

                {/* Text Content */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="font-medium text-[1.375rem] text-white leading-[1.5]">
                    {highlight.title}
                  </h3>
                  <p className="font-normal text-[#979797] text-base leading-[1.5]">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen py-30">
        <div className="mb-12 text-center font-normal text-5xl text-white">
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
                    className="h-12 w-auto object-contain"
                    src={logo.src}
                  />
                  <div className="mx-10 flex items-center">
                    <div className="size-1.5 rounded-full bg-white/50" />
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
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
