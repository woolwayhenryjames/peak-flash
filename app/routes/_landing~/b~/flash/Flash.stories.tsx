import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CreateFlash from "./components/CreateFlash";
import MyFlash from "./components/MyFlash";
import GlowContainer from "~/components/GlowContainer";
import { Activity, Suspense } from "react";

const meta = {
  title: "Pages/Flash",
  component: CreateFlash,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CreateFlash>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Navigation Component
function MockNavigation() {
  return (
    <nav className="sticky top-0 z-50 border-[#444d57]/40 border-b bg-[#0A0B0D]/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
              <title>Peak AI Logo</title>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#68FEF5" />
              <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#4E9095" />
            </svg>
            <span className="font-['Orbitron'] text-xl font-bold text-white">Peak AI</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-[#8a8f98] hover:text-white">Home</a>
            <a href="#" className="text-[#8a8f98] hover:text-white">Peekaboos</a>
            <a href="#" className="text-[#8a8f98] hover:text-white">Pricing</a>
            <a href="#" className="text-[#8a8f98] hover:text-white">Learn</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#8a8f98] hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <title>X</title>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <button className="text-[#8a8f98] hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <title>TikTok</title>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </button>
          <button className="text-[#8a8f98] hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <title>Telegram</title>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </button>
          <span className="text-white">|</span>
          <button className="text-[#68FEF5] hover:text-[#4E9095]">Login</button>
        </div>
      </div>
    </nav>
  );
}

// Wrapper component that mimics the actual /b/flash page
function FlashPageWrapper() {
  const [showCreateFlash, setShowCreateFlash] = React.useState(false);
  const mockFlashesPromise = Promise.resolve([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0B0D] to-[#1a1f35]">
      <MockNavigation />
      
      <div className="container mx-auto mt-13 flex flex-1 flex-col gap-20 px-3 md:px-8">
        <div className="flex w-3/4 flex-col gap-8 md:mt-18 md:mb-40 md:w-1/2 md:gap-12 xl:w-1/3">
          <div className="flex flex-col gap-5 md:gap-9">
            <div className="font-medium text-2xl text-[#f2edea] md:font-normal md:text-5xl">
              Ready to create a new Flash?
            </div>
            <div className="font-normal text-[10px] text-base text-[#8a8f98] md:text-base">
              Create a new Flash to quickly engage users and grow your community
            </div>
          </div>
          <button
            className="transition-all disabled:cursor-not-allowed disabled:opacity-50"
            disabled={showCreateFlash}
            onClick={() => setShowCreateFlash(true)}
            type="button"
          >
            <GlowContainer className="w-fit bg-gradient-to-b from-[#182d2e] to-[#4d8f94] px-[50px] font-normal text-xs md:px-[100px] md:text-base">
              {showCreateFlash ? (
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>checkmark Icon</title>
                  <path
                    d="M4.41609 7.09233L6.55718 11.2406C6.55718 11.2406 10.0365 2.81015 15.5233 0C15.3897 2.00703 14.8544 3.74703 15.7909 5.88812C13.382 6.4228 8.43077 12.4448 6.82499 15.3887C4.54999 12.5787 1.87359 10.4376 0 9.7681L4.41609 7.09233Z"
                    fill="#54C18E"
                  />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="23"
                  viewBox="0 0 23 23"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Plus Icon</title>
                  <g clipPath="url(#clip0_1532_1571)">
                    <path
                      d="M11.5 0C5.09286 0 0 5.09286 0 11.5C0 17.9071 5.09286 23 11.5 23C17.9071 23 23 17.9071 23 11.5C23 5.09286 17.9071 0 11.5 0ZM11.5 21.3571C6.07857 21.3571 1.64286 16.9214 1.64286 11.5C1.64286 6.07857 6.07857 1.64286 11.5 1.64286C16.9214 1.64286 21.3571 6.07857 21.3571 11.5C21.3571 16.9214 16.9214 21.3571 11.5 21.3571Z"
                      fill="#68FEF5"
                    />
                    <path
                      d="M16.4286 10.6786H12.3214V6.57143C12.3214 6.07857 11.9929 5.75 11.5 5.75C11.0071 5.75 10.6786 6.07857 10.6786 6.57143V10.6786H6.57143C6.07857 10.6786 5.75 11.0071 5.75 11.5C5.75 11.9929 6.07857 12.3214 6.57143 12.3214H10.6786V16.4286C10.6786 16.9214 11.0071 17.25 11.5 17.25C11.9929 17.25 12.3214 16.9214 12.3214 16.4286V12.3214H16.4286C16.9214 12.3214 17.25 11.9929 17.25 11.5C17.25 11.0071 16.9214 10.6786 16.4286 10.6786Z"
                      fill="#68FEF5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1532_1571">
                      <rect fill="white" height="23" width="23" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {showCreateFlash ? "Flash creation in progress." : "Start New Flash"}
            </GlowContainer>
          </button>
        </div>
        <Activity mode={showCreateFlash ? "visible" : "hidden"}>
          <CreateFlash />
        </Activity>
        <Suspense
          fallback={
            <div className="flex flex-col gap-4">
              <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-800" />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    className="h-64 animate-pulse rounded-xl bg-gray-800"
                    key={i}
                  />
                ))}
              </div>
            </div>
          }
        >
          <MyFlash flashesPromise={mockFlashesPromise} />
        </Suspense>
      </div>
    </div>
  );
}

// Story 1: Create Flash Form (Simple)
export const CreateFlashForm: Story = {
  render: () => (
    <div className="min-h-screen bg-[#0A0B0D] p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 font-['Orbitron'] text-3xl font-bold text-white">
          Create Flash
        </h1>
        <CreateFlash />
      </div>
    </div>
  ),
};

// Story 2: My Flash List (Simple)
export const MyFlashEmpty: Story = {
  render: () => (
    <div className="min-h-screen bg-[#0A0B0D] p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 font-['Orbitron'] text-3xl font-bold text-white">
          My Flash
        </h1>
        <MyFlash flashes={[]} />
      </div>
    </div>
  ),
};

// Story 3: Full Page with Peak AI Layout (like localhost:5100/b/flash)
export const FullPageWithLayout: Story = {
  render: () => <FlashPageWrapper />,
};



