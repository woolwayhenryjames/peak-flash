import { cn } from "~/lib/utils";
import calendarIcon from "../assets/calendar.svg";
import chevronDownIcon from "../assets/chevron-down.svg";

interface Step2FormProps {
  formData: {
    poolSize: string;
    poolUnit: string;
    startDate: string;
    endDate: string;
  };
  onChange: (data: Partial<Step2FormProps["formData"]>) => void;
  className?: string;
}

export default function Step2Form({
  formData,
  onChange,
  className,
}: Step2FormProps) {
  return (
    <div className={cn("flex flex-col gap-6 md:gap-20", className)}>
      {/* Pool Size */}
      <div className="flex flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
          <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
            Pool size
          </span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <input
            className="flex-1 rounded-lg border border-[#565656] bg-transparent px-6 py-4 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-5 md:text-xl"
            onChange={(e) => onChange({ poolSize: e.target.value })}
            placeholder="10000"
            type="text"
            value={formData.poolSize}
          />
          <div className="relative">
            <button
              className="flex h-12 w-full items-center justify-between rounded-lg border border-[#707070] bg-transparent px-6 py-3 md:h-16 md:w-40"
              type="button"
            >
              <span className="font-['Poppins'] font-normal text-[#818181] text-sm md:text-base">
                {formData.poolUnit || "USDT"}
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
        </div>
        <p className="font-['Poppins'] font-light text-[#818181] text-xs md:text-sm">
          USDT or custom token
        </p>
      </div>

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
              type="date"
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
              type="date"
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
