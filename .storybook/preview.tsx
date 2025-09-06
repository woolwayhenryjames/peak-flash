import type { Preview } from '@storybook/react-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../app/app.css';
import { createRoutesStub } from 'react-router';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Mock router context for Link components
    reactRouter: {
      routePath: '/',
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => {
      const RoutesStub = createRoutesStub([
        {
          path: '/',
          Component: () => <Story />,
        },
      ]);
      return <RoutesStub />;
    },
  ],
};

export default preview;
