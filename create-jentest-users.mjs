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

async function createJENTestUsers() {
  console.log('🌱 开始创建JENtest测试用户...\n');

  try {
    // 首先验证邀请人是否存在
    const [inviter] = await connection.query(
      'SELECT * FROM User WHERE id = ?',
      ['Ru2FefhbMI6TS6au3DefdiwAVxFcStpG']
    );

    if (inviter.length === 0) {
      console.log('⚠️  警告: 邀请人ID不存在，但仍会创建用户');
    } else {
      console.log(`✅ 找到邀请人: ${inviter[0].name} (${inviter[0].email})\n`);
    }

    // 设置注册时间为2025年11月5日
    const registrationDate = new Date('2025-11-05T10:00:00+08:00');
    const createdUsers = [];
    let successCount = 0;
    let errorCount = 0;

    // 创建10个用户（JENtest01 到 JENtest10）
    for (let i = 1; i <= 10; i++) {
      try {
        const userName = `JENtest${i.toString().padStart(2, '0')}`;
        const newUserId = randomUUID();
        const email = `jentest${i.toString().padStart(2, '0')}_${randomString(6)}@test.com`;
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
            'Ru2FefhbMI6TS6au3DefdiwAVxFcStpG', // inviterId
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
        console.log(`  ✓ [${successCount}/10] 创建用户: ${userName} (${email})`);
      } catch (error) {
        errorCount++;
        console.error(`  ✗ 创建用户失败: JENtest${i.toString().padStart(2, '0')} - ${error.message}`);
      }
    }

    console.log('\n✅ 批量创建完成！\n');
    console.log('📊 创建统计:');
    console.log(`  成功创建: ${successCount} 个`);
    console.log(`  失败: ${errorCount} 个`);
    console.log(`  注册时间: ${registrationDate.toLocaleDateString('zh-CN')} ${registrationDate.toLocaleTimeString('zh-CN')}`);
    console.log(`  邀请人ID: Ru2FefhbMI6TS6au3DefdiwAVxFcStpG`);
    
    if (createdUsers.length > 0) {
      console.log('\n📋 新创建的用户列表:');
      createdUsers.forEach((user, index) => {
        console.log(`  ${index + 1}. ${user.name} (${user.email})`);
      });
    }

    // 统计总的测试用户数
    const [totalLWL] = await connection.query(
      "SELECT COUNT(*) as count FROM User WHERE name LIKE 'LWLtest%'"
    );
    const [totalJEN] = await connection.query(
      "SELECT COUNT(*) as count FROM User WHERE name LIKE 'JENtest%'"
    );
    console.log(`\n📈 测试用户统计:`);
    console.log(`  LWLtest用户: ${totalLWL[0].count} 个`);
    console.log(`  JENtest用户: ${totalJEN[0].count} 个`);
    console.log(`  总计: ${totalLWL[0].count + totalJEN[0].count} 个`);

    console.log('\n💡 提示: 您可以在 Prisma Studio (http://localhost:5555) 中查看这些用户');

  } catch (error) {
    console.error('❌ 批量创建时出错:', error.message);
  } finally {
    await connection.end();
  }
}

createJENTestUsers();







