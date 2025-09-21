import type { Preview } from '@storybook/react-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../app/app.css';
import { createRoutesStub } from 'react-router';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import getVideosMockData from './getVideos.mockData';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
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
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'linear-gradient(to bottom, black 25%, #9595FF 125%)',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
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
        {
          path: '/api/getVideos/:campaignUserId',
          loader: getVideosMockData,
        },
      ]);
      return (
        <>
          {/* Add the SVG definitions that GlowContainer depends on */}
          <svg
            className="size-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Glow Container Effect Definitions</title>
            <defs>
              <clipPath clipPathUnits="objectBoundingBox" id="myCustomShape">
                <path d="M1 0 H0.068 C0.434 0.127 0.804 0.096 0.895 0.247 C0.934 0.152 0.938 0.116 1 0 Z" />
              </clipPath>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="objectBoundingBox"
                height="100%"
                id="prefix__prefix__filter1_ddf_134_3428"
                width="100%"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.245192 0 0 0 0 0.421314 0 0 0 0 1 0 0 0 0.57 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_134_3428"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="5.2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.954327 0 0 0 0 0.470281 0 0 0 0 0.470281 0 0 0 0.25 0" />
                <feBlend
                  in2="effect1_dropShadow_134_3428"
                  result="effect2_dropShadow_134_3428"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_134_3428"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect3_foregroundBlur_134_3428"
                  stdDeviation="2"
                />
              </filter>
            </defs>
          </svg>
          <RoutesStub />
        </>
      );
    },
  ],
};

export default preview;
