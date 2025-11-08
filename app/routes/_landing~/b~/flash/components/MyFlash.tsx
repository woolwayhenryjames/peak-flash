import { use } from "react";
import { Link } from "react-router";
import { formatNumber } from "~/lib/utils";

interface Flash {
  id: number;
  name: string;
  message?: string | null;
  description?: string | null;
  bannerImage?: string | null;
  prizePool: number | null;
  prizeCurrency?: string | null;
  perUserPrize: number | null;
  participantLimit?: number | null;
  startAt?: Date | null;
  endAt?: Date | null;
  trackingMode: string;
  status: string;
  createdAt: Date;
}

interface MyFlashProps {
  flashesPromise?: Promise<Flash[]>;
  flashes?: Flash[];
  onCreateNew?: () => void;
}

export default function MyFlash({
  flashesPromise = Promise.resolve([]),
  flashes: flashesProp,
  onCreateNew,
}: MyFlashProps) {
  const flashesFromPromise = flashesPromise ? use(flashesPromise) : [];
  const flashes = flashesProp ?? flashesFromPromise;
  
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-9 h-px w-full bg-[#444d57]/40 md:hidden" />
      <div className="grid grid-cols-[auto_auto] gap-y-3 font-normal text-[#8a8f98] text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-white text-xl">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Flash Icon</title>
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              stroke="#F5F6F6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          My Flash
        </div>
        {flashes.length > 0 && (
          <div className="flex items-center justify-self-end">
            {flashes.length} Flash
            <div className="ml-1.5 inline-block size-1.5 bg-[#56FF8F]" />
          </div>
        )}
        <div className="col-span-2 my-2 hidden h-px w-full bg-[#444d57]/40 md:block" />
        {flashes.length > 0 && <div>Manage and track your active Flash tasks</div>}
      </div>
      <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-10 pt-14 pb-30 max-md:min-h-50">
        {/* Empty State - Ready to create */}
        {flashes.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center py-20">
            <h2 className="mb-4 font-['Orbitron'] font-bold text-4xl text-white md:text-5xl">
              Ready to create a new Flash?
            </h2>
            <p className="mb-8 text-[#8a8f98] text-base md:text-lg">
              Create a new Flash to quickly engage users and grow your community
            </p>
            <button
              className="group relative flex h-14 w-full max-w-md items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-[#68FEF5] to-[#4E9095] transition-opacity hover:opacity-90 md:h-16"
              onClick={onCreateNew}
              type="button"
            >
              <svg
                className="size-6"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Plus Icon</title>
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 8V16M8 12H16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="font-['Poppins'] font-semibold text-black text-lg">
                Start New Flash
              </span>
            </button>
          </div>
        )}
        
        {/* Flash Cards */}
        {flashes.map((flash) => {
          const isActive = flash.status === "ACTIVE";
          const statusText = isActive ? "Active" : "Ended";
          const statusColor = isActive ? "#56FF8F" : "#8a8f98";

          return (
            <div
              className="flex w-full shrink-0 flex-col gap-4 rounded-xl border border-[#2D3338] p-4 max-md:w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              key={flash.id}
            >
              {/* Header with image and title */}
              <div className="flex items-start gap-3">
                {flash.bannerImage ? (
                  <img
                    alt={flash.name}
                    className="size-12 rounded-lg object-cover"
                    src={flash.bannerImage}
                  />
                ) : (
                  <div className="flex size-12 items-center justify-center rounded-lg bg-linear-to-br from-[#182D2F] to-[#4E9095] font-bold text-white text-xl">
                    {flash.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-base">
                    {flash.name}
                  </h3>
                  {flash.message && (
                    <p className="mt-1 text-[#8a8f98] text-xs">
                      {flash.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              {flash.description && (
                <p className="text-[#8a8f98] text-sm line-clamp-2">
                  {flash.description}
                </p>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-[rgba(45,51,56,0.5)] p-3">
                  <div className="text-[#8a8f98] text-xs">Prize Pool</div>
                  <div className="mt-1 font-semibold text-white text-base">
                    {flash.prizePool !== null
                      ? `${formatNumber(flash.prizePool)} ${flash.prizeCurrency || ""}`
                      : "—"}
                  </div>
                </div>
                <div className="rounded-lg bg-[rgba(45,51,56,0.5)] p-3">
                  <div className="text-[#8a8f98] text-xs">Status</div>
                  <div
                    className="mt-1 font-semibold text-base"
                    style={{ color: statusColor }}
                  >
                    {statusText}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex items-center justify-between border-[#2D3338] border-t pt-3 text-xs">
                <div className="text-[#8a8f98]">
                  {flash.trackingMode === "TIME"
                    ? "Time-based"
                    : "Participants-based"}
                </div>
                <Link
                  className="font-medium text-[#68FEF5] hover:underline"
                  to={`/b/flash/${flash.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

