import type { FlashTrackingMode, TaskType, User } from ".prisma/main/client";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Form, useActionData } from "react-router";
import DialogWithCloseButton from "~/components/Dialogs/DialogWithCloseButton";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import type { Route } from "../+types/_a_flash";

type ActionData =
  | { success: true; message: string }
  | { success: false; error: string };

type OwnerOption = Pick<User, "id" | "name" | "email" | "image">;

type EditorTask = {
  clientId: string;
  id?: number;
  name: string;
  description?: string;
  iconUrl?: string;
  actionLabel: string;
  actionUrl?: string;
  type: TaskType;
  isRequired: boolean;
  order: number;
};

const createClientId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const taskTypeOptions: Array<{ label: string; value: TaskType }> = [
  { label: "Follow on X (Twitter)", value: "FOLLOW_X" },
  { label: "Custom", value: "CUSTOM" },
];

const trackingModeOptions: Array<{
  label: string;
  value: FlashTrackingMode;
  description: string;
}> = [
  {
    label: "Time-based",
    value: "TIME",
    description:
      "Task ends when the scheduled end date/time is reached. Prize pool is distributed based on actual participants.",
  },
  {
    label: "Participants-based",
    value: "PARTICIPANTS",
    description:
      "Task ends when the participant limit for required tasks is reached. Requires setting either per-user prize or participant limit.",
  },
];

function createEmptyTask(order: number): EditorTask {
  return {
    clientId: createClientId(),
    name: "",
    actionLabel: "GO",
    type: "CUSTOM",
    isRequired: false,
    order,
  };
}

const formatDateForInput = (value?: Date | string | null) => {
  if (!value) {
    return "";
  }
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const iso = date.toISOString();
  return iso.slice(0, 16);
};

const decimalToInputValue = (value: unknown) => {
  if (value === null || value === undefined) {
    return "";
  }
  if (typeof value === "number") {
    return value.toString();
  }
  if (typeof value === "string") {
    return value;
  }
  if (
    typeof value === "object" &&
    value !== null &&
    "toString" in value &&
    typeof (value as { toString: () => string }).toString === "function"
  ) {
    return (value as { toString: () => string }).toString();
  }
  return "";
};

