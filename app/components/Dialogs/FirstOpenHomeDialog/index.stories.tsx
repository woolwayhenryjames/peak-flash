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
  },
  args: {
    forceShow: true,
  },
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstOpenHomeDialog: Story = {};
