import { useEffect, useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router";
import { cn, formatNumber } from "~/lib/utils";
import { getDbUser } from "~/services/auth.server";
import {
  createFlashWithTasks,
  deleteFlash,
  type FlashWithMetrics,
  getAllFlashWithMetrics,
  updateFlashWithTasks,
} from "~/services/flash.server";
import { logger } from "~/services/logger.server";
import { getAllBusinessUsers } from "~/services/user.server";
import type { Route } from "./+types/_a_flash";
import { FlashModal } from "./components/FlashModal";
import { transformFormData } from "./transformFormData";

type ActionData =
  | { success: true; message: string }
  | { success: false; error: string };

export function meta() {
  return [
    { title: "Admin - Flash Tasks - Peak AI" },
    {
      name: "description",
      content:
        "Manage flash growth missions: configure prize pools, schedule timelines, and define participant tasks.",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ];
}

export async function loader() {
  const flashes = await getAllFlashWithMetrics();
  const usersResult = await getAllBusinessUsers();

  return {
    flashes: flashes.map((f) => ({
      ...f,
      perUserPrize: f.perUserPrize?.toNumber() ?? null,
      prizePool: f.prizePool?.toNumber() ?? null,
    })),
    users: usersResult.isOk() ? usersResult.value : [],
  };
}

export async function action({ request }: Route.ActionArgs) {
  const user = await getDbUser(request);
  if (user.isErr() || !user.value.isAdmin) {
    throw redirect("/");
  }
  const { intent, id, data } = await transformFormData(request);

  try {
    if (intent === "delete") {
      if (!id) {
        return { success: false, error: "Missing flash ID" };
      }
      const result = await deleteFlash(id);
      if (!result.success) {
        return {
          success: false,
          error: result.message ?? "Unable to delete flash",
        };
      }
      return { success: true, message: "Flash deleted successfully" };
    }

    if (!data.name) {
      return { success: false, error: "Flash task name is required" };
    }

    if (!data.ownerId) {
      return { success: false, error: "Flash task owner is required" };
    }

    if (data.trackingMode === "PARTICIPANTS" && !data.participantLimit) {
      return {
        success: false,
        error: "Participant limit is required for participants-based tracking",
      };
    }

    if (data.perUserPrize && !data.prizePool) {
      return {
        success: false,
        error: "Total prize pool must be set when per-user prize is provided",
      };
    }

    if (data.tasks && data.tasks.length === 0) {
      return {
        success: false,
        error: "At least one task item is required",
      };
    }

    if (intent === "update") {
      if (!id) {
        return { success: false, error: "Flash ID is required for updates" };
      }
      await updateFlashWithTasks(id, data);
      return { success: true, message: "Flash updated successfully" };
    }

    if (intent === "create") {
      await createFlashWithTasks(data);
      return { success: true, message: "Flash created successfully" };
    }

    return { success: false, error: "Unsupported intent" };
  } catch (error) {
    logger.error("Flash admin action failed", { error });
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

function statusBadgeClasses(
  status: FlashWithMetrics["metrics"]["statusLabel"]
) {
  switch (status) {
    case "active":
      return "bg-green-900/30 text-green-200";
    case "upcoming":
      return "bg-yellow-900/30 text-yellow-200";
    case "ended":
      return "bg-gray-700 text-gray-300";
    case "archived":
      return "bg-slate-800 text-slate-300";
    default:
      return "bg-blue-900/30 text-blue-200";
  }
}

function formatDateDisplay(date?: Date | null) {
  if (!date) {
    return "—";
  }
  return new Date(date).toLocaleString();
}

export default function AdminFlash({
  loaderData: { flashes, users },
}: Route.ComponentProps) {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingFlash, setEditingFlash] = useState<
    (typeof flashes)[number] | null
  >(null);

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.success && !isSubmitting) {
      setIsCreateModalOpen(false);
      setEditingFlash(null);
    }
  }, [actionData?.success, isSubmitting]);

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl text-white">
            Flash Task Management
          </h1>
          <p className="text-gray-300">
            Configure real-time growth tasks, rewards, and participant flows
          </p>
        </div>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setIsCreateModalOpen(true)}
          type="button"
        >
          Create Flash
        </button>
      </div>

      {actionData &&
        !actionData.success &&
        !isCreateModalOpen &&
        !editingFlash && (
          <div className="mb-4 rounded-lg border border-red-500 bg-red-900/20 p-4 text-red-200">
            <p>{actionData.error}</p>
          </div>
        )}

      {actionData?.success && !isCreateModalOpen && !editingFlash && (
        <div className="mb-4 rounded-lg border border-green-500 bg-green-900/20 p-4 text-green-200">
          <p>{actionData.message}</p>
        </div>
      )}

      <div className="overflow-x-auto rounded-lg bg-gray-900 shadow ring-1 ring-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Flash
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Prize Pool
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Participants
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Remaining Prizes
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Task Period
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Status
              </th>
              <th className="w-32 px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-900">
            {flashes.map((flash) => {
              const { metrics } = flash;
              const participantsLabel = `${formatNumber(metrics.participantCount)} total`;
              const qualifiedLabel = `${formatNumber(metrics.requiredCompletionCount)} qualified`;

              const prizePoolDisplay =
                flash.prizePool !== null && flash.prizePool !== undefined
                  ? `${formatNumber(Number(flash.prizePool))}${
                      flash.prizeCurrency ? ` ${flash.prizeCurrency}` : ""
                    }`
                  : "—";

              const perUserDisplay =
                flash.perUserPrize !== null && flash.perUserPrize !== undefined
                  ? `${formatNumber(Number(flash.perUserPrize))}${
                      flash.prizeCurrency ? ` ${flash.prizeCurrency}` : ""
                    }`
                  : null;

              const remainingDisplay =
                metrics.remainingPrizes !== null
                  ? `${formatNumber(metrics.remainingPrizes)}${
                      flash.prizeCurrency ? ` ${flash.prizeCurrency}` : ""
                    }`
                  : "Hidden";

              let periodDisplay: string;
              if (flash.trackingMode === "PARTICIPANTS") {
                periodDisplay =
                  metrics.participantsLeft !== null
                    ? `${formatNumber(metrics.participantsLeft)} slots left`
                    : "No limit";
              } else if (flash.trackingMode === "TIME" && flash.endAt) {
                const now = new Date();
                const diffMs = flash.endAt.getTime() - now.getTime();
                if (diffMs <= 0) {
                  periodDisplay = "Ended";
                } else {
                  const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
                  periodDisplay = `${daysLeft} days left`;
                }
              } else if (flash.trackingMode === "TIME") {
                periodDisplay = "No end date";
              } else {
                periodDisplay = "Manual";
              }

              return (
                <tr className="hover:bg-gray-800" key={flash.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {flash.bannerImage && (
                        <img
                          alt={flash.name}
                          className="mr-3 h-8 w-8 rounded-full object-cover"
                          src={flash.bannerImage}
                        />
                      )}
                      <div className="space-y-1">
                        <div className="font-semibold text-sm text-white">
                          {flash.name}
                        </div>
                        {flash.message && (
                          <div className="text-gray-400 text-xs">
                            {flash.message}
                          </div>
                        )}
                        <div className="text-gray-500 text-xs">
                          Start: {formatDateDisplay(flash.startAt)}
                          {flash.endAt && (
                            <>
                              <br />
                              End: {formatDateDisplay(flash.endAt)}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    <div>{prizePoolDisplay}</div>
                    {perUserDisplay && (
                      <div className="text-gray-400 text-xs">
                        {perUserDisplay} / user
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    <div>{participantsLabel}</div>
                    <div className="text-gray-400 text-xs">
                      {qualifiedLabel}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    {metrics.remainingPrizes !== null ? (
                      <div>{remainingDisplay}</div>
                    ) : (
                      <span className="text-gray-500 text-xs">Hidden</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    {periodDisplay}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-1 font-semibold text-xs capitalize",
                        statusBadgeClasses(metrics.statusLabel)
                      )}
                    >
                      {metrics.statusLabel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-sm">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        className="text-indigo-400 hover:text-indigo-300"
                        onClick={() => setEditingFlash(flash)}
                        type="button"
                      >
                        Edit
                      </button>
                      <Form method="post">
                        <input name="intent" type="hidden" value="delete" />
                        <input name="id" type="hidden" value={flash.id} />
                        <button
                          className="text-red-400 hover:text-red-300 disabled:opacity-60"
                          disabled={isSubmitting}
                          onClick={(event) => {
                            if (
                              // biome-ignore lint/suspicious/noAlert: Admin page confirmation dialog
                              !confirm(
                                `Delete flash task "${flash.name}"? This action cannot be undone.`
                              )
                            ) {
                              event.preventDefault();
                            }
                          }}
                          type="submit"
                        >
                          Delete
                        </button>
                      </Form>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {flashes.length === 0 && (
        <div className="py-12 text-center">
          <h3 className="font-semibold text-sm text-white">No flash tasks</h3>
          <p className="mt-1 text-gray-300 text-sm">
            Launch your first flash engagement task to get started.
          </p>
        </div>
      )}

      {(isCreateModalOpen || editingFlash) && (
        <FlashModal
          flash={editingFlash}
          isOpen={isCreateModalOpen || Boolean(editingFlash)}
          isSubmitting={isSubmitting}
          onClose={() => {
            setIsCreateModalOpen(false);
            setEditingFlash(null);
          }}
          users={users}
        />
      )}
    </>
  );
}
