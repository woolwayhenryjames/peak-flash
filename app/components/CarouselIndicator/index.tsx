import { cn } from "~/lib/utils";

interface CarouselIndicatorProps {
  total: number;
  current: number;
  onSelect?: (index: number) => void;
}

export default function CarouselIndicator({
  total,
  current,
  onSelect,
}: CarouselIndicatorProps) {
  return (
    <div className="flex items-center gap-[9px]">
      {Array.from({ length: total }).map((_, index) => (
        <button
          aria-label={`Go to slide ${index + 1}`}
          className={cn(
            "relative h-1 rounded-[1.5px] bg-white transition-all duration-300",
            index === current ? "w-9" : "w-[6.49px]"
          )}
          key={`indicator-${index}`}
          onClick={() => onSelect?.(index)}
          type="button"
        >
          {/* Glow effect for active indicator */}
          {index === current && (
            <>
              <div className="absolute inset-0 rounded-[1.5px] bg-white shadow-[0_0_0.91px_0_rgba(255,255,255,1)]" />
              <div className="absolute inset-0 rounded-[1.5px] bg-white shadow-[0_0_1.82px_0_rgba(255,255,255,1)]" />
              <div className="absolute inset-0 rounded-[1.5px] bg-white shadow-[0_0_6.38px_0_rgba(255,255,255,1)]" />
              <div className="absolute inset-0 rounded-[1.5px] bg-white shadow-[0_0_12.75px_0_rgba(255,255,255,1)]" />
              <div className="absolute inset-0 rounded-[1.5px] bg-white shadow-[0_0_21.86px_0_rgba(255,255,255,1)]" />
              <div className="absolute inset-0 rounded-[1.5px] bg-white shadow-[0_0_38.25px_0_rgba(255,255,255,1)]" />
            </>
          )}
        </button>
      ))}
    </div>
  );
}
