export default function KindleScoreCard() {
  return (
    <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-b from-gray-900/90 to-gray-800/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col gap-6">
        {/* Header and Score Section */}
        <div className="flex items-center justify-between">
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
            <div className="mb-1 font-semibold text-2xl text-purple-400">
              8.7
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
            <div
              className="h-full rounded-full bg-purple-500 transition-all duration-500"
              style={{ width: '67.4%' }}
            />
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">This week +0.3</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded border border-gray-400/50 bg-gradient-to-r from-gray-200 to-gray-300 px-2 py-1">
                <span className="font-normal text-gray-900">#8</span>
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Dropdown arrow</title>
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
