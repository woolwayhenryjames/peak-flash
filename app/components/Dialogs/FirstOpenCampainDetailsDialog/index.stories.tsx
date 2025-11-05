import type { Meta, StoryObj } from "@storybook/react-vite";
import component from "./index";

const meta = {
  title: "Dialogs",
  component,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    forceShow: {
      control: "boolean",
      description: "Force the dialog to show (useful for Storybook)",
    },
    id: {
      control: "text",
      description: "The ID of the campaign",
    },
    joinRequirement: {
      control: "object",
      description: "The join requirement object containing tags",
    },
  },
  args: {
    joinRequirement: { tags: ["AI", "Web3", "TikTok"] },
    forceShow: true,
    id: "campaign-1",
  },
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstOpenCampainDetailsDialog: Story = {};
