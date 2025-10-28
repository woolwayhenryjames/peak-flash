import GlowContainer from "~/components/GlowContainer";
import { cn, formatNumber } from "~/lib/utils";
import type { Route } from "./+types/_flash";

export default function FlashCard({
  flash: {
    name,
    description,
    prizePool,
    prizeCurrency,
    participantLimit,
    tasks,
    bannerImage,
  },
}: {
  flash: Route.ComponentProps["loaderData"][number];
}) {
  // Calculate remaining prizes (simplified - you may need to adjust logic)
  const remainingPrizes = participantLimit
    ? participantLimit -
      tasks.reduce((acc, task) => acc + task.taskUsers.length, 0)
    : null;

  // Calculate actual participants (unique users across tasks)
  const participantsCount = new Set(
    tasks.flatMap((task) => task.taskUsers.map((tu) => tu.userId))
  ).size;

  return (
    <div className="w-full">
      {/* Card with gradient border */}
      <div className="rounded-t-2xl border-radius-gradiant p-6 [--border-gradient:linear-gradient(0deg,rgba(26,26,26,1)_63%,rgba(104,255,167,1)_100%)]">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-10">
          {/* Left: Flash Info */}
          <div className="flex flex-1 flex-col gap-3">
            {/* Title with Icon */}
            <div className="flex items-end gap-2">
              {bannerImage && (
                <img
                  alt=""
                  className="aspect-square w-5 object-cover"
                  src={bannerImage}
                />
              )}
              <h3 className="font-medium text-white text-xl leading-tight">
                {name}
              </h3>
            </div>

            {/* Description */}
            {description && (
              <p className="line-clamp-2 min-h-[2lh] font-normal text-[#CBCBCB] text-xs leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Right: Participants Badge */}
          <div
            className="flex flex-col gap-1 rounded-md px-2 py-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(104, 255, 167, 1) 0%, rgba(216, 255, 125, 1) 100%)",
              minWidth: "5.3rem",
            }}
          >
            <div className="text-center font-normal text-[#000000] text-sm leading-tight">
              {formatNumber(participantsCount)}
            </div>
            <div className="text-center font-normal text-[#3B3B3B] text-xs leading-tight">
              Participants
            </div>
          </div>
        </div>

        {/* Remaining Prizes */}
        {remainingPrizes !== null && remainingPrizes > 0 && (
          <div className="mt-7 flex items-center justify-end gap-2">
            <svg
              className="size-2.5"
              fill="#68FFA7"
              viewBox="0 0 10 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Prize icon</title>
              <path d="M5 0L10 8H0L5 0ZM5 16L0 8H10L5 16Z" />
            </svg>
            <span className="font-normal text-[#68FFA7] text-xs leading-relaxed">
              Remaining Prizes: {formatNumber(remainingPrizes)}
            </span>
          </div>
        )}

        {/* Divider */}
        <div
          className="my-7 h-px w-full"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Stats Section */}
        <div className="flex items-center justify-center gap-6">
          {/* Prize Pool */}
          <div className="flex flex-col gap-2">
            <div className="flex items-end gap-0.5">
              <svg
                className="mb-0.5 w-2.5"
                fill="url(#prizeGradient)"
                viewBox="0 0 10 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Prize pool icon</title>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="prizeGradient"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6DFE74" />
                    <stop offset="46%" stopColor="#69D7FF" />
                  </linearGradient>
                </defs>
                <path d="M8.5 6.5C8.5 7.88 7.88 9.13 6.88 10L5 12.25L3.13 10C2.13 9.13 1.5 7.88 1.5 6.5C1.5 4.29 3.29 2.5 5.5 2.5H5C7.21 2.5 9 4.29 9 6.5H8.5ZM5 0C2.24 0 0 2.24 0 5C0 8.5 5 15 5 15C5 15 10 8.5 10 5C10 2.24 7.76 0 5 0Z" />
              </svg>
              <span
                className="bg-clip-text font-medium text-transparent text-xl leading-tight"
                style={{
                  backgroundImage:
                    "linear-gradient(116deg, rgba(109, 254, 116, 1) 0%, rgba(105, 215, 255, 1) 46%)",
                }}
              >
                {prizePool
                  ? formatNumber(
                      typeof prizePool === "string"
                        ? Number.parseFloat(prizePool)
                        : Number(prizePool)
                    )
                  : "TBD"}
              </span>
            </div>
            {prizeCurrency && (
              <div
                className="bg-clip-text font-light text-transparent text-xs leading-tight"
                style={{
                  backgroundImage:
                    "linear-gradient(116deg, rgba(109, 254, 116, 1) 0%, rgba(105, 215, 255, 1) 46%)",
                }}
              >
                in {prizeCurrency}
              </div>
            )}
            <div className="font-light text-[#A7A7A7] text-xs leading-tight">
              Prize Pool
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            className="h-26 w-px"
            style={{
              background: "#373737",
            }}
          />

          {/* Task Period */}
          <div className="flex flex-col items-end gap-2">
            <span
              className="bg-clip-text font-medium text-transparent text-xl leading-tight"
              style={{
                backgroundImage:
                  "linear-gradient(116deg, rgba(109, 254, 116, 1) 0%, rgba(105, 215, 255, 1) 46%)",
              }}
            >
              {tasks.length}
            </span>
            <div className="font-light text-[#A7A7A7] text-xs leading-tight">
              Task Period
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="mt-7 flex flex-col gap-3">
          {tasks.map((task) => {
            const isCompleted = task.taskUsers.some((tu) => tu.completed);

            return (
              <TaskItem
                actionLabel={task.actionLabel}
                actionUrl={task.actionUrl}
                iconUrl={task.iconUrl}
                isCompleted={isCompleted}
                key={task.id}
                name={task.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface TaskItemProps {
  name: string;
  iconUrl?: string | null;
  actionLabel: string;
  actionUrl?: string | null;
  isCompleted: boolean;
}

function TaskItem({
  name,
  iconUrl,
  actionLabel,
  actionUrl,
  isCompleted,
}: TaskItemProps) {
  const content = (
    <div
      className={cn(
        "flex items-center gap-1 rounded-lg border px-4 py-5 transition-colors",
        isCompleted
          ? "border-[#636365] bg-linear-to-br from-[#2D3835]/10 to-[#7F9E90]/24"
          : "border-[#212125]"
      )}
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Task Info */}
      <div className="flex flex-1 items-center gap-6">
        {/* Icon */}
        {iconUrl && (
          <img alt="" className="aspect-square w-5 shrink-0" src={iconUrl} />
        )}

        {/* Task Name */}
        <span className="flex-1 font-light text-[#D7D7D7] text-xs leading-relaxed">
          {name}
        </span>
      </div>

      {/* Action Button */}
      <button disabled={isCompleted} type="button">
        <GlowContainer>{isCompleted ? "✓" : actionLabel}</GlowContainer>
      </button>
    </div>
  );

  if (actionUrl && !isCompleted) {
    return (
      <a href={actionUrl} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return content;
}
