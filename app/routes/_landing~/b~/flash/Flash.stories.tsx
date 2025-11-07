import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CreateFlash from "./components/CreateFlash";
import MyFlash from "./components/MyFlash";

const meta = {
  title: "Pages/Flash",
  component: CreateFlash,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CreateFlash>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Create Flash Form
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

// Story 2: My Flash List (Empty State)
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

// Wrapper component for FullPage to use hooks properly
function FullPageWrapper() {
  const [showCreate, setShowCreate] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#0A0B0D] p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-['Orbitron'] text-3xl font-bold text-white">
            Flash
          </h1>
          <button
            type="button"
            onClick={() => setShowCreate(!showCreate)}
            className="rounded-lg bg-gradient-to-b from-[#68FEF5] to-[#4E9095] px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
          >
            {showCreate ? "View My Flash" : "Create New Flash"}
          </button>
        </div>
        
        {showCreate ? (
          <CreateFlash />
        ) : (
          <MyFlash flashes={[]} />
        )}
      </div>
    </div>
  );
}

// Story 3: Full Page with Both Components
export const FullPage: Story = {
  render: () => <FullPageWrapper />,
};



