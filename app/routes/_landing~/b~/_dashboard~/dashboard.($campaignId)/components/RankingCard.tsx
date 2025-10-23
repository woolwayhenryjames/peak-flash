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
    <>
      <div className="font-medium text-lg text-white">{rank}</div>
      <div className="font-medium text-lg text-white">{user.name}</div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-lg text-white">{points}</div>
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
      {expanded && !campaignId && (
        <div className="col-span-3">
          <ExpandedUserProfile user={user} />
        </div>
      )}
      {expanded && campaignId && (
        <div className="col-span-3">
          <ExpandedUserVideoData campaignId={campaignId} user={user} />
        </div>
      )}
    </>
  );
}
