import { useEffect, useMemo, useState } from 'react';
import GlowContainer from '~/components/GlowContainer';
import DialogWithCloseButton from '../DialogWithCloseButton';
import flower from './assets/flower.svg';

export default function FirstOpenCampainDetailsDialog({
  id,
  joinRequirement,
  forceShow = false,
}: {
  id: string;
  joinRequirement: unknown;
  forceShow?: boolean;
}) {
  const [show, setShow] = useState(forceShow);
  const tags = useMemo(() => {
    if (joinRequirement && typeof joinRequirement === 'object') {
      const tagsKey = Object.keys(joinRequirement).find((key) =>
        key.toLowerCase().includes('tag')
      );
      if (tagsKey) {
        return (joinRequirement as any)[tagsKey] as string[];
      }
    }
    return null;
  }, [joinRequirement]);

  useEffect(() => {
    const lastDismissed = localStorage.getItem(
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
    localStorage.setItem(
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
      className="max-w-md"
      setShow={handleDismiss}
      show={show}
    >
      <div className="flex flex-col gap-8 p-8">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-2">
            {/* Flower Logo */}
            <img alt="Flower Logo" className="size-18" src={flower} />

            {/* Title and Subtitle */}
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-center font-medium text-white text-xl leading-tight">
                Join Campaign
              </h1>
              <p className="text-center text-white text-xs leading-relaxed">
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
          <div>
            {instructions.map((ins, index) => (
              <div className="flex items-start gap-4" key={index}>
                <div className="flex flex-col items-center">
                  <div className="flex size-5 items-center justify-center bg-[#F3EEEA]">
                    <span className="font-medium text-[#141616] text-sm">
                      {index + 1}
                    </span>
                  </div>
                  {/* Dotted line connector - only show if not the last item */}
                  {index < instructions.length - 1 && (
                    <div className="h-5 w-px border-[#5f5f5f] border-l border-dotted" />
                  )}
                </div>
                <span className="flex-1 text-[#D8D8D8] text-xs">{ins}</span>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-base text-white">Tips</h2>

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
