import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-onboarding', 'msw-storybook-addon'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: './.storybook/vite.config.ts',
      },
    },
  },
  staticDirs: ['../public'],
};
export default config;
