import { Link } from "react-router";
import { cn } from "~/lib/utils";
import GlowContainer from "../GlowContainer";
import gift from "./assets/gift.svg";

export default function KindleScoreCard({
  score,
  rank,
}: {
  score: number | null | undefined;
  rank: number;
}) {
  return (
    <div className="block rounded-2xl border border-gray-700/50 bg-gradient-to-b from-[#0f1219] to-141% to-[#212637] p-6 backdrop-blur-sm">
      <div className="flex flex-col gap-6">
        {/* Header and Score Section */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="mb-2 font-medium text-lg text-white">
                Kindle Score
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed">
                Account value-based score that helps boost rewards in campaigns
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center">
            <div
              className={cn(
                "mb-1 font-semibold text-[#8080DA]",
                score != null ? "text-2xl" : "text-lg"
              )}
            >
              {score != null ? score : "Grading"}
            </div>
            <Link className="flex-shrink-0" to="/u/lucky" viewTransition>
              <img alt="gift" className="size-6" src={gift} />
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <Link
          className="flex flex-col gap-2"
          to="/u/leaderboard"
          viewTransition
        >
          <div className="h-3 w-full overflow-hidden bg-gray-700">
            <div
              className="h-full bg-[#8080DA] transition-all duration-500"
              style={{ width: `${score}%` }}
            />
          </div>

          {/* Stats Row */}

          <GlowContainer
            className={cn(
              "ml-auto w-fit rounded-md py-1 text-white text-xs",
              score != null || "px-6"
            )}
          >
            {score != null ? `#${rank}` : ""}
            <svg
              fill="none"
              height={score != null ? 13 : 18}
              viewBox="0 0 7 13"
              width={score != null ? 7 : 9}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <path
                d="M1 11.6667L5.58 6.66584L0.999999 1.66666"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
            </svg>
          </GlowContainer>
        </Link>
      </div>
    </div>
  );
}
