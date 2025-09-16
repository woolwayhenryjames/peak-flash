import { useState } from 'react';
import GlowContainer from '~/components/GlowContainer';
import { getDbUser } from '~/services/auth.server';
import {
  getUserInviteRecords,
  getUserInviteStats,
} from '~/services/user.server';
import type { Route } from './+types/_invite';
import fb from './assets/fb.svg';
import gitBranchIcon from './assets/git-branch.svg';
import head from './assets/head.svg';
import bg from './assets/header-bg.avif';
import ins from './assets/ins.png';
import starsIcon from './assets/stars.svg';
import tg from './assets/tg.svg';
import tiktok from './assets/tiktok.svg';
import whatsapp from './assets/whatsapp.png';
import x from './assets/x.svg';

export function meta({ data }: Route.MetaArgs) {
  const inviteStats = data?.inviteStats;
  const totalInvites = inviteStats?.inviteCount || 0;

  return [
    { title: 'Invite Friends - Earn Rewards on Peak AI' },
    {
      name: 'description',
      content: `Invite friends to Peak AI and earn rewards together! You've already invited ${totalInvites} friends. Share your invite code and grow the Peak AI community while earning bonus points.`,
    },
    {
      name: 'keywords',
      content:
        'Peak AI invite, referral program, earn rewards, invite friends, bonus points, social sharing, referral code, crypto rewards',
    },
    { name: 'robots', content: 'noindex, nofollow' }, // Personal invite pages should not be indexed
    { name: 'author', content: 'Peak AI' },

    // Open Graph
    { property: 'og:title', content: 'Join Peak AI through My Invite!' },
    {
      property: 'og:description',
      content:
        "I'm inviting you to join Peak AI! Earn Kindle Score points through crypto and AI campaigns. Join me and let's compete together!",
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Peak AI' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Join Me on Peak AI!' },
    {
      name: 'twitter:description',
      content:
        "Earn rewards through crypto & AI campaigns on Peak AI. Join through my invite and let's earn together!",
    },
  ];
}

