import type { Campaign } from ".prisma/main/client";
import { Activity, Suspense, useState } from "react";
import { redirect } from "react-router";
import GlowContainer from "~/components/GlowContainer";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_b_campaigns";
import CreateCampaign from "./components/CreateCampaign";
import MyCampaigns from "./components/MyCampaigns";

interface CampaignWithParticipation extends Campaign {
  participants: number;
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect("/");
  }
  const campaignsPromise = new Promise<CampaignWithParticipation[]>(
    (resolve, reject) =>
      db.campaign
        .findMany({
          where: { ownerId: user.value.id },
          orderBy: { createdAt: "desc" },
          include: { _count: { select: { campaignUsers: true } } },
        })
        .then((campaigns) => {
          resolve(
            campaigns.map((campaign) => ({
              ...campaign,
              participants: campaign._count.campaignUsers,
            }))
          );
        })
        .catch(reject)
  );

  return { campaignsPromise };
}

export default function Campaigns({ loaderData }: Route.ComponentProps) {
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);
  return (
    <div className="container mx-auto mt-13 flex flex-1 flex-col gap-20 max-md:px-3">
      <div className="flex w-3/4 flex-col gap-8 md:mt-18 md:mb-40 md:w-1/2 md:gap-12 xl:w-1/3">
        <div className="flex flex-col gap-5 md:gap-9">
          <div className="font-medium text-2xl text-[#f2edea] md:font-normal md:text-5xl">
            Ready to create a new campaign?
          </div>
          <div className="font-normal text-[10px] text-base md:text-[#8a8f98]">
            Create a new campaign to engage with creators and grow your
            community
          </div>
        </div>
        <button
          className="transition-all disabled:cursor-not-allowed disabled:opacity-50"
          disabled={showCreateCampaign}
          onClick={() => setShowCreateCampaign(true)}
          type="button"
        >
          <GlowContainer className="w-fit bg-linear-to-b from-[#182d2e] to-[#4d8f94] px-[50px] font-normal text-xs md:px-[100px] md:text-base">
            {showCreateCampaign ? (
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <title>checkmark Icon</title>
                <path
                  d="M4.41609 7.09233L6.55718 11.2406C6.55718 11.2406 10.0365 2.81015 15.5233 0C15.3897 2.00703 14.8544 3.74703 15.7909 5.88812C13.382 6.4228 8.43077 12.4448 6.82499 15.3887C4.54999 12.5787 1.87359 10.4376 0 9.7681L4.41609 7.09233Z"
                  fill="#54C18E"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                height="23"
                viewBox="0 0 23 23"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Plus Icon</title>
                <g clipPath="url(#clip0_1532_1571)">
                  <path
                    d="M11.5 0C5.09286 0 0 5.09286 0 11.5C0 17.9071 5.09286 23 11.5 23C17.9071 23 23 17.9071 23 11.5C23 5.09286 17.9071 0 11.5 0ZM11.5 21.3571C6.07857 21.3571 1.64286 16.9214 1.64286 11.5C1.64286 6.07857 6.07857 1.64286 11.5 1.64286C16.9214 1.64286 21.3571 6.07857 21.3571 11.5C21.3571 16.9214 16.9214 21.3571 11.5 21.3571Z"
                    fill="#68FEF5"
                  />
                  <path
                    d="M16.4286 10.6786H12.3214V6.57143C12.3214 6.07857 11.9929 5.75 11.5 5.75C11.0071 5.75 10.6786 6.07857 10.6786 6.57143V10.6786H6.57143C6.07857 10.6786 5.75 11.0071 5.75 11.5C5.75 11.9929 6.07857 12.3214 6.57143 12.3214H10.6786V16.4286C10.6786 16.9214 11.0071 17.25 11.5 17.25C11.9929 17.25 12.3214 16.9214 12.3214 16.4286V12.3214H16.4286C16.9214 12.3214 17.25 11.9929 17.25 11.5C17.25 11.0071 16.9214 10.6786 16.4286 10.6786Z"
                    fill="#68FEF5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1532_1571">
                    <rect fill="white" height="23" width="23" />
                  </clipPath>
                </defs>
              </svg>
            )}

            {showCreateCampaign
              ? "Campaign creation in progress."
              : "Start New Campaign"}
          </GlowContainer>
        </button>
      </div>
      <Activity mode={showCreateCampaign ? "visible" : "hidden"}>
        <CreateCampaign />
      </Activity>
      <Suspense
        fallback={
          <div className="flex flex-col gap-4">
            <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-800" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  className="h-64 animate-pulse rounded-xl bg-gray-800"
                  key={i}
                />
              ))}
            </div>
          </div>
        }
      >
        <MyCampaigns campaignsPromise={loaderData.campaignsPromise} />
      </Suspense>
    </div>
  );
}
