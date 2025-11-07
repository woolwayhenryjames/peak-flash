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

async function create100Jen2TestUsers() {
  console.log('🌱 开始批量创建100个jen2test用户...\n');

  try {
    // 首先验证邀请人是否存在
    const [inviter] = await connection.query(
      'SELECT * FROM User WHERE id = ?',
      ['wDDPWf6NdCOPBc9LR8znu5cClfCr5ikq']
    );

    if (inviter.length === 0) {
      console.log('⚠️  警告: 邀请人ID不存在');
      return;
    } else {
      console.log(`✅ 找到邀请人: ${inviter[0].name} (${inviter[0].email})\n`);
    }

    // 设置注册时间为2025年11月5日
    const registrationDate = new Date('2025-11-05T10:00:00+08:00');
    const createdUsers = [];
    let successCount = 0;
    let errorCount = 0;

    console.log('开始创建用户（每10个显示一次进度）...\n');

    // 创建100个用户（jen2test51 到 jen2test150）
    for (let i = 51; i <= 150; i++) {
      try {
        const userName = `jen2test${i.toString().padStart(3, '0')}`;
        const newUserId = randomUUID();
        const email = `jen2test${i.toString().padStart(3, '0')}_${randomString(6)}@test.com`;
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
            registrationDate,
            registrationDate,
            userName,
            email,
            1, // emailVerified = true
            imageUrl,
            randomScore(0, 1000), // kindleScore
            'wDDPWf6NdCOPBc9LR8znu5cClfCr5ikq', // inviterId
            0, // isBusiness = false
            0, // isAdmin = false
            0, // firstComerBadge = false
            randomScore(100, 10000), // rank
            null, // walletAddress
            `这是测试用户${userName}的个人简介`, // bio
            randomScore(100, 50000), // followerCount
            randomScore(50, 2000), // followingCount
            0, // isStar = false
            randomScore(1000, 500000), // likeCount
            randomScore(10, 300), // visibleVideosCount
            `@${userName.toLowerCase()}` // twitterHandle
          ]
        );

        createdUsers.push({
          id: newUserId,
          name: userName,
          email: email
        });

        successCount++;
        
        // 每10个用户显示一次进度
        if (successCount % 10 === 0) {
          console.log(`  ✓ [${successCount}/100] 已创建 ${successCount} 个用户`);
        }
      } catch (error) {
        errorCount++;
        console.error(`  ✗ 创建用户失败: jen2test${i.toString().padStart(3, '0')} - ${error.message}`);
      }
    }

    console.log('\n✅ 批量创建完成！\n');
    console.log('📊 本次创建统计:');
    console.log(`  成功创建: ${successCount} 个`);
    console.log(`  失败: ${errorCount} 个`);
    console.log(`  注册时间: ${registrationDate.toLocaleDateString('zh-CN')} ${registrationDate.toLocaleTimeString('zh-CN')}`);
    console.log(`  邀请人ID: wDDPWf6NdCOPBc9LR8znu5cClfCr5ikq`);
    
    if (createdUsers.length > 0) {
      console.log('\n📋 新创建的用户（显示前5个和最后5个）:');
      console.log('  前5个:');
      createdUsers.slice(0, 5).forEach((user, index) => {
        console.log(`    ${index + 1}. ${user.name} (${user.email})`);
      });
      console.log(`  ... 中间 ${createdUsers.length - 10} 个用户 ...`);
      console.log('  最后5个:');
      createdUsers.slice(-5).forEach((user, index) => {
        console.log(`    ${createdUsers.length - 4 + index}. ${user.name} (${user.email})`);
      });
    }

    // 统计jen2test用户总数
    const [jen2Count] = await connection.query(
      "SELECT COUNT(*) as count FROM User WHERE name LIKE 'jen2test%'"
    );
    console.log(`\n📈 jen2test用户总数: ${jen2Count[0].count} 个`);

    // 统计总的测试用户数
    const [totalCount] = await connection.query(
      "SELECT COUNT(*) as count FROM User WHERE name LIKE '%test%'"
    );
    console.log(`📈 总测试用户数: ${totalCount[0].count} 个`);

    console.log('\n💡 提示: 您可以在 Prisma Studio (http://localhost:5555) 中查看这些用户');

  } catch (error) {
    console.error('❌ 批量创建时出错:', error.message);
  } finally {
    await connection.end();
  }
}

create100Jen2TestUsers();






