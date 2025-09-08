import type { Meta, StoryObj } from '@storybook/react-vite';
import GlowContainer from './index';

const meta = {
  title: 'Components/GlowContainer',
  component: GlowContainer,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content inside the glow container',
    },
    noShimmer: {
      control: 'boolean',
      description: 'Disable the shimmer animation effect',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    children: 'Glow Button',
    noShimmer: false,
  },
} satisfies Meta<typeof GlowContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoShimmer: Story = {
  args: {
    noShimmer: true,
  },
};

export const CustomContent: Story = {
  args: {
    children: 'Follow on Twitter',
  },
};

export const SmallButton: Story = {
  args: {
    children: 'Copy',
    className: 'w-fit rounded-sm px-3 py-1 text-sm',
  },
};

export const IconButton: Story = {
  args: {
    children: (
      <div className="flex items-center gap-2">
        <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
          <title>Star icon</title>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        Star
      </div>
    ),
  },
};
