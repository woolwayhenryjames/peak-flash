import { useState } from "react";
import { Link } from "react-router";
import { useUser } from "~/routes/_landing~/_layout";
import GlowContainer from "../GlowContainer";
import diamondIcon from "./assets/diamond-icon.svg";
import usersIcon from "./assets/users-icon.svg";

export default function QuickActions() {
  const { user } = useUser();
  const [isCopied, setIsCopied] = useState(false);

  const inviteLink = `${import.meta.env.VITE_ORIGIN}invite/${user?.id}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="mt-18 w-full">
      {/* Header with diamond icon */}
      <div className="mb-8 flex items-center gap-1">
        <img alt="" className="h-6 w-6 flex-shrink-0" src={diamondIcon} />
        <h3 className="font-semibold text-white text-xl">Quick Actions</h3>
      </div>

      {/* Main content card */}
      <div className="rounded-2xl border border-[#2D3338] bg-gradient-to-b from-[#0F1118] to-[#181C2A] p-4">
        <div className="space-y-5">
          {/* Invite Friends Section */}
          <div className="w-full sm:w-auto">
            <div className="mb-5">
              <div className="flex items-center gap-1.5">
                <img alt="" className="h-5 w-5 flex-shrink-0" src={usersIcon} />
                <h4 className="font-medium text-sm text-white">
                  Invite Friends
                </h4>
              </div>
              <p className="text-[#676767] text-xs">Get 10% score rewards</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#2D3338]" />

          {/* Invite Link Section */}
          <div className="flex items-center gap-4">
            <div className="w-full space-y-1.5">
              <div className="text-[#E8E8E8] text-xs">Invite Link</div>
              <div className="break-all text-[#858585] text-xs">
                {inviteLink}
              </div>
            </div>

            <GlowContainer
              className="w-fit cursor-pointer rounded-sm px-3 py-1 text-sm"
              noShimmer
              onClick={handleCopyLink}
            >
              {isCopied ? "Copied!" : "Copy"}
            </GlowContainer>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#2D3338]" />

          {/* Share Button */}
          <Link to="/invite">
            <GlowContainer>Share</GlowContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}
