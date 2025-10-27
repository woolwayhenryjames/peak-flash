import { redirect } from "react-router";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_flash";
import bg from "./assets/bg.svg";
import FlashCard from "./FlashCard";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (!user.isOk()) {
    throw redirect("/");
  }

  const flash = await db.flash.findMany({
    where: {
      status: "ACTIVE",
      startAt: { lte: new Date() },
      OR: [{ endAt: null }, { endAt: { gte: new Date() } }],
    },
    include: {
      tasks: {
        include: {
          taskUsers: {
            where: {
              userId: user.value.id,
            },
          },
        },
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      startAt: "desc",
    },
  });
  return flash;
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
        className="flex aspect-390/131 w-full flex-col justify-center gap-3 bg-center bg-cover px-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="font-normal text-2xl text-white">
          <span className="text-[#68ffa7] [text-shadow:0px_0px_1px_rgb(54_94_71/1.00)]">
            FLASH
          </span>
          <span>Tasks</span>
        </div>
        <div className="font-normal text-[#c1c1c1] text-base">
          Instant sparks for quick actions
        </div>
      </div>

      <div className="mt-4 space-y-6 px-5 md:px-18">
        {/* Flash list will go here */}
        {flash.map((item) => (
          <FlashCard flash={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
