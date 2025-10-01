import { Link } from "react-router";
import GlowContainer from "~/components/GlowContainer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useMouse } from "~/lib/useMouse";
import { useUser } from "~/lib/useUser";
import { cn } from "~/lib/utils";

interface UserProfileTooltipProps {
  user: {
    id: string;
    name: string | null;
    email: string;
    kindleScore: number | null;
    rank: number | null;
    followerCount: number | null;
    likeCount: number | null;
    campaignUsers: {
      rank: number | null;
      campaign: { id: string; name: string };
    }[];
  };
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  backgroundColor: string;
}

export default function UserProfileTooltip({
  user,
  children,
  open,
  onOpenChange,
  backgroundColor,
}: UserProfileTooltipProps) {
  const { user: currentUser } = useUser();
  const { ref, x, y } = useMouse();
  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={100}>
      <Tooltip
        delayDuration={300}
        disableHoverableContent={false}
        onOpenChange={onOpenChange}
        open={open}
      >
        <TooltipTrigger asChild ref={ref}>
          {children}
        </TooltipTrigger>
        <TooltipContent
          align="start"
          alignOffset={x}
          avoidCollisions={true}
          className={cn(
            "w-[20rem] border border-[#6C655E] p-0 text-white",
            "rounded-[14px]"
          )}
          collisionPadding={20}
          showArrow={false}
          sideOffset={-y}
          style={{ backgroundColor }}
        >
          <div className="flex flex-col">
            {/* User Profile Section */}
            <div className="flex flex-col gap-3 px-[1.625rem] pt-[0.875rem]">
              {/* User Info */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-3">
                  {/* Name and Badge */}
                  <div className="flex flex-col gap-[0.0625rem]">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-base text-white leading-[1.5] tracking-[0.015em]">
                        {user.name || user.email}
                      </span>
                    </div>
                    {/* Username */}
                    <span className="text-[#979797] text-[0.625rem] leading-[1.5]">
                      @{user.email.split("@")[0]}
                    </span>
                  </div>

                  {/* Rank and Score */}
                  <span className="text-[#BDBDBD] text-xs leading-[1.5]">
                    <span className="text-[#FFC760]">
                      Rank #{user.rank || "N/A"}
                    </span>{" "}
                    | KINDLE {user.kindleScore?.toFixed(1) || "0.0"}
                  </span>
                </div>

                {/* Copy Profile Button */}
                <a
                  href={`https://tiktok.com/@${user.email}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GlowContainer>
                    <svg
                      fill="none"
                      height="11"
                      viewBox="0 0 15 11"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>open</title>
                      <path
                        d="M0.0471957 9.14885C-0.0369224 9.31947 -0.00667227 9.52608 0.122583 9.66375C0.251837 9.80141 0.45177 9.83996 0.620837 9.75982L2.80773 8.72316C4.64572 7.8519 6.65149 7.45332 8.6538 7.54707C8.67758 8.20747 8.71287 8.86754 8.75967 9.52697L8.81956 10.3708C8.8559 10.8827 9.41166 11.1689 9.83279 10.8925C11.6606 9.69295 13.2497 8.14727 14.5152 6.33786L14.9178 5.76215C15.0274 5.6055 15.0274 5.3945 14.9178 5.23785L14.5152 4.66214C13.2497 2.85274 11.6606 1.30705 9.83279 0.107477C9.41166 -0.168899 8.8559 0.117274 8.81956 0.629204L8.75967 1.47303C8.7195 2.03907 8.68781 2.60558 8.6646 3.17237H8.1019C4.96859 3.17237 2.10151 4.98199 0.686046 7.85304L0.0471957 9.14885Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </GlowContainer>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-[1.625rem] mt-[1.125rem] h-px bg-[#C2C2C2]/30" />

            {/* Participated Campaigns Section */}
            <div className="flex flex-col gap-5 px-[1.625rem] pt-[0.8125rem] pb-6">
              <h3 className="font-normal text-[#F4F4F4] text-[0.9375rem] leading-[1.5] tracking-[0.015em]">
                Participated Campaigns
              </h3>

              {/* Campaigns List */}
              <div className="flex flex-col items-end gap-3">
                {user.campaignUsers.length > 0 ? (
                  user.campaignUsers.map((campaignUser, index) => (
                    <Link
                      className="flex w-full flex-col gap-[0.625rem]"
                      key={campaignUser.campaign.id}
                      onClick={(e) => {
                        // Prevent navigation if the user is viewing their own profile
                        if (!currentUser) {
                          e.preventDefault();
                        }
                      }}
                      to={`/u/campaigns/${campaignUser.campaign.id}`}
                    >
                      <div className="flex items-center justify-between">
                        {/* Campaign Name with Bullet */}
                        <div className="flex items-center gap-[1.375rem]">
                          <div className="flex items-center gap-[1.375rem]">
                            <div className="h-[0.4375rem] w-[0.4375rem] rounded-full bg-[#71FFCB]" />
                            <span className="text-[#C0C0C0] text-[0.875rem] leading-[1.5]">
                              {campaignUser.campaign.name}
                            </span>
                          </div>
                        </div>
                        {/* Rank */}
                        <span className="font-light text-[#D9D9D9] text-[0.875rem] leading-[1.5]">
                          #{campaignUser.rank}
                        </span>
                      </div>
                      {/* Dashed Line (except for last item) */}
                      {index < Math.min(user.campaignUsers.length - 1, 2) && (
                        <div
                          className="h-px w-full border-[#414149] border-b border-dashed"
                          style={{ borderWidth: "0 0 1px 0" }}
                        />
                      )}
                    </Link>
                  ))
                ) : (
                  <div className="w-full py-2 text-center text-[#979797] text-[0.875rem]">
                    No campaigns yet
                  </div>
                )}
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
