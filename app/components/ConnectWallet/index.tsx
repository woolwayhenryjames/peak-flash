import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import { useEffect, useState } from "react";
import walletIcon from "./assets/wallet-icon.svg";

export default function ConnectWallet({
  userWalletAddress,
}: {
  userWalletAddress?: string | null;
}) {
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const [currentAddress, setCurrentAddress] = useState<
    string | null | undefined
  >(userWalletAddress);

  // Sync currentAddress with userWalletAddress prop
  useEffect(() => {
    setCurrentAddress(userWalletAddress);
  }, [userWalletAddress]);
  useEffect(() => {
    if (isConnected && address) {
      // Bind wallet to user account
      fetch("/api/bindWallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ walletAddress: address }),
      })
        .then((response) => {
          if (response.ok) {
            setCurrentAddress(address);
          } else {
            console.error("Failed to bind wallet");
          }
        })
        .catch((error) => {
          console.error("Error binding wallet:", error);
        });
    }
  }, [address, isConnected]);

  const handleClick = () => {
    if (address) {
      disconnect();
      fetch("/api/bindWallet", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setCurrentAddress(null);
          } else {
            console.error("Failed to unbind wallet");
          }
        })
        .catch((error) => {
          console.error("Error unbinding wallet:", error);
        });
    } else {
      open();
    }
  };

  return (
    <div className="my-6 flex items-center gap-4 border border-[#9c9c9c]/20 p-2 font-light max-md:bg-[#161616] md:p-5">
      <img alt="airdrop-wallet" src={walletIcon} />
      <div className="text-[#c5c5c5] text-xl">
        {currentAddress
          ? `${currentAddress.slice(0, 8)}...${currentAddress.slice(-4)}`
          : "Connect Wallet"}
      </div>
      <button
        className="flex flex-1 justify-end text-white underline decoration-dashed"
        onClick={handleClick}
        type="button"
      >
        {currentAddress ? (
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
