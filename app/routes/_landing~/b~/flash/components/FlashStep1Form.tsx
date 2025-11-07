import { cn } from "~/lib/utils";
import uploadImageIcon from "../assets/upload-image.svg";

interface FlashStep1FormProps {
  formData: {
    name: string;
    description: string;
    bannerImage: File | null;
  };
  onChange: (data: Partial<FlashStep1FormProps["formData"]>) => void;
  className?: string;
}

export default function FlashStep1Form({
  formData,
  onChange,
  className,
}: FlashStep1FormProps) {
  return (
    <div className={cn("flex flex-col gap-6 md:gap-9", className)}>
      {/* Name Field */}
      <div className="flex flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-gradient-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
          <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
            Name
          </span>
        </div>
        <input
          className="rounded-lg border border-[#565656] bg-transparent px-6 py-4 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-5 md:text-xl"
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Flash task name"
          type="text"
          value={formData.name}
        />
      </div>

      {/* Description Field */}
      <div className="flex flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-gradient-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
          <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
            Description
          </span>
        </div>
        <textarea
          className="rounded-lg border border-[#565656] bg-transparent px-6 py-4 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none md:py-5 md:text-xl"
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder="Briefly describe task requirements and rewards"
          rows={3}
          value={formData.description}
        />
      </div>

      {/* Banner Image Upload Field */}
      <div className="flex flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-gradient-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
          <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
            Banner Image
          </span>
        </div>
        <div className="relative rounded-lg border border-[#565656] border-dashed px-16 py-6 md:px-28 md:py-8">
          <input
            accept="image/*"
            className="absolute inset-0 cursor-pointer opacity-0"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              onChange({ bannerImage: file });
            }}
            type="file"
          />
          <div className="flex flex-col items-center gap-1">
            <img
              alt="Upload"
              className="h-12 w-12 md:h-14 md:w-14"
              src={uploadImageIcon}
            />
            <span className="font-['Poppins'] font-normal text-[#E6E6E6] text-base md:text-xl">
              Upload Image
            </span>
            <span className="font-['Poppins'] font-light text-[#848484] text-xs md:text-sm">
              {formData.bannerImage ? formData.bannerImage.name : "No file"}
            </span>
          </div>
          {/* Details button */}
          <button
            className="group relative mt-4 flex h-11 w-48 items-center justify-center overflow-hidden rounded-xl border border-gradient-to-b from-[#B8B8B8] to-[#4E4E4E]"
            type="button"
          >
            <div className="absolute inset-x-1.5 top-0.5 h-1.5 bg-gradient-to-r from-[34%] from-white to-[99%] to-white/[0.14] blur-sm" />
            <span className="font-['Poppins'] font-normal text-sm text-white">
              Details
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

