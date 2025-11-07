import mysql from 'mysql2/promise';
import { randomUUID } from 'crypto';

const connection = await mysql.createConnection({
  host: 'api.infinitytest.cc',
  port: 3306,
  user: 'root',
  password: 'mfB8rgKkGbh3jfx#',
  database: 'content_score'
});

// 生成随机数据的辅助函数
function randomScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomString(length = 10) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function createTestUser() {
  console.log('🌱 开始创建测试用户...\n');

  try {
    // 首先验证邀请人是否存在
    const [inviter] = await connection.query(
      'SELECT * FROM User WHERE id = ?',
      ['qm2biJuxTwy7EIU3SBTI0AyvrzADr4Wx']
    );

    if (inviter.length === 0) {
      console.log('⚠️  警告: 邀请人ID不存在，但仍会创建用户');
    } else {
      console.log(`✅ 找到邀请人: ${inviter[0].name} (${inviter[0].email})`);
    }

    // 生成新用户数据
    const newUserId = randomUUID();
    const now = new Date();
    const email = `lwltest01_${randomString(6)}@test.com`;
    const imageUrl = `https://i.pravatar.cc/150?img=${randomScore(1, 70)}`;

    // 插入新用户
    await connection.query(
      `INSERT INTO User (
        id, createdAt, updatedAt, name, email, emailVerified, image,
        kindleScore, inviterId, isBusiness, isAdmin, firstComerBadge,
        rank, walletAddress, bio, followerCount, followingCount,
        isStar, likeCount, visibleVideosCount, twitterHandle
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        newUserId,
        now,
        now,
        'LWLtest01',
        email,
        1, // emailVerified = true
        imageUrl,
        randomScore(0, 1000), // kindleScore
        'qm2biJuxTwy7EIU3SBTI0AyvrzADr4Wx', // inviterId
        0, // isBusiness = false
        0, // isAdmin = false
        0, // firstComerBadge = false
        randomScore(100, 10000), // rank
        null, // walletAddress
        '这是测试用户LWLtest01的个人简介', // bio
        randomScore(100, 50000), // followerCount
        randomScore(50, 2000), // followingCount
        0, // isStar = false
        randomScore(1000, 500000), // likeCount
        randomScore(10, 300), // visibleVideosCount
        '@lwltest01' // twitterHandle
      ]
    );

    // 查询刚创建的用户
    const [newUser] = await connection.query(
      'SELECT * FROM User WHERE id = ?',
      [newUserId]
    );

    console.log('\n✅ 测试用户创建成功！\n');
    console.log('📋 用户信息:');
    const user = newUser[0];
    console.log(`  ID: ${user.id}`);
    console.log(`  姓名: ${user.name}`);
    console.log(`  邮箱: ${user.email}`);
    console.log(`  邀请人ID: ${user.inviterId}`);
    console.log(`  创建时间: ${user.createdAt}`);
    console.log(`  积分: ${user.kindleScore}`);
    console.log(`  排名: ${user.rank}`);
    console.log(`  粉丝数: ${user.followerCount}`);
    console.log(`  关注数: ${user.followingCount}`);
    console.log(`  获赞数: ${user.likeCount}`);
    console.log(`  视频数: ${user.visibleVideosCount}`);
    console.log(`  Twitter: ${user.twitterHandle}`);
    console.log(`  头像: ${user.image}`);

    console.log('\n💡 提示: 您可以在 Prisma Studio (http://localhost:5555) 中查看此用户');

  } catch (error) {
    console.error('❌ 创建用户时出错:', error.message);
    if (error.code === 'ER_NO_REFERENCED_ROW_2') {
      console.error('   原因: 邀请人ID不存在或外键约束失败');
    }
  } finally {
    await connection.end();
  }
}

createTestUser();
