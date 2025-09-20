import { useEffect, useState } from 'react';
import GlowContainer from '~/components/GlowContainer';
import DialogWithCloseButton from '../DialogWithCloseButton';
import flower from './assets/flower.svg';

export default function FirstGetScoreDialog({
  score,
  forceShow = false,
}: {
  score: number;
  forceShow?: boolean;
}) {
  const [show, setShow] = useState(forceShow);

  useEffect(() => {
    const lastDismissed = localStorage.getItem(
      `${FirstGetScoreDialog.name}Dismissed`
    );
    if (!lastDismissed && score > 0) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [score]);

  // Handle dismissing the dialog
  const handleDismiss = (state: boolean) => {
    localStorage.setItem(
      `${FirstGetScoreDialog.name}Dismissed`,
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
          'linear-gradient(-12deg,#000 21%, #2A2659 76.3362%, #355DBF 100%)',
      }}
    >
      <div className="flex flex-col items-center gap-9">
        <div className="flex gap-2 self-start">
          <svg
            fill="none"
            height="28"
            viewBox="0 0 9 28"
            width="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>!</title>
            <path
              d="M7.89344 0L7.08197 19.9147H1.47541L0.663934 0H7.89344ZM4.57377 28C3.29508 28 2.21311 27.761 1.32787 27.2831C0.442623 26.8051 0 26.221 0 25.5306C0 24.8402 0.442623 24.256 1.32787 23.7781C2.21311 23.3001 3.29508 23.0612 4.57377 23.0612C5.80328 23.0612 6.83607 23.3001 7.67213 23.7781C8.55738 24.256 9 24.8402 9 25.5306C9 26.221 8.55738 26.8051 7.67213 27.2831C6.83607 27.761 5.80328 28 4.57377 28Z"
              fill="#4AFFE4"
            />
          </svg>
          <div className="font-medium text-[#f2f4fa] text-xl">Notice</div>
        </div>
        {/* KINDLE Score Card */}
        <div className="flex w-full gap-2">
          {/* Logo */}
          <img alt="Flower" className="size-14" src={flower} />

          {/* Score Info */}
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex justify-between gap-7">
              <span className="font-medium text-base text-white leading-6">
                Your KINDLE Score is:
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
        <button
          className="w-1/2 self-end"
          onClick={() => handleDismiss(false)}
          type="button"
        >
          <GlowContainer className="text-white">Ok</GlowContainer>
        </button>
      </div>
    </DialogWithCloseButton>
  );
}
