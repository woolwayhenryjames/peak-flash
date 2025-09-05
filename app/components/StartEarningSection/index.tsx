import ctaSvg from './assets/cta.svg';

export default function StartEarningSection() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 p-6 backdrop-blur-sm">
      {/* Header Section */}
      <div className="flex flex-col gap-3">
        <h3 className="bg-gradient-to-r from-slate-500 via-white to-slate-600 bg-clip-text font-medium text-transparent text-xl leading-tight">
          Start Earning!
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Your account score is great, now join campaigns to earn tokens
        </p>
      </div>

      {/* Stats Card */}
      <div className="flex flex-col gap-3 rounded-lg border border-slate-700 bg-slate-900/80 p-4">
        {/* Today's available rewards */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-white">Today's available rewards</div>
          <div className="flex items-end gap-1">
            <span className="font-medium text-2xl text-purple-400 md:text-3xl">
              500
            </span>
            <span className="pb-1 text-slate-400 text-sm">tokens</span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-slate-700" />

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-lg text-white">3</div>
            <div className="text-slate-400 text-xs">Active Tasks</div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-medium text-lg text-white">$2.5K</div>
            <div className="text-slate-400 text-xs">Total Pool</div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-medium text-lg text-white">24h</div>
            <div className="text-slate-400 text-xs">Auto Detect</div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full" type="button">
        <img
          alt="Call to Action"
          className="mx-auto aspect-323/110 w-full max-w-md object-cover"
          src={ctaSvg}
        />
      </button>
    </div>
  );
}
