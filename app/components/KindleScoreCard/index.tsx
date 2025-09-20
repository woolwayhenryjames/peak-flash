import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import GlowContainer from '../GlowContainer';

export default function KindleScoreCard({
  score,
  rank,
}: {
  score: number;
  rank: number;
}) {
  return (
    <Link
      className="block rounded-2xl border border-gray-700/50 bg-gradient-to-b from-[#0f1219] to-141% to-[#212637] p-6 backdrop-blur-sm"
      to="/leaderboard"
      viewTransition
    >
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
          <div className="text-center">
            <div
              className={cn(
                'mb-1 font-semibold text-[#8080DA]',
                score > 0 ? 'text-2xl' : 'text-lg'
              )}
            >
              {score > 0 ? score : 'Grading'}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full overflow-hidden bg-gray-700">
            <div
              className="h-full bg-[#8080DA] transition-all duration-500"
              style={{ width: `${score}%` }}
            />
          </div>

          {/* Stats Row */}

          <GlowContainer
            className={cn(
              'ml-auto w-fit rounded-md py-1 text-white text-xs',
              score > 0 || 'px-6'
            )}
          >
            {score > 0 ? `#${rank}` : ''}
            <svg
              fill="none"
              height={score > 0 ? 13 : 18}
              viewBox="0 0 7 13"
              width={score > 0 ? 7 : 9}
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
        </div>
      </div>
    </Link>
  );
}
