import type { LoaderFunctionArgs } from "react-router";
import { getAllParticipants } from "~/services/flash.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const flashId = Number(params.flashId);
  const { flash, participants, tasks } = await getAllParticipants(flashId);

  // Generate CSV content with task completion details
  const taskNames = tasks.map((t) => t.name);
  const csvHeader =
    "Name,Email,Wallet Address,Twitter Handle," +
    taskNames
      .map((name) => `${name} (Completed),${name} (Completed At)`)
      .join(",") +
    "\n";

  const csvRows = participants
    .map((p) => {
      const baseInfo = `"${p.name}","${p.email}","${p.walletAddress ?? ""}","${p.twitterHandle ?? ""}"`;

      // Create a map for quick task lookup
      const taskMap = new Map(p.completedTasks.map((t) => [t.taskId, t]));

      // For each required task, add completion info
      const taskColumns = tasks
        .map((task) => {
          const completion = taskMap.get(task.id);
          if (completion) {
            const completedAt = completion.completedAt
              ? new Date(completion.completedAt).toISOString()
              : "";
            return `"${completion.completed ? "Yes" : "No"}","${completedAt}"`;
          }
          return '"No",""';
        })
        .join(",");

      return `${baseInfo},${taskColumns}`;
    })
    .join("\n");

  const csvContent = csvHeader + csvRows;

  // Return CSV as a downloadable response
  return new Response(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="${flash?.name ?? "flash"}-participants.csv"`,
    },
  });
}
