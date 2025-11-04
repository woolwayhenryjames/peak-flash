import type {
  FlashStatus,
  FlashTrackingMode,
  Prisma,
  TaskType,
} from ".prisma/main/client";
import {
  type Decimal,
  PrismaClientKnownRequestError,
} from "@prisma/client/runtime/library";
import { db } from "./db.server";

export type FlashWithTasks = Prisma.FlashGetPayload<{
  include: {
    tasks: {
      include: {
        taskUsers: {
          select: {
            userId: true;
            completed: true;
            completedAt: true;
            verificationStatus: true;
          };
        };
      };
      orderBy: {
        order: "asc";
      };
    };
  };
}>;

export interface FlashMetrics {
  participantCount: number;
  requiredCompletionCount: number;
  remainingPrizes: number | null;
  participantsLeft: number | null;
  isEnded: boolean;
  statusLabel: "draft" | "upcoming" | "active" | "ended" | "archived";
  trackingMode: FlashTrackingMode;
}

export interface FlashWithMetrics extends FlashWithTasks {
  metrics: FlashMetrics;
}

export interface FlashTaskInput {
  id?: number;
  name: string;
  description?: string;
  iconUrl?: string;
  actionLabel?: string;
  actionUrl?: string;
  type?: TaskType;
  isRequired?: boolean;
  order?: number;
  metadata?: Prisma.JsonValue;
}

export interface FlashMutationInput {
  name: string;
  message?: string | null;
  description?: string | null;
  status?: FlashStatus;
  prizePool?: number | string | null;
  prizeCurrency?: string | null;
  perUserPrize?: number | string | null;
  participantLimit?: number | null;
  startAt?: Date | string | null;
  endAt?: Date | string | null;
  trackingMode?: FlashTrackingMode;
  ownerId: string;
  bannerImage?: string | null;
  tasks?: FlashTaskInput[];
}

