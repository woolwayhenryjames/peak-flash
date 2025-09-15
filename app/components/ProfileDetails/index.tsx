import type { User } from 'better-auth';
import { useState } from 'react';
import { Link } from 'react-router';
import { Popover } from 'react-tiny-popover';
import { authClient } from '~/lib/auth-client';
import helpCenterIcon from './assets/help-center-icon.svg';
import signOutIcon from './assets/sign-out-icon.svg';
import userIcon from './assets/user-icon.svg';

interface ProfileDetailsProps {
  user: User;
}

export default function ProfileDetails({ user }: ProfileDetailsProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const signOut = async () => {
    await authClient.signOut();
  };

  const handleLinkClick = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Popover
      content={
        <div className="w-max rounded-[10px] border border-[#7C7C7C] bg-black/70 backdrop-blur-sm">
          {/* Username Section */}
          <div className="flex items-center gap-[10px] px-7 py-4 text-center font-normal text-white text-xs leading-[1.5]">
            @{user.name || 'user'}
          </div>

          {/* Divider */}
          <div className="mx-[26px] h-px bg-[#3E3E3E]" />

          {/* Profile Section */}
          <Link
            className="flex items-center gap-[10px] px-7 py-4 hover:bg-white/7"
            onClick={handleLinkClick}
            to="/profile"
          >
            <img alt="" aria-hidden="true" className="size-3" src={userIcon} />
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
            onClick={signOut}
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
  );
}
