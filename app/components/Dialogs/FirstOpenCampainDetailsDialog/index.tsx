import { useEffect, useState } from 'react';
import GlowContainer from '~/components/GlowContainer';
import DialogWithCloseButton from '../DialogWithCloseButton';
import flower from './assets/flower.svg';

export default function FirstOpenCampainDetailsDialog({
  id,
  tags,
  forceShow = false,
}: {
  id: string;
  tags?: string[];
  forceShow?: boolean;
}) {
  const [show, setShow] = useState(forceShow);

  useEffect(() => {
    const lastDismissed = sessionStorage.getItem(
      `${FirstOpenCampainDetailsDialog.name}${id}Dismissed`
    );
    if (!lastDismissed) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [id]);

  // Handle dismissing the dialog
  const handleDismiss = (state: boolean) => {
    sessionStorage.setItem(
      `${FirstOpenCampainDetailsDialog.name}${id}Dismissed`,
      Date.now().toString()
    );
    setShow(state);
  };

  const instructions: React.ReactNode[] = [
    'Create TikTok video',
    <>
      Make sure to use hashtags in video description:{' '}
      <span className="text-[#99FFF8]">
        {tags?.map((tag) => `#${tag}`).join(', ')}
      </span>
    </>,
    'AI will complete scoring within 24 hours (scoring will be continuously updated)',
  ];

  return (
    <DialogWithCloseButton
      className="max-w-md rounded-2xl border border-[#84a0ff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      setShow={handleDismiss}
      show={show}
      style={{
        background:
          'linear-gradient(-18deg, rgba(0, 0, 0, 1) 43%, rgba(42, 38, 89, 1) 90%, rgba(53, 93, 191, 1) 100%)',
      }}
      type="black"
    >
      <div className="flex flex-col gap-8 p-8">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-2">
            {/* Flower Logo */}
            <img alt="Flower Logo" className="size-18" src={flower} />

            {/* Title and Subtitle */}
            <div className="flex flex-col items-center gap-3">
              <h1 className="white-gradient-text text-center font-medium text-xl leading-tight">
                Join Campaign
              </h1>
              <p className="white-gradient-text text-center text-xs leading-relaxed">
                Start earning rewards now
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/20" />
        </div>

        {/* Steps Section */}
        <div className="flex flex-col gap-9">
          {/* Steps List */}
          <div className="space-y-5">
            {instructions.map((ins, index) => (
              <div className="flex items-start gap-4" key={index}>
                <div className="flex min-w-fit items-center justify-center rounded bg-[#F3EEEA] px-1.5">
                  <span className="font-medium text-[#141616] text-sm">
                    {index + 1}
                  </span>
                </div>
                <span className="flex-1 text-[#D8D8D8] text-xs">{ins}</span>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="flex flex-col gap-4">
            <h2 className="white-gradient-text font-medium text-base">Tips</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="size-1 rounded-full bg-[#1BCFDE]" />
                <span className="text-[#A6A6A6] text-xs">
                  Make engaging content
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-1 rounded-full bg-[#1BCFDE]" />
                <span className="text-[#A6A6A6] text-xs">
                  Use trending effects
                </span>
              </div>
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
