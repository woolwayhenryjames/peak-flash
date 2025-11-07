import { PrismaClient } from './.prisma/main/client/index.js';

const prisma = new PrismaClient();

// 生成随机字符串
function randomString(length = 10) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 生成随机日期
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// 生成随机分数
function randomScore(min = 0, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seedData() {
  console.log('🌱 开始生成假数据...\n');

  try {
    // 1. 创建测试用户
    console.log('👤 创建用户...');
    const users = [];
    for (let i = 0; i < 10; i++) {
      const user = await prisma.user.create({
        data: {
          name: `测试用户${i + 1}`,
          email: `test${i + 1}_${randomString(5)}@example.com`,
          emailVerified: Math.random() > 0.5,
          image: `https://i.pravatar.cc/150?img=${i + 1}`,
          kindleScore: randomScore(0, 5000),
          isBusiness: i < 2, // 前2个用户是企业用户
          isAdmin: i === 0, // 第1个用户是管理员
          firstComerBadge: i < 5, // 前5个用户有先行者徽章
          bio: `这是测试用户${i + 1}的个人简介`,
          followerCount: randomScore(100, 100000),
          followingCount: randomScore(50, 5000),
          isStar: i < 3, // 前3个用户是明星用户
          likeCount: randomScore(1000, 1000000),
          visibleVideosCount: randomScore(10, 500),
          twitterHandle: `@test_user_${i + 1}`,
          rank: i + 1,
        },
      });
      users.push(user);
      console.log(`  ✓ 创建用户: ${user.name} (${user.email})`);
    }

    // 2. 创建邀请关系
    console.log('\n🔗 创建邀请关系...');
    for (let i = 0; i < 5; i++) {
      await prisma.user.update({
        where: { id: users[i + 5].id },
        data: { inviterId: users[i].id },
      });
      console.log(`  ✓ ${users[i].name} 邀请了 ${users[i + 5].name}`);
    }

    // 3. 创建活动
    console.log('\n📢 创建活动...');
    const campaigns = [];
    const now = new Date();
    
    for (let i = 0; i < 3; i++) {
      const startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 7天前
      const endDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30天后
      
      const campaign = await prisma.campaign.create({
        data: {
          name: `测试活动 ${i + 1}`,
          description: `这是第 ${i + 1} 个测试活动的描述，用于测试产品功能。`,
          startDate,
          endDate,
          image: `https://picsum.photos/800/400?random=${i + 1}`,
          poolSize: [1000, 5000, 10000][i],
          poolUnit: ['USDT', 'ETH', 'BTC'][i],
          order: i,
          joinRequirement: JSON.stringify({
            minFollowers: [100, 500, 1000][i],
            minVideos: [1, 5, 10][i],
          }),
        },
      });
      campaigns.push(campaign);
      console.log(`  ✓ 创建活动: ${campaign.name} (奖池: ${campaign.poolSize} ${campaign.poolUnit})`);
    }

    // 4. 创建活动用户关系
    console.log('\n🎯 添加用户到活动...');
    for (const campaign of campaigns) {
      // 为每个活动随机添加 5-8 个用户
      const userCount = Math.floor(Math.random() * 4) + 5;
      const shuffledUsers = [...users].sort(() => Math.random() - 0.5).slice(0, userCount);
      
      for (const user of shuffledUsers) {
        const baseScore = randomScore(100, 5000);
        const bonusScore = randomScore(0, 1000);
        const videoCount = Math.floor(Math.random() * 50) + 1;
        
        await prisma.campaignUser.create({
          data: {
            userId: user.id,
            campaignId: campaign.id,
            score: baseScore + bonusScore,
            baseScore,
            bonusScore,
            videoCount,
          },
        });
        console.log(`  ✓ ${user.name} 加入 ${campaign.name} (分数: ${baseScore + bonusScore})`);
      }
    }

    // 5. 创建一些会话
    console.log('\n🔐 创建会话...');
    for (let i = 0; i < 5; i++) {
      const user = users[i];
      await prisma.session.create({
        data: {
          id: randomString(32),
          token: randomString(64),
          userId: user.id,
          expiresAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // 7天后过期
          createdAt: now,
          updatedAt: now,
          ipAddress: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        },
      });
      console.log(`  ✓ 为 ${user.name} 创建会话`);
    }

    console.log('\n✅ 假数据生成完成！\n');
    console.log('📊 统计信息:');
    console.log(`  - 用户数: ${users.length}`);
    console.log(`  - 活动数: ${campaigns.length}`);
    console.log(`  - 会话数: 5`);
    console.log('\n💡 提示: 访问 http://localhost:5555 打开 Prisma Studio 查看数据');

  } catch (error) {
    console.error('❌ 生成数据时出错:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// 询问是否清空现有数据
console.log('⚠️  注意: 此脚本将在数据库中添加测试数据\n');
console.log('是否继续？[按 Ctrl+C 取消，或等待 3 秒自动继续...]');

setTimeout(() => {
  seedData();
}, 3000);

