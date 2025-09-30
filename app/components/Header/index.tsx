import type { User } from ".prisma/main/client";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn, hideMiddleOfString } from "~/lib/utils";
import loginIcon from "./assets/login.svg";
import logo from "./assets/logo.svg";
import peakText from "./assets/peak-text.svg";
import tiktokIcon from "./assets/tiktok.svg";
import twitterIcon from "./assets/twitter.svg";
import MenuContent from "./MenuContent";

// Extend User type to include hasCampaigns and isAdmin properties
type UserWithCampaigns =
  | (User & { hasCampaigns?: boolean; isAdmin?: boolean })
  | undefined
  | null;

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Peekaboos", href: "/leaderboard" },
  { name: "Pricing", href: "/pricing" },
];

export default function Header({ user }: { user: UserWithCampaigns }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="relative w-full bg-black">
      <div className="flex h-[90px] items-center px-4 sm:px-8 lg:px-[71px]">
        {/* Logo */}
        <Link className="flex items-center gap-2.5" to="/">
          <img alt="Peak AI" className="h-[22px] w-[26px]" src={logo} />
          <img alt="Peak AI" className="h-[17px] w-20" src={peakText} />
        </Link>

        {/* Desktop Navigation Tabs - Now properly aligned */}
        <nav className="ml-12 hidden lg:block">
          <ul className="flex items-center gap-10">
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

        {/* Spacer to push right section to the end */}
        <div className="flex-1" />

        {/* Right Section - Desktop */}
        <div className="hidden items-center gap-10 rounded-md px-[30px] py-3 lg:flex">
          {/* Social Links */}
          <div className="flex items-center gap-6 opacity-50">
            <a
              aria-label="Follow us on Twitter"
              className="transition-opacity hover:opacity-100"
              href="https://twitter.com/TakeAPeakAI"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="Twitter" className="h-5 w-5" src={twitterIcon} />
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

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle mobile menu"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300",
                mobileMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300",
                mobileMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          type="button"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-[280px] border-[#7C7C7C] border-l bg-black transition-transform duration-300 lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col px-6 pt-24">
          {/* Mobile Navigation */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      className={cn(
                        "block font-normal text-lg transition-colors",
                        isActive
                          ? "text-[#F3EEEA]"
                          : "text-[#B5B5B5] hover:text-[#F3EEEA]"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile User Section */}
          <div className="border-[#7C7C7C] border-t pt-6 pb-8">
            {/* User Info/Login */}
            <div className="mb-6">
              {user ? (
                <div className="flex items-center gap-3">
                  {user.image && (
                    <img
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full"
                      src={user.image}
                    />
                  )}
                  <span className="font-normal text-[#f2edea] text-sm">
                    {user.email ? hideMiddleOfString(user.email) : "User"}
                  </span>
                </div>
              ) : (
                <div className="font-normal text-[#F3EEEA] text-base">
                  Not logged in
                </div>
              )}
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex flex-col gap-4">
              <MenuContent user={user} />
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-6">
              <a
                aria-label="Follow us on Twitter"
                className="relative h-6 w-6"
                href="https://twitter.com/TakeAPeakAI"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="absolute inset-0 rounded-[3px] bg-white" />
                <img
                  alt="Twitter"
                  className="relative h-6 w-6"
                  src={twitterIcon}
                />
              </a>
              <a
                aria-label="Follow us on TikTok"
                href="https://www.tiktok.com/@takeapeakai"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="TikTok" className="h-6 w-[22px]" src={tiktokIcon} />
              </a>
            </div>
          </div>
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
      <span className="font-normal text-[#f2edea] text-sm">
        {hideMiddleOfString(user.email)}
      </span>
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
