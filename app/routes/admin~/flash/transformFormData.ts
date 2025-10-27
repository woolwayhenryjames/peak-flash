import type {
  FlashStatus,
  FlashTrackingMode,
  TaskType,
} from ".prisma/main/client";
import { type FileUpload, parseFormData } from "@remix-run/form-data-parser";
import { uploadHandler } from "~/services/aws-s3.server";

const parseNumber = (value: unknown) => {
  if (typeof value !== "string") {
    return;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return;
  }
  const number = Number(trimmed);
  return Number.isNaN(number) ? undefined : number;
};

const parseInteger = (value: unknown) => {
  if (typeof value !== "string") {
    return;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return;
  }
  const integer = Number.parseInt(trimmed, 10);
  return Number.isNaN(integer) ? undefined : integer;
};

const parseDate = (value: unknown) => {
  if (typeof value !== "string") {
    return;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return;
  }
  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

interface RawTaskInput {
  id?: number | null;
  name: string;
  description?: string | null;
  iconUrl?: string | null;
  actionLabel?: string | null;
  actionUrl?: string | null;
  type?: TaskType | null;
  isRequired?: boolean | null;
  verificationMethod?: string | null;
  order?: number | null;
  iconUploadKey?: string | null;
}

export async function transformFormData(request: Request) {
  const formUploadHandler = async (fileUpload: FileUpload) => {
    if (!fileUpload.type.startsWith("image/")) {
      return null;
    }

    if (
      fileUpload.fieldName === "bannerImage" ||
      fileUpload.fieldName.startsWith("taskIcon-")
    ) {
      const uploadPath = await uploadHandler(fileUpload);
      return `/assets${uploadPath}`;
    }

    return null;
  };

  const formData = await parseFormData(request, formUploadHandler);
  const inputData = Object.fromEntries(formData) as Record<
    string,
    string | null
  >;

  const trackingMode = inputData.trackingMode as FlashTrackingMode | undefined;
  const status = inputData.status as FlashStatus | undefined;

  const tasks: RawTaskInput[] = inputData.tasks
    ? (JSON.parse(inputData.tasks) as RawTaskInput[])
    : [];

  const processedTasks = tasks
    .filter((task) => task.name)
    .map((task, index) => {
      const iconKey = task.iconUploadKey || `taskIcon-${index}`;
      const uploadedIcon = formData.get(iconKey);
      const iconUrl =
        typeof uploadedIcon === "string" && uploadedIcon.length > 0
          ? uploadedIcon
          : task.iconUrl || undefined;

      return {
        id: task.id ?? undefined,
        name: task.name,
        description: task.description ?? undefined,
        iconUrl,
        actionLabel: task.actionLabel ?? undefined,
        actionUrl: task.actionUrl ?? undefined,
        type: task.type ?? undefined,
        isRequired: task.isRequired ?? undefined,
        order: task.order ?? undefined,
      };
    });

  const bannerImageUpload = formData.get("bannerImage");
  const bannerImage =
    typeof bannerImageUpload === "string" && bannerImageUpload.length > 0
      ? bannerImageUpload
      : inputData.bannerImageUrl || undefined;

  const data = {
    name: inputData.name || "",
    message: inputData.message || undefined,
    description: inputData.description || undefined,
    status,
    prizePool: parseNumber(inputData.prizePool),
    prizeCurrency: inputData.prizeCurrency || undefined,
    perUserPrize: parseNumber(inputData.perUserPrize),
    participantLimit: parseInteger(inputData.participantLimit),
    startAt: parseDate(inputData.startAt),
    endAt: parseDate(inputData.endAt),
    trackingMode,
    ownerId: inputData.ownerId || "",
    bannerImage,
    tasks: processedTasks,
  };

  const intent = inputData.intent || "create";
  const idValue = inputData.id;
  const id =
    typeof idValue === "string" && idValue.length > 0
      ? Number.parseInt(idValue, 10)
      : undefined;

  return { intent, id, data };
}
