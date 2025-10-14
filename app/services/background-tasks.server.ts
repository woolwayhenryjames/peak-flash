import cron, { type ScheduledTask } from "node-cron";
import { updateAllUserInfo } from "./updateUserInfo";

class BackgroundTaskManager {
  private readonly tasks = new Map<string, ScheduledTask>();

  startUserInfoUpdates() {
    if (this.tasks.has("userInfo")) {
      return; // Already running
    }

    // Run every hour at minute 0
    const task = cron.schedule(
      "0 * * * *",
      async () => {
        console.log("Updating all user info...");
        try {
          await updateAllUserInfo();
        } catch (error) {
          console.error("Failed to update user info:", error);
        }
      },
      {
        timezone: "UTC",
      }
    );

    this.tasks.set("userInfo", task);
    task.start();
  }

  stopUserInfoUpdates() {
    const task = this.tasks.get("userInfo");
    if (task) {
      task.destroy();
      this.tasks.delete("userInfo");
    }
  }

  cleanup() {
    for (const [, task] of this.tasks) {
      task.destroy();
    }
    this.tasks.clear();
  }
}

export const backgroundTasks = new BackgroundTaskManager();

// Start tasks immediately
backgroundTasks.startUserInfoUpdates();
