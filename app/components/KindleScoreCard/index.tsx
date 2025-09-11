import { Link } from 'react-router';
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
      className="rounded-2xl border border-gray-700/50 bg-gradient-to-b from-gray-900/90 to-gray-800/90 p-6 backdrop-blur-sm"
      to="/leaderboard"
      viewTransition
    >
      <div className="flex flex-col gap-6">
        {/* Header and Score Section */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="white-gradient-text mb-2 font-medium text-lg">
                Kindle Score
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed">
                Account value-based score that helps boost rewards in campaigns
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-1 font-semibold text-2xl text-[#8080DA]">
              {score}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full overflow-hidden bg-gray-700">
            <div
              className="h-full bg-[#8080DA] transition-all duration-500"
              style={{ width: score >= 100 ? '100%' : `${score}%` }}
            />
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">This week +0.3</span>
            <GlowContainer className="w-fit rounded-md py-1">
              <span className="text-white text-xs">#{rank}&nbsp;&gt;</span>
            </GlowContainer>
          </div>
        </div>
      </div>
    </Link>
  );
}
