import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import ExpandedUserProfile from "~/components/ExpandedUserProfile";
import ExpandedUserVideoData from "~/components/ExpandedUserVideoData";
import GlowContainer from "~/components/GlowContainer";
import { cn } from "~/lib/utils";

interface RankingCardProps {
  rank: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  points: string;
  pointsLabel: string;
  campaignId?: string;
}

export default function RankingCard({
  rank,
  user,
  points,
  pointsLabel,
  campaignId,
}: RankingCardProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-[#6A6B6B] border-t p-6 first:border-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[18px]">
          <span className="letterspacing-[1.5%] font-medium text-base text-white">
            {rank}
          </span>
          <span className="letterspacing-[1.5%] font-medium text-base text-white">
            {user.name}
          </span>
        </div>
        <div className="flex gap-[27px]">
          <div className="text-right">
            <div className="letterspacing-[1.5%] bg-gradient-to-r from-[#b871ff] to-[#2cffbc] bg-clip-text font-medium text-transparent text-xl">
              {points}
            </div>
            <div className="text-[#979797] text-xs">{pointsLabel}</div>
          </div>
          <button onClick={() => setExpanded(!expanded)} type="button">
            <GlowContainer className="rounded-sm px-2 py-2">
              <ChevronDownIcon
                className={cn("size-4", expanded ? "rotate-180" : "")}
              />
            </GlowContainer>
          </button>
        </div>
      </div>
      {expanded && !campaignId && <ExpandedUserProfile user={user} />}
      {expanded && campaignId && (
        <ExpandedUserVideoData campaignId={campaignId} user={user} />
      )}
    </div>
  );
}
