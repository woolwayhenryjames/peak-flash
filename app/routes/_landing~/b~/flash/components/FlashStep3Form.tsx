import { cn } from "~/lib/utils";
import clockIcon from "../assets/clock.svg";

type TaskType = "FOLLOW_X" | "CUSTOM";

interface Task {
  clientId: string;
  name: string;
  actionUrl?: string;
  type: TaskType;
  isRequired: boolean;
  displayOrder?: number;
  iconUrl?: string;
  uploadedIcon?: string;
}

interface FlashStep3FormProps {
  formData: {
    tasks: Task[];
  };
  onChange: (data: Partial<FlashStep3FormProps["formData"]>) => void;
  className?: string;
}

const taskTypeOptions: Array<{ label: string; value: TaskType }> = [
  { label: "Follow on X (Twitter)", value: "FOLLOW_X" },
  { label: "Custom", value: "CUSTOM" },
];

const createClientId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

export default function FlashStep3Form({
  formData,
  onChange,
  className,
}: FlashStep3FormProps) {
  const updateTask = (clientId: string, updates: Partial<Task>) => {
    const updatedTasks = formData.tasks.map((task) =>
      task.clientId === clientId ? { ...task, ...updates } : task
    );
    onChange({ tasks: updatedTasks });
  };

  const removeTask = (clientId: string) => {
    if (formData.tasks.length <= 1) {
      return;
    }
    const updatedTasks = formData.tasks.filter(
      (task) => task.clientId !== clientId
    );
    onChange({ tasks: updatedTasks });
  };

  const addTask = () => {
    const newTask: Task = {
      clientId: createClientId(),
      name: "",
      type: "CUSTOM",
      isRequired: false,
      displayOrder: formData.tasks.length,
    };
    onChange({ tasks: [...formData.tasks, newTask] });
  };

  return (
    <div className={cn("flex flex-col gap-6 md:gap-9", className)}>
      {/* Task Requirements Header */}
      <div className="flex h-10 items-center rounded-lg border border-[#1C1E1F] bg-linear-to-r from-[rgba(45,51,56,0.1)] to-[rgba(127,144,158,0.24)] px-4 md:h-14 md:px-6">
        <span className="font-['Poppins'] font-semibold text-sm text-white md:text-xl">
          Task Requirements
        </span>
      </div>

      {/* Task Items */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-['Poppins'] font-normal text-[#ECECEC] text-sm md:text-xl">
              Task Items
            </h3>
            <p className="mt-1 font-['Poppins'] font-light text-[#97FFD5] text-[10px] md:text-xs">
              Configure individual missions for this Flash. Participants must
              complete all required tasks to qualify.
            </p>
          </div>
          <button
            className="group relative flex h-9 w-28 items-center justify-center overflow-hidden rounded-xl border border-gradient-to-b from-[#B8B8B8] to-[#4E4E4E] text-xs md:h-11 md:w-32 md:text-sm"
            onClick={(e) => {
              e.preventDefault();
              addTask();
            }}
            type="button"
          >
            <div className="absolute inset-x-1.5 top-0.5 h-1.5 bg-gradient-to-r from-[34%] from-white to-[99%] to-white/[0.14] blur-sm" />
            <span className="font-['Poppins'] font-normal text-white">
              Add Task
            </span>
          </button>
        </div>

        <div className="space-y-4">
          {formData.tasks.map((task, index) => (
            <TaskCard
              index={index}
              key={task.clientId}
              onRemove={removeTask}
              onUpdate={updateTask}
              task={task}
              totalTasks={formData.tasks.length}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-5">
        {/* Buttons */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          {/* Cancel Button */}
          <button
            className="group relative flex h-11 w-full items-center justify-center overflow-hidden rounded-xl border border-gradient-to-b from-[#B8B8B8] to-[#4E4E4E] md:h-14 md:w-56"
            type="button"
          >
            <div className="absolute inset-x-4 top-0.5 h-2 bg-linear-to-r from-34% from-white to-99% to-white/[0.14] blur-sm" />
            <span className="font-['Poppins'] font-normal text-sm text-white">
              Cancel
            </span>
          </button>

          {/* Launch Flash Button */}
          <button
            className="group relative flex h-11 w-full items-center justify-center overflow-hidden rounded-xl border border-gradient-to-b bg-linear-to-b from-[#182D2F] from-[#B8B8B8] to-[#4E4E4E] to-[#4E9095] md:h-14 md:w-56"
            type="submit"
          >
            <div className="absolute inset-x-4 top-0.5 h-2 bg-linear-to-r from-34% from-white to-99% to-white/[0.14] blur-sm" />
            <span className="font-['Poppins'] font-normal text-sm text-white">
              Launch Flash
            </span>
          </button>
        </div>

        {/* Autosave and Review Notice */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <img
              alt="Clock"
              className="h-4 w-4"
              height={17}
              src={clockIcon}
              width={17}
            />
            <span className="font-['Poppins'] font-light text-[#818181] text-xs md:text-sm">
              Autosave every 30s.
            </span>
          </div>
          <p className="text-right font-['Poppins'] font-light text-[#818181] text-[10px] md:text-sm">
            Flash will go live after PeakAI review and approval.
          </p>
        </div>
      </div>
    </div>
  );
}

interface TaskCardProps {
  task: Task;
  index: number;
  totalTasks: number;
  onUpdate: (clientId: string, updates: Partial<Task>) => void;
  onRemove: (clientId: string) => void;
}

function TaskCard({
  task,
  index,
  totalTasks,
  onUpdate,
  onRemove,
}: TaskCardProps) {
  const fieldId = (field: string) => `${task.clientId}-${field}`;

  return (
    <div className="rounded-xl border border-[#2D3338] bg-[rgba(45,51,56,0.3)] p-4 shadow">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-['Poppins'] font-semibold text-base text-white">
          Task #{index + 1}
        </h4>
        <div className="flex items-center gap-3">
          <div className="form-control">
            <label
              className="flex cursor-pointer items-center gap-2"
              htmlFor={fieldId("required")}
            >
              <span className="font-['Poppins'] text-[#ECECEC] text-xs uppercase tracking-wide">
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
              className="font-['Poppins'] text-red-300 text-xs hover:text-red-200"
              onClick={(event) => {
                event.preventDefault();
                onRemove(task.clientId);
              }}
              type="button"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="font-['Poppins'] font-semibold text-sm text-white"
            htmlFor={fieldId("name")}
          >
            Task Name
          </label>
          <input
            className="rounded-lg border border-[#565656] bg-transparent px-4 py-3 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none"
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

        <div className="flex flex-col gap-2">
          <label
            className="font-['Poppins'] font-semibold text-sm text-white"
            htmlFor={fieldId("type")}
          >
            Task Type
          </label>
          <select
            className="rounded-lg border border-[#565656] bg-transparent px-4 py-3 font-['Poppins'] font-light text-[#818181] text-sm focus:border-white focus:text-white focus:outline-none"
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

      {/* Display Order */}
      <div className="mt-4 flex flex-col gap-2">
        <label
          className="font-['Poppins'] font-semibold text-sm text-white"
          htmlFor={fieldId("displayOrder")}
        >
          Display Order
        </label>
        <input
          className="rounded-lg border border-[#565656] bg-transparent px-4 py-3 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none"
          id={fieldId("displayOrder")}
          onChange={(event) =>
            onUpdate(task.clientId, {
              displayOrder: Number.parseInt(event.target.value, 10) || 0,
            })
          }
          placeholder="0"
          type="number"
          value={task.displayOrder ?? 0}
        />
      </div>

      {/* Icon URL and Upload Icon */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Icon URL */}
        <div className="flex flex-col gap-2">
          <label
            className="font-['Poppins'] font-semibold text-sm text-white"
            htmlFor={fieldId("iconUrl")}
          >
            Icon URL <span className="text-[#818181] text-xs">(Optional)</span>
          </label>
          <input
            className="rounded-lg border border-[#565656] bg-transparent px-4 py-3 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none"
            id={fieldId("iconUrl")}
            onChange={(event) =>
              onUpdate(task.clientId, { iconUrl: event.target.value })
            }
            placeholder="https://example.com/icon.png"
            type="url"
            value={task.iconUrl ?? ""}
          />
        </div>

        {/* Upload Icon */}
        <div className="flex flex-col gap-2">
          <label
            className="font-['Poppins'] font-semibold text-sm text-white"
          >
            Upload Icon <span className="text-[#818181] text-xs">(Optional)</span>
          </label>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-[#565656] bg-transparent p-6">
            <input
              accept="image/*"
              className="hidden"
              id={fieldId("uploadIcon")}
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  onUpdate(task.clientId, { uploadedIcon: file.name });
                }
              }}
              type="file"
            />
            <div className="flex flex-col items-center gap-2">
              <svg
                className="h-16 w-16 text-[#565656]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Upload Image Icon</title>
                <path
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <div className="text-center">
                <div className="font-['Poppins'] font-normal text-sm text-white">
                  Upload Image
                </div>
                <div className="font-['Poppins'] font-light text-[#565656] text-xs">
                  {task.uploadedIcon || "No file"}
                </div>
              </div>
            </div>
            <label
              className="flex cursor-pointer items-center justify-center rounded-full border border-white/50 bg-transparent px-6 py-2 font-['Poppins'] font-normal text-sm text-white transition-colors hover:bg-white/10"
              htmlFor={fieldId("uploadIcon")}
            >
              Upload
            </label>
          </div>
          <p className="font-['Poppins'] font-light text-[#818181] text-xs">
            Uploading overrides the icon URL.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label
          className="font-['Poppins'] font-semibold text-sm text-white"
          htmlFor={fieldId("actionUrl")}
        >
          Destination URL <span className="text-[#818181] text-xs">(Optional)</span>
        </label>
        <input
          className="rounded-lg border border-[#565656] bg-transparent px-4 py-3 font-['Poppins'] font-light text-[#818181] text-sm placeholder:text-[#818181] focus:border-white focus:text-white focus:outline-none"
          id={fieldId("actionUrl")}
          onChange={(event) =>
            onUpdate(task.clientId, { actionUrl: event.target.value })
          }
          placeholder="https://twitter.com/PeakAI"
          type="url"
          value={task.actionUrl ?? ""}
        />
      </div>
    </div>
  );
}