export function FlashModal({
  flash,
  users,
  isOpen,
  onClose,
  isSubmitting,
}: {
  flash: Route.ComponentProps["loaderData"]["flashes"][number] | null;
  users: OwnerOption[];
  isOpen: boolean;
  onClose: () => void;
  isSubmitting: boolean;
}) {
  const actionData = useActionData<ActionData>();
  const isEdit = Boolean(flash);
  const [trackingMode, setTrackingMode] = useState<FlashTrackingMode>("TIME");
  const [tasks, setTasks] = useState<EditorTask[]>(() => [createEmptyTask(0)]);
  const [prizePool, setPrizePool] = useState<string>("");
  const [perUserPrize, setPerUserPrize] = useState<string>("");
  const [participantLimit, setParticipantLimit] = useState<string>("");
  const [selectedOwnerId, setSelectedOwnerId] = useState<string>("");
  const [ownerSearchOpen, setOwnerSearchOpen] = useState(false);

  const submitButtonLabel = (() => {
    if (isSubmitting) {
      return "Saving...";
    }
    if (isEdit) {
      return "Update Flash";
    }
    return "Create Flash";
  })();

  useEffect(() => {
    if (flash) {
      setTrackingMode(flash.trackingMode);
      setPrizePool(decimalToInputValue(flash.prizePool));
      setPerUserPrize(decimalToInputValue(flash.perUserPrize));
      setParticipantLimit(flash.participantLimit?.toString() ?? "");
      setSelectedOwnerId(flash.ownerId ?? "");
      setTasks(
        flash.tasks.length
          ? flash.tasks.map((task) => ({
              clientId: createClientId(),
              id: task.id,
              name: task.name,
              description: task.description ?? undefined,
              iconUrl: task.iconUrl ?? undefined,
              actionLabel: task.actionLabel ?? "GO",
              actionUrl: task.actionUrl ?? undefined,
              type: task.type,
              isRequired: task.isRequired,
              order: task.order ?? 0,
            }))
          : [createEmptyTask(0)]
      );
    } else {
      setTrackingMode("TIME");
      setPrizePool("");
      setPerUserPrize("");
      setParticipantLimit("");
      setSelectedOwnerId("");
      setTasks([createEmptyTask(0)]);
    }
  }, [flash]);

  const handlePrizePoolChange = (value: string) => {
    setPrizePool(value);

    // Auto-calculate perUserPrize if participantLimit is set
    if (participantLimit && value) {
      const pool = Number.parseFloat(value);
      const limit = Number.parseInt(participantLimit, 10);
      if (Number.isFinite(pool) && Number.isFinite(limit) && limit > 0) {
        setPerUserPrize((pool / limit).toFixed(2));
      }
    }
  };

  const handlePerUserPrizeChange = (value: string) => {
    setPerUserPrize(value);

    // Auto-calculate participantLimit if prizePool is set
    if (prizePool && value) {
      const pool = Number.parseFloat(prizePool);
      const prize = Number.parseFloat(value);
      if (Number.isFinite(pool) && Number.isFinite(prize) && prize > 0) {
        setParticipantLimit(Math.floor(pool / prize).toString());
      }
    }
  };

  const handleParticipantLimitChange = (value: string) => {
    setParticipantLimit(value);

    // Auto-calculate perUserPrize if prizePool is set
    if (prizePool && value) {
      const pool = Number.parseFloat(prizePool);
      const limit = Number.parseInt(value, 10);
      if (Number.isFinite(pool) && Number.isFinite(limit) && limit > 0) {
        setPerUserPrize((pool / limit).toFixed(2));
      }
    }
  };

  const serializedTasks = useMemo(
    () =>
      JSON.stringify(
        tasks.map((task, index) => ({
          id: task.id,
          name: task.name,
          description: task.description,
          iconUrl: task.iconUrl,
          actionLabel: task.actionLabel,
          actionUrl: task.actionUrl,
          type: task.type,
          isRequired: task.isRequired,
          order: Number.isFinite(task.order) ? task.order : index,
          iconUploadKey: `taskIcon-${index}`,
        }))
      ),
    [tasks]
  );

  const updateTask = (clientId: string, updates: Partial<EditorTask>) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.clientId === clientId
          ? {
              ...task,
              ...updates,
            }
          : task
      )
    );
  };

  const removeTask = (clientId: string) => {
    setTasks((prev) => {
      if (prev.length <= 1) {
        return prev;
      }
      return prev.filter((task) => task.clientId !== clientId);
    });
  };

  const addTask = () => {
    setTasks((prev) => [...prev, createEmptyTask(prev.length)]);
  };

  return (
    <DialogWithCloseButton
      className="min-w-[85vw] max-w-5xl"
      setShow={onClose}
      show={isOpen}
      title={isEdit ? "Edit Flash" : "Create Flash"}
    >
      <Form
        className="space-y-6 overflow-y-auto"
        encType="multipart/form-data"
        method="post"
      >
        <input
          name="intent"
          type="hidden"
          value={isEdit ? "update" : "create"}
        />
        {isEdit && flash && <input name="id" type="hidden" value={flash.id} />}
        <input name="tasks" type="hidden" value={serializedTasks} />

        {actionData && !actionData.success && (isOpen || !!flash) && (
          <div className="rounded-md border border-red-500 bg-red-900/30 p-3 text-red-100">
            <p>{actionData.error}</p>
          </div>
        )}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text font-semibold">Flash Name</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              defaultValue={flash?.name ?? ""}
              id="name"
              name="name"
              placeholder="Peak AI Flash Drop"
              required
              type="text"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="ownerId">
              <span className="label-text font-semibold">Flash Owner</span>
            </label>
            <input
              name="ownerId"
              required
              type="hidden"
              value={selectedOwnerId}
            />
            <Popover onOpenChange={setOwnerSearchOpen} open={ownerSearchOpen}>
              <PopoverTrigger asChild>
                <Button
                  aria-expanded={ownerSearchOpen}
                  className="w-full justify-between font-normal"
                  role="combobox"
                  variant="outline"
                >
                  {selectedOwnerId
                    ? (() => {
                        const selectedUser = users.find(
                          (user) => user.id === selectedOwnerId
                        );
                        return selectedUser
                          ? `${selectedUser.name || selectedUser.email} (${selectedUser.email})`
                          : "Select owner";
                      })()
                    : "Select owner"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0">
                <Command>
                  <CommandInput placeholder="Search users..." />
                  <CommandList>
                    <CommandEmpty>No user found.</CommandEmpty>
                    <CommandGroup>
                      {users.map((user) => (
                        <CommandItem
                          key={user.id}
                          onSelect={() => {
                            setSelectedOwnerId(user.id);
                            setOwnerSearchOpen(false);
                          }}
                          value={`${user.name || user.email} ${user.email}`}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedOwnerId === user.id
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {user.name || user.email} ({user.email})
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <span className="label-text-alt mt-1">
              Owner will receive detailed reporting for this flash task.
            </span>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="startAt">
              <span className="label-text font-semibold">Start Time</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              defaultValue={formatDateForInput(flash?.startAt)}
              id="startAt"
              name="startAt"
              required
              type="datetime-local"
            />
            <span className="label-text-alt mt-1">
              Flash tasks go live at this time.
            </span>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="endAt">
              <span className="label-text font-semibold">End Time</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              defaultValue={formatDateForInput(flash?.endAt)}
              id="endAt"
              name="endAt"
              type="datetime-local"
            />
            <span className="label-text-alt mt-1">
              Leave empty for no fixed end date.
            </span>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="status">
              <span className="label-text font-semibold">Status</span>
            </label>
            <select
              className="select select-bordered focus:select-primary w-full"
              defaultValue={flash?.status ?? "ACTIVE"}
              id="status"
              name="status"
            >
              <option value="ACTIVE">Active</option>
              <option value="ENDED">Ended</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="trackingMode">
              <span className="label-text font-semibold">Tracking Mode</span>
            </label>
            <select
              className="select select-bordered focus:select-primary w-full"
              id="trackingMode"
              name="trackingMode"
              onChange={(event) => {
                setTrackingMode(event.target.value as FlashTrackingMode);
              }}
              value={trackingMode}
            >
              {trackingModeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="label-text-alt mt-1">
              {
                trackingModeOptions.find(
                  (option) => option.value === trackingMode
                )?.description
              }
            </span>
          </div>
        </section>

        <section
          className={`grid grid-cols-1 gap-4 ${trackingMode === "TIME" ? "md:grid-cols-1" : "md:grid-cols-3"}`}
        >
          <div className="form-control">
            <label className="label" htmlFor="prizePool">
              <span className="label-text font-semibold">Prize Pool</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              id="prizePool"
              name="prizePool"
              onChange={(event) => handlePrizePoolChange(event.target.value)}
              placeholder="5000"
              step="0.01"
              type="number"
              value={prizePool}
            />
            <span className="label-text-alt mt-1">
              Total rewards budget for this flash task.
            </span>
          </div>

          {trackingMode === "PARTICIPANTS" && (
            <>
              <div className="form-control">
                <label className="label" htmlFor="perUserPrize">
                  <span className="label-text font-semibold">
                    Per-user Prize
                  </span>
                </label>
                <input
                  className="input input-bordered focus:input-primary w-full"
                  id="perUserPrize"
                  name="perUserPrize"
                  onChange={(event) =>
                    handlePerUserPrizeChange(event.target.value)
                  }
                  placeholder="10"
                  step="0.01"
                  type="number"
                  value={perUserPrize}
                />
                <span className="label-text-alt mt-1">
                  Auto-calculated when participant limit is entered.
                </span>
              </div>

              <div className="form-control">
                <label className="label" htmlFor="participantLimit">
                  <span className="label-text font-semibold">
                    Participant Limit
                  </span>
                </label>
                <input
                  className="input input-bordered focus:input-primary w-full"
                  id="participantLimit"
                  min={0}
                  name="participantLimit"
                  onChange={(event) =>
                    handleParticipantLimitChange(event.target.value)
                  }
                  placeholder="1000"
                  type="number"
                  value={participantLimit}
                />
                <span className="label-text-alt mt-1">
                  Required for participants-based tracking. Auto-calculated when
                  per-user prize is entered.
                </span>
              </div>
            </>
          )}
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="form-control">
            <label className="label" htmlFor="prizeCurrency">
              <span className="label-text font-semibold">Prize Currency</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              defaultValue={flash?.prizeCurrency ?? ""}
              id="prizeCurrency"
              name="prizeCurrency"
              placeholder="USD / AIN / etc."
              type="text"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="message">
              <span className="label-text font-semibold">Headline</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              defaultValue={flash?.message ?? ""}
              id="message"
              name="message"
              placeholder="Complete the mission, earn rewards"
              type="text"
            />
          </div>
        </section>

        <div className="form-control">
          <label className="label" htmlFor="description">
            <span className="label-text font-semibold">Description</span>
            <span className="label-text-alt">Optional</span>
          </label>
          <textarea
            className="textarea textarea-bordered focus:textarea-primary w-full"
            defaultValue={flash?.description ?? ""}
            id="description"
            name="description"
            placeholder="Summarize requirements and incentives..."
            rows={3}
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="bannerImage">
            <span className="label-text font-semibold">Banner Image</span>
            <span className="label-text-alt">Optional</span>
          </label>
          {flash?.bannerImage && (
            <div className="mb-3 rounded-lg border border-base-300 bg-base-200 p-3">
              <p className="mb-2 text-base-content/70 text-sm">
                Current banner preview
              </p>
              <img
                alt={`${flash.name} banner`}
                className="max-h-48 rounded-lg object-cover"
                src={flash.bannerImage}
              />
            </div>
          )}
          <input
            accept="image/*"
            className="file-input file-input-bordered focus:file-input-primary w-full"
            id="bannerImage"
            name="bannerImage"
            type="file"
          />
          <span className="label-text-alt mt-1">
            Upload a new image to replace the current banner.
          </span>
          <div className="divider text-base-content/60 text-xs uppercase">
            or provide a URL
          </div>
          <input
            className="input input-bordered focus:input-primary w-full"
            defaultValue={flash?.bannerImage ?? ""}
            name="bannerImageUrl"
            placeholder="https://example.com/flash-banner.png"
          />
        </div>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg text-white">Task Items</h3>
              <p className="text-gray-400 text-sm">
                Configure individual missions for this flash. Participants must
                complete required tasks to qualify.
              </p>
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={(event) => {
                event.preventDefault();
                addTask();
              }}
              type="button"
            >
              Add Task
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map((task, index) => (
              <TaskCard
                index={index}
                key={task.clientId}
                onRemove={removeTask}
                onUpdate={updateTask}
                task={task}
                totalTasks={tasks.length}
              />
            ))}
          </div>
        </section>

        <div className="flex justify-end gap-3 pt-4">
          <button
            className="btn btn-ghost"
            disabled={isSubmitting}
            onClick={(event) => {
              event.preventDefault();
              onClose();
            }}
            type="button"
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            disabled={isSubmitting}
            type="submit"
          >
            {submitButtonLabel}
          </button>
        </div>
      </Form>
    </DialogWithCloseButton>
  );
}
type TaskCardProps = {
  task: EditorTask;
  index: number;
  totalTasks: number;
  onUpdate: (clientId: string, updates: Partial<EditorTask>) => void;
  onRemove: (clientId: string) => void;
};

function TaskCard({
  task,
  index,
  totalTasks,
  onUpdate,
  onRemove,
}: TaskCardProps) {
  const fieldId = (field: string) => `${task.clientId}-${field}`;

  const handleRemove = () => {
    onRemove(task.clientId);
  };

  return (
    <div className="rounded-xl border border-base-300 bg-base-200 p-4 shadow">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-semibold text-base text-white">
          Task #{index + 1}
        </h4>
        <div className="flex items-center gap-3">
          <div className="form-control">
            <label
              className="label cursor-pointer gap-2"
              htmlFor={fieldId("required")}
            >
              <span className="label-text text-gray-300 text-xs uppercase tracking-wide">
                Required
              </span>
              <input
                checked={task.isRequired}
                className="checkbox checkbox-sm"
                id={fieldId("required")}
                onChange={(event) =>
                  onUpdate(task.clientId, { isRequired: event.target.checked })
                }
                type="checkbox"
              />
            </label>
          </div>
          {totalTasks > 1 && (
            <button
              className="btn btn-ghost btn-xs text-red-300 hover:text-red-200"
              onClick={(event) => {
                event.preventDefault();
                handleRemove();
              }}
              type="button"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="form-control">
          <label className="label" htmlFor={fieldId("name")}>
            <span className="label-text font-semibold">Task Name</span>
          </label>
          <input
            className="input input-bordered focus:input-primary w-full"
            id={fieldId("name")}
            onChange={(event) =>
              onUpdate(task.clientId, { name: event.target.value })
            }
            placeholder="Follow @PeakAI on X"
            required
            type="text"
            value={task.name}
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor={fieldId("type")}>
            <span className="label-text font-semibold">Task Type</span>
          </label>
          <select
            className="select select-bordered focus:select-primary w-full"
            id={fieldId("type")}
            onChange={(event) =>
              onUpdate(task.clientId, {
                type: event.target.value as TaskType,
              })
            }
            value={task.type}
          >
            {taskTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="form-control">
          <label className="label" htmlFor={fieldId("actionLabel")}>
            <span className="label-text font-semibold">
              Call To Action Label
            </span>
          </label>
          <input
            className="input input-bordered focus:input-primary w-full"
            id={fieldId("actionLabel")}
            onChange={(event) =>
              onUpdate(task.clientId, { actionLabel: event.target.value })
            }
            placeholder="Follow"
            required
            type="text"
            value={task.actionLabel}
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor={fieldId("actionUrl")}>
            <span className="label-text font-semibold">Destination URL</span>
          </label>
          <input
            className="input input-bordered focus:input-primary w-full"
            id={fieldId("actionUrl")}
            onChange={(event) =>
              onUpdate(task.clientId, { actionUrl: event.target.value })
            }
            placeholder="https://twitter.com/PeakAI"
            required={task.type !== "CUSTOM"}
            type="url"
            value={task.actionUrl ?? ""}
          />
        </div>
      </div>

      <div className="form-control">
        <label className="label" htmlFor={fieldId("description")}>
          <span className="label-text font-semibold">Description</span>
          <span className="label-text-alt">Optional</span>
        </label>
        <textarea
          className="textarea textarea-bordered focus:textarea-primary w-full"
          id={fieldId("description")}
          onChange={(event) =>
            onUpdate(task.clientId, { description: event.target.value })
          }
          placeholder="Tell users what to expect when they click the CTA."
          rows={2}
          value={task.description ?? ""}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor={fieldId("order")}>
          <span className="label-text font-semibold">Display Order</span>
        </label>
        <input
          className="input input-bordered focus:input-primary w-full"
          id={fieldId("order")}
          min={0}
          onChange={(event) =>
            onUpdate(task.clientId, {
              order: Number.parseInt(event.target.value, 10) || 0,
            })
          }
          type="number"
          value={task.order ?? index}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr]">
        <div className="form-control">
          <label className="label" htmlFor={fieldId("iconUrl")}>
            <span className="label-text font-semibold">Icon URL</span>
            <span className="label-text-alt">Optional</span>
          </label>
          <input
            className="input input-bordered focus:input-primary w-full"
            id={fieldId("iconUrl")}
            onChange={(event) =>
              onUpdate(task.clientId, { iconUrl: event.target.value })
            }
            placeholder="https://example.com/icon.png"
            value={task.iconUrl ?? ""}
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor={fieldId("iconFile")}>
            <span className="label-text font-semibold">Upload Icon</span>
            <span className="label-text-alt">Optional</span>
          </label>
          <input
            accept="image/*"
            className="file-input file-input-bordered focus:file-input-primary w-full"
            id={fieldId("iconFile")}
            name={`taskIcon-${index}`}
            type="file"
          />
          <span className="label-text-alt mt-1">
            Uploading overrides the icon URL.
          </span>
        </div>
      </div>
    </div>
  );
}
