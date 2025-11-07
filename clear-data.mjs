import { PrismaClient } from './.prisma/main/client/index.js';

const prisma = new PrismaClient();

async function clearData() {
  console.log('🗑️  开始清空测试数据...\n');

  try {
    // 按照依赖顺序删除数据
    console.log('删除会话...');
    const deletedSessions = await prisma.session.deleteMany({});
    console.log(`  ✓ 删除了 ${deletedSessions.count} 个会话`);

    console.log('删除账户...');
    const deletedAccounts = await prisma.account.deleteMany({});
    console.log(`  ✓ 删除了 ${deletedAccounts.count} 个账户`);

    console.log('删除活动用户关系...');
    const deletedCampaignUsers = await prisma.campaignUser.deleteMany({});
    console.log(`  ✓ 删除了 ${deletedCampaignUsers.count} 个活动用户关系`);

    console.log('删除活动...');
    const deletedCampaigns = await prisma.campaign.deleteMany({});
    console.log(`  ✓ 删除了 ${deletedCampaigns.count} 个活动`);

    console.log('删除用户...');
    const deletedUsers = await prisma.user.deleteMany({});
    console.log(`  ✓ 删除了 ${deletedUsers.count} 个用户`);

    console.log('删除验证信息...');
    const deletedVerifications = await prisma.verification.deleteMany({});
    console.log(`  ✓ 删除了 ${deletedVerifications.count} 个验证信息`);

    console.log('\n✅ 数据清空完成！\n');

  } catch (error) {
    console.error('❌ 清空数据时出错:', error);
  } finally {
    await prisma.$disconnect();
  }
}

console.log('⚠️  警告: 此操作将清空所有数据！\n');
console.log('是否继续？[按 Ctrl+C 取消，或等待 3 秒自动继续...]');

setTimeout(() => {
  clearData();
}, 3000);







