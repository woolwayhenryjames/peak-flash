import { useEffect, useState } from "react";
import GlowContainer from "~/components/GlowContainer";
import DialogWithCloseButton from "../DialogWithCloseButton";

export default function FirstOpenHomeDialog({
  forceShow = false,
}: {
  forceShow?: boolean;
}) {
  const [show, setShow] = useState(forceShow);

  useEffect(() => {
    const lastDismissed = localStorage.getItem(
      `${FirstOpenHomeDialog.name}Dismissed`
    );
    if (!lastDismissed) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle dismissing the dialog
  const handleDismiss = (state: boolean) => {
    localStorage.setItem(
      `${FirstOpenHomeDialog.name}Dismissed`,
      Date.now().toString()
    );
    setShow(state);
  };

  return (
    <DialogWithCloseButton
      setShow={handleDismiss}
      show={show}
      style={{
        background:
          "linear-gradient(-12deg,#000 21%, #2A2659 76.3362%, #355DBF 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-9">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Icon */}
          <img
            alt="Peak AI Logo"
            className="size-17"
            src="/icons/web-app-manifest-512x512.png"
          />

          {/* Welcome Text */}
          <div className="flex w-full flex-col items-center gap-3">
            <h1 className="text-center font-medium text-white text-xl leading-6">
              Welcome to Peak AI!
            </h1>
            <p className="text-center text-white text-xs leading-5">
              Your Web3 TikTok rewards journey starts here
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-[141px] bg-white/20" />

        {/* Features List */}
        <div className="flex w-full flex-col gap-3">
          <h2 className="font-medium text-base text-white leading-6">
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
          onClick={() => handleDismiss(false)}
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
