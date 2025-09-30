import type { Meta, StoryObj } from "@storybook/react-vite";

import type { PageSetting } from "~/utils/cmsApi";

import Footer from "./index";

// Mock PageSetting data
const mockPageSetting: PageSetting = {
  id: 1,
  documentId: "mock-doc-id",
  title: "Infinity Ground",
  subTitle: "Build Amazing Games",
  aiSlogan: "AI-Powered Game Development",
  aiLink: "/ai",
  newGame: "Create New Game",
  aboutUs: "About Infinity Ground",
  endText: "Build your dreams with AI",
  gamesHeader: "Featured Games",
  aboutUsPage: [
    {
      type: "paragraph",
      children: [{ type: "text", text: "Learn more about our mission" }],
    },
  ],
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z",
  publishedAt: "2024-01-01T00:00:00.000Z",
  termOfService: "https://example.com/terms",
  privacyPolicy: "https://example.com/privacy",
  SNS: [
    {
      id: 1,
      documentId: "twitter-doc",
      name: "Twitter",
      link: "https://twitter.com/infinityground",
      icon: {
        id: 1,
        documentId: "twitter-icon",
        name: "twitter-icon.svg",
        alternativeText: null,
        caption: null,
        width: 24,
        height: 24,
        hash: "twitter_hash",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 1.2,
        url: "/icons/twitter.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
      },
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      publishedAt: "2024-01-01T00:00:00.000Z",
    },
    {
      id: 2,
      documentId: "discord-doc",
      name: "Discord",
      link: "https://discord.gg/infinityground",
      icon: {
        id: 2,
        documentId: "discord-icon",
        name: "discord-icon.svg",
        alternativeText: null,
        caption: null,
        width: 24,
        height: 24,
        hash: "discord_hash",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 1.1,
        url: "/icons/discord.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
      },
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      publishedAt: "2024-01-01T00:00:00.000Z",
    },
    {
      id: 3,
      documentId: "github-doc",
      name: "GitHub",
      link: "https://github.com/infinityground",
      icon: {
        id: 3,
        documentId: "github-icon",
        name: "github-icon.svg",
        alternativeText: null,
        caption: null,
        width: 24,
        height: 24,
        hash: "github_hash",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 1.0,
        url: "/icons/github.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
      },
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      publishedAt: "2024-01-01T00:00:00.000Z",
    },
  ],
};

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Footer component that displays company information, navigation links, social media links, and legal links.",
      },
    },
  },
  argTypes: {
    pageSetting: {
      control: "object",
      description:
        "Page settings containing social links and legal information",
    },
  },
  decorators: [
    (Child) => (
      <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
        <div style={{ paddingTop: "50vh" }}>
          <Child />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageSetting: mockPageSetting,
  },
};

export const WithoutSocialLinks: Story = {
  args: {
    pageSetting: {
      ...mockPageSetting,
      SNS: [],
    },
  },
};

export const SingleSocialLink: Story = {
  args: {
    pageSetting: {
      ...mockPageSetting,
      SNS: [mockPageSetting.SNS[0]],
    },
  },
};

export const ManySocialLinks: Story = {
  args: {
    pageSetting: {
      ...mockPageSetting,
      SNS: [
        ...mockPageSetting.SNS,
        {
          id: 4,
          documentId: "linkedin-doc",
          name: "LinkedIn",
          link: "https://linkedin.com/company/infinityground",
          icon: {
            id: 4,
            documentId: "linkedin-icon",
            name: "linkedin-icon.svg",
            alternativeText: null,
            caption: null,
            width: 24,
            height: 24,
            hash: "linkedin_hash",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 1.3,
            url: "/icons/linkedin.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z",
            publishedAt: "2024-01-01T00:00:00.000Z",
          },
          createdAt: "2024-01-01T00:00:00.000Z",
          updatedAt: "2024-01-01T00:00:00.000Z",
          publishedAt: "2024-01-01T00:00:00.000Z",
        },
        {
          id: 5,
          documentId: "youtube-doc",
          name: "YouTube",
          link: "https://youtube.com/@infinityground",
          icon: {
            id: 5,
            documentId: "youtube-icon",
            name: "youtube-icon.svg",
            alternativeText: null,
            caption: null,
            width: 24,
            height: 24,
            hash: "youtube_hash",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 1.4,
            url: "/icons/youtube.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z",
            publishedAt: "2024-01-01T00:00:00.000Z",
          },
          createdAt: "2024-01-01T00:00:00.000Z",
          updatedAt: "2024-01-01T00:00:00.000Z",
          publishedAt: "2024-01-01T00:00:00.000Z",
        },
      ],
    },
  },
};
