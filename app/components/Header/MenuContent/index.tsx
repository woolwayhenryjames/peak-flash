import type { User } from ".prisma/main/client";
import { Link } from "react-router";
import { useLogin } from "~/lib/useLogin";
import enterpriseIcon from "./assets/enterprise.svg";
import mySpaceIcon from "./assets/my-space.svg";
import signOutIcon from "./assets/sign-out-icon.svg";
import startCreatingIcon from "./assets/start-creating.svg";
import tiktokIcon from "./assets/tiktok.svg";

export default function MenuContent({
  user,
}: {
  user: User | undefined | null;
}) {
  const { signInEnterprise, signInCreator, signOut } = useLogin();
  if (!user) {
    return (
      <>
        <div className="px-4 hover:bg-[#d9d9d9]/10">
          <button
            className="flex gap-3 border-[#3E3E3E] border-b py-2"
            onClick={signInEnterprise}
            type="button"
          >
            <img alt="Logo" className="size-4" src={enterpriseIcon} />
            <span className="font-normal text-white text-xs">
              Start as Enterprises
            </span>
          </button>
        </div>

        {/* Start as Creators Button */}
        <div className="px-4 py-2 hover:bg-[#d9d9d9]/10">
          <button className="flex gap-3" onClick={signInCreator} type="button">
            <img alt="Logo" className="size-4" src={tiktokIcon} />
            <span className="font-normal text-white text-xs">
              Start as Creators
            </span>
          </button>
        </div>
      </>
    );
  }
  if (user.isBusiness) {
    return (
      <>
        <div className="px-4 hover:bg-[#d9d9d9]/10">
          <Link
            className="flex gap-3 border-[#3E3E3E] border-b py-2"
            to="/b/dashboard"
            type="button"
          >
            <img alt="Logo" className="size-4" src={mySpaceIcon} />
            <span className="font-normal text-white text-xs">My Space</span>
          </Link>
        </div>

        {/* Sign Out Button */}
        <div className="px-4 py-2 hover:bg-[#d9d9d9]/10">
          <button className="flex gap-3" onClick={signOut} type="button">
            <img alt="Logo" className="size-4" src={signOutIcon} />
            <span className="font-normal text-[#E06868] text-xs">Sign Out</span>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <span className="mx-4 border-[#3E3E3E] border-b py-2 text-center font-normal text-white text-xs">
        @{user.email}
      </span>
      <div className="px-4 hover:bg-[#d9d9d9]/10">
        <Link
          className="flex gap-3 border-[#3E3E3E] border-b py-2"
          to="/u"
          type="button"
        >
          <img alt="Logo" className="size-4" src={startCreatingIcon} />
          <span className="font-normal text-white text-xs">Start Creating</span>
        </Link>
      </div>

      {/* Sign Out Button */}
      <div className="px-4 py-2 hover:bg-[#d9d9d9]/10">
        <button className="flex gap-3" onClick={signOut} type="button">
          <img alt="Logo" className="size-4" src={signOutIcon} />
          <span className="font-normal text-[#E06868] text-xs">Sign Out</span>
        </button>
      </div>
    </>
  );
}