const toDecimal = (value: number | string | null | undefined) => {
  if (value === null || value === undefined || value === "") {
    return;
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value.toString() : undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const toDate = (value: Date | string | null | undefined) => {
  if (!value) {
    return;
  }

  if (value instanceof Date) {
    return value;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

const normalizeTaskInput = (task: FlashTaskInput) => {
  const {
    name,
    description,
    iconUrl,
    actionLabel,
    actionUrl,
    type,
    isRequired,
    order,
    metadata,
  } = task;

  return {
    name,
    description,
    iconUrl,
    actionLabel: actionLabel || "GO",
    actionUrl,
    type: (type ?? "CUSTOM") as TaskType,
    isRequired: isRequired ?? false,
    order: order ?? 0,
    metadata,
  };
};

export const computeFlashMetrics = (flash: FlashWithTasks): FlashMetrics => {
  const participants = new Set<string>();
  const requiredTaskIds = flash.tasks.filter((task) => task.isRequired);
  const requiredTaskIdSet = new Set(requiredTaskIds.map((task) => task.id));
  const requiredCompletionTracker = new Map<number, Set<string>>();

  for (const task of flash.tasks) {
    for (const assignment of task.taskUsers) {
      participants.add(assignment.userId);

      if (
        task.isRequired &&
        assignment.completed &&
        assignment.verificationStatus === "APPROVED"
      ) {
        if (!requiredCompletionTracker.has(task.id)) {
          requiredCompletionTracker.set(task.id, new Set());
        }
        requiredCompletionTracker.get(task.id)?.add(assignment.userId);
      }
    }
  }

  let requiredCompletionCount = 0;
  if (requiredTaskIdSet.size === 0) {
    requiredCompletionCount = participants.size;
  } else {
    const userToRequiredCompletions = new Map<string, number>();
    for (const [_, users] of requiredCompletionTracker.entries()) {
      for (const userId of users) {
        userToRequiredCompletions.set(
          userId,
          (userToRequiredCompletions.get(userId) ?? 0) + 1
        );
      }
    }

    for (const [, completedCount] of userToRequiredCompletions) {
      if (completedCount === requiredTaskIdSet.size) {
        requiredCompletionCount += 1;
      }
    }
  }

  const participantCount = participants.size;
  const participantLimit = flash.participantLimit ?? null;
  const remainingParticipantSlots =
    participantLimit === null
      ? null
      : Math.max(participantLimit - requiredCompletionCount, 0);

  let remainingPrizes: number | null = null;
  if (flash.prizePool && flash.perUserPrize) {
    const poolValue = Number(flash.prizePool);
    const perUserValue = Number(flash.perUserPrize);
    if (Number.isFinite(poolValue) && Number.isFinite(perUserValue)) {
      remainingPrizes = Math.max(
        poolValue - perUserValue * requiredCompletionCount,
        0
      );
    }
  }

  const now = new Date();
  const manuallyEnded = flash.status === "ENDED";
  const timeEnded = flash.endAt
    ? flash.endAt.getTime() <= now.getTime()
    : false;
  const participantEnded =
    participantLimit !== null && requiredCompletionCount >= participantLimit;
  const prizeDepleted = remainingPrizes !== null && remainingPrizes <= 0;
  const isEnded =
    manuallyEnded || timeEnded || participantEnded || prizeDepleted;

  let statusLabel: FlashMetrics["statusLabel"] = "draft";
  if (isEnded) {
    statusLabel = "ended";
  } else if (flash.status === "ACTIVE") {
    statusLabel = "active";
  } else if (flash.startAt > now) {
    statusLabel = "upcoming";
  }

  return {
    participantCount,
    requiredCompletionCount,
    remainingPrizes,
    participantsLeft: remainingParticipantSlots,
    isEnded,
    statusLabel,
    trackingMode: flash.trackingMode,
  };
};

export async function getFlashWithMetrics(
  where?: Prisma.FlashWhereInput,
  take?: number
): Promise<FlashWithMetrics[]> {
  const flashes = await db.flash.findMany({
    where,
    take,
    orderBy: [{ status: "asc" }, { startAt: "desc" }, { createdAt: "desc" }],
    include: {
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      tasks: {
        include: {
          taskUsers: {
            select: {
              userId: true,
              completed: true,
              completedAt: true,
              verificationStatus: true,
            },
          },
        },
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  return flashes.map((flash) => ({
    ...flash,
    metrics: computeFlashMetrics(flash),
  }));
}

export function normalizeFlashForOutput<
  T extends { prizePool?: Decimal | null; perUserPrize?: Decimal | null },
>(flash: T) {
  return {
    ...flash,
    prizePool: flash.prizePool?.toNumber() ?? null,
    perUserPrize: flash.perUserPrize?.toNumber() ?? null,
  };
}

export function createFlashWithTasks(input: FlashMutationInput) {
  const {
    tasks = [],
    prizePool,
    perUserPrize,
    startAt,
    endAt,
    ...rest
  } = input;

  return db.flash.create({
    data: {
      ...rest,
      prizePool: toDecimal(prizePool),
      perUserPrize: toDecimal(perUserPrize),
      startAt: toDate(startAt) ?? new Date(),
      endAt: toDate(endAt),
      tasks: tasks.length
        ? {
            create: tasks.map((task) => ({
              ...normalizeTaskInput(task),
            })),
          }
        : undefined,
    },
  });
}

export function updateFlashWithTasks(id: number, input: FlashMutationInput) {
  const {
    tasks = [],
    prizePool,
    perUserPrize,
    startAt,
    endAt,
    ...rest
  } = input;

  return db.$transaction(async (tx) => {
    await tx.flash.update({
      where: { id },
      data: {
        ...rest,
        prizePool: toDecimal(prizePool),
        perUserPrize: toDecimal(perUserPrize),
        startAt: toDate(startAt) ?? new Date(),
        endAt: toDate(endAt),
      },
    });

    const incomingIds = tasks
      .map((task) => task.id)
      .filter((taskId): taskId is number => typeof taskId === "number");

    if (incomingIds.length > 0) {
      await tx.task.deleteMany({
        where: {
          flashId: id,
          id: { notIn: incomingIds },
        },
      });
    } else {
      await tx.task.deleteMany({
        where: {
          flashId: id,
        },
      });
    }

    for (const task of tasks) {
      const data = normalizeTaskInput(task);
      if (task.id) {
        await tx.task.update({
          where: { id: task.id },
          data,
        });
      } else {
        await tx.task.create({
          data: {
            ...data,
            flashId: id,
          },
        });
      }
    }
  });
}

export async function deleteFlash(id: number) {
  try {
    await db.flash.delete({ where: { id } });
    return { success: true as const };
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return { success: false as const, message: "Flash not found" };
    }

    throw error;
  }
}

export async function getAllParticipants(flashId: number) {
  const flash = await db.flash.findUnique({
    where: { id: flashId },
    include: {
      tasks: {
        include: {
          taskUsers: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  walletAddress: true,
                  twitterHandle: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!flash) {
    return { flash, participants: [], tasks: [] };
  }

  // Get all required tasks
  const requiredTasks = flash.tasks;
  if (requiredTasks.length === 0) {
    return { flash, participants: [], tasks: [] };
  }

  // Track which users completed which tasks
  const userCompletionMap = new Map<
    string,
    {
      userId: string;
      name: string;
      email: string;
      walletAddress: string | null;
      twitterHandle: string | null;
      completedTasks: Array<{
        taskId: number;
        taskName: string;
        completed: boolean;
        completedAt: Date | null;
        verificationStatus: string;
      }>;
    }
  >();

  for (const task of requiredTasks) {
    for (const taskUser of task.taskUsers) {
      const userId = taskUser.user.id;
      const existing = userCompletionMap.get(userId);

      const taskCompletion = {
        taskId: task.id,
        taskName: task.name,
        completed: taskUser.completed,
        completedAt: taskUser.completedAt,
        verificationStatus: taskUser.verificationStatus,
      };

      if (existing) {
        existing.completedTasks.push(taskCompletion);
      } else {
        userCompletionMap.set(userId, {
          userId: taskUser.user.id,
          name: taskUser.user.name,
          email: taskUser.user.email,
          walletAddress: taskUser.user.walletAddress,
          twitterHandle: taskUser.user.twitterHandle,
          completedTasks: [taskCompletion],
        });
      }
    }
  }

  return {
    flash,
    participants: Array.from(userCompletionMap.values()),
    tasks: requiredTasks,
  };
}
