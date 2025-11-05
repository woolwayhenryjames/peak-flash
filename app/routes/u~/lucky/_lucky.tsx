/** biome-ignore-all lint/style/noNestedTernary: not written by dev team */
import { useEffect, useState } from "react";
import { redirect } from "react-router";
import ConnectWallet from "~/components/ConnectWallet";
import GlowContainer from "~/components/GlowContainer";
import InviteeCampaigns from "~/components/inviteeCampaigns";
import { cn } from "~/lib/utils";
import { getDbUser } from "~/services/auth.server";
import { logger } from "~/services/logger.server";
import {
  getOrCreatePool,
  getOrCreateTreasureBox,
  getWeekStartDate,
  updateTreasureBoxProgress,
} from "~/services/treasurebox.server";
import { getUserInviteRecords } from "~/services/user.server";
import fb from "../invite/assets/fb.svg";
import ins from "../invite/assets/ins.png";
import tg from "../invite/assets/tg.svg";
import tiktok from "../invite/assets/tiktok.svg";
import whatsapp from "../invite/assets/whatsapp.png";
import x from "../invite/assets/x.svg";
import type { Route } from "./+types/_lucky";

// Helper component for Progress Bar
function ProgressBar({
  totalProgress,
  tier1Reached,
  tier2Reached,
  tier3Reached,
}: {
  totalProgress: number;
  tier1Reached: boolean;
  tier2Reached: boolean;
  tier3Reached: boolean;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm text-white">
          Current Progress
        </span>
        <span className="font-bold text-2xl text-white">
          {totalProgress.toFixed(1)}%
        </span>
      </div>

      <div className="relative pt-10">
        <div className="relative h-12 overflow-hidden rounded-full border-2 border-[#6CFBD3]/40 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] shadow-[0_0_30px_rgba(108,251,211,0.3)]">
          <div
            className="absolute h-full bg-gradient-to-r from-[#00d4aa] via-[#00e4c3] to-[#00f2dc] shadow-[0_0_25px_rgba(0,228,195,0.6)] transition-all duration-700 ease-out"
            style={{ width: `${totalProgress}%` }}
          >
            <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent" />
            <div className="absolute top-0 right-0 left-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            {[
              { pos: 80, reached: tier1Reached },
              { pos: 90, reached: tier2Reached },
              { pos: 100, reached: tier3Reached },
            ].map((tier) => (
              <div
                className="-translate-x-1/2 absolute z-10"
                key={tier.pos}
                style={{ left: `${tier.pos}%` }}
              >
                <div
                  className={cn(
                    "-top-9 -translate-x-1/2 absolute left-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 font-bold text-sm shadow-lg transition-all duration-300",
                    tier.reached
                      ? "border-2 border-green-400/60 bg-gradient-to-b from-green-900/90 to-green-950/90 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                      : "border-2 border-[#6CFBD3]/50 bg-gradient-to-b from-gray-900/90 to-black/90 text-[#6CFBD3] shadow-[0_0_10px_rgba(108,251,211,0.3)]"
                  )}
                >
                  {tier.pos}%
                </div>
                <div
                  className={cn(
                    "h-12 w-1 rounded-full transition-all duration-300",
                    tier.reached
                      ? "bg-gradient-to-b from-green-300 to-green-500 shadow-[0_0_15px_rgba(34,197,94,1)]"
                      : "bg-gradient-to-b from-[#6CFBD3] to-[#4DB8A3] shadow-[0_0_10px_rgba(108,251,211,0.6)]"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for Status Message
function StatusMessage({
  tier1Reached,
  tier2Reached,
  tier3Reached,
  totalProgress,
}: {
  tier1Reached: boolean;
  tier2Reached: boolean;
  tier3Reached: boolean;
  totalProgress: number;
}) {
  if (tier3Reached) {
    return (
      <div className="rounded-xl border border-green-500/50 bg-green-900/20 p-4 text-center">
        <p className="font-bold text-green-300 text-lg">
          🎉 Congratulations! 100% Unlocked!
        </p>
        <p className="mt-2 text-green-400 text-sm">
          You'll receive{" "}
          <span className="font-bold text-[#6CFBD3]">10 USDT</span> after the
          event ends
        </p>
      </div>
    );
  }

  if (tier2Reached) {
    return (
      <div className="rounded-xl border border-green-500/50 bg-green-900/20 p-4 text-center">
        <p className="font-bold text-green-300 text-lg">🎉 90% Unlocked!</p>
        <p className="mt-2 text-green-400 text-sm">
          You'll receive{" "}
          <span className="font-bold text-[#6CFBD3]">5 USDT</span>! Keep
          inviting to get 10 USDT!
        </p>
      </div>
    );
  }

  if (tier1Reached) {
    return (
      <div className="rounded-xl border border-green-500/50 bg-green-900/20 p-4 text-center">
        <p className="font-bold text-green-300 text-lg">🎉 80% Unlocked!</p>
        <p className="mt-2 text-green-400 text-sm">
          You'll receive{" "}
          <span className="font-bold text-[#6CFBD3]">1 USDT</span>! Keep
          inviting to earn more!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/20 bg-black/30 p-4 text-center">
      <p className="font-semibold text-lg text-white">Keep Going!</p>
      <p className="mt-2 text-[#C0C0C0] text-sm">
        {(80 - totalProgress).toFixed(1)}% more to unlock{" "}
        <span className="font-bold text-[#6CFBD3]">1 USDT</span> reward
      </p>
    </div>
  );
}

// Helper component for Invite Record Item
function InviteRecordItem({
  record,
  isExpanded,
  onToggle,
  inviterUser,
}: {
  record: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    timeAgo: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
  inviterUser: { id: string; name: string; email: string };
}) {
  return (
    <div>
      <div className="rounded-2xl border border-white/10 bg-linear-124 from-[#292929]/60 to-[#191616]/60 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gray-700">
              <img
                alt={`${record.name} avatar`}
                className="h-full w-full object-cover"
                height={44}
                src={record.avatar}
                width={44}
              />
            </div>

            <div className="space-y-1">
              <div className="font-medium text-base text-white leading-tight">
                {record.name}
              </div>
              <div className="text-[#A7A7A7] text-xs">@{record.email}</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="text-[#A7A7A7] text-[10px] leading-relaxed">
              {record.timeAgo}
            </div>
            <button onClick={onToggle} type="button">
              <GlowContainer className="rounded-sm px-2 py-2">
                <svg
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isExpanded ? "rotate-180" : ""
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
        </div>
      </div>
      {isExpanded && (
        <InviteeCampaigns inviter={inviterUser} userId={record.id} />
      )}
    </div>
  );
}

// Helper component for Social Share Buttons
function SocialShareButtons({
  onShare,
  copiedTikTok,
  copiedInstagram,
}: {
  onShare: (platform: string) => void;
  copiedTikTok: boolean;
  copiedInstagram: boolean;
}) {
  const socialPlatforms = [
    { name: "Twitter", icon: x },
    { name: "TikTok", icon: tiktok },
    { name: "Telegram", icon: tg },
    { name: "WhatsApp", icon: whatsapp },
    { name: "Facebook", icon: fb },
    { name: "Instagram", icon: ins },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {socialPlatforms.map((platform) => {
        const isCopied =
          (platform.name === "TikTok" && copiedTikTok) ||
          (platform.name === "Instagram" && copiedInstagram);

        return (
          <button
            key={platform.name}
            onClick={() => onShare(platform.name)}
            type="button"
          >
            <GlowContainer
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3"
              noShimmer
            >
              <img
                alt={`${platform.name} icon`}
                className="size-6"
                height={24}
                src={platform.icon}
                width={24}
              />
              <span className="font-normal text-sm text-white">
                {isCopied ? "Copied!" : platform.name}
              </span>
            </GlowContainer>
          </button>
        );
      })}
    </div>
  );
}

export function meta() {
  return [
    { title: "Lucky Center - Peak AI" },
    {
      name: "description",
      content:
        "Check your Kindle Score summary and manage your invite rewards in the Peak AI Lucky Center.",
    },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  console.log("[Lucky Page] ===== 开始加载页面 =====");
  logger.info("[Lucky Page] Starting loader - fetching user data");

  console.log("[Lucky Page] 步骤1: 检查用户认证状态");
  const userResult = await getDbUser(request);

  if (userResult.isErr()) {
    throw redirect("/");
  }
  const user = userResult.value;
  console.log("[Lucky Page] ✅ 用户认证成功");
  console.log(`[Lucky Page] 用户ID: ${user.id}`);

  console.log("[Lucky Page] 步骤2: 获取邀请记录...");
  const inviteRecords = await getUserInviteRecords(user.id);

  // 计算本周邀请数量
  const weekStartDate = getWeekStartDate();
  const weeklyInviteRecords = inviteRecords.filter((record) => {
    if (record.createdAt) {
      const recordDate = new Date(record.createdAt);
      return recordDate >= weekStartDate;
    }
    return false;
  });

  console.log("[Lucky Page] 步骤3: 获取或创建TreasureBox...");
  // 判断用户是否有SPARK Points
  const hasSparkPoints =
    user?.campaignUsers &&
    user.campaignUsers.length > 0 &&
    user.campaignUsers.some((cu) => cu.score > 0);

  // 获取或创建用户的TreasureBox
  const treasureBox = await getOrCreateTreasureBox(
    user.id,
    user.kindleScore,
    hasSparkPoints,
    weeklyInviteRecords.length
  );

  // 如果邀请数量有变化，更新进度
  if (treasureBox.weeklyInviteCount !== weeklyInviteRecords.length) {
    console.log("[Lucky Page] 邀请数量有变化，更新进度...");
    await updateTreasureBoxProgress(user.id, weeklyInviteRecords.length);
  }

  console.log("[Lucky Page] 步骤4: 获取奖池信息...");
  const pool = await getOrCreatePool();

  console.log("[Lucky Page] 步骤5: 最终返回数据");
  console.log("[Lucky Page] TreasureBox数据:", {
    isOpened: treasureBox.isOpened,
    currentProgress: treasureBox.currentProgress,
    rewardTier: treasureBox.rewardTier,
    rewardAmount: treasureBox.rewardAmount,
  });
  console.log("[Lucky Page] 奖池数据:", {
    totalPool: pool.totalPool,
    remainingPool: pool.remainingPool,
    isClosed: pool.isClosed,
  });

  logger.info("[Lucky Page] Final data being returned:", {
    userId: user.id,
    inviteRecordsCount: inviteRecords.length,
    weeklyInviteRecordsCount: weeklyInviteRecords.length,
    treasureBoxProgress: treasureBox.currentProgress,
    poolRemaining: pool.remainingPool,
  });

  console.log("[Lucky Page] ===== 页面加载完成 =====");
  return {
    user,
    inviteRecords,
    weeklyInviteRecords,
    treasureBox,
    pool,
  };
}

export default function Lucky({
  loaderData: { user, inviteRecords, weeklyInviteRecords, treasureBox, pool },
}: Route.ComponentProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTikTok, setCopiedTikTok] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
  const [eventRulesExpanded, setEventRulesExpanded] = useState(false);

  // 打开宝箱时调用API更新数据库，然后刷新页面
  const handleOpenTreasureBox = async () => {
    try {
      // 调用API更新数据库
      const response = await fetch("/api/treasurebox/open", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user?.id }),
      });

      if (response.ok) {
        // 刷新页面以获取最新数据
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to update treasure box status:", error);
    }
  };

  // 判断用户是否有SPARK Points - 参考_campaign.tsx的实现
  // 检查用户是否参与过任何campaign并获得了score
  const hasSparkPoints =
    user?.campaignUsers &&
    user.campaignUsers.length > 0 &&
    user.campaignUsers.some((cu) => cu.score > 0);

  // 计算用户总的SPARK Points
  const totalSparkPoints =
    user?.campaignUsers?.reduce((total, cu) => total + (cu.score || 0), 0) || 0;

  // 使用数据库中的进度数据
  const totalProgress = treasureBox.currentProgress;

  // 判断达成的档位
  const tier1Reached = totalProgress >= 80;
  const tier2Reached = totalProgress >= 90;
  const tier3Reached = totalProgress >= 100;

  // 调试信息 - 只在开发环境且首次加载时输出
  // biome-ignore lint/correctness/useExhaustiveDependencies: Debug logging only, intentionally run once on mount
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log("[Lucky Component] ===== 组件初次加载 =====");
      console.log("[Lucky Component] 接收到的用户数据:", user);
      console.log("[Lucky Component] 用户Kindle Score:", user?.kindleScore);
      console.log("[Lucky Component] 用户是否有SPARK Points:", hasSparkPoints);
      console.log("[Lucky Component] 用户总SPARK Points:", totalSparkPoints);

      // TreasureBox 数据
      console.log("\n[TreasureBox Data] ===== 宝箱数据 =====");
      console.log("[TreasureBox Data] 宝箱ID:", treasureBox.id);
      console.log("[TreasureBox Data] 是否已打开:", treasureBox.isOpened);
      console.log(
        "[TreasureBox Data] 初始进度:",
        `${treasureBox.initialProgress}%`
      );
      console.log(
        "[TreasureBox Data] 邀请加成:",
        `${treasureBox.inviteProgress}%`
      );
      console.log(
        "[TreasureBox Data] 总进度:",
        `${treasureBox.currentProgress}%`
      );
      console.log("[TreasureBox Data] 奖励档位:", treasureBox.rewardTier);
      console.log(
        "[TreasureBox Data] 奖励金额:",
        `${treasureBox.rewardAmount} USDT`
      );
      console.log(
        "[TreasureBox Data] 本周邀请数:",
        treasureBox.weeklyInviteCount
      );

      // 奖池数据
      console.log("\n[Pool Data] ===== 奖池数据 =====");
      console.log("[Pool Data] 总奖池:", `${pool.totalPool} USDT`);
      console.log("[Pool Data] 剩余奖池:", `${pool.remainingPool} USDT`);
      console.log("[Pool Data] 已分配:", `${pool.distributedAmount} USDT`);
      console.log("[Pool Data] 80%档位领取人数:", pool.tier1Count);
      console.log("[Pool Data] 90%档位领取人数:", pool.tier2Count);
      console.log("[Pool Data] 100%档位领取人数:", pool.tier3Count);
      console.log("[Pool Data] 是否关闭:", pool.isClosed);

      // Progress Details - 详细进度信息
      console.log("\n[Progress Details] ===== 进度详情 =====");
      console.log("[Progress Details] Base Progress: 45%");

      if (hasSparkPoints) {
        console.log("[Progress Details] SPARK Points Bonus: +5%");
        user?.campaignUsers
          ?.filter((cu) => cu.score > 0)
          .forEach((cu, index) => {
            console.log(
              `[Progress Details]   • Campaign ${index + 1}: ${Math.round(cu.score)} points`
            );
          });
      }

      if (user?.kindleScore && user.kindleScore > 0) {
        const kindleBonus = ((user.kindleScore / 100) * 15).toFixed(1);
        console.log(`[Progress Details] Kindle Score Bonus: +${kindleBonus}%`);
      }

      console.log(
        `[Progress Details] Referral Bonus: +${treasureBox.inviteProgress.toFixed(1)}% (${weeklyInviteRecords.length} users)`
      );

      console.log("\n[Progress Summary] ===== 进度汇总 =====");
      console.log("[Progress Summary] 总邀请记录数:", inviteRecords.length);
      console.log(
        "[Progress Summary] 本周邀请记录数:",
        weeklyInviteRecords.length
      );
      console.log(
        "[Progress Summary] 达成档位: 80%=" +
          tier1Reached +
          ", 90%=" +
          tier2Reached +
          ", 100%=" +
          tier3Reached
      );
    }
  }, []); // 空依赖数组 = 只在组件挂载时执行一次

  const inviteLink = `${import.meta.env.VITE_ORIGIN || "http://localhost:5173"}invite/${user?.id}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleSocialShare = (platform: string) => {
    const shareText =
      "Join me on PEAK AI and start earning rewards! Use my invite link:";
    const fullText = `${shareText} ${inviteLink}`;

    const shareUrls = {
      Twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}`,
      TikTok: inviteLink,
      Telegram: `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`,
      WhatsApp: `https://wa.me/?text=${encodeURIComponent(fullText)}`,
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(inviteLink)}`,
      Instagram: inviteLink,
    };

    const url = shareUrls[platform as keyof typeof shareUrls];

    if (platform === "TikTok") {
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          setCopiedTikTok(true);
          setTimeout(() => setCopiedTikTok(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy link:", err);
        });
    } else if (platform === "Instagram") {
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          setCopiedInstagram(true);
          setTimeout(() => setCopiedInstagram(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy link:", err);
        });
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:px-18">
      {/* Header Profile Info */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          {/* Avatar */}
          <div className="relative h-22 w-22">
            <div className="h-full w-full overflow-hidden rounded-full bg-gray-700">
              {user?.image ? (
                <img
                  alt={user?.name || "User"}
                  className="h-full w-full object-cover"
                  height={88}
                  src={user.image}
                  width={88}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#8080DA] to-[#9595FF] font-bold text-2xl text-white">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
            </div>
          </div>

          {/* User Info */}
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-lg text-white">
              {user?.name || "User"}
            </h1>
            <p className="font-normal text-sm text-white/80">
              @{user?.email || "user"}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="rounded-2xl border border-white/10 bg-linear-124 from-[#292929]/60 to-[#191616]/60 px-3 py-4 pt-1">
        {/* Logo placeholder */}
        <svg
          className="h-8 w-12"
          fill="none"
          viewBox="0 0 48 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>master card</title>
          <circle cx="25.0001" cy="15" fill="#681BF7" r="11.25" />
          <circle cx="11.25" cy="15" fill="#00EBC4" opacity="0.75" r="11.25" />
        </svg>

        {/* Score Stats */}
        <div className="mb-5 flex items-center justify-around">
          <div className="flex flex-col items-center gap-1">
            <span className="font-semibold text-2xl text-white">
              {user?.kindleScore != null
                ? Math.round(user.kindleScore)
                : "Grading"}
            </span>
            <span className="font-light text-[#C0C0C0] text-xs">
              KINDLE Score
            </span>
          </div>

          <div className="h-14 w-px bg-[#5D5D5D]" />

          <div className="flex flex-col items-center gap-1">
            <span className="font-semibold text-2xl text-white">
              {user?.kindleScore != null ? `#${user?.rank || 0}` : "N/A"}
            </span>
            <span className="font-light text-[#C0C0C0] text-xs">
              Global Rank
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 h-px w-75 bg-gray-600/50" />

      {/* PeakAI TreasureBox Event */}
      <div className="flex flex-col gap-7">
        <div className="flex gap-1">
          <h2 className="font-semibold text-white text-xl">
            🎁 PeakAI TreasureBox
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-linear-124 from-[#292929]/60 to-[#191616]/60 p-6">
          <div className="space-y-6 text-white">
            {/* Event Info */}
            <div className="space-y-3 text-center">
              <p className="text-[#C0C0C0] text-sm">
                Progressive Treasure Box Reward Event
              </p>
            </div>

            {/* Event Info */}
            <div className="rounded-xl border border-white/20 bg-black/30 p-4">
              <div className="space-y-3 text-center">
                <p className="font-bold text-sm text-white">
                  Invite new users to register and increase your treasure box
                  progress
                </p>

                {/* Rewards Info - No Border */}
                <div className="space-y-2 py-2">
                  <p className="font-semibold text-[#6CFBD3] text-xs uppercase tracking-wider">
                    Rewards
                  </p>
                  <div className="flex justify-center gap-4 text-xs">
                    <span className="text-white">
                      80% ={" "}
                      <span className="font-bold text-[#6CFBD3]">1 USDT</span>
                    </span>
                    <span className="text-white">
                      90% ={" "}
                      <span className="font-bold text-[#6CFBD3]">5 USDT</span>
                    </span>
                    <span className="text-white">
                      100% ={" "}
                      <span className="font-bold text-[#6CFBD3]">10 USDT</span>
                    </span>
                  </div>
                </div>

                <p className="text-[#A7A7A7] text-xs">
                  Event Period: Nov 3, 2025 - Nov 9, 2025 (UTC)
                </p>
                <p className="text-[#A7A7A7] text-xs">
                  Draw Date: November 10, 2025 (UTC)
                </p>

                {/* Prize Pool Info */}
                <div className="mt-4 border-white/10 border-t pt-3">
                  <p className="mb-2 text-sm text-white">
                    💰 Total Prize Pool:{" "}
                    <span className="font-bold text-[#6CFBD3] text-lg">
                      {pool.remainingPool.toFixed(0)}
                    </span>{" "}
                    /{" "}
                    <span className="text-white/60">{pool.totalPool} USDT</span>
                  </p>
                  {pool.isClosed ? (
                    <p className="font-medium text-red-400 text-xs">
                      🔒 Pool has been depleted - Event closed
                    </p>
                  ) : (
                    <p className="font-medium text-xs text-yellow-400">
                      ⚠️ Pool closes once depleted - Join now!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Treasure Box Display */}
            <div className="relative">
              {treasureBox.isOpened ? (
                <div className="space-y-6">
                  <ProgressBar
                    tier1Reached={tier1Reached}
                    tier2Reached={tier2Reached}
                    tier3Reached={tier3Reached}
                    totalProgress={totalProgress}
                  />
                  <StatusMessage
                    tier1Reached={tier1Reached}
                    tier2Reached={tier2Reached}
                    tier3Reached={tier3Reached}
                    totalProgress={totalProgress}
                  />
                </div>
              ) : (
                <button
                  className="w-full"
                  onClick={handleOpenTreasureBox}
                  type="button"
                >
                  <div className="group relative rounded-xl border border-white/20 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/10">
                    <div className="space-y-4 text-center">
                      <div className="text-6xl">🎁</div>
                      <p className="font-bold text-lg text-white">
                        Open Your Exclusive Treasure Box
                      </p>
                      <p className="text-[#C0C0C0] text-sm">
                        Unlock your reward progress
                      </p>
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Event Rules */}
            <div className="space-y-3">
              <button
                className="w-full rounded-xl border border-white/20 bg-black/30 p-4 transition hover:border-white/30 hover:bg-black/40"
                onClick={() => setEventRulesExpanded(!eventRulesExpanded)}
                type="button"
              >
                <div className="flex items-center justify-between">
                  <p className="text-left font-semibold text-white">
                    Event Rules
                  </p>
                  <GlowContainer className="rounded-sm px-2 py-2">
                    <svg
                      className={cn(
                        "h-4 w-4 transition-transform",
                        eventRulesExpanded ? "rotate-180" : ""
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
                </div>
              </button>

              {eventRulesExpanded && (
                <div className="rounded-xl border border-white/20 bg-black/30 p-4 text-[#A7A7A7] text-sm">
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      Each user has an exclusive treasure box with a base
                      progress of 45%
                    </li>
                    <li>
                      If you've participated in Campaigns and earned SPARK
                      Points, you get an additional 5% bonus
                    </li>
                    <li>
                      Kindle Score Bonus: Get up to 15% bonus based on your
                      Kindle Score (progress gained from Kindle Score capped at
                      10.5%)
                    </li>
                    <li>
                      After the event ends, USDT rewards will be automatically
                      distributed to your connected wallet
                    </li>
                    <li>
                      Limited pool of 200 USDT - First come, first served until
                      depleted
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-4 h-px w-75 bg-gray-600/50" />

      {/* Referral Section */}
      <div className="flex flex-col gap-7">
        <div className="flex gap-1">
          <h2 className="font-semibold text-white text-xl">Referral Link</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-linear-124 from-[#292929]/60 to-[#191616]/60 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 text-white">
              <span className="text-[#A7A7A7] text-xs uppercase tracking-[0.28em]">
                Your Referral Link
              </span>
              <div className="overflow-hidden break-all rounded-xl border border-white/15 bg-black/25 p-4 text-[#dde4ff] text-sm">
                {inviteLink}
              </div>
              <button
                className="self-end"
                onClick={handleCopyLink}
                type="button"
              >
                <GlowContainer className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-sm text-white transition hover:bg-white/10">
                  <span>{copiedLink ? "Copied" : "Copy Link"}</span>
                </GlowContainer>
              </button>
            </div>

            <SocialShareButtons
              copiedInstagram={copiedInstagram}
              copiedTikTok={copiedTikTok}
              onShare={handleSocialShare}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto my-4 h-px w-75 bg-gray-600/50" />

      {/* Invite Records Section */}
      <div className="flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <h2 className="font-semibold text-white text-xl">
              Invite Records (This Week)
            </h2>
          </div>
          <div className="text-[#A7A7A7] text-sm">
            {weeklyInviteRecords.length} / {inviteRecords.length} users
          </div>
        </div>

        <div className="space-y-4">
          {weeklyInviteRecords.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-linear-124 from-[#292929]/60 to-[#191616]/60 p-8 text-center">
              <p className="text-[#A7A7A7] text-sm">
                No invites this week. Share your link to start inviting!
              </p>
            </div>
          ) : (
            weeklyInviteRecords.map((record) => (
              <InviteRecordItem
                inviterUser={user}
                isExpanded={expandedUserId === record.id}
                key={record.id}
                onToggle={() =>
                  setExpandedUserId(
                    expandedUserId === record.id ? null : record.id
                  )
                }
                record={record}
              />
            ))
          )}
        </div>
      </div>

      <div className="mx-auto my-4 h-px w-75 bg-gray-600/50" />

      {/* Connect Wallet Section - Moved to Bottom */}
      <div className="flex flex-col gap-7">
        <div className="flex gap-1">
          <h2 className="font-semibold text-white text-xl">Connect Wallet</h2>
        </div>
        <ConnectWallet userWalletAddress={user?.walletAddress} />
      </div>
    </div>
  );
}
