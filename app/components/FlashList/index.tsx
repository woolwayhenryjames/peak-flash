import type { Flash } from ".prisma/main/client";
import { Link } from "react-router";
import { formatNumber } from "~/lib/utils";

type FlashNormalized = Omit<Flash, "prizePool" | "perUserPrize"> & {
  prizePool: number | null;
  perUserPrize: number | null;
};

export default function FlashList({
  flashs = [],
}: {
  flashs: FlashNormalized[];
}) {
  return (
    <div className="flex flex-col justify-center gap-2.5 md:gap-6">
      {flashs.length === 0 ? (
        <div className="rounded-2xl border border-[#2D3338] bg-linear-to-br from-[#20202D] to-[#101013] px-4 py-6 text-center">
          <p className="text-[#878788] text-sm">
            No active flash tasks available
          </p>
        </div>
      ) : (
        flashs.map((flash) => {
          const status = getStatusDisplay(flash);

          return (
            <Link
              className="block h-[72px] rounded-2xl border border-[#2D3338] bg-linear-to-br from-[#20202D] to-[#101013] px-4 py-2.5"
              key={flash.id}
              to={"/u/flash"}
              viewTransition
            >
              <div className="flex h-full items-center gap-3">
                <div className="w-[60%]">
                  <div className="mb-1 flex items-center gap-2">
                    {flash.bannerImage ? (
                      <img
                        alt={flash.name}
                        className="size-5 object-cover"
                        src={flash.bannerImage}
                      />
                    ) : (
                      <div className="size-5 rounded-lg bg-linear-to-br from-gray-500 to-gray-700 text-center font-bold text-xs">
                        {flash.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                    <h4 className="font-medium text-sm text-white">
                      {flash.name}
                    </h4>
                  </div>
                  <p className="text-[#878788] text-xs">
                    Pool: ${formatNumber(flash.prizePool)}
                  </p>
                </div>
                <div className="w-[40%] border-[#2D3338] border-l pl-3">
                  <div className="text-right">
                    <span
                      className={`bg-linear-to-r ${status.gradient} bg-clip-text font-normal text-transparent text-xs`}
                    >
                      {status.text}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

function getStatusDisplay(flash: FlashNormalized) {
  const expired = flash.startAt && new Date(flash.startAt) > new Date();
  if (flash.status !== "ACTIVE" || expired) {
    return {
      text: "Ended",
      gradient: "from-[#878788] to-[#575655]",
    };
  }

  return {
    text: "Available",
    gradient: "from-[#FD2B70] to-[#FF89B0]",
  };
}
