import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => ({
  plugins: [
    ...(command === 'build'
      ? [
          babel({
            filter: /\.[jt]sx?$/,
            babelConfig: {
              presets: ['@babel/preset-typescript'],
              plugins: ['babel-plugin-react-compiler'],
            },
          }),
        ]
      : []),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  esbuild:
    command === 'build'
      ? {
          drop: ['debugger', 'console'],
          legalComments: 'none',
        }
      : undefined,
  resolve: {
    alias:
      command === 'build'
        ? {
            'react-dom/server': 'react-dom/server.node',
          }
        : undefined,
  },
  server: {
    warmup: {
      clientFiles: ['./app/routes/_index/index.tsx'],
    },
    allowedHosts: true,
  },
}));
