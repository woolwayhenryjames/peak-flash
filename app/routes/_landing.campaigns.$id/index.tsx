import { useState } from 'react';
import { Link, redirect } from 'react-router';
import CampaignCard from '~/components/CampaignCard';
import GlowContainer from '~/components/GlowContainer';
import { cn } from '~/lib/utils';
import { getDbUser } from '~/services/auth.server';
import { getCampaignsWithUserRanks } from '~/services/campaign.server';
import { db } from '~/services/db.server';
import type { Route } from './+types/index';
import profileIcon from './assets/profile.svg';
import videoIcon from './assets/video.svg';

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-31% via-[#0e0e10] to-[#0d0d19]">
      {/* Header */}
      <div
        className="px-10 py-8"
        style={{
          backgroundImage:
            'radial-gradient(93.1% 93.1% at 50% 0%, #707070 0%, #524532 36.21%, #272117 68.11%, #120D0C 87.69%, #0A0A0A 100%)',
        }}
      >
        <div className="flex flex-col gap-9">
          <h1 className="white-gradient-text font-medium text-2xl">
            Campaign Details
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 py-11">
        <div className="flex flex-col gap-10">
          {/* Campaign Info Card */}
          <div className="w-full rounded-xl border border-[#2D3338] pt-4 pl-4">
            <CampaignCard campaign={campaign} type="invite" />
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* Expandable Sections */}
          <div className="flex flex-col gap-9">
            {/* Video Requirements */}
            <div className="flex flex-col items-center gap-9">
              <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/90 to-black/90 p-4">
                <div className="flex items-center gap-4">
                  <img alt="Video icon" className="size-13" src={videoIcon} />

                  <div className="flex flex-col gap-2">
                    <h3 className="white-gradient-text font-medium text-lg">
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

              <div className="h-px w-75 bg-gray-600/50" />
            </div>

            {/* Profile Performance */}
            <div className="flex flex-col items-center gap-9">
              <div className="w-full">
                <div className="flex items-center justify-center rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/90 to-black/90 p-4">
                  <div className="flex w-full items-center gap-4">
                    <img
                      alt="Profile icon"
                      className="size-13"
                      src={profileIcon}
                    />

                    <div className="flex w-full flex-col gap-3">
                      <h3 className="white-gradient-text font-medium text-lg">
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
                            Expand
                            <svg
                              className="ml-2 inline size-5"
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
                        <button type="button">
                          <GlowContainer className="rounded-sm px-4 py-1 text-sm">
                            Add
                          </GlowContainer>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* SPARK Points Section */}
          <div className="flex flex-col gap-10">
            <h2 className="white-gradient-text text-center font-medium text-xl">
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
                      <h3 className="white-gradient-text font-medium">
                        @{user?.name || 'User'}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">
                          {campaignUser?.score || 0} · 5 videos
                        </span>
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
              <div className="rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/90 to-black/90 p-9">
                {/* Leaderboard Header */}
                <div className="mb-6 flex items-center justify-between border-gray-600 border-b pb-6">
                  <span className="font-light text-gray-400 text-sm">Name</span>
                  <span className="font-light text-gray-400 text-sm">
                    SPARK Points
                  </span>
                </div>

                {/* Top 5 Users */}
                <div className="flex flex-col gap-10">
                  {topParticipants.length > 0 ? (
                    topParticipants.map((participant, index: number) => (
                      <div
                        className="flex items-center gap-6"
                        key={participant.id}
                      >
                        <span className="w-6 font-semibold text-sm text-white">
                          {index + 1}
                        </span>

                        <div className="flex flex-1 items-center justify-between gap-27">
                          <div className="flex flex-col gap-1">
                            <span className="white-gradient-text font-medium">
                              @{participant.user.name || 'user'}
                            </span>
                            <span className="text-gray-500 text-xs">
                              5 videos
                            </span>
                          </div>

                          <span className="white-gradient-text font-medium">
                            {(participant.score / 10).toFixed(1)}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center text-gray-400">
                      <p>No participants yet</p>
                    </div>
                  )}
                </div>
              </div>

              {/* View Full Leaderboard Button */}
              <Link
                className="mx-auto w-[90%]"
                to={`/campaigns/${campaign.id}/leaderboard`}
              >
                <GlowContainer>View Full Leaderboard</GlowContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
