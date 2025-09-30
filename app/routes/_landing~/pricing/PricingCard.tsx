import GlowContainer from "~/components/GlowContainer";
import { useMouse } from "~/lib/useMouse";
import { cn } from "~/lib/utils";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  isPopular?: boolean;
  benefits: string[];
}

export function PricingCard({
  plan,
  index,
}: {
  plan: PricingPlan;
  index: number;
}) {
  const { ref, x, y } = useMouse<HTMLDivElement>({ resetOnExit: true });

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-300",
        "max-md:mx-7 max-md:border max-md:border-white/20 max-md:p-7",
        index % 2 === 0 && "border-white/20 md:border-r",
        "hover:border-transparent"
      )}
      ref={ref}
    >
      {/* Moving highlight effect - subtle white gradient */}
      <div
        className="-inset-px pointer-events-none absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(217, 217, 217, 0.07), rgba(255, 255, 255, 0) 50%)`,
        }}
      />

      {/* Static border overlay for hover state - subtle white border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent" />
      </div>

      <div className="relative z-10 grid size-full place-items-center">
        <div className="flex h-full w-full flex-col px-2 md:w-107">
          {/* Package Name & Price */}
          <div className="mb-10 space-y-4">
            <div className="flex items-start justify-between max-md:flex-col">
              <h3 className="font-medium text-base text-white transition-colors duration-300 group-hover:text-white/90 md:text-2xl">
                {plan.name}
              </h3>
              {plan.isPopular && (
                <div className="rounded-full border border-gray-600 bg-green-500/20 px-2 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-green-500/30 md:px-8 md:py-1">
                  <span className="font-normal text-gray-100 text-sm">
                    POPULAR
                  </span>
                </div>
              )}
            </div>
            {plan.id === "custom" ? (
              <div className="font-semibold text-[#ffaa6a] text-xl transition-all duration-300 group-hover:text-[#ffb580] md:text-4xl">
                Contact Sales
              </div>
            ) : (
              <p
                className={cn("font-medium text-[#818181] text-sm md:text-xl")}
              >
                <span
                  className={cn(
                    "bg-gradient-to-r from-[#B871FF] to-[#2CFFBC]",
                    "bg-clip-text font-medium text-transparent text-xl leading-[1.5em] transition-all duration-300 md:text-4xl",
                    "group-hover:from-[#c590ff] group-hover:to-[#5fffce]"
                  )}
                >
                  {plan.price}
                </span>
                /month
              </p>
            )}
          </div>

          {/* Benefits List */}
          <ul className="mb-10 flex-1 list-disc transition-all duration-300 marker:text-[#6BE6FF] group-hover:marker:text-[#8aebff] md:space-y-6">
            {plan.benefits.map((benefit) => (
              <li
                className="font-light text-[#ACACAC] text-sm transition-colors duration-300 group-hover:text-[#c0c0c0] md:text-lg"
                key={`${plan.id}-${benefit}`}
              >
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <GlowContainer
            className={cn(
              "w-fit cursor-pointer whitespace-nowrap px-8 py-4 transition-transform duration-300",
              "group-hover:bg-gradient-to-r group-hover:from-[#080C0D] group-hover:to-[#1E245D]"
            )}
          >
            <span className="font-normal text-[#F3EEEA] text-base md:text-2xl">
              Get Started
            </span>
          </GlowContainer>
        </div>
      </div>
    </div>
  );
}
