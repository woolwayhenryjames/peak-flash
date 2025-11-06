import { db as prisma } from "~/services/db.server";

/**
 * 获取本周开始日期（UTC周一 00:00:00）
 */
export function getWeekStartDate(): Date {
  const now = new Date();
  const dayOfWeek = now.getUTCDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 周一为起始日

  const weekStart = new Date(now);
  weekStart.setUTCDate(now.getUTCDate() - diff);
  weekStart.setUTCHours(0, 0, 0, 0);

  return weekStart;
}

/**
 * 计算初始进度（始终假设有SPARK Points）
 * - Base: 45%
 * - SPARK Points: +5% (计算时总是加上，即使用户没有)
 * - Kindle Score: 根据分数给予0-15%加成（最多获得10.5%）
 */
function calculateInitialProgress(
  kindleScore: number | null,
  _hasSparkPoints: boolean
): number {
  let progress = 45; // Base progress

  // 计算时总是加上SPARK Points加成（即使用户实际没有）
  progress += 5;

  // Kindle Score bonus (up to 15%, but capped at contributing 10.5% to total)
  if (kindleScore && kindleScore > 0) {
    const kindleBonus = Math.min((kindleScore / 100) * 15, 10.5);
    progress += kindleBonus;
  }

  return progress; // 最高60.5%
}

/**
 * 计算邀请进度加成（递减机制）
 * - 进度 < 70%: 每人 +3%
 * - 70% ≤ 进度 < 80%: 每人 +2%
 * - 80% ≤ 进度 < 90%: 每人 +0.2%
 * - 进度 ≥ 90%: 每人 +0.15%
 */
function calculateInviteProgress(
  initialProgress: number,
  weeklyInviteCount: number
): number {
  let inviteProgress = 0;
  let currentProgress = initialProgress;

  // 逐个计算每个邀请带来的进度，根据当前进度递减
  for (let i = 0; i < weeklyInviteCount; i++) {
    let increaseAmount = 0;

    if (currentProgress < 70) {
      increaseAmount = 3; // 前期：每人3%
    } else if (currentProgress < 80) {
      increaseAmount = 2; // 中期：每人2%
    } else if (currentProgress < 90) {
      increaseAmount = 0.2; // 后期：每人0.2%
    } else {
      increaseAmount = 0.15; // 冲刺：每人0.15%
    }

    inviteProgress += increaseAmount;
    currentProgress += increaseAmount;
  }

  return Number.parseFloat(inviteProgress.toFixed(2));
}

/**
 * 根据总进度确定奖励档位和金额
 */
function calculateReward(totalProgress: number): {
  tier: number | null;
  amount: number;
} {
  if (totalProgress >= 100) {
    return { tier: 3, amount: 10 };
  }
  if (totalProgress >= 90) {
    return { tier: 2, amount: 5 };
  }
  if (totalProgress >= 80) {
    return { tier: 1, amount: 1 };
  }
  return { tier: null, amount: 0 };
}

/**
 * 获取或创建用户的TreasureBox
 */
export async function getOrCreateTreasureBox(
  userId: string,
  kindleScore: number | null,
  hasSparkPoints: boolean,
  weeklyInviteCount: number
) {
  // 尝试获取现有的 TreasureBox
  let treasureBox = await prisma.treasureBox.findUnique({
    where: { userId },
  });

  if (!treasureBox) {
    // 如果不存在，创建新的
    const initialProgress = calculateInitialProgress(
      kindleScore,
      hasSparkPoints
    );
    const inviteProgress = calculateInviteProgress(
      initialProgress,
      weeklyInviteCount
    );

    // 计算总进度
    let currentProgress = initialProgress + inviteProgress;

    // 如果用户实际没有SPARK Points，减去5%
    if (!hasSparkPoints) {
      currentProgress -= 5;
    }

    // 限制在100%以内
    currentProgress = Math.min(currentProgress, 100);
    currentProgress = Number.parseFloat(currentProgress.toFixed(2));

    const reward = calculateReward(currentProgress);

    treasureBox = await prisma.treasureBox.create({
      data: {
        userId,
        initialProgress: Number.parseFloat(initialProgress.toFixed(2)),
        inviteProgress: Number.parseFloat(inviteProgress.toFixed(2)),
        currentProgress,
        weeklyInviteCount,
        rewardTier: reward.tier,
        rewardAmount: reward.amount,
      },
    });
  }

  return treasureBox;
}

/**
 * 更新TreasureBox的邀请进度
 * 当用户达到奖励门槛时，立即从奖池扣除并预留奖励
 */
