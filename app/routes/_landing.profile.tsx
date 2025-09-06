export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full text-center">
        {/* Main Card */}
        <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-b from-gray-900/90 to-gray-800/90 p-8 backdrop-blur-sm">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#8080DA] to-[#9595FF]">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Lightning bolt icon</title>
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mb-4 bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text font-bold text-3xl text-transparent">
            Profile
          </h1>

          {/* Subtitle */}
          <h2 className="mb-6 font-medium text-[#8080DA] text-xl">
            Coming Soon
          </h2>

          {/* Shimmer effect container */}
          <div className="relative overflow-hidden rounded-lg border border-gray-700/30 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-4">
            <div className="text-gray-300 text-xs">🚀 Get ready for launch</div>
            {/* Shimmer effect */}
            <div
              className="-skew-x-12 absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ filter: 'blur(2px)' }}
            />
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6">
          <a
            className="text-[#8080DA] text-sm transition-colors hover:text-white"
            href="/"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
