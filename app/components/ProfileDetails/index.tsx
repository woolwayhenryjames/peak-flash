import type { User } from "better-auth";
import { HomeIcon, UserStar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import DialogWithCloseButton from "~/components/Dialogs/DialogWithCloseButton";
import GlowContainer from "~/components/GlowContainer";
import signOutIcon from "~/components/Header/MenuContent/assets/sign-out-icon.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { authClient } from "~/lib/auth-client";
import { hideMiddleOfString } from "~/lib/utils";
import helpCenterIcon from "./assets/help-center-icon.svg";
import userIcon from "./assets/user-icon.svg";

interface ProfileDetailsProps {
  user: User;
}

export default function ProfileDetails({ user }: ProfileDetailsProps) {
  const [showConfirmSignOut, setShowConfirmSignOut] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const signOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <>
      <Popover onOpenChange={setPopoverOpen} open={popoverOpen}>
        <PopoverTrigger asChild>
          {user.image ? (
            <img
              alt={user.name || "User avatar"}
              className="size-8 rounded-full object-cover"
              src={user.image || ""}
            />
          ) : (
            <UserStar className="size-8 rounded-full" />
          )}
        </PopoverTrigger>
        <PopoverContent
          align="end"
          alignOffset={-12}
          className="w-max rounded-[10px] border border-[#7C7C7C] bg-black/70 p-0 backdrop-blur-sm"
          side="bottom"
          sideOffset={12}
        >
          {/* Username Section */}
          <div className="flex items-center gap-[10px] px-7 py-4 text-center font-normal text-white text-xs leading-[1.5]">
            @{hideMiddleOfString(user.email || "user")}
          </div>

          {/* Divider */}
          <div className="mx-[26px] h-px bg-[#3E3E3E]" />

          {/* Profile Section */}
          <Link
            className="flex items-center gap-[10px] px-7 py-4 hover:bg-white/7"
            onClick={() => setPopoverOpen(false)}
            to="/u/profile"
          >
            <img alt="" aria-hidden="true" className="size-3" src={userIcon} />
            <span className="font-normal text-white text-xs leading-[1.5]">
              Profile
            </span>
          </Link>

          {/* Help Center Section */}
          <Link
            className="flex items-center gap-[10px] px-7 py-4 hover:bg-white/7"
            onClick={() => setPopoverOpen(false)}
            to="/u/help-center"
          >
            <img
              alt=""
              aria-hidden="true"
              className="size-3"
              src={helpCenterIcon}
            />
            <span className="font-normal text-white text-xs leading-[1.5]">
              Help Center
            </span>
          </Link>

          <Link
            className="flex items-center gap-[10px] px-7 py-4 hover:bg-white/7"
            onClick={() => setPopoverOpen(false)}
            to="/"
          >
            <HomeIcon className="size-3 text-white" />
            <span className="font-normal text-white text-xs leading-[1.5]">
              Homepage
            </span>
          </Link>

          {/* Divider */}
          <div className="mx-[26px] h-px bg-[#3E3E3E]" />

          {/* Sign Out Section */}
          <button
            className="flex w-full gap-[10px] px-7 py-4 hover:bg-white/7"
            onClick={() => setShowConfirmSignOut(true)}
            type="button"
          >
            <img
              alt=""
              aria-hidden="true"
              className="size-3"
              src={signOutIcon}
            />
            <span className="font-normal text-[#E06868] text-xs leading-[1.5]">
              Sign Out
            </span>
          </button>
        </PopoverContent>
      </Popover>
      <DialogWithCloseButton
        className="min-w-80"
        setShow={setShowConfirmSignOut}
        show={showConfirmSignOut}
        title="Reminder"
      >
        <div className="text-[#df6767]">Are you sure you want to sign out?</div>
        <div className="font-light text-[#e2e2e2] italic">
          Keep creating to earn more rewards!
        </div>
        <div className="mt-8 flex gap-4">
          <button onClick={signOut} type="button">
            <GlowContainer className="px-8 py-3">Sign Out</GlowContainer>
          </button>
          <button onClick={() => setShowConfirmSignOut(false)} type="button">
            <GlowContainer className="px-8 py-3">Cancel</GlowContainer>
          </button>
        </div>
      </DialogWithCloseButton>
    </>
  );
}
