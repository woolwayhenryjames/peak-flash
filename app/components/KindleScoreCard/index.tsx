import GlowContainer from '../GlowContainer';

export default function KindleScoreCard({
  score,
  rank,
}: {
  score: number;
  rank: number;
}) {
  return (
    <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-b from-gray-900/90 to-gray-800/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col gap-6">
        {/* Header and Score Section */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="mb-2 bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text font-medium text-lg text-transparent">
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
            <GlowContainer className="w-fit overflow-hidden rounded-md py-1">
              <span className="text-white text-xs">#{rank}&nbsp;&gt;</span>
              {/* Shimmer effect */}
              <div
                className="-skew-x-12 absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ filter: 'blur(4px)' }}
              />
            </GlowContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
