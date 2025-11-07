interface Step {
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div className="flex items-start gap-3 md:gap-4" key={stepNumber}>
            {/* Step Number Circle */}
            <div
              className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 font-['Poppins'] font-semibold text-sm transition-all md:size-10 md:text-base ${
                isActive
                  ? "border-[#68FEF5] bg-[#68FEF5] text-black"
                  : isCompleted
                    ? "border-[#68FEF5] bg-transparent text-[#68FEF5]"
                    : "border-[#565656] bg-transparent text-[#565656]"
              }`}
            >
              {isCompleted ? (
                <svg
                  className="size-5"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.41609 7.09233L6.55718 11.2406C6.55718 11.2406 10.0365 2.81015 15.5233 0C15.3897 2.00703 14.8544 3.74703 15.7909 5.88812C13.382 6.4228 8.43077 12.4448 6.82499 15.3887C4.54999 12.5787 1.87359 10.4376 0 9.7681L4.41609 7.09233Z"
                    fill="#68FEF5"
                  />
                </svg>
              ) : (
                stepNumber
              )}
            </div>

            {/* Step Label */}
            <div className="flex-1 pt-1">
              <p
                className={`font-['Poppins'] font-normal text-sm leading-relaxed transition-all md:text-base ${
                  isActive
                    ? "text-white"
                    : isCompleted
                      ? "text-[#68FEF5]"
                      : "text-[#565656]"
                }`}
              >
                {step.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

