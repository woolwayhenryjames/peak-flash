import { redirect } from "react-router";
import { getDbUser } from "~/services/auth.server";
import {
  getFlashWithMetrics,
  normalizeFlashForOutput,
} from "~/services/flash.server";
import type { Route } from "./+types/_flash";
import bg from "./assets/bg.svg";
import FlashCard from "./FlashCard";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (!user.isOk()) {
    throw redirect("/");
  }

  const flash = await getFlashWithMetrics();
  return flash.map(normalizeFlashForOutput).map((f) => ({
    ...f,
    tasks: f.tasks.map((task) => ({
      ...task,
      taskUsers: task.taskUsers.filter((tu) => tu.userId === user.value.id),
    })),
  }));
}

export default function Flash({ loaderData: flash }: Route.ComponentProps) {
  return (
    <div
      className="min-h-screen pb-24"
      style={{
        background:
          "linear-gradient(180deg, #000 0%, #060F0D 30.78%, #000 71.63%, #0C1411 100%)",
      }}
    >
      {/* Smart Reminder Header */}
      <div
        className="flex aspect-390/131 w-full flex-col justify-center gap-3 bg-center bg-cover px-8 md:px-18"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="font-normal text-2xl text-white">
          <span
            className="text-[#68ffa7]"
            style={{
              textShadow:
                "0 0 50.98px #365E47, 0 0 29.131px #365E47, 0 0 16.993px #365E47, 0 0 8.497px #365E47, 0 0 2.428px #365E47, 0 0 1.214px #365E47",
            }}
          >
            FLASH
          </span>{" "}
          <span>Tasks</span>
        </div>
        <div className="font-normal text-[#c1c1c1] text-base">
          Instant sparks for quick actions
        </div>
      </div>

      <div className="mt-8 space-y-12 px-5 md:px-18">
        {/* Flash list will go here */}
        {flash.map((item) => (
          <FlashCard flash={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
