import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import {
  PricingCard,
  type PricingPlan,
} from "~/routes/_landing~/pricing/PricingCard";
import faqbg from "./assets/faq-bg.svg";

export function meta() {
  return [
    {
      title: "Pricing - Peak AI Campaign Management Platform",
    },
    {
      name: "description",
      content:
        "Explore Peak AI's flexible pricing plans for crypto and AI campaign management. Compensate creators based on results with advanced analytics and seamless campaign management.",
    },
    {
      name: "keywords",
      content:
        "Peak AI pricing, campaign management pricing, creator analytics, crypto campaigns, AI campaigns, performance-based compensation",
    },
    {
      property: "og:title",
      content: "Peak AI Pricing - Results-Based Creator Compensation",
    },
    {
      property: "og:description",
      content:
        "PEAKAI delivers advanced creator analytics and seamless campaign management. Compensate based on results, not estimation.",
    },
  ];
}

export default function Pricing() {
  return (
    <div className="bg-black">
      <div
        className="flex h-70 items-center justify-start px-3 md:h-140"
        style={{
          background:
            "linear-gradient(to bottom left, #FDFFF7 0%, #B491BB 27%, #1B2C45 40%, #000 50%) bottom right / 50% 50% no-repeat, linear-gradient(to top left, #FDFFF7 0%, #B491BB 27%, #1B2C45 40%, #000 50%) top right / 50% 50% no-repeat",
        }}
      >
        <div className="m-5 w-[75%] space-y-6 md:m-[10%] md:w-1/2 md:space-y-9 lg:p-[8%]">
          <div className="font-normal text-[#f2edea] text-xl md:text-7xl">
            Compensate based on results, not estimation
          </div>
          <div className="font-light text-[#cacaca] text-xs md:text-2xl">
            PeakAI delivers advanced creator analytics and seamless campaign
            management, empowering your success—your achievements are our top
            priority.
          </div>
        </div>
      </div>

      {/* Pricing Packages Section */}
      <div className="container mx-auto grid place-items-center md:py-56">
        <div className="grid w-full justify-center gap-y-12 md:grid-cols-2 md:gap-y-24">
          {pricingPlans.map((plan, index) => (
            <PricingCard index={index} key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
      {/* FAQs Section */}
      <div
        className="container mx-auto grid place-items-center bg-contain bg-no-repeat py-12 md:bg-cover md:py-24"
        style={{
          backgroundImage: `url("${faqbg}")`,
        }}
      >
        <div className="mb-12 text-center font-normal text-white text-xl leading-[80px] md:mb-20 md:text-5xl">
          FAQs
        </div>
        <div className="contents w-full max-w-[1400px] flex-col items-center justify-end rounded-[63px] border border-zinc-800 bg-gradient-to-b from-[#0d0d0d] to-[#0d0d0d]/0 md:flex md:px-12 md:pt-12">
          <div className="mx-2 contents w-full rounded-[56px] border border-zinc-800 bg-gradient-to-b from-[#030303] to-[#090909]/0 p-15 md:block">
            <Accordion
              className="space-y-4 max-md:mx-5 md:w-full md:space-y-8"
              collapsible
              type="single"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  className="w-full overflow-hidden"
                  key={faq.id}
                  value={faq.id}
                >
                  <div className="w-full rounded-xl border border-[#4D4D4D] bg-[rgba(37,34,51,0.2)]">
                    <AccordionTrigger className="group w-full px-6 py-6 text-left hover:no-underline md:px-[91px]">
                      <div className="flex w-full items-start justify-between gap-4 md:items-center">
                        <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-[10px]">
                          <span className="font-normal text-[#C6C6C6] text-sm leading-[1.4em] md:text-3xl">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown className="mt-2 size-6 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180 md:mt-0" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="w-full overflow-hidden px-6 pb-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:px-[91px]">
                      <p className="whitespace-pre-wrap pt-6 font-normal text-[#A1A1A1] text-xs leading-[1.5em] md:text-2xl">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Package",
    price: "$1,999",
    benefits: [
      "Single campaign",
      "Unlimited creator participation",
      "30-day campaign duration",
      "Basic AI scoring and matching",
      "Standard analytics reports",
      "Email customer support",
    ],
  },
  {
    id: "professional",
    name: "Professional Package",
    price: "$4,999",
    isPopular: true,
    benefits: [
      "Up to 3 concurrent campaigns",
      "Unlimited creator participation",
      "Flexible campaign duration (7-90 days)",
      "Advanced AI matching algorithms and real-time optimization",
      "In-depth analytics and insights reports",
      "Dedicated account manager",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Package",
    price: "$12,999",
    benefits: [
      "Unlimited concurrent campaigns",
      "Unlimited creator participation",
      "Custom campaign durations",
      "Customized AI scoring models",
      "Open API access",
      "Real-time dashboards and alerts",
    ],
  },
  {
    id: "custom",
    name: "Custom Package",
    price: "Contact Sales",
    benefits: [
      "Tailored solutions",
      "Multi-brand management",
      "Global deployment support",
      "Dedicated customer success team",
    ],
  },
];

const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Where can PeakAI users view data after launching a campaign?",
    answer:
      "After successfully paying for cooperation and publishing a campaign, PeakAI users can log in as an enterprise to access a dedicated dashboard page. PeakAI is also planning to launch additional management features like campaign creation pages, enabling comprehensive project management for all stakeholders.",
  },
  {
    id: "faq-2",
    question: "How often is PeakAI user data updated?",
    answer:
      "Due to the complexity of PeakAI's scoring algorithms and data processing systems, PeakAI currently ensures that user data is updated within 24 hours. This timeframe allows PeakAI to maintain data accuracy while processing the intricate calculations required for PeakAI's AI-powered scoring system.",
  },
  {
    id: "faq-3",
    question: "Who determines PeakAI's reward distribution rules?",
    answer:
      "PeakAI provides a professional AI scoring system that precisely captures and analyzes creator content, updating corresponding scores and rankings to project teams. The specific reward distribution rules are determined by the project teams themselves, who can reference SPARK Points, KINDLE Scores, and the actual content published by creators to establish their reward criteria.\n\n\t PeakAI will provide a creators list (including wallet addresses) based on project requirements, and rewards are distributed independently by the project teams.",
  },
  {
    id: "faq-4",
    question: "What are PeakAI's specific scoring criteria and dimensions?",
    answer:
      "We use two primary metrics: SPARK Points and KINDLE Score. These metrics evaluate creators across multiple dimensions including content quality, engagement rates, audience authenticity, campaign alignment, and performance consistency.\n\n\t Our AI system analyzes these factors to provide comprehensive scoring that reflects true creator value and impact.",
  },
  {
    id: "faq-5",
    question: "Where does PeakAI's data come from?",
    answer:
      "PeakAI's data is sourced from TikTok's official API, combined with PeakAI's proprietary AI intelligent analysis systems and technical processes. This multi-layered approach ensures data completeness and real-time accuracy, providing reliable insights for campaign management and creator evaluation.",
  },
];
