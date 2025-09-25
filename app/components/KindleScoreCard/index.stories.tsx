import type { Meta, StoryObj } from "@storybook/react-vite";
import KindleScoreCard from "./index";

const meta = {
  title: "Components/KindleScoreCard",
  component: KindleScoreCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Kindle Score card component displaying user score, rank, and progress with a gradient design.",
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (StoryComponent) => (
      <div className="min-h-screen bg-gradient-to-b from-25% from-black to-[#9595FF] to-[125%] p-8">
        <div className="max-w-md">
          <StoryComponent />
        </div>
      </div>
    ),
  ],
  argTypes: {
    score: {
      control: { type: "number", min: 0, max: 1000, step: 1 },
      description: "User Kindle Score value",
    },
    rank: {
      control: { type: "number", min: 1, max: 10_000, step: 1 },
      description: "User rank position",
    },
  },
  args: {
    score: 25,
    rank: 1247,
  },
} satisfies Meta<typeof KindleScoreCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PerfectScore: Story = {
  args: {
    score: 100,
    rank: 1,
  },
};

export const NewUser: Story = {
  args: {
    score: 0,
    rank: 9999,
  },
};
