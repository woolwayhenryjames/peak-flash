import { useCallback, useEffect, useState } from "react";
import { authClient } from "~/lib/auth-client";

export function useTwitterAccount() {
  const [twitterHandle, setTwitterHandle] = useState<string>();
  const [twitterAccountId, setTwitterAccountId] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  const checkAccount = useCallback(async () => {
    try {
      const accounts = await authClient.listAccounts();
      if (accounts.data) {
        const twitterAccount = accounts.data.find(
          (account) => account.providerId === "twitter"
        );
        if (twitterAccount) {
          setTwitterAccountId(twitterAccount.accountId);
          const info = await authClient.accountInfo({
            accountId: twitterAccount.accountId,
          });
          setTwitterHandle(
            info.data?.data.data.username ?? info.data?.user.name
          );
        } else {
          // Account not found, clear state
          setTwitterAccountId(undefined);
          setTwitterHandle(undefined);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAccount();
  }, [checkAccount]);

  const unlinkTwitterAccount = async () => {
    if (!twitterAccountId) {
      return;
    }

    setIsLoading(true);
    try {
      await authClient.unlinkAccount({
        providerId: "twitter",
        accountId: twitterAccountId,
      });
      setTwitterHandle(undefined);
      setTwitterAccountId(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  const linkTwitterAccount = async (callbackURL: string) => {
    setIsLoading(true);
    try {
      await authClient.linkSocial({
        provider: "twitter",
        callbackURL,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    twitterHandle,
    twitterAccountId,
    isLoading,
    unlinkTwitterAccount,
    linkTwitterAccount,
    refreshAccount: checkAccount,
  };
}
