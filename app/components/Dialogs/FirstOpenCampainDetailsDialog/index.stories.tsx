import type { Meta, StoryObj } from '@storybook/react-vite';
import FirstOpenCampainDetailsDialog from './index';

const meta = {
  title: 'Dialogs/FirstOpenCampainDetailsDialog',
  component: FirstOpenCampainDetailsDialog,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    tags: {
      control: 'object',
      description: 'The tags to display in the dialog',
    },
    forceShow: {
      control: 'boolean',
      description: 'Force the dialog to show (useful for Storybook)',
    },
    id: {
      control: 'text',
      description: 'The ID of the campaign',
    },
  },
  args: {
    tags: ['AI', 'Web3', 'TikTok'],
    forceShow: true,
    id: 'campaign-1',
  },
} satisfies Meta<typeof FirstOpenCampainDetailsDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
