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
    score: {
      control: "number",
      description: "The KINDLE score to display in the dialog",
    },
    forceShow: {
      control: "boolean",
      description: "Force the dialog to show (useful for Storybook)",
    },
  },
  args: {
    score: 87,
    forceShow: true,
  },
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstOpenHomeDialogWithScore: Story = {};

export const FirstOpenHomeDialogNoScore: Story = {
  args: { score: 0 },
};
