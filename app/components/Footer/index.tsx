import { Link } from "react-router";
import { navItems } from "~/components/Header";
import tiktokIcon from "~/components/Header/assets/tiktok.svg";
import twitterIcon from "~/components/Header/assets/twitter.svg";
import { cn } from "~/lib/utils";

export default function Footer() {
  return (
    <footer
      className="bottom-0 z-[1] w-full border-[#F3EEEA]/10 border-t bg-black"
      id="footer"
    >
      <div className="container mx-auto flex flex-col justify-between px-3 py-[60px] sm:flex-row sm:px-0">
        <div className="flex flex-shrink-0 items-center gap-2 text-2xl text-white">
          <img
            alt="InfinityGround"
            className="h-6 w-6 invert"
            src="/icons/favicon-96x96.png"
          />
          PEAK AI
        </div>
        <div className="mt-10 flex flex-col gap-5 sm:mt-0">
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
                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="text-left sm:text-right">
          <div className="mt-10 flex gap-10 sm:mt-0">
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
          </div>
          <div className="mt-[46px] text-sm uppercase opacity-50">
            © 2025 Peak AI All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