export async function updateTreasureBoxProgress(
  userId: string,
  weeklyInviteCount: number
) {
  const treasureBox = await prisma.treasureBox.findUnique({
    where: { userId },
  });

  if (!treasureBox) {
    throw new Error("TreasureBox not found");
  }

  // 获取用户信息以判断是否有SPARK Points
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { campaignUsers: true },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const hasSparkPoints = user.campaignUsers.some(
    (cu: { score: number }) => cu.score > 0
  );
  const initialProgress = calculateInitialProgress(
    user.kindleScore,
    hasSparkPoints
  );
  const inviteProgress = calculateInviteProgress(
    initialProgress,
    weeklyInviteCount
  );

  // 计算总进度
  let currentProgress = initialProgress + inviteProgress;

  // 如果用户实际没有SPARK Points，减去5%
  if (!hasSparkPoints) {
    currentProgress -= 5;
  }

  // 限制在100%以内
  currentProgress = Math.min(currentProgress, 100);
  currentProgress = Number.parseFloat(currentProgress.toFixed(2));

  const reward = calculateReward(currentProgress);

  // 🔥 新增逻辑：如果用户达到新的奖励档位，且还没领取过，立即从奖池扣除
  const oldRewardAmount = treasureBox.rewardAmount || 0;
  const newRewardAmount = reward.amount;
  const rewardDifference = newRewardAmount - oldRewardAmount;

  // 如果奖励增加了，且用户还没领取过，从奖池扣除差额
  if (rewardDifference > 0 && !treasureBox.isClaimed) {
    const pool = await getOrCreatePool();

    // 检查奖池是否足够
    if (pool.isClosed || pool.remainingPool < rewardDifference) {
      // 奖池不足，不更新奖励
      console.log(
        `[updateTreasureBoxProgress] Pool insufficient for user ${userId}, cannot allocate ${rewardDifference} USDT`
      );

      return await prisma.treasureBox.update({
        where: { userId },
        data: {
          initialProgress: Number.parseFloat(initialProgress.toFixed(2)),
          inviteProgress: Number.parseFloat(inviteProgress.toFixed(2)),
          currentProgress,
          weeklyInviteCount,
          // 保持原有奖励不变
        },
      });
    }

    // 奖池足够，扣除差额并更新
    await prisma.pool.update({
      where: { id: pool.id },
      data: {
        remainingPool: pool.remainingPool - rewardDifference,
        distributedAmount: pool.distributedAmount + rewardDifference,
        isClosed: pool.remainingPool - rewardDifference <= 0,
        // 更新对应档位计数
        ...(reward.tier === 1 && oldRewardAmount === 0
          ? { tier1Count: pool.tier1Count + 1 }
          : {}),
        ...(reward.tier === 2 && treasureBox.rewardTier !== 2
          ? { tier2Count: pool.tier2Count + 1 }
          : {}),
        ...(reward.tier === 3 && treasureBox.rewardTier !== 3
          ? { tier3Count: pool.tier3Count + 1 }
          : {}),
      },
    });

    console.log(
      `[updateTreasureBoxProgress] Allocated ${rewardDifference} USDT from pool for user ${userId}`
    );
  }

  return await prisma.treasureBox.update({
    where: { userId },
    data: {
      initialProgress: Number.parseFloat(initialProgress.toFixed(2)),
      inviteProgress: Number.parseFloat(inviteProgress.toFixed(2)),
      currentProgress,
      weeklyInviteCount,
      rewardTier: reward.tier,
      rewardAmount: reward.amount,
    },
  });
}

/**
 * 打开TreasureBox
 * 仅用于改变宝箱的打开状态，不进行奖池扣除
 * 奖池扣除在 updateTreasureBoxProgress 中完成
 */
export async function openTreasureBox(userId: string) {
  const treasureBox = await prisma.treasureBox.findUnique({
    where: { userId },
  });

  if (!treasureBox) {
    throw new Error("TreasureBox not found");
  }

  // 如果已经打开过，直接返回
  if (treasureBox.isOpened) {
    return treasureBox;
  }

  // 仅更新宝箱状态为已打开，不进行奖励分配
  return await prisma.treasureBox.update({
    where: { userId },
    data: {
      isOpened: true,
    },
  });
}

/**
 * 获取或创建奖池
 */
export async function getOrCreatePool() {
  // 尝试获取现有的Pool（通常只有一个全局Pool）
  let pool = await prisma.pool.findFirst();

  if (!pool) {
    // 如果不存在，创建新的
    pool = await prisma.pool.create({
      data: {
        totalPool: 200,
        remainingPool: 200,
        distributedAmount: 0,
        tier1Count: 0,
        tier2Count: 0,
        tier3Count: 0,
        isClosed: false,
      },
    });
  }

  return pool;
}

/**
 * 从奖池中分配奖励
 */
export async function distributeReward(
  userId: string,
  tier: number,
  amount: number
): Promise<{ success: boolean; message: string }> {
  const pool = await getOrCreatePool();

  // 检查奖池是否已关闭或余额不足
  if (pool.isClosed || pool.remainingPool < amount) {
    return {
      success: false,
      message: "Pool is closed or insufficient balance",
    };
  }

  // 更新TreasureBox为已领取
  await prisma.treasureBox.update({
    where: { userId },
    data: {
      isClaimed: true,
      claimedAt: new Date(),
    },
  });

  // 更新奖池
  const remainingPool = pool.remainingPool - amount;
  const distributedAmount = pool.distributedAmount + amount;
  const isClosed = remainingPool <= 0;

  const tierUpdate: {
    remainingPool: number;
    distributedAmount: number;
    isClosed: boolean;
    tier1Count?: number;
    tier2Count?: number;
    tier3Count?: number;
  } = {
    remainingPool,
    distributedAmount,
    isClosed,
  };

  // 增加对应档位的计数
  if (tier === 1) {
    tierUpdate.tier1Count = pool.tier1Count + 1;
  } else if (tier === 2) {
    tierUpdate.tier2Count = pool.tier2Count + 1;
  } else if (tier === 3) {
    tierUpdate.tier3Count = pool.tier3Count + 1;
  }

  await prisma.pool.update({
    where: { id: pool.id },
    data: tierUpdate,
  });

  return {
    success: true,
    message: `Successfully distributed ${amount} USDT`,
  };
}
