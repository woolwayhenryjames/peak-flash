import type { Meta, StoryObj } from '@storybook/react-vite';
import ActiveCampaigns from './index';

const meta = {
  title: 'Components/ActiveCampaigns',
  component: ActiveCampaigns,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    campaigns: {
      description: 'Array of campaign objects to display',
    },
  },
} satisfies Meta<typeof ActiveCampaigns>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCampaigns = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    name: '0G Campaign',
    image: null,
    poolSize: 30_000,
    isActive: true,
    startDate: '2025-09-01T00:00:00Z',
    endDate: '2025-09-11T23:59:59Z',
    description:
      'Participate in the 0G network campaign and earn tokens by completing various tasks and activities.',
    joinRequirement: 'Connect your wallet and complete KYC verification',
    isParticipating: false,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    name: 'Infinity Ground',
    image: null,
    poolSize: 50_000,
    isActive: true,
    startDate: '2025-08-15T00:00:00Z',
    endDate: '2025-10-15T23:59:59Z',
    description:
      'Join the Infinity Ground campaign for exclusive rewards and early access to new features.',
    joinRequirement: 'Minimum 100 followers on social media',
    isParticipating: true,
    userRank: 8,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    name: 'DeFi Rewards Pool',
    image: null,
    poolSize: 25_000,
    isActive: true,
    startDate: '2025-09-10T00:00:00Z',
    endDate: '2025-09-30T23:59:59Z',
    description:
      'Earn rewards by participating in DeFi activities and liquidity provision.',
    joinRequirement: 'Minimum $1000 liquidity provision',
    isParticipating: false,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    name: 'NFT Creator Challenge',
    image: null,
    poolSize: 15_000,
    isActive: false,
    startDate: '2025-08-01T00:00:00Z',
    endDate: '2025-08-31T23:59:59Z',
    description: 'Create and mint NFTs to compete for the prize pool.',
    joinRequirement: 'Submit original artwork',
    isParticipating: false,
  },
];

export const Default: Story = {
  args: {
    campaigns: mockCampaigns,
  },
};

export const OnlyActiveCampaigns: Story = {
  args: {
    campaigns: mockCampaigns.filter((campaign) => campaign.isActive),
  },
};

export const ParticipatingCampaigns: Story = {
  args: {
    campaigns: mockCampaigns.map((campaign) => ({
      ...campaign,
      isParticipating: true,
      userRank: Math.floor(Math.random() * 50) + 1,
    })),
  },
};

export const NoCampaigns: Story = {
  args: {
    campaigns: [],
  },
};

export const SingleCampaign: Story = {
  args: {
    campaigns: [mockCampaigns[0]],
  },
};

export const EndedCampaigns: Story = {
  args: {
    campaigns: mockCampaigns.map((campaign) => ({
      ...campaign,
      isActive: false,
      endDate: '2025-08-31T23:59:59Z',
    })),
  },
};
