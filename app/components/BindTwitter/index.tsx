import { useEffect, useState } from "react";
import { authClient } from "~/lib/auth-client";
import xIcon from "./assets/x.svg";

export default function BindTwitter() {
  const [twitterHandle, setTwitterHandle] = useState<string>();
  const [twitterAccountId, setTwitterAccountId] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAccount = async () => {
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
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    checkAccount();
  }, []);

  const handleClick = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      if (twitterHandle && twitterAccountId) {
        // Disconnect
        await authClient.unlinkAccount({
          providerId: "twitter",
          accountId: twitterAccountId,
        });
        setTwitterHandle(undefined);
      } else {
        // Connect
        await authClient.linkSocial({
          provider: "twitter",
          callbackURL: "/u/profile",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="my-6 flex items-center gap-4 border border-[#9c9c9c]/20 p-2 font-light max-md:bg-[#161616] md:p-5">
      <img alt="x" src={xIcon} />
      <div className="text-[#c5c5c5] text-xl">
        {isLoading ? "Loading..." : (twitterHandle ?? "Bind Twitter")}
      </div>
      <button
        className="flex flex-1 justify-end text-white underline decoration-dashed disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isLoading}
        onClick={handleClick}
        type="button"
      >
        {twitterHandle ? (
          "Disconnect"
        ) : (
          <svg
            fill="none"
            height="8"
            viewBox="0 0 23 8"
            width="23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Disconnect</title>
            <path
              d="M22.3536 4.35356C22.5488 4.15829 22.5488 3.84171 22.3536 3.64645L19.1716 0.464468C18.9763 0.269206 18.6597 0.269206 18.4645 0.464468C18.2692 0.65973 18.2692 0.976312 18.4645 1.17157L21.2929 4L18.4645 6.82843C18.2692 7.02369 18.2692 7.34027 18.4645 7.53554C18.6597 7.7308 18.9763 7.7308 19.1716 7.53554L22.3536 4.35356ZM0 4L-4.37114e-08 4.5L22 4.5L22 4L22 3.5L4.37114e-08 3.5L0 4Z"
              fill="#ACACAC"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
