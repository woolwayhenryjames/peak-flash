import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import devtoolsJson from "vite-plugin-devtools-json";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => ({
  plugins: [
    ...(command === "build"
      ? [
          babel({
            filter: /\.[jt]sx?$/,
            babelConfig: {
              presets: ["@babel/preset-typescript"],
              plugins: ["babel-plugin-react-compiler"],
            },
          }),
        ]
      : []),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    devtoolsJson(),
  ],
  esbuild:
    command === "build" && mode === "production"
      ? {
          drop: ["debugger", "console"],
          legalComments: "none",
        }
      : undefined,
  resolve: {
    alias:
      command === "build"
        ? {
            "react-dom/server": "react-dom/server.node",
          }
        : undefined,
  },
  server: {
    port: 5100,
    allowedHosts: true,
  },
}));
