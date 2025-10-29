import { useEffect, useState } from "react";
import { redirect } from "react-router";
import { authClient } from "~/lib/auth-client";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import { computeFlashMetrics } from "~/services/flash.server";
import type { Route } from "./+types/_flash";
import bg from "./assets/bg.svg";
import FlashCard from "./FlashCard";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (!user.isOk()) {
    throw redirect("/");
  }

  const flash = await db.flash.findMany({
    include: {
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
    orderBy: {
      startAt: "desc",
    },
  });
  return flash.map((f) => {
    const metrics = computeFlashMetrics(f);
    return {
      ...f,
      perUserPrize: f.perUserPrize?.toNumber() ?? null,
      prizePool: f.prizePool?.toNumber() ?? null,
      metrics,
      tasks: f.tasks.map((task) => ({
        ...task,
        taskUsers: task.taskUsers.filter((tu) => tu.userId === user.value.id),
      })),
    };
  });
}

export default function Flash({ loaderData: flash }: Route.ComponentProps) {
  const [twitterAccountId, setTwitterAccountId] = useState<string>();

  useEffect(() => {
    const checkAccount = async () => {
      const accounts = await authClient.listAccounts();
      if (accounts.data) {
        const twitterAccount = accounts.data.find(
          (account) => account.providerId === "twitter"
        );
        if (twitterAccount) {
          setTwitterAccountId(twitterAccount.accountId);
        }
      }
    };
    checkAccount();
  }, []);
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
          <FlashCard
            flash={item}
            key={item.id}
            twitterAccountId={twitterAccountId}
          />
        ))}
      </div>
    </div>
  );
}
