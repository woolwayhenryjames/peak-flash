import { Fragment, useMemo, useState } from 'react';
import Markdown from 'react-markdown';
import { Link, redirect } from 'react-router';
import CampaignCard from '~/components/CampaignCard';
import FirstOpenCampainDetailsDialog from '~/components/Dialogs/FirstOpenCampainDetailsDialog';
import SubmitVideoDialog from '~/components/Dialogs/SubmitVideoDialog';
import GlowContainer from '~/components/GlowContainer';
import { cn } from '~/lib/utils';
import { getDbUser } from '~/services/auth.server';
import { getCampaignsWithUserRanks } from '~/services/campaign.server';
import { db } from '~/services/db.server';
import type { Route } from './+types/_campaign';
import profileIcon from './assets/profile.svg';
import videoIcon from './assets/video.svg';

export function meta({ data }: Route.MetaArgs) {
  const campaign = data?.campaign;
  const topParticipants = data?.topParticipants || [];
  const userRank = data?.campaign?.userRank;

  const campaignName = campaign?.name || 'Campaign';
  const campaignDescription =
    campaign?.description || 'Join this exciting campaign';
  const poolSize = campaign?.poolSize || 0;
  const participantCount = topParticipants.length;

  const isActive = campaign?.endDate
    ? new Date(campaign.endDate) > new Date()
    : false;
  const status = isActive ? 'Active' : 'Ended';

  return [
    { title: `${campaignName} - Peak AI Campaign` },
    {
      name: 'description',
      content: `${campaignDescription.substring(0, 150)}${campaignDescription.length > 150 ? '...' : ''} Pool: $${poolSize}. ${status} campaign with ${participantCount}+ participants.${userRank ? ` You're ranked #${userRank}` : ''}`,
    },
    {
      name: 'keywords',
      content: `Peak AI campaign, ${campaignName}, crypto rewards, AI campaign, ${status.toLowerCase()} campaign, earn money, TikTok campaign`,
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Peak AI' },

    // Open Graph
    {
      property: 'og:title',
      content: `${campaignName} - Join Peak AI Campaign`,
    },
    {
      property: 'og:description',
      content: `${status} campaign with $${poolSize} prize pool! ${campaignDescription.substring(0, 100)}${campaignDescription.length > 100 ? '...' : ''}`,
    },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Peak AI' },
    ...(campaign?.image
      ? [{ property: 'og:image', content: campaign.image }]
      : []),

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${campaignName} - Peak AI` },
    {
      name: 'twitter:description',
      content: `${status} campaign with $${poolSize} prize pool. Join now and compete for rewards!`,
    },
    ...(campaign?.image
      ? [{ name: 'twitter:image', content: campaign.image }]
      : []),
  ];
}

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect('/login');
  }

  const campaign = await db.campaign.findUnique({
    where: { id: params.id },
  });
  if (!campaign) {
    throw redirect('/');
  }

  const [campaignWithRank] = await getCampaignsWithUserRanks(
    [campaign],
    user.value
  );

  // Get top 5 participants for leaderboard
  const topParticipants = await db.campaignUser.findMany({
    where: { campaignId: params.id },
    orderBy: { score: 'desc' },
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
            'radial-gradient(93.1% 93.1% at 50% 0%, #707070 0%, #524532 36.21%, #272117 68.11%, #120D0C 87.69%, #0A0A0A 100%)',
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
                        expandedSection === 'video' ? null : 'video'
                      )
                    }
                    type="button"
                  >
                    <GlowContainer className="rounded-sm px-2 py-2">
                      <svg
                        className={cn(
                          'h-4 w-4 transition-transform',
                          expandedSection === 'video' ? 'rotate-180' : ''
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
                  className={cn('flex flex-col items-center', {
                    hidden: expandedSection !== 'video',
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

            {/* Profile Performance */}
            <div className="flex flex-col items-center">
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-center rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/90 to-black/90 p-4">
                  <div className="flex w-full items-center gap-4">
                    <img
                      alt="Profile icon"
                      className="size-13"
                      src={profileIcon}
                    />

                    <div className="flex w-full flex-col gap-3">
                      <h3 className="font-medium text-lg text-white">
                        Profile Performance
                      </h3>
                      <div className="flex items-center gap-3">
                        <button
                          className="flex-1"
                          onClick={() =>
                            setExpandedSection(
                              expandedSection === 'profile' ? null : 'profile'
                            )
                          }
                          type="button"
                        >
                          <GlowContainer className="rounded-sm px-4 py-1 text-sm">
                            {expandedSection === 'profile'
                              ? 'Collapse'
                              : 'Expand'}
                            <svg
                              className={cn(
                                'ml-2 inline size-5 transition-transform',
                                expandedSection === 'profile'
                                  ? 'rotate-180'
                                  : ''
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
                        <button
                          onClick={() => setShowSubmitVideoDialog(true)}
                          type="button"
                        >
                          <GlowContainer className="rounded-sm px-4 py-1 text-sm">
                            Add
                          </GlowContainer>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedSection === 'profile' && (
                  <div className="flex flex-col items-center">
                    {/* Vertical dotted line connector */}
                    <div className="h-6 w-px border-gray-600 border-l border-dashed" />

                    {/* Spark Points Section */}
                    <div className="w-full rounded-xl border border-gray-700 bg-black/50 p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="font-medium text-gray-100 text-xl">
                          Spark Points
                        </h4>
                        <span className="font-medium text-2xl text-gray-100">
                          8.7
                        </span>
                      </div>
                      <p className="mb-4 text-gray-500 text-xs">
                        Current Performance Score
                      </p>

                      {/* Progress Bar */}
                      <div className="relative h-3 w-full rounded-full bg-gray-800">
                        <div className="absolute top-0 left-0 h-full w-[78%] rounded-full bg-gradient-to-r from-[#8080DA] to-[#1BCFDE]" />
                      </div>

                      <p className="mt-4 text-gray-500 text-xs">
                        Spark Points measure user engagement in campaigns based
                        on content interactions, quality scores, and account
                        ratings, updated every 24 hours.
                      </p>
                    </div>

                    {/* Vertical dotted line connector */}
                    <div className="h-6 w-px border-gray-600 border-l border-dashed" />

                    {/* Performance Stats */}
                    <div className="flex w-full gap-4">
                      <div className="flex flex-1 flex-col gap-2 rounded-lg border border-[#9c9c9c]/20 p-3">
                        <p className="bg-gradient-to-r from-[#694AFF] to-[#69D7FF] bg-clip-text font-medium text-transparent text-xl">
                          5
                        </p>
                        <p className="text-gray-500 text-xs">Posted Videos</p>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 rounded-lg border border-[#9c9c9c]/20 p-3">
                        <p className="bg-gradient-to-r from-[#694AFF] to-[#69D7FF] bg-clip-text font-medium text-transparent text-xl">
                          #8
                        </p>
                        <p className="text-gray-500 text-xs">Current Rank</p>
                      </div>
                    </div>

                    {/* Vertical dotted line connector */}
                    <div className="h-6 w-px border-gray-600 border-l border-dashed" />

                    {/* Recent Videos */}
                    <div className="flex w-full gap-4">
                      {[1, 2, 3].map((index) => (
                        <div
                          className="relative h-32 flex-1 overflow-hidden rounded-lg bg-gray-800"
                          key={index}
                        >
                          <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded bg-black/70 px-2 py-1">
                            <svg
                              className="h-3 w-3 fill-gray-300"
                              viewBox="0 0 10 10"
                            >
                              <title>Views</title>
                              <polygon points="0,0 10,5 0,10" />
                            </svg>
                            <span className="text-[10px] text-gray-300">
                              1.2k
                            </span>
                          </div>
                          {index === 1 && (
                            <div className="absolute top-2 left-2 rounded bg-cyan-400 px-1 py-0.5">
                              <svg
                                className="h-3 w-2"
                                fill="black"
                                viewBox="0 0 8 4.5"
                              >
                                <title>Check</title>
                                <path
                                  d="M1 2.5L3 4L7 0.5"
                                  fill="none"
                                  stroke="black"
                                  strokeWidth="1"
                                />
                              </svg>
                            </div>
                          )}
                          {index === 3 && (
                            <div className="absolute top-2 left-2 rounded bg-yellow-400 px-1 py-0.5">
                              <svg
                                className="h-3 w-2"
                                fill="black"
                                viewBox="0 0 6 12"
                              >
                                <title>Pause</title>
                                <rect height="12" width="2" x="0" y="0" />
                                <rect height="12" width="2" x="4" y="0" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
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
                            : 'U'
                        }
                        className="h-full w-full object-cover"
                        src={user?.image || ''}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-white">
                        @{user?.email || 'User'}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">5 videos</span>
                        <div className="rounded bg-gradient-to-r from-amber-400 to-blue-400 px-2 py-0.5 font-medium text-black text-xs">
                          #{campaign.userRank || 8}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="bg-linear-137 from-amber-400 to-blue-400 bg-clip-text font-semibold text-2xl text-transparent">
                      {campaignUser?.score || 0}
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
                                @{participant.user.email || 'user'}
                              </span>
                              <span className="text-gray-500 text-xs">
                                5 videos
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap py-4">
                            {participant.score}
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
                to={`/campaigns/${campaign.id}/leaderboard`}
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
      console.error('Failed to copy link:', error);
    }
  };
  const requirements: [string, unknown][] = useMemo(() => {
    try {
      const requirementsObj =
        typeof joinRequirement === 'string'
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
              onClick={() => handleCopyLink(value.join(', '))}
            >
              {isCopied ? 'Copied!' : 'Copy'}
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
          {typeof value === 'string' && (
            <div className="text-gray-500 text-sm [&_*]:list-image-[linear-gradient(114deg,#FFA44A_12.87%,#69D7FF_51.12%)]">
              <Markdown>{value}</Markdown>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  ));
}
