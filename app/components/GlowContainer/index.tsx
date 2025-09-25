import type { ComponentPropsWithoutRef } from "react";
import { cn } from "~/lib/utils";

interface GlowContainerProps extends ComponentPropsWithoutRef<"div"> {
  noShimmer?: boolean;
}

export default function GlowContainer({
  children,
  className,
  noShimmer,
  ...props
}: GlowContainerProps) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-4 py-3",
        "border border-[#D0D0D0] text-center font-medium text-white transition",
        className
      )}
      {...props}
    >
      {children}
      {/* Shimmer effect */}
      {!noShimmer && (
        <div
          className="-skew-x-12 absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ filter: "blur(4px)" }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          filter: "url(#prefix__prefix__filter1_ddf_134_3428)",
        }}
      >
        <div
          className="size-full rounded-2xl bg-linear-[3.07deg] from-white to-white/10"
          style={{
            clipPath: "url(#myCustomShape)",
          }}
        />
      </div>
    </div>
  );
}
