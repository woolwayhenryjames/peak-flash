import type { Meta, StoryObj } from '@storybook/react-vite';
import CampaignCard from './index';

const meta = {
  title: 'Components/CampaignCard',
  component: CampaignCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A campaign card component displaying campaign information including status, token pool, participants count, and user ranking.',
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div className="min-h-screen bg-gradient-to-b from-25% from-black to-[#9595FF] to-[125%] p-8">
        <StoryComponent />
      </div>
    ),
  ],
  argTypes: {
    name: {
      control: 'text',
      description: 'Campaign name',
    },
    description: {
      control: 'text',
      description: 'Campaign description',
    },
    poolSize: {
      control: 'number',
      description: 'Token pool size',
    },
    participants: {
      control: 'text',
      description: 'Number of participants',
    },
    userRank: {
      control: 'number',
      description: 'User ranking',
    },
    image: {
      control: 'text',
      description: 'Campaign image URL (optional)',
    },
    isParticipating: {
      control: 'boolean',
      description: 'Whether user is participating in campaign',
    },
    startDate: {
      control: 'date',
      description: 'Campaign start date',
    },
    endDate: {
      control: 'date',
      description: 'Campaign end date',
    },
  },
} satisfies Meta<typeof CampaignCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story based on the Figma design
export const InfinityGround: Story = {
  args: {
    id: 'infinity-ground',
    name: 'Infinity Ground',
    description: 'AI-powered gaming platform',
    poolSize: 50_000,
    participants: '1,234',
    userRank: 8,
    isParticipating: true,
    startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // Started 10 days ago (active)
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // Ends in 5 days (active)
    createdAt: new Date(),
    updatedAt: new Date(),
    image: null,
    joinRequirement: null,
  },
};

// 0G Campaign with logo
export const ZeroGCampaign: Story = {
  args: {
    id: '0g-campaign',
    name: '0G Campaign',
    description: 'Decentralized storage network',
    poolSize: 30_000,
    participants: '856',
    userRank: 15,
    isParticipating: true,
    startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // Started 10 days ago
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Ends in 2 days (ending-soon)
    createdAt: new Date(),
    updatedAt: new Date(),
    image:
      'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=100&h=100&fit=crop&crop=center',
    joinRequirement: null,
  },
};

// Kaito AI campaign with new status
export const KaitoAI: Story = {
  args: {
    id: 'kaito-ai',
    name: 'Kaito AI',
    description: 'AI-powered crypto analysis',
    poolSize: 75_000,
    participants: '234',
    userRank: 15,
    isParticipating: true,
    startDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // Started 3 days ago (new)
    endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // Ends in 10 days
    createdAt: new Date(),
    updatedAt: new Date(),
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center',
    joinRequirement: null,
  },
};

// Galxe campaign
export const Galxe: Story = {
  args: {
    id: 'galxe',
    name: 'Galxe',
    description: 'Web3 credential data network',
    poolSize: 100_000,
    participants: '2,156',
    userRank: 15,
    isParticipating: true,
    startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // Started 15 days ago (active)
    endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // Ends in 10 days
    createdAt: new Date(),
    updatedAt: new Date(),
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop&crop=center',
    joinRequirement: null,
  },
};

// Card with long content
export const LongContent: Story = {
  args: {
    id: 'long-content',
    name: 'Very Long Campaign Title That Might Wrap',
    description:
      'This is a much longer description that demonstrates how the card handles extended content and text wrapping in the description area',
    poolSize: 999_999,
    participants: '50,000',
    userRank: 999,
    isParticipating: true,
    startDate: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000), // Started 40 days ago
    endDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Ends in 30 days
    createdAt: new Date(),
    updatedAt: new Date(),
    image: null,
    joinRequirement: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Campaign card with longer content to test text wrapping and layout',
      },
    },
  },
};

// Minimal data
export const MinimalData: Story = {
  args: {
    id: 'minimal',
    name: 'Test',
    description: 'Short',
    poolSize: 100,
    participants: '1',
    userRank: 1,
    isParticipating: false,
    startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Started 2 days ago (new)
    endDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Ends in 1 day
    createdAt: new Date(),
    updatedAt: new Date(),
    image: null,
    joinRequirement: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'Campaign card with minimal data',
      },
    },
  },
};