const socialPlatforms = [
  { name: 'Twitter', icon: x },
  { name: 'TikTok', icon: tiktok },
  { name: 'Telegram', icon: tg },
  { name: 'WhatsApp', icon: whatsapp },
  { name: 'Facebook', icon: fb },
  {
    name: 'Instagram',
    icon: ins,
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const userResult = await getDbUser(request);
  if (userResult.isErr()) {
    throw new Response('Unauthorized', { status: 401 });
  }

  const user = userResult.value;
  const [inviteRecords, inviteStats] = await Promise.all([
    getUserInviteRecords(user.id),
    getUserInviteStats(user.id),
  ]);

  return {
    user,
    inviteRecords,
    inviteStats,
  };
}

export default function Invite({
  loaderData: { user, inviteRecords, inviteStats },
}: Route.ComponentProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTikTok, setCopiedTikTok] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);

  const inviteLink = `${import.meta.env.VITE_ORIGIN}invite/${user?.id}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleSocialShare = (platform: string) => {
    const shareText =
      'Join me on PEAK AI and start earning rewards! Use my invite link:';
    const fullText = `${shareText} ${inviteLink}`;

    const shareUrls = {
      Twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}`,
      TikTok: inviteLink, // TikTok doesn't have direct URL sharing, so we'll copy the link
      Telegram: `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`,
      WhatsApp: `https://wa.me/?text=${encodeURIComponent(fullText)}`,
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(inviteLink)}`,
      Instagram: inviteLink, // Instagram doesn't have direct URL sharing, so we'll copy the link
    };

    const url = shareUrls[platform as keyof typeof shareUrls];

    if (platform === 'TikTok') {
      // For TikTok, copy the link to clipboard and show TikTok-specific feedback
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          setCopiedTikTok(true);
          setTimeout(() => setCopiedTikTok(false), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy link:', err);
        });
    } else if (platform === 'Instagram') {
      // For Instagram, copy the link to clipboard and show Instagram-specific feedback
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          setCopiedInstagram(true);
          setTimeout(() => setCopiedInstagram(false), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy link:', err);
        });
    } else {
      // Open sharing URL in new window
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040d] via-[#1d131c] via-[31%] to-[#201819] to-[67%] pb-24 md:px-18">
      {/* Smart Reminder Header */}
      <div
        className="flex aspect-390/131 w-full items-center gap-3 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="pl-10 font-medium text-2xl text-white tracking-tight">
          Smart <br /> Reminder
        </h1>
      </div>

      <div className="mt-4 space-y-6 px-5">
        {/* Invite & Earn Business Card */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#1a1616] p-10">
          <div className="space-y-12 text-center">
            {/* Header Section */}
            <div className="space-y-5">
              {/* Icon */}
              <img alt="Head icon" className="mx-auto size-14" src={head} />

              {/* Title and Description */}
              <div className="space-y-3">
                <h2 className="font-medium text-white text-xl">
                  Invite & Earn
                </h2>
                <p className="btext-white mx-auto max-w-xs text-center text-xs leading-relaxed">
                  Invite friends to join campaigns and get 10% of their score
                  rewards
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-center gap-10">
              <div className="text-center">
                <div className="mb-1 font-semibold text-2xl text-white">
                  {inviteStats.rewardRate}%
                </div>
                <div className="font-light text-[#c0c0c0] text-xs">
                  Reward Rate
                </div>
              </div>
              <div className="h-14 w-px bg-[#5d5d5d]" />
              <div className="text-center">
                <div className="mb-1 font-semibold text-2xl text-white">
                  {inviteStats.inviteCount}
                </div>
                <div className="font-light text-[#c0c0c0] text-xs">Invites</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-600/30" />

        {/* Profile Invite Link Section */}
        <div className="space-y-7">
          {/* Header */}
          <div className="flex items-center gap-1">
            <img
              alt="Git branch icon"
              className="h-6 w-6"
              src={gitBranchIcon}
            />
            <h3 className="font-medium text-white text-xl">
              Profile Invite Link
            </h3>
          </div>

          {/* Important Notice */}
          <div className="flex items-start gap-3">
            <svg className="size-6" viewBox="0 0 13 13">
              <title>Sparkle icon</title>
              <path
                d="M6.5 0L8.1 2.8L11.3 1.7L10.2 4.9L13 6.5L10.2 8.1L11.3 11.3L8.1 10.2L6.5 13L4.9 10.2L1.7 11.3L2.8 8.1L0 6.5L2.8 4.9L1.7 1.7L4.9 2.8L6.5 0Z"
                fill="url(#sparkGradient)"
                stroke="url(#sparkGradient)"
                strokeWidth="0.5"
              />
              <defs>
                <linearGradient
                  id="sparkGradient"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#df99f7" />
                  <stop offset="100%" stopColor="#ffdbb0" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[#dddddd] text-xs leading-relaxed">
              <span className="text-yellow-500">Important</span>: Earn 10% bonus
              from invitee's Spark Points only when you both join the same
              campaign with non-zero Spark Points.
            </p>
          </div>

          {/* Invite Link Input */}
          <div className="rounded-2xl border border-[#343035] bg-transparent p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 space-y-1.5">
                <div className="text-[#f2f2f2] text-xs">Invite Link</div>
                <div className="break-all text-[#a4a4a4] text-xs">
                  {inviteLink}
                </div>
              </div>
              <button
                className="flex-shrink-0"
                onClick={handleCopyLink}
                type="button"
              >
                <GlowContainer className="rounded bg-gradient-to-b from-[#2a2a2a] to-[#1a1616] px-3 py-2 text-sm">
                  {copiedLink ? 'Copied!' : 'Copy'}
                </GlowContainer>
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {socialPlatforms.map((platform) => {
              const isCopied =
                (platform.name === 'TikTok' && copiedTikTok) ||
                (platform.name === 'Instagram' && copiedInstagram);

              return (
                <button
                  key={platform.name}
                  onClick={() => handleSocialShare(platform.name)}
                  type="button"
                >
                  <GlowContainer
                    className="flex items-center justify-center gap-3 rounded-xl py-3"
                    noShimmer
                  >
                    <img
                      alt={`${platform.name} icon`}
                      className="size-6"
                      src={platform.icon}
                    />
                    <span className="font-normal text-sm text-white">
                      {isCopied ? 'Copied!' : platform.name}
                    </span>
                  </GlowContainer>
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-px w-full bg-gray-600/30" />

        {/* Invite Records Section */}
        <div className="space-y-7">
          {/* Header */}
          <div className="flex items-center gap-1">
            <img alt="Stars icon" className="h-6 w-6" src={starsIcon} />
            <h3 className="font-semibold text-white text-xl">Invite Records</h3>
          </div>

          {/* Records List */}
          <div className="space-y-6">
            {inviteRecords.length === 0 ? (
              <div className="rounded-2xl border border-[#2d3338] bg-gradient-to-b from-[#2a2a2a] to-[#1a1616] p-8 text-center">
                <p className="text-[#979797] text-sm">
                  No invites yet. Share your link to start earning!
                </p>
              </div>
            ) : (
              inviteRecords.map((record) => (
                <div key={record.id}>
                  <div className="rounded-2xl border border-[#2d3338] bg-gradient-to-b from-[#2a2a2a] to-[#1a1616] p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#f9f9fb] text-lg">
                          <img
                            alt={`${record.name} avatar`}
                            className="h-full w-full object-cover"
                            src={record.avatar}
                          />
                        </div>

                        {/* User Info */}
                        <div className="space-y-1">
                          <div className="font-medium text-base text-white leading-tight">
                            {record.name}
                          </div>
                          <div className="text-[#979797] text-xs">
                            @{record.email}
                          </div>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="text-[#979797] text-[10px] leading-relaxed">
                        {record.timeAgo}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
