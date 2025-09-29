import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useSearchParams } from "react-router";
import { authClient } from "~/lib/auth-client";

export function useLogin() {
  const [searchParams] = useSearchParams();
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const signInCreator = async () => {
    try {
      const inviterId = searchParams.get("inviter");
      if (inviterId) {
        console.log(`Starting OAuth flow with inviter: ${inviterId}`);
        // Store inviter ID in session storage so it persists through OAuth redirect
        sessionStorage.setItem("pendingInviterId", inviterId);
      }

      await authClient.signIn.social({
        provider: "tiktok",
      });
    } catch (error) {
      console.error("Error during sign in:", error);
      // You could show a user-friendly error message here
    }
  };

  const signInEnterprise = async () => {
    console.log("Enterprise sign-in clicked", { isConnected, address });
    if (!(isConnected && address)) {
      open();
      return;
    }
    console.log("Signing in with wallet address:", address);
    try {
      await authClient.signIn.wallet({
        walletAddress: address,
      });
    } catch (error) {
      console.error("Error during sign in:", error);
      // You could show a user-friendly error message here
    }
  };
  const signOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return { signInCreator, signInEnterprise, signOut };
}
