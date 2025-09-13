import { Link } from 'react-router';
import GlowContainer from '../GlowContainer';

export default function StartEarningSection() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-700 bg-gradient-to-b from-[#0f1118] to-[#212636] p-6 backdrop-blur-sm">
      {/* Header Section */}
      <div className="flex flex-col gap-3">
        <h3 className="white-gradient-text font-medium text-xl leading-tight">
          Start Earning!
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Your account score is great, now join campaigns to earn tokens
        </p>
      </div>

      {/* CTA Button */}
      <Link
        className="relative flex w-full justify-between gap-3 border border-[#b7b7b7]/50 bg-gradient-to-b from-[#d9d9d9]/20 to-white/0 px-3 py-5"
        to="/ascent"
        viewTransition
      >
        <div className="-left-0.5 -top-0.5 absolute size-1 bg-[#D9D9D9]" />
        <div className="-right-0.5 -top-0.5 absolute size-1 bg-[#D9D9D9]" />
        <div className="-left-0.5 -bottom-0.5 absolute size-1 bg-[#D9D9D9]" />
        <div className="-right-0.5 -bottom-0.5 absolute size-1 bg-[#D9D9D9]" />
        <div className="flex flex-col text-start">
          <div className="font-semibold text-[#faff9b]">
            join ASCENT hub now!
          </div>
          <div className="text-[#acacac] text-sm">
            Post TikTok videos, AI auto-detects rewards
          </div>
        </div>
        <GlowContainer className="h-fit w-fit self-end rounded-md px-6 py-1">
          <span className="text-sm text-white">&gt;</span>
        </GlowContainer>
      </Link>
    </div>
  );
}
