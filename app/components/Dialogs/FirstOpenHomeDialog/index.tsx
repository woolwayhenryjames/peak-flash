import { useEffect, useState } from 'react';
import GlowContainer from '~/components/GlowContainer';
import DialogWithCloseButton from '../DialogWithCloseButton';
import flower from './assets/flower.svg';

export default function FirstOpenHomeDialog({ score }: { score: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastDismissed = sessionStorage.getItem('firstOpenDialogDismissed');
    if (!lastDismissed) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle dismissing the dialog
  const handleDismiss = (state: boolean) => {
    sessionStorage.setItem('firstOpenDialogDismissed', Date.now().toString());
    setShow(state);
  };

  return (
    <DialogWithCloseButton
      className="rounded-2xl border border-[#84a0ff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      setShow={handleDismiss}
      show={show}
      style={{
        background:
          'linear-gradient(-12deg,#000 21%, #2A2659 76.3362%, #355DBF 100%)',
      }}
      type="black"
    >
      <div className="flex flex-col items-center gap-9">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Icon */}
          <img
            alt="Peak.AI Logo"
            className="size-17"
            src="/icons/favicon.svg"
          />

          {/* Welcome Text */}
          <div className="flex w-full flex-col items-center gap-3">
            <h1 className="white-gradient-text text-center font-medium text-xl leading-6">
              Welcome to Peak.AI!
            </h1>
            <p className="white-gradient-text text-center text-xs leading-5">
              Your Web3 TikTok rewards journey starts here
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-[141px] bg-white/20" />

        {/* KINDLE Score Card */}
        <div className="flex w-full items-center gap-2">
          {/* Logo */}
          <img alt="Flower" className="size-14" src={flower} />

          {/* Score Info */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full items-center gap-7">
              <span className="white-gradient-text font-medium text-base leading-6">
                KINDLE Score
              </span>
              <span className="font-semibold text-2xl text-[#67C9DA] leading-7">
                {score}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-3 w-full rounded bg-[#2A2A2A]">
              <div
                className="h-full rounded bg-gradient-to-r from-[#8080DA] to-[#1BCFDE]"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="flex w-full flex-col gap-3">
          <h2 className="white-gradient-text font-medium text-base leading-6">
            Ready to Earn?
          </h2>

          <div className="space-y-0">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#1BCFDE]" />
              <span className="text-[#A6A6A6] text-xs leading-5">
                Join campaigns & create TikTok videos
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#1BCFDE]" />
              <span className="text-[#A6A6A6] text-xs leading-5">
                Al auto-scores your content
              </span>
            </div>
          </div>
        </div>

        <button
          className="w-1/2 self-end"
          onClick={() => setShow(false)}
          type="button"
        >
          <GlowContainer>
            <span className="text-white">Start</span>
          </GlowContainer>
        </button>
      </div>
    </DialogWithCloseButton>
  );
}
