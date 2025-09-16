import type { User } from 'better-auth';
import { useState } from 'react';
import { Link } from 'react-router';
import { Popover } from 'react-tiny-popover';
import DialogWithCloseButton from '~/components/Dialogs/DialogWithCloseButton';
import GlowContainer from '~/components/GlowContainer';
import { authClient } from '~/lib/auth-client';
import helpCenterIcon from './assets/help-center-icon.svg';
import signOutIcon from './assets/sign-out-icon.svg';
import userIcon from './assets/user-icon.svg';

interface ProfileDetailsProps {
  user: User;
}

export default function ProfileDetails({ user }: ProfileDetailsProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [showConfirmSignOut, setShowConfirmSignOut] = useState(false);

  const signOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  const handleLinkClick = () => {
    setIsPopoverOpen(false);
  };

  return (
    <>
      <Popover
        content={
          <div className="w-max rounded-[10px] border border-[#7C7C7C] bg-black/70 backdrop-blur-sm">
            {/* Username Section */}
            <div className="flex items-center gap-[10px] px-7 py-4 text-center font-normal text-white text-xs leading-[1.5]">
              @{user.email || 'user'}
            </div>

            {/* Divider */}
            <div className="mx-[26px] h-px bg-[#3E3E3E]" />

            {/* Profile Section */}
            <Link
              className="flex items-center gap-[10px] px-7 py-4 hover:bg-white/7"
              onClick={handleLinkClick}
              to="/profile"
            >
              <img
                alt=""
                aria-hidden="true"
                className="size-3"
                src={userIcon}
              />
              <span className="font-normal text-white text-xs leading-[1.5]">
                Profile
              </span>
            </Link>

            {/* Help Center Section */}
            <Link
              className="flex items-center gap-[10px] px-7 py-4 hover:bg-white/7"
              onClick={handleLinkClick}
              to="/help-center"
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
          </div>
        }
        isOpen={isPopoverOpen} // equivalent to dropdown-end positioning
        onClickOutside={() => setIsPopoverOpen(false)} // mt-2 equivalent
        padding={12}
        positions={['bottom', 'left']}
      >
        <button
          className="cursor-pointer text-base md:text-xs min-[100rem]:text-base"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          type="button"
        >
          <img
            alt={user.name || 'User avatar'}
            className="size-8 rounded-full object-cover"
            src={user.image || ''}
          />
        </button>
      </Popover>
      <DialogWithCloseButton
        className="min-w-80"
        setShow={setShowConfirmSignOut}
        show={showConfirmSignOut}
        title="Reminder"
      >
        <div className="text-[#df6767]">Are you sure you want to sign out?</div>
        <div className="font-light text-[#e2e2e2]">
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
