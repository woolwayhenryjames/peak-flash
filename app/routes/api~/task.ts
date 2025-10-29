import type { ActionFunctionArgs } from "react-router";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";

export async function action({ request }: ActionFunctionArgs) {
  // Get the authenticated user
  const userResult = await getDbUser(request);
  if (userResult.isErr()) {
    return new Response("Unauthorized", { status: 401 });
  }
  if (userResult.value.isBusiness) {
    return new Response("Forbidden", { status: 403 });
  }

  const user = userResult.value;
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const { taskId } = await request.json();
  if (!taskId) {
    return new Response("Task ID is required", { status: 400 });
  }
  const task = await db.task.findUnique({
    where: { id: taskId },
  });
  if (!task) {
    return new Response("Task not found", { status: 404 });
  }
  const updatedTask = await db.taskUser.create({
    data: { taskId, userId: user.id, completed: true, completedAt: new Date() },
  });
  return Response.json(updatedTask);
}
