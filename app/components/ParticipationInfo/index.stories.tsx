import type { CampaignUser } from ".prisma/main/client";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import ParticipationInfo from "./index";

interface WrapperProps {
  initialExpand?: boolean;
  campaignUser?: Pick<CampaignUser, "id" | "videoCount" | "score"> | null;
  userRank?: number | null;
}

// Wrapper component to handle state
const ParticipationInfoWrapper = ({
  initialExpand,
  campaignUser,
  userRank,
}: WrapperProps) => {
  const [expand, setExpand] = useState(initialExpand ?? false);
  return (
    <ParticipationInfo
      campaignUser={campaignUser}
      expand={expand}
      setExpand={setExpand}
      userRank={userRank}
    />
  );
};

const meta = {
  title: "Components/ParticipationInfo",
  component: ParticipationInfoWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A collapsible profile performance component displaying Spark Points, performance stats, and recent video thumbnails.",
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (StoryComponent) => (
      <div className="mx-auto">
        <StoryComponent />
      </div>
    ),
  ],
  argTypes: {
    initialExpand: {
      control: "boolean",
      description: "Initial expanded state",
    },
    campaignUser: {
      control: "object",
      description: "Campaign user data with score and video count",
    },
    userRank: {
      control: "number",
      description: "User ranking position",
    },
  },
  args: {
    initialExpand: false,
    campaignUser: {
      id: 123,
      videoCount: 15,
      score: 85.5,
    },
    userRank: 3,
  },
} satisfies Meta<typeof ParticipationInfoWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Expanded: Story = {
  args: {
    initialExpand: true,
  },
};

export const NoData: Story = {
  args: {
    campaignUser: null,
    userRank: null,
  },
};

export const HighPerformer: Story = {
  args: {
    campaignUser: {
      id: 456,
      videoCount: 42,
      score: 795.8,
    },
    userRank: 1,
    initialExpand: true,
  },
};
