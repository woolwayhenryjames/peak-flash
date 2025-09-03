import type { Preview } from '@storybook/react-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../app/app.css';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { createRoutesStub } from 'react-router';
import { AppKitProvider } from '~/components/AppKitProvider';
import { ToastProvider } from '~/components/ToastProvider';
import { UserProvider } from '~/components/UserContext';
import { VersionProvider } from '~/components/VersionContext';

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
      i18next.use(initReactI18next).init({
        lng: 'en',
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['translationsNS'],
        defaultNS: 'translationsNS',

        debug: true,

        interpolation: {
          escapeValue: false, // not needed for react!!
        },

        resources: { en: { translationsNS: {} } },
      });
      const RoutesStub = createRoutesStub([
        {
          path: '/',
          Component: () => (
            <I18nextProvider i18n={i18next}>
              <ToastProvider>
                <AppKitProvider>
                  <UserProvider
                    initUser={
                      {
                        userName: 'John Doe',
                        userId: '12345',
                      } as any
                    }
                  >
                    <VersionProvider version={{ isWeb2: false }}>
                      <Story />
                    </VersionProvider>
                  </UserProvider>
                </AppKitProvider>
              </ToastProvider>
            </I18nextProvider>
          ),
        },
      ]);
      return <RoutesStub />;
    },
  ],
};

export default preview;
