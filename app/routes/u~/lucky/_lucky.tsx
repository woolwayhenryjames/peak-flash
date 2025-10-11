/** biome-ignore-all lint/style/noNestedTernary: not written by dev team */
import { useState } from "react";
import { redirect } from "react-router";
import ConnectWallet from "~/components/ConnectWallet";
import GlowContainer from "~/components/GlowContainer";
import InviteeCampaigns from "~/components/inviteeCampaigns";
import { cn } from "~/lib/utils";
import { getDbUser } from "~/services/auth.server";
import { logger } from "~/services/logger.server";
import { getUserInviteRecords } from "~/services/user.server";
import fb from "../invite/assets/fb.svg";
import ins from "../invite/assets/ins.png";
import starsIcon from "../invite/assets/stars.svg";
import tg from "../invite/assets/tg.svg";
import tiktok from "../invite/assets/tiktok.svg";
import whatsapp from "../invite/assets/whatsapp.png";
import x from "../invite/assets/x.svg";
import leaderboardBg from "../leaderboard/assets/bg.avif";
import type { Route } from "./+types/_lucky";

// API 接口类型定义
interface LuckyApiResponse {
  success: boolean;
  user_id: string;
  usdt: number;
  reward: number;
  claim: boolean;
}

// 调用Lucky API获取用户数据
async function fetchUserLuckyData(
  userId: string
): Promise<LuckyApiResponse | null> {
  try {
    console.log("[Lucky API] ===== 开始API调用 =====");
    const apiUrl = `https://api.distant.fun/api/user/${userId}`;
    console.log(`[Lucky API] API URL: ${apiUrl}`);
    console.log("[Lucky API] 用户ID类型:", typeof userId, "值:", userId);
    console.log("[Lucky API] 用户ID长度:", userId.length);
    logger.info(
      `[Lucky API] Fetching user data for ID: ${userId} from: ${apiUrl}`
    );

    console.log("[Lucky API] 发送请求中...");
    const startTime = Date.now();

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache", // 确保每次都获取最新数据
      },
    });

    const endTime = Date.now();
    console.log(`[Lucky API] 请求完成，耗时: ${endTime - startTime}ms`);
    console.log(
      `[Lucky API] 响应状态: ${response.status} ${response.statusText}`
    );
    logger.info(`[Lucky API] Response status: ${response.status}`);

    if (!response.ok) {
      console.log(
        `[Lucky API] ❌ 请求失败: ${response.status} ${response.statusText}`
      );
      logger.warn(
        `[Lucky API] Request failed: ${response.status} ${response.statusText}`
      );
      return null;
    }

    console.log("[Lucky API] 解析响应数据...");
    const data = (await response.json()) as LuckyApiResponse;
    console.log("[Lucky API] 原始响应数据:", data);
    logger.info(`[Lucky API] Raw response for user ${userId}:`, data);

    // 检查响应格式
    console.log("[Lucky API] 验证响应格式...");
    if (data && typeof data === "object" && "success" in data) {
      console.log("[Lucky API] 响应格式正确");
      if (data.success) {
        console.log("[Lucky API] ✅ API调用成功！");
        console.log(
          `[Lucky API] 用户 ${userId} 数据: USDT=${data.usdt}, Reward=${data.reward}`
        );
        logger.info(
          `[Lucky API] User ${userId} has USDT: ${data.usdt}, Reward: ${data.reward}`
        );
        return data;
      }
      console.log("[Lucky API] ❌ API返回 success: false");
      logger.warn(`[Lucky API] User ${userId} - API returned success: false`);
      return null;
    }
    console.log("[Lucky API] ❌ 响应格式无效:", data);
    logger.warn(`[Lucky API] User ${userId} - Invalid response format:`, data);
    return null;
  } catch (error) {
    console.log("[Lucky API] ❌ 请求异常:", error);
    console.log("[Lucky API] 错误类型:", typeof error);
    console.log(
      "[Lucky API] 错误信息:",
      error instanceof Error ? error.message : "Unknown error"
    );
    logger.error(`[Lucky API] Failed to fetch data for user ${userId}:`, {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return null;
  } finally {
    console.log("[Lucky API] ===== API调用结束 =====");
  }
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

const socialPlatforms = [
  { name: "Twitter", icon: x },
  { name: "TikTok", icon: tiktok },
  { name: "Telegram", icon: tg },
  { name: "WhatsApp", icon: whatsapp },
  { name: "Facebook", icon: fb },
  { name: "Instagram", icon: ins },
];

function calculateWelcomeGift(score: number | null | undefined) {
  if (score == null) {
    return null;
  }

  // 110分是获得奖励的门槛
  if (score >= 120) {
    return 3; // 120分及以上: 3u
  }
  if (score >= 110) {
    return 2; // 110-119.9分: 2u
  }

  return null; // 低于110分无奖励
}

export async function loader({ request }: Route.LoaderArgs) {
  console.log("[Lucky Page] ===== 开始加载页面 =====");
  logger.info(
    "[Lucky Page] Starting loader - fetching user data and API rewards"
  );

  console.log("[Lucky Page] 步骤1: 检查用户认证状态");
  const userResult = await getDbUser(request);

  if (userResult.isErr()) {
    throw redirect("/");
  }
  const user = userResult.value;
  console.log("[Lucky Page] ✅ 用户认证成功");
  console.log(`[Lucky Page] 用户ID: ${user.id}`);
  console.log("[Lucky Page] 用户详细信息:", {
    id: user.id,
    email: user.email,
    name: user.name,
    kindleScore: user.kindleScore,
  });
  logger.info(
    `[Lucky Page] User authenticated: ${user.id}, calling API for rewards data`
  );

  // 无论是否认证成功，都要调用API获取USDT和reward数据
  console.log("[Lucky Page] 步骤2: 开始调用API获取USDT和reward数据...");
  console.log(
    `[Lucky Page] 即将调用的API: https://api.distant.fun/api/user/${user.id}`
  );

  // 并行调用API和获取其他数据
  const [inviteRecords, luckyApiData] = await Promise.all([
    getUserInviteRecords(user.id),
    fetchUserLuckyData(user.id), // 始终调用API获取真实数据
  ]);

  console.log("[Lucky Page] 步骤3: 所有API调用完成");
  console.log("[Lucky Page] 邀请记录数量:", inviteRecords.length);
  console.log("[Lucky Page] API数据结果:", luckyApiData);

  // 使用API返回的真实数据
  const finalApiData = luckyApiData;

  // 记录API调用结果
  console.log("[Lucky Page] 步骤4: 分析API调用结果");
  if (luckyApiData) {
    console.log("[Lucky Page] ✅ API调用成功！");
    console.log("[Lucky Page] API返回数据:", {
      success: luckyApiData.success,
      user_id: luckyApiData.user_id,
      usdt: luckyApiData.usdt,
      reward: luckyApiData.reward,
    });
    logger.info(
      `[Lucky Page] API data received for user ${user.id}: USDT=${luckyApiData.usdt}, Reward=${luckyApiData.reward}`
    );
  } else {
    console.log("[Lucky Page] ❌ API调用失败或返回null");
    console.log(
      "[Lucky Page] 可能的原因: 网络错误、API服务不可用、用户ID不存在等"
    );
    logger.warn(
      `[Lucky Page] No API data received for user ${user.id}, API call may have failed`
    );
  }

  // 调试：检查最终返回的数据
  const finalData = {
    user,
    inviteRecords,
    apiData: finalApiData,
  };

  console.log("[Lucky Page] 步骤5: 最终返回数据");
  console.log("[Lucky Page] 最终数据:", {
    userId: finalData.user.id,
    hasApiData: !!finalData.apiData,
    apiUsdt: finalData.apiData?.usdt,
    apiReward: finalData.apiData?.reward,
    kindleScore: finalData.user.kindleScore,
  });

  logger.info("[Lucky Page] Final data being returned:", {
    userId: finalData.user.id,
    hasApiData: !!finalData.apiData,
    apiUsdt: finalData.apiData?.usdt,
    apiReward: finalData.apiData?.reward,
    kindleScore: finalData.user.kindleScore,
  });

  console.log("[Lucky Page] ===== 页面加载完成 =====");
  return {
    user,
    inviteRecords,
    apiData: finalApiData || undefined,
  };
}

export default function Lucky({
  loaderData: { user, inviteRecords, apiData },
}: Route.ComponentProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTikTok, setCopiedTikTok] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);

  // 调试信息
  console.log("[Lucky Component] ===== 组件渲染开始 =====");
  console.log("[Lucky Component] 接收到的API数据:", apiData);
  console.log("[Lucky Component] 接收到的用户数据:", user);
  console.log("[Lucky Component] API数据是否存在:", !!apiData);
  console.log("[Lucky Component] API Success状态:", apiData?.success);
  console.log("[Lucky Component] API USDT值:", apiData?.usdt);
  console.log("[Lucky Component] API Reward值:", apiData?.reward);
  console.log("[Lucky Component] 用户Kindle Score:", user?.kindleScore);

  const inviteLink = `${import.meta.env.VITE_ORIGIN || "http://localhost:5173"}invite/${user?.id}`;

  // 根据API数据或Kindle Score计算奖励金额
  let giftAmount = 0;
  let isEligibleForGift = false;
  let hasApiData = false; // 新增：标记是否有API数据
  let isClaimed = false; // 新增：标记奖励是否已发放

  console.log("[Lucky Component] 开始计算奖励金额...");
  if (apiData?.success) {
    // 使用API数据
    hasApiData = true;
    isClaimed = apiData.claim;
    console.log("[Lucky Component] ✅ 使用API数据");
    console.log(
      "[Lucky Component] API USDT:",
      apiData.usdt,
      "API Reward:",
      apiData.reward,
      "API Claim:",
      apiData.claim
    );
    giftAmount = apiData.usdt;
    isEligibleForGift = apiData.usdt > 0;
    console.log(
      "[Lucky Component] 计算结果 - giftAmount:",
      giftAmount,
      "isEligibleForGift:",
      isEligibleForGift,
      "isClaimed:",
      isClaimed
    );
  } else {
    // API没有数据时，使用Kindle Score计算USDT奖励
    hasApiData = false;
    isClaimed = false;
    console.log("[Lucky Component] ❌ API无数据，使用Kindle Score计算USDT奖励");
    console.log("[Lucky Component] Kindle Score:", user?.kindleScore);
    const calculatedGift = calculateWelcomeGift(user?.kindleScore);
    console.log("[Lucky Component] 计算的礼物金额:", calculatedGift);
    giftAmount = calculatedGift || 0;
    isEligibleForGift = calculatedGift != null && calculatedGift > 0;
    console.log(
      "[Lucky Component] 计算结果 - giftAmount:",
      giftAmount,
      "isEligibleForGift:",
      isEligibleForGift,
      "isClaimed:",
      isClaimed
    );
  }

  // 调试：显示最终计算结果
  console.log("[Lucky Component] ===== 最终计算结果 =====");
  console.log("[Lucky Component] 最终giftAmount:", giftAmount);
  console.log("[Lucky Component] 最终isEligibleForGift:", isEligibleForGift);
  console.log("[Lucky Component] 将显示在页面上的USDT金额:", giftAmount);

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
    <div className="min-h-screen bg-gradient-to-b from-[#02040d] via-[#1d131c] via-[31%] to-[#201819] to-[67%] pb-24">
      <div
        className="flex aspect-390/131 w-full items-center gap-3 bg-center bg-cover pl-10"
        style={{ backgroundImage: `url(${leaderboardBg})` }}
      >
        <div>
          <div className="font-medium text-2xl text-white tracking-tight">
            Lucky Center
          </div>
          <div className="font-normal text-[#d7d7d7] text-xs">
            Track your Kindle Score and invite bonuses
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-6 px-5 md:px-18">
        <div className="flex items-center justify-between rounded-xl border border-gray-700 p-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-600">
              <img
                alt={user?.name ? user.name.substring(0, 4).toUpperCase() : "U"}
                className="h-full w-full object-cover"
                src={user?.image || ""}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <h3 className="font-medium text-white">
                @{user?.email || "User"}
              </h3>
              {user?.kindleScore != null && (
                <div className="rounded bg-linear-26 from-[#7364ff] to-[#37bcff] px-3 py-0.5 font-medium text-black text-xs">
                  #{user?.rank || 0}
                </div>
              )}
            </div>
          </div>

          {user?.kindleScore != null ? (
            <div className="text-right">
              <p className="bg-linear-137 from-amber-400 to-blue-400 bg-clip-text font-semibold text-2xl text-transparent">
                {Math.round(user?.kindleScore || 0)}
              </p>
              <p className="text-gray-400 text-xs">KINDLE Score</p>
            </div>
          ) : (
            <div className="bg-linear-114 from-[#7465ff] from-[12.87%] to-[#38bdff] to-[51.12%] bg-clip-text font-semibold text-transparent text-xs">
              Grading
            </div>
          )}
        </div>

        {/* Registration Welcome Gift - CLOSED Section */}
        <div className="space-y-6 rounded-2xl border border-[#9ab2ff]/40 bg-gradient-to-br from-[#131d33] via-[#0f1525] to-[#080a12] p-8 shadow-[0_40px_110px_rgba(18,35,80,0.65)] backdrop-blur">
          <div className="space-y-4 text-white">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-semibold text-[#b8caff] text-xs uppercase tracking-[0.35em]">
              <span>Registration Welcome Gift - CLOSED!</span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-semibold text-lg text-white">
                  Thank you to all our early bird supporters!
                </p>
                <p className="text-[#cdd6f8] text-sm">
                  We will issue a <span className="font-semibold text-yellow-400">Peak Badge</span> to our <span className="font-semibold text-yellow-400">first 30K</span> registered users, unlocking exclusive benefits including boosted campaign rewards, airdrops, and more.
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold text-lg text-white">
                  Stay tuned!
                </p>
                <p className="text-[#cdd6f8] text-sm">
                  We're launching a brand new <span className="font-semibold text-yellow-400">Campaign Welcome Gift</span> with exciting rewards coming soon. Follow our announcements closely for details!
                </p>
              </div>
              
              <div className="mt-6">
                <a
                  href="/u/ascent"
                  className="inline-block w-full"
                >
                  <GlowContainer className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-[#dbe4ff] text-base transition hover:bg-white/10 w-full">
                    <span>Start</span>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </GlowContainer>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Bonus Section - 只在有奖励的情况下显示 */}
        {isEligibleForGift && (
          <div className="rounded-2xl border border-[#9ab2ff]/40 bg-gradient-to-br from-[#131d33] via-[#0f1525] to-[#080a12] p-10 shadow-[0_40px_110px_rgba(18,35,80,0.65)] backdrop-blur">
            <div className="space-y-4 text-white">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-semibold text-[#b8caff] text-xs uppercase tracking-[0.35em]">
                <span>Welcome Bonus</span>
              </div>
              {isClaimed ? (
                // 已发放
                <>
                  <div className="space-y-2">
                    <p className="font-semibold text-lg text-white">
                      Rewards Distributed!
                    </p>
                    <p className="text-[#cdd6f8] text-sm">
                      Your Kindle Score bonus has been successfully distributed to
                      your wallet.
                    </p>
                  </div>
                  <div className="mt-6 rounded-2xl border border-[#a6b9ff]/40 bg-white/10 px-6 py-4 text-[#dbe4ff] text-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[#afc0ff] text-xs uppercase tracking-[0.28em]">
                        Bonus Amount
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="whitespace-nowrap font-semibold text-white text-xl">
                          {giftAmount} USDT
                        </span>
                        <span className="rounded-full bg-green-500/20 px-2 py-1 font-medium text-green-400 text-xs">
                          ✓ Claimed
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 text-[#b8caff] text-xs">
                      Your rewards have been distributed to your bound EVM wallet
                      address.
                    </div>
                  </div>
                </>
              ) : (
                // 未发放
                <>
                  <div className="space-y-2">
                    <p className="font-semibold text-lg text-white">
                      Congratulations!
                    </p>
                    <p className="text-[#cdd6f8] text-sm">
                      Your Kindle Score has earned you an instant cash bonus.
                    </p>
                  </div>
                  <div className="mt-6 rounded-2xl border border-[#a6b9ff]/40 bg-white/10 px-6 py-4 text-[#dbe4ff] text-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[#afc0ff] text-xs uppercase tracking-[0.28em]">
                        Bonus Amount
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="whitespace-nowrap font-semibold text-white text-xl">
                          {giftAmount} USDT
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 text-[#b8caff] text-xs">
                      Your rewards will be distributed to your bound EVM wallet
                      address within 24 hours.
                    </div>
                  </div>
                </>
              )}

              {/* Connect Wallet Section */}
              <div className="mt-6">
                <ConnectWallet userWalletAddress={user?.walletAddress} />
              </div>
            </div>
          </div>
        )}

        <div className="h-px w-full bg-gray-600/30" />

        <div className="space-y-8 rounded-2xl border border-white/10 bg-[rgba(14,16,24,0.85)] p-8 shadow-[0_30px_80px_rgba(4,9,20,0.55)] backdrop-blur">
          <div className="space-y-3 text-white">
            <h2 className="text-[#8c96c7] text-sm uppercase tracking-[0.3em]">
              Referral Rewards
            </h2>
            <div className="space-y-3 text-[#cdd6f8] text-sm">
              <p>
                * Referral rewards from the registration welcome bonus have been fully distributed. Please check your <span className="font-semibold text-yellow-400">connected wallet</span> for transaction details.
              </p>
              <p>
                * We're launching a <span className="font-semibold text-yellow-400">new welcome bonus</span> <span className="font-semibold text-yellow-400">campaign</span> soon, where referral count will also be a key factor for reward distribution. Keep going!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Rewards Section - 只在有奖励的情况下显示 */}
            {apiData?.success && apiData.reward > 0 && (
              <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-[#cdd6f8] text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#98a4d8] text-xs uppercase tracking-[0.25em]">
                    Rewards
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-base text-white">
                      {apiData.reward} USDT
                    </span>
                    <span className="rounded-full bg-green-500/20 px-2 py-1 font-medium text-green-400 text-xs">
                      ✓ Claimed
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 text-white">
              <span className="text-[#8c96c7] text-xs uppercase tracking-[0.28em]">
                Your Referral Link
              </span>
              <div className="overflow-hidden break-all rounded-2xl border border-white/15 bg-black/25 p-4 text-[#dde4ff] text-sm">
                {inviteLink}
              </div>
              <button
                className="self-end"
                onClick={handleCopyLink}
                type="button"
              >
                <GlowContainer className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-[#dbe4ff] text-sm transition hover:bg-white/10">
                  <span>{copiedLink ? "Copied" : "Copy Link"}</span>
                </GlowContainer>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {socialPlatforms.map((platform) => {
              const isCopied =
                (platform.name === "TikTok" && copiedTikTok) ||
                (platform.name === "Instagram" && copiedInstagram);

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
                      {isCopied ? "Copied!" : platform.name}
                    </span>
                  </GlowContainer>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-7">
          <div className="flex items-center gap-1">
            <img alt="Stars icon" className="h-6 w-6" src={starsIcon} />
            <h3 className="font-semibold text-white text-xl">Invite Records</h3>
          </div>

          <div className="space-y-6">
            {inviteRecords.length === 0 ? (
              <div className="rounded-2xl border border-[#2d3338] bg-gradient-to-b from-[#2a2a2a] to-[#1a1616] p-8 text-center">
                <p className="text-[#979797] text-sm">
                  No invites yet. Share your link to start earning!
                </p>
              </div>
            ) : (
              inviteRecords.map((record: any) => (
                <div key={record.id}>
                  <div className="rounded-2xl border border-[#2d3338] bg-gradient-to-b from-[#2a2a2a] to-[#1a1616] p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#f9f9fb] text-lg">
                          <img
                            alt={`${record.name} avatar`}
                            className="h-full w-full object-cover"
                            src={record.avatar}
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="font-medium text-base text-white leading-tight">
                            {record.name}
                          </div>
                          <div className="text-[#979797] text-xs">
                            @{record.email}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <div className="text-[#979797] text-[10px] leading-relaxed">
                          {record.timeAgo}
                        </div>
                        <button
                          onClick={() =>
                            setExpandedUserId(
                              expandedUserId === record.id ? null : record.id
                            )
                          }
                          type="button"
                        >
                          <GlowContainer className="rounded-sm px-2 py-2">
                            <svg
                              className={cn(
                                "h-4 w-4 transition-transform",
                                expandedUserId === record.id ? "rotate-180" : ""
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
                  {expandedUserId === record.id && (
                    <InviteeCampaigns inviter={user} userId={record.id} />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
