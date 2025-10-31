import { useState } from "react";
import GlowContainer from "~/components/GlowContainer";
import { authClient } from "~/lib/auth-client";
import { cn, formatNumber } from "~/lib/utils";
import type { Route } from "./+types/_flash";

export default function FlashCard({
  flash: {
    name,
    description,
    prizePool,
    prizeCurrency,
    trackingMode,
    endAt,
    tasks,
    bannerImage,
    metrics,
  },
  twitterAccountId,
}: {
  flash: Route.ComponentProps["loaderData"][number];
  twitterAccountId: string | undefined;
}) {
  const participantsCount = metrics.participantCount;
  const remainingPrizes = metrics.remainingPrizes;
  const showRemainingPrizes = remainingPrizes !== null;
  const isEnded = metrics.isEnded;

  const now = new Date();
  const endAtDate = endAt ? new Date(endAt) : null;

  const isParticipantsBased = trackingMode === "PARTICIPANTS";

  const periodLabel = isParticipantsBased ? "Participants Left" : "days left";

  const periodNumber = (() => {
    if (isParticipantsBased) {
      if (metrics.participantsLeft !== null) {
        return formatNumber(metrics.participantsLeft);
      }
      return "No limit";
    }

    if (endAtDate) {
      const diffMs = endAtDate.getTime() - now.getTime();
      if (diffMs > 0) {
        const daysLeft = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
        return formatNumber(daysLeft);
      }
      return "0";
    }

    return "Ongoing";
  })();

  return (
    <div className="w-full">
      {/* Card with gradient border */}
      <div
        className={cn(
          "rounded-t-2xl border-radius-gradiant p-6 transition-opacity",
          isEnded && "opacity-60"
        )}
        style={
          {
            "--border-gradient": isEnded
              ? "linear-gradient(#999)"
              : "linear-gradient(0deg,rgba(26,26,26,1) 63%,rgba(104,255,167,1) 100%)",
          } as React.CSSProperties
        }
      >
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
          <div className="flex flex-col items-end gap-2">
            <div
              className="flex min-w-21 flex-col gap-1 rounded-md px-2 py-2"
              style={{
                background: isEnded
                  ? "#999"
                  : "linear-gradient(180deg, rgba(104, 255, 167, 1) 0%, rgba(216, 255, 125, 1) 100%)",
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
        </div>

        {/* Remaining Prizes */}
        {showRemainingPrizes && (
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
              Remaining Prizes:{" "}
              {formatNumber(Math.max(remainingPrizes ?? 0, 0))}
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
        <div className="flex items-center justify-evenly gap-6">
          {/* Prize Pool */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-clip-text font-medium text-transparent text-xl leading-tight"
              style={{
                backgroundImage:
                  "linear-gradient(116deg, rgba(109, 254, 116, 1) 0%, rgba(105, 215, 255, 1) 46%)",
              }}
            >
              {prizePool ? `$${formatNumber(prizePool)}` : "TBD"}
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
          <div className="flex flex-col items-end gap-1 text-right">
            <span
              className="bg-clip-text font-medium text-transparent text-xl leading-tight"
              style={{
                backgroundImage:
                  "linear-gradient(116deg, rgba(109, 254, 116, 1) 0%, rgba(105, 215, 255, 1) 46%)",
              }}
            >
              {periodNumber}
            </span>
            <div className="font-light text-[#A7A7A7] text-xs leading-tight">
              {periodLabel}
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="mt-7 flex flex-col gap-3">
          {isEnded ? (
            <div className="flex items-center justify-center border border-[#a4a4a4] border-dashed px-10 py-5 font-light text-[#a6a6a6] text-base">
              The task has ended.
            </div>
          ) : (
            tasks.map((task) => (
              <TaskItem
                isEnded={isEnded}
                key={task.id}
                task={task}
                twitterAccountId={twitterAccountId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function TaskItem({
  task,
  twitterAccountId,
  isEnded,
}: {
  task: Route.ComponentProps["loaderData"][number]["tasks"][number];
  twitterAccountId: string | undefined;
  isEnded: boolean;
}) {
  const { id, name, iconUrl, actionLabel, actionUrl, taskUsers, type } = task;
  const [isCompleted, setIsCompleted] = useState(
    taskUsers.some((tu) => tu.completed)
  );

  const checkComplete = async () => {
    if (isEnded || isCompleted) {
      return;
    }
    if (type === "FOLLOW_X" && !twitterAccountId) {
      return;
    }
    const response = await fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskId: id }),
    });
    if (response.ok) {
      setIsCompleted(true);
    }
  };

  const bindX = async () => {
    await authClient.linkSocial({
      provider: "twitter",
      callbackURL: "/u/flash",
    });
  };

  const actionButton = () => {
    if (isEnded && !isCompleted) {
      return (
        <GlowContainer className="pointer-events-none opacity-60" noShimmer>
          Task Ended
        </GlowContainer>
      );
    }

    if (type === "FOLLOW_X" && !twitterAccountId) {
      return (
        <button onClick={bindX} type="button">
          <GlowContainer className="text-xs">Bind Twitter</GlowContainer>
        </button>
      );
    }

    if (isCompleted) {
      return (
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Completed</title>
          <path
            d="M6.71184 10.7794L9.966 17.0842C9.966 17.0842 15.2542 4.27104 23.5932 0C23.3902 3.0504 22.5766 5.69496 24 8.94912C20.3388 9.76176 12.8136 18.9144 10.373 23.3887C6.91536 19.1179 2.8476 15.8638 0 14.8462L6.71184 10.7794Z"
            fill="#54C18E"
          />
        </svg>
      );
    }
    if (actionUrl) {
      return (
        <a
          href={actionUrl}
          onClick={checkComplete}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GlowContainer>{actionLabel}</GlowContainer>
        </a>
      );
    }
    return <GlowContainer>{actionLabel}</GlowContainer>;
  };
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-lg border border-[#212125] from-[#2D3835]/10 to-[#7F9E90]/24 px-4 py-5 transition-colors hover:border-[#636365] hover:bg-linear-to-br"
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
      <div>{actionButton()}</div>
    </div>
  );
}
