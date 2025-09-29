import type { User } from ".prisma/main/client";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import loginIcon from "./assets/login.svg";
import logo from "./assets/logo.svg";
import peakText from "./assets/peak-text.svg";
import tiktokIcon from "./assets/tiktok.svg";
import twitterIcon from "./assets/twitter.svg";
import MenuContent from "./MenuContent";

export default function Header({ user }: { user: User | undefined | null }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Peekaboos", href: "/peekaboos" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="relative w-full bg-black">
      <div className="flex h-[90px] items-center justify-between px-[71px]">
        {/* Logo */}
        <Link className="flex items-center gap-2.5" to="/">
          <img alt="Peak AI" className="h-[22px] w-[26px]" src={logo} />
          <img alt="Peak AI" className="h-[17px] w-20" src={peakText} />
        </Link>

        {/* Navigation Tabs */}
        <nav className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
          <ul className="flex items-center gap-10 rounded-md px-[30px] py-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li className="relative" key={item.name}>
                  <Link
                    className={cn(
                      "font-normal text-base transition-colors",
                      isActive
                        ? "text-[#F3EEEA]"
                        : "text-[#B5B5B5] hover:text-[#F3EEEA]"
                    )}
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <div className="-bottom-[25px] -translate-x-1/2 absolute left-1/2 h-[2px] w-[37px] rounded-[1.5px] bg-white shadow-[0_0_0.91px_rgba(255,255,255,1),0_0_1.82px_rgba(255,255,255,1),0_0_6.38px_rgba(255,255,255,1),0_0_12.75px_rgba(255,255,255,1),0_0_21.86px_rgba(255,255,255,1),0_0_38.25px_rgba(255,255,255,1)]" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section - Social Links & Login */}
        <div className="flex items-center gap-10 rounded-md px-[30px] py-3">
          {/* Social Links */}
          <div className="flex items-center gap-6 opacity-50">
            <a
              aria-label="Follow us on Twitter"
              className="relative h-5 w-5 transition-opacity hover:opacity-100"
              href="https://twitter.com/TakeAPeakAI"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute inset-0 rounded-[3px] bg-white" />
              <img
                alt="Twitter"
                className="relative h-5 w-5"
                src={twitterIcon}
              />
            </a>
            <a
              aria-label="Follow us on TikTok"
              className="transition-opacity hover:opacity-100"
              href="https://www.tiktok.com/@takeapeakai"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="TikTok" className="h-5 w-[18px]" src={tiktokIcon} />
            </a>
          </div>

          {/* Divider */}
          <div className="h-[14px] w-[1px] bg-white opacity-40" />

          <Popover onOpenChange={setPopoverOpen} open={popoverOpen}>
            <PopoverTrigger asChild>
              <button type="button">
                <UserButton user={user} />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              alignOffset={-12}
              className="flex w-max flex-col rounded-[10px] border border-[#7C7C7C] bg-black/70 px-0 py-2 backdrop-blur-sm"
              side="bottom"
              sideOffset={12}
            >
              <MenuContent user={user} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}

const UserButton = ({ user }: { user: User | undefined | null }) => {
  if (user?.image) {
    return (
      <img
        alt="User Avatar"
        className="h-6 w-6 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        src={user.image}
      />
    );
  }

  if (user?.email) {
    return (
      <span className="font-normal text-[#f2edea] text-sm">0ceBE****2584</span>
    );
  }

  return (
    <div className="flex items-center gap-[9px] font-normal text-[#F3EEEA] text-sm">
      <span>Login</span>
      <div className="flex h-5 w-5 items-center justify-center">
        <img alt="" className="h-4 w-3" src={loginIcon} />
      </div>
    </div>
  );
};
