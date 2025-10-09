import { Fragment, useMemo, useState } from "react";
import Markdown from "react-markdown";
import { Link, redirect } from "react-router";
import CampaignCard from "~/components/CampaignCard";
import FirstOpenCampainDetailsDialog from "~/components/Dialogs/FirstOpenCampainDetailsDialog";
import SubmitVideoDialog from "~/components/Dialogs/SubmitVideoDialog";
import GlowContainer from "~/components/GlowContainer";
import ParticipationInfo from "~/components/ParticipationInfo";
import { cn } from "~/lib/utils";
import { getDbUser } from "~/services/auth.server";
import { getCampaignsWithUserRanks } from "~/services/campaign.server";
import { db } from "~/services/db.server";
import type { Route } from "./+types/_campaign";
import videoIcon from "./assets/video.svg";

export function meta({ data }: Route.MetaArgs) {
  const campaign = data?.campaign;
  const topParticipants = data?.topParticipants || [];
  const userRank = data?.campaign?.userRank;

  const campaignName = campaign?.name || "Campaign";
  const campaignDescription =
    campaign?.description || "Join this exciting campaign";
  const poolSize = campaign?.poolSize || 0;
  const participantCount = topParticipants.length;

  const isActive = campaign?.endDate
    ? new Date(campaign.endDate) > new Date()
    : false;
  const status = isActive ? "Active" : "Ended";

  return [
    { title: `${campaignName} - Peak AI Campaign` },
    {
      name: "description",
      content: `${campaignDescription.substring(0, 150)}${campaignDescription.length > 150 ? "..." : ""} Pool: $${poolSize}. ${status} campaign with ${participantCount}+ participants.${userRank ? ` You're ranked #${userRank}` : ""}`,
    },
    {
      name: "keywords",
      content: `Peak AI campaign, ${campaignName}, crypto rewards, AI campaign, ${status.toLowerCase()} campaign, earn money, TikTok campaign`,
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Peak AI" },

    // Open Graph
    {
      property: "og:title",
      content: `${campaignName} - Join Peak AI Campaign`,
    },
    {
      property: "og:description",
      content: `${status} campaign with $${poolSize} prize pool! ${campaignDescription.substring(0, 100)}${campaignDescription.length > 100 ? "..." : ""}`,
    },
    { property: "og:type", content: "article" },
    { property: "og:site_name", content: "Peak AI" },
    ...(campaign?.image
      ? [{ property: "og:image", content: campaign.image }]
      : []),

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${campaignName} - Peak AI` },
    {
      name: "twitter:description",
      content: `${status} campaign with $${poolSize} prize pool. Join now and compete for rewards!`,
    },
    ...(campaign?.image
      ? [{ name: "twitter:image", content: campaign.image }]
      : []),
  ];
}

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect("/");
  }

  const campaign = await db.campaign.findUnique({
    where: { id: params.id },
  });
  if (!campaign) {
    throw redirect("/");
  }

  const [campaignWithRank] = await getCampaignsWithUserRanks(
    [campaign],
    user.value
  );

  // Get top 5 participants for leaderboard
  const topParticipants = await db.campaignUser.findMany({
    where: { campaignId: params.id },
    orderBy: { score: "desc" },
    take: 5,
    include: {
      user: {
        select: {
          name: true,
          image: true,
          email: true,
        },
      },
    },
  });

  return {
    campaign: campaignWithRank,
    topParticipants,
    user: user.value,
  };
}

export default function CampaignDetails({
  loaderData: { campaign, topParticipants, user },
}: Route.ComponentProps) {
  const campaignUser = campaign.isParticipating
    ? user.campaignUsers.find((cu) => cu.campaignId === campaign.id)
    : null;
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showSubmitVideoDialog, setShowSubmitVideoDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-31% via-[#0e0e10] to-[#0d0d19]">
      {/* Header */}
      <div
        className="px-10 py-8 md:px-18"
        style={{
          backgroundImage:
            "radial-gradient(93.1% 93.1% at 50% 0%, #707070 0%, #524532 36.21%, #272117 68.11%, #120D0C 87.69%, #0A0A0A 100%)",
        }}
      >
        <div className="flex flex-col gap-9">
          <h1 className="font-medium text-2xl text-white">Campaign Details</h1>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 py-11 md:px-18">
        <div className="flex flex-col gap-10">
          {/* Campaign Info Card */}
          <div className="w-full rounded-xl border border-[#2D3338] pt-4 pl-4">
            <CampaignCard campaign={campaign} type="invite" />
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* Expandable Sections */}
          <div className="flex flex-col gap-9">
            {/* Video Requirements */}
            <div className="flex flex-col items-center">
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/90 to-black/90 p-4">
                  <div className="flex items-center gap-4">
                    <img alt="Video icon" className="size-13" src={videoIcon} />

                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-lg text-white">
                        Video Requirements
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Click to view detailed requirements
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "video" ? null : "video"
                      )
                    }
                    type="button"
                  >
                    <GlowContainer className="rounded-sm px-2 py-2">
                      <svg
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedSection === "video" ? "rotate-180" : ""
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <title>Chevron down</title>
                        <path
                          d="M6 9l6 6 6-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </GlowContainer>
                  </button>
                </div>

                {/* Expanded Content */}
                <div
                  className={cn("flex flex-col items-center", {
                    hidden: expandedSection !== "video",
                  })}
                >
                  <VideoRequirementsContent
                    joinRequirement={campaign.joinRequirement}
                  />
                </div>
              </div>

              {!expandedSection && (
                <div className="mt-4 h-px w-75 bg-gray-600/50" />
              )}
            </div>

            <ParticipationInfo
              campaignId={campaign.id}
              campaignUser={campaignUser}
              expand={expandedSection === "profile"}
              setExpand={(expand) =>
                setExpandedSection(expand ? "profile" : null)
              }
              userRank={campaign.userRank}
            />
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* SPARK Points Section */}
          <div className="flex flex-col gap-10">
            <h2 className="text-center font-medium text-white text-xl">
              Spark Points
            </h2>

            {/* Current User Score */}
            {campaign.isParticipating && (
              <div className="rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/90 to-black/90 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-4">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-600">
                      <img
                        alt={
                          user?.name
                            ? user.name.substring(0, 4).toUpperCase()
                            : "U"
                        }
                        className="h-full w-full object-cover"
                        src={user?.image || ""}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-white">
                        @{user?.email || "User"}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">
                          {campaignUser?.videoCount || 0} videos
                        </span>
                        <div className="rounded bg-gradient-to-r from-amber-400 to-blue-400 px-2 py-0.5 font-medium text-black text-xs">
                          #{campaign.userRank || 8}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="bg-linear-137 from-amber-400 to-blue-400 bg-clip-text font-semibold text-2xl text-transparent">
                      {Math.round(campaignUser?.score || 0)}
                    </p>
                    <p className="text-gray-400 text-xs">SPARK Points</p>
                  </div>
                </div>
              </div>
            )}

            {/* Leaderboard */}
            <div className="flex flex-col gap-10">
              {/* Top 5 Users */}
              <div className="flex flex-col gap-10">
                {topParticipants.length > 0 ? (
                  <table className="w-full table-fixed divide-y divide-gray-600 border-gray-600 border-b">
                    <thead>
                      <tr>
                        <th className="w-12" />
                        <th className="whitespace-nowrap py-3 text-left font-light text-gray-400 text-sm tracking-wider">
                          Name
                        </th>
                        <th className="w-26 whitespace-nowrap py-3 text-left font-light text-gray-400 text-sm tracking-wider">
                          SPARK Points
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600">
                      {topParticipants.map((participant, index) => (
                        <tr key={participant.user.name}>
                          <td className="whitespace-nowrap py-4 text-center">
                            {index + 1}
                          </td>
                          <td className="truncate whitespace-nowrap py-4">
                            <div className="flex flex-col gap-1">
                              <span className="font-medium text-white">
                                @{participant.user.email || "user"}
                              </span>
                              <span className="text-gray-500 text-xs">
                                {participant.videoCount || 0} videos
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap py-4">
                            {Math.round(participant.score)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="py-8 text-center text-gray-400">
                    <p>No participants yet</p>
                  </div>
                )}
              </div>

              {/* View Full Leaderboard Button */}
              <Link
                className="mx-auto w-[90%]"
                to={`/u/campaigns/${campaign.id}/leaderboard`}
                viewTransition
              >
                <GlowContainer>View Full Leaderboard</GlowContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SubmitVideoDialog
        id={campaign.id}
        setShow={setShowSubmitVideoDialog}
        show={showSubmitVideoDialog}
      />
      <FirstOpenCampainDetailsDialog
        id={campaign.id}
        joinRequirement={campaign.joinRequirement}
      />
    </div>
  );
}

function VideoRequirementsContent({
  joinRequirement,
}: {
  joinRequirement?: unknown;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };
  const requirements: [string, unknown][] = useMemo(() => {
    try {
      const requirementsObj =
        typeof joinRequirement === "string"
          ? JSON.parse(joinRequirement)
          : (joinRequirement ?? {});
      return Object.entries(requirementsObj);
    } catch {
      return [];
    }
  }, [joinRequirement]);
  return requirements.map(([key, value]) => (
    <Fragment key={key}>
      <div className="h-6 w-px border-gray-600 border-l border-dashed" />
      <div className="w-full rounded-xl border border-gray-700 bg-black/50 p-6">
        <div className="flex justify-between">
          <h4 className="mb-3 font-medium text-gray-100">{key}</h4>
          {Array.isArray(value) && (
            <GlowContainer
              className="w-fit cursor-pointer rounded-sm px-3 py-1 text-sm"
              noShimmer
              onClick={() => handleCopyLink(value.join(", "))}
            >
              {isCopied ? "Copied!" : "Copy"}
            </GlowContainer>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {Array.isArray(value) &&
            value.map((tag) => (
              <div
                className="rounded-lg border border-gray-600 px-3 py-1"
                key={tag}
              >
                <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text font-light text-sm text-transparent">
                  #{tag}
                </span>
              </div>
            ))}
          {typeof value === "string" && (
            <div className="text-gray-500 text-sm [&_*]:list-image-[linear-gradient(114deg,#FFA44A_12.87%,#69D7FF_51.12%)]">
              <Markdown>{value}</Markdown>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  ));
}
