import { type AppKitNetwork, bsc, bscTestnet } from '@reown/appkit/networks';
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, WagmiProvider } from 'wagmi';

const prodNetworks: [AppKitNetwork, ...AppKitNetwork[]] = [bsc] as const;
const devNetworks: [AppKitNetwork, ...AppKitNetwork[]] = [bscTestnet] as const;

const networks: [AppKitNetwork, ...AppKitNetwork[]] =
  import.meta.env.MODE === 'production'
    ? prodNetworks
    : [...prodNetworks, ...devNetworks];

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = 'e2984ad92c295e5dc7bedcda02809190';
// 2. Create a metadata object - optional
const metadata = {
  name: 'PEAK AI',
  description: 'Infinity Ground',
  url: import.meta.env.VITE_ORIGIN,
  icons: [`${import.meta.env.VITE_ORIGIN}/icons/favicon.svg`],
};

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  transports: {
    [bsc.id]: http('https://bsc-dataseed.binance.org'),
  },
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
    email: false,
    socials: [],
  },
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
