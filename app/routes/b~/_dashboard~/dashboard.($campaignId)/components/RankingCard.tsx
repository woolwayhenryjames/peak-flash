import GlowContainer from "~/components/GlowContainer";
import { cn } from "~/lib/utils";

interface RankingCardProps {
  rank: string;
  username: string;
  points: string;
  pointsLabel: string;
}

export default function RankingCard({
  rank,
  username,
  points,
  pointsLabel,
}: RankingCardProps) {
  return (
    <div className="rounded-2xl border border-[#6A6B6B] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[18px]">
          <span className="letterspacing-[1.5%] font-medium text-base text-white">
            {rank}
          </span>
          <span className="letterspacing-[1.5%] font-medium text-base text-white">
            {username}
          </span>
        </div>
        <div className="flex gap-[27px]">
          <div className="text-right">
            <div className="letterspacing-[1.5%] bg-gradient-to-r from-[#b871ff] to-[#2cffbc] bg-clip-text font-medium text-transparent text-xl">
              {points}
            </div>
            <div className="text-[#979797] text-xs">{pointsLabel}</div>
          </div>
          <button type="button">
            <GlowContainer className="rounded-sm px-2 py-2">
              <svg
                className={cn("h-4 w-4 transition-transform")}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Chevron down</title>
                <path
                  d="M6 9l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </GlowContainer>
          </button>
        </div>
      </div>
    </div>
  );
}
