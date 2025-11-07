import { cn } from "~/lib/utils";
import calendarIcon from "../assets/calendar.svg";
import chevronDownIcon from "../assets/chevron-down.svg";

interface FlashStep2FormProps {
  formData: {
    prizePool: string;
    prizeCurrency: string;
    perUserPrize: string;
    participantLimit: string;
    startDate: string;
    endDate: string;
    trackingMode: string;
  };
  onChange: (data: Partial<FlashStep2FormProps["formData"]>) => void;
  className?: string;
}

export default function FlashStep2Form({
  formData,
  onChange,
  className,
}: FlashStep2FormProps) {
  const handlePrizePoolChange = (value: string) => {
    onChange({ prizePool: value });

    // Auto-calculate per user prize if participant limit is set
    if (formData.participantLimit && value) {
      const pool = Number.parseFloat(value);
      const limit = Number.parseInt(formData.participantLimit, 10);
      if (Number.isFinite(pool) && Number.isFinite(limit) && limit > 0) {
        onChange({ perUserPrize: (pool / limit).toFixed(2) });
      }
    }
  };

  const handleParticipantLimitChange = (value: string) => {
    onChange({ participantLimit: value });

    // Auto-calculate per user prize if prize pool is set
    if (formData.prizePool && value) {
      const pool = Number.parseFloat(formData.prizePool);
      const limit = Number.parseInt(value, 10);
      if (Number.isFinite(pool) && Number.isFinite(limit) && limit > 0) {
        onChange({ perUserPrize: (pool / limit).toFixed(2) });
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 md:gap-9", className)}>
      {/* Tracking Mode */}
      <div className="flex flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
          <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
            Tracking Mode
          </span>
        </div>
        <div className="relative">
          <button
            className="flex h-12 w-full items-center justify-between rounded-lg border border-[#707070] bg-transparent px-6 py-3 md:h-16"
            onClick={(e) => {
              e.preventDefault();
              const newMode =
                formData.trackingMode === "TIME" ? "PARTICIPANTS" : "TIME";
              onChange({ trackingMode: newMode });
            }}
            type="button"
          >
            <span className="font-['Poppins'] font-normal text-[#818181] text-sm md:text-base">
              {formData.trackingMode === "TIME"
                ? "Time-based"
                : "Participants-based"}
            </span>
            <img
              alt="Select"
              className="h-6 w-6"
              height={24}
              src={chevronDownIcon}
              width={24}
            />
          </button>
        </div>
        <p className="font-['Poppins'] font-light text-[#818181] text-xs md:text-sm">
          {formData.trackingMode === "TIME"
            ? "Task ends when the end date is reached"
            : "Task ends when participant limit is reached"}
        </p>
      </div>

      {/* Prize Pool */}
      <div className="flex flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
          <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
            Prize Pool
          </span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <input
            className="flex-1 rounded-lg border border-[#565656] bg-transparent px-6 py-4 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-5 md:text-xl"
            onChange={(e) => handlePrizePoolChange(e.target.value)}
            placeholder="5000"
            type="number"
            value={formData.prizePool}
          />
          <input
            className="w-full rounded-lg border border-[#707070] bg-transparent px-6 py-3 font-['Poppins'] font-normal text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:h-16 md:w-40 md:text-base"
            onChange={(e) => onChange({ prizeCurrency: e.target.value })}
            placeholder="USDT"
            type="text"
            value={formData.prizeCurrency || ""}
          />
        </div>
        <p className="font-['Poppins'] font-light text-[#818181] text-xs md:text-sm">
          Total rewards budget for this Flash task
        </p>
      </div>

      {/* Participant Limit and Per User Prize */}
      {formData.trackingMode === "PARTICIPANTS" && (
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
              <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
                Participant Limit
              </span>
            </div>
            <input
              className="w-full rounded-lg border border-[#565656] bg-transparent px-4 py-3 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-4 md:text-sm"
              onChange={(e) => handleParticipantLimitChange(e.target.value)}
              placeholder="1000"
              type="number"
              value={formData.participantLimit}
            />
            <p className="font-['Poppins'] font-light text-[#818181] text-xs md:text-sm">
              Required for participants-based tracking
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
              <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
                Per-user Prize
              </span>
            </div>
            <input
              className="w-full rounded-lg border border-[#565656] bg-transparent px-4 py-3 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-4 md:text-sm"
              onChange={(e) => onChange({ perUserPrize: e.target.value })}
              placeholder="10"
              readOnly
              type="number"
              value={formData.perUserPrize}
            />
            <p className="font-['Poppins'] font-light text-[#818181] text-xs md:text-sm">
              Auto-calculated based on participant limit
            </p>
          </div>
        </div>
      )}

      {/* Date Fields */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-14">
        {/* Start Date */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
            <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
              Start Date
            </span>
          </div>
          <div className="relative">
            <input
              className="w-full rounded-lg border border-[#565656] bg-transparent px-4 py-3 pr-12 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-4 md:text-sm"
              onChange={(e) => onChange({ startDate: e.target.value })}
              placeholder="Month / Day / Year"
              type="datetime-local"
              value={formData.startDate}
            />
            <img
              alt="Calendar"
              className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-4 h-8 w-8 md:h-9 md:w-9"
              height={35}
              src={calendarIcon}
              width={35}
            />
          </div>
        </div>

        {/* End Date */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
            <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
              End Date
            </span>
          </div>
          <div className="relative">
            <input
              className="w-full rounded-lg border border-[#565656] bg-transparent px-4 py-3 pr-12 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-4 md:text-sm"
              onChange={(e) => onChange({ endDate: e.target.value })}
              placeholder="Month / Day / Year"
              type="datetime-local"
              value={formData.endDate}
            />
            <img
              alt="Calendar"
              className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-4 h-8 w-8 md:h-9 md:w-9"
              height={35}
              src={calendarIcon}
              width={35}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
