import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatter = new Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
});

export function formatNumber(value: number | null | undefined) {
  return formatter.format(value ?? 0);
}

export function getRemainingDays(startDate: Date, endDate: Date) {
  // Calculate days left and status based on endDate
  const now = new Date();
  const timeDiff = endDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  let status: "Active" | "Ending soon" | "New" | "Ended";
  if (daysLeft <= 0) {
    status = "Ended";
  } else if (daysLeft <= 3) {
    status = "Ending soon";
  } else if (now.getTime() - startDate.getTime() <= 7 * 24 * 60 * 60 * 1000) {
    status = "New"; // New if started within last 7 days
  } else {
    status = "Active";
  }

  let daysLeftText: string;
  if (daysLeft <= 0) {
    daysLeftText = "Ended";
  } else if (daysLeft === 1) {
    daysLeftText = "1 day left";
  } else {
    daysLeftText = `${daysLeft} days left`;
  }
  return { status, daysLeftText };
}

export function hideMiddleOfString(
  str: string,
  charsToShowStart = 6,
  charsToShowEnd = 4,
  placeholder = "..."
) {
  if (str.length <= charsToShowStart + charsToShowEnd) {
    return str; // No hiding needed if the string is too short
  }

  const startPart = str.slice(0, charsToShowStart);
  const endPart = str.slice(-charsToShowEnd);

  return `${startPart}${placeholder}${endPart}`;
}
