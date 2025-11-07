import { useState } from "react";
import Stepper from "~/components/Stepper";
import createIcon from "../assets/create-icon.svg";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";

export default function CreateCampaign() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: "",
    description: "",
    image: null as File | null,
    // Step 2
    poolSize: "",
    poolUnit: "USDT",
    startDate: "",
    endDate: "",
    // Step 3
    requiredTags: "",
    contentRequirements: "",
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitting campaign:", formData);
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="fade-in slide-in-from-top-4 flex flex-1 animate-in flex-col duration-700">
      <div className="mb-9 h-px w-full bg-[#444d57]/40 md:hidden" />
      <div className="flex items-center gap-1.5 font-semibold text-white text-xl">
        <img alt="Create" height={24} src={createIcon} width={18} />
        Create a New Campaign
      </div>
      <div className="my-2 hidden h-px w-full bg-[#444d57]/40 md:block" />

      <form
        className="mt-17 flex flex-1 flex-col md:flex-row md:gap-48"
        onSubmit={handleSubmit}
      >
        {/* Stepper - Left side on desktop, top on mobile */}
        <div className="mt-12 md:mt-0">
          <Stepper currentStep={currentStep} steps={campaignSteps} />
        </div>

        {/* Form Content - Right side on desktop, bottom on mobile */}
        <div className="mt-16 flex-1 md:mt-0 md:max-w-lg">
          {currentStep === 1 && (
            <Step1Form
              formData={{
                name: formData.name,
                description: formData.description,
                image: formData.image,
              }}
              onChange={updateFormData}
            />
          )}

          {currentStep === 2 && (
            <Step2Form
              formData={{
                poolSize: formData.poolSize,
                poolUnit: formData.poolUnit,
                startDate: formData.startDate,
                endDate: formData.endDate,
              }}
              onChange={updateFormData}
            />
          )}

          {currentStep === 3 && (
            <Step3Form
              formData={{
                requiredTags: formData.requiredTags,
                contentRequirements: formData.contentRequirements,
              }}
              onChange={updateFormData}
            />
          )}

          {/* Navigation Buttons for Step 1 and 2 */}
          {currentStep < 3 && (
            <div className="mt-9 flex items-center justify-between md:mt-20">
              {currentStep === 2 && (
                <button
                  className="font-['Poppins'] font-normal text-[#767676] text-sm"
                  onClick={handleBack}
                  type="button"
                >
                  Back
                </button>
              )}
              <button
                className="group relative ml-auto flex h-11 w-56 items-center justify-center overflow-hidden rounded-xl border border-gradient-to-b from-[#B8B8B8] to-[#4E4E4E] md:h-14"
                onClick={handleNext}
                type="button"
              >
                <div className="absolute inset-x-4 top-0.5 h-2 bg-linear-to-r from-34% from-white to-99% to-white/[0.14] blur-sm" />
                <span className="font-['Poppins'] font-normal text-sm text-white">
                  Next
                </span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

const campaignSteps = [
  { label: "Add your campaign name and description." },
  { label: "Set pool size and campaign dates" },
  { label: "Set hashtag and content requirements" },
];
