import type { Config } from "@react-router/dev/config";

export default {
  future: {
    v8_middleware: true,
  },
  // Keep SSR enabled to avoid loader issues
} satisfies Config;
