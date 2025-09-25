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
    show: {
      control: "boolean",
      description: "Whether the dialog is visible",
    },
    setShow: {
      action: "setShow",
      description: "Callback to change the dialog visibility",
    },
    id: {
      control: "text",
      description: "The ID of the campaign",
    },
  },
  args: {
    id: "campaign-1",
    show: true,
    setShow: () => {
      /* noop */
    },
  },
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubmitVideoDialog: Story = {};
