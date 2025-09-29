import type { BetterAuthClientPlugin } from "better-auth";
import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react
import type { walletPlugin } from "~/services/walletPlugin.auth.server";

export const walletClient = () =>
  ({
    id: "wallet",
    $InferServerPlugin: {} as ReturnType<typeof walletPlugin>,
    pathMethods: {
      "/sign-in/wallet": "POST",
    },
  }) satisfies BetterAuthClientPlugin;

export const authClient = createAuthClient({
  plugins: [walletClient()], // specify the plugin ID here
});
