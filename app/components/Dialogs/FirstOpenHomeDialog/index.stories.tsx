import type { Meta, StoryObj } from '@storybook/react-vite';
import FirstOpenHomeDialog from './index';

const meta = {
  title: 'Dialogs/FirstOpenHomeDialog',
  component: FirstOpenHomeDialog,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    score: {
      control: 'number',
      description: 'The KINDLE score to display in the dialog',
    },
  },
  args: {
    score: 87,
  },
} satisfies Meta<typeof FirstOpenHomeDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
