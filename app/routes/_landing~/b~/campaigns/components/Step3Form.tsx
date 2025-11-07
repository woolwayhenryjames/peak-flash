import { cn } from "~/lib/utils";
import clockIcon from "../assets/clock.svg";

interface Step3FormProps {
  formData: {
    requiredTags: string;
    contentRequirements: string;
  };
  onChange: (data: Partial<Step3FormProps["formData"]>) => void;
  className?: string;
}

export default function Step3Form({
  formData,
  onChange,
  className,
}: Step3FormProps) {
  return (
    <div className={cn("flex flex-col gap-6 md:gap-9", className)}>
      {/* Join Requirements Header */}
      <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
        <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
          Join Requirements
        </span>
      </div>

      {/* Required Tags */}
      <div className="flex flex-col gap-4">
        <h3 className="font-['Poppins'] font-normal text-[#ECECEC] text-sm md:text-xl">
          Required Tags
        </h3>
        <div className="flex flex-col gap-4">
          <input
            className="rounded-lg border border-[#565656] bg-transparent px-4 py-4 font-['Poppins'] font-light text-[#818181] text-xs placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:px-6 md:py-5 md:text-xl"
            onChange={(e) => onChange({ requiredTags: e.target.value })}
            placeholder="InfinityGround,Web3,DeFi"
            type="text"
            value={formData.requiredTags}
          />
          <p className="font-['Poppins'] font-light text-[#97FFD5] text-[10px] md:text-xs">
            Separate tags with commas. Recommend including project names or
            branded product names for better identification. Maximum 3 hashtags
            supported.
          </p>
        </div>
      </div>

      {/* Content Requirements */}
      <div className="flex flex-col gap-4">
        <h3 className="font-['Poppins'] font-normal text-[#ECECEC] text-sm md:text-xl">
          Content Requirements
        </h3>
        <div className="flex flex-col gap-4">
          <textarea
            className="rounded-lg border border-[#565656] bg-transparent px-4 py-4 font-['Poppins'] font-light text-[#818181] text-xs placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:px-6 md:py-5 md:text-xl"
            onChange={(e) => onChange({ contentRequirements: e.target.value })}
            placeholder="1.Intro the product in one line.
2.Add a simple CTA.
3.Include relevant hashtags."
            rows={5}
            value={formData.contentRequirements}
          />
          <p className="font-['Poppins'] font-light text-[#97FFD5] text-[10px] md:text-xs">
            Keep content requirements concise. Ideally 1-3 sentences clearly
            highlighting the key points of the project for creators to promote.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-5">
        {/* Buttons */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          {/* Cancel Button */}
          <button
            className="group relative flex h-11 w-full items-center justify-center overflow-hidden rounded-xl border border-gradient-to-b from-[#B8B8B8] to-[#4E4E4E] md:h-14 md:w-56"
            type="button"
          >
            <div className="absolute inset-x-4 top-0.5 h-2 bg-linear-to-r from-34% from-white to-99% to-white/[0.14] blur-sm" />
            <span className="font-['Poppins'] font-normal text-sm text-white">
              Cancel
            </span>
          </button>

          {/* Launch Campaign Button */}
          <button
            className="group relative flex h-11 w-full items-center justify-center overflow-hidden rounded-xl border border-gradient-to-b bg-linear-to-b from-[#182D2F] from-[#B8B8B8] to-[#4E4E4E] to-[#4E9095] md:h-14 md:w-56"
            type="submit"
          >
            <div className="absolute inset-x-4 top-0.5 h-2 bg-linear-to-r from-34% from-white to-99% to-white/[0.14] blur-sm" />
            <span className="font-['Poppins'] font-normal text-sm text-white">
              Launch Campaign
            </span>
          </button>
        </div>

        {/* Autosave and Review Notice */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <img
              alt="Clock"
              className="h-4 w-4"
              height={17}
              src={clockIcon}
              width={17}
            />
            <span className="font-['Poppins'] font-light text-[#818181] text-xs md:text-sm">
              Autosave every 30s.
            </span>
          </div>
          <p className="text-right font-['Poppins'] font-light text-[#818181] text-[10px] md:text-sm">
            Campaign will go live after PeakAI review and approval.
          </p>
        </div>
      </div>
    </div>
  );
}
