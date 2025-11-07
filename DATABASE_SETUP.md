# 本地数据库配置说明

## 当前配置

您的本地环境已成功配置连接到测试数据库服务器：

### 数据库连接信息
- **主机**: `api.infinitytest.cc`
- **端口**: `3306`
- **用户名**: `root`
- **数据库名**: `content_score`
- **密码**: `mfB8rgKkGbh3jfx#`

### 连接字符串
已配置在 `.env` 文件中：
```
DATABASE_URL="mysql://root:mfB8rgKkGbh3jfx%23@api.infinitytest.cc:3306/content_score"
```

## 数据库表结构

数据库 `content_score` 包含以下12个表：
1. **User** - 用户信息（包含21个字段：基本信息、社交数据、权限等）
2. **Account** - 账户认证信息
3. **Session** - 用户会话
4. **Campaign** - 活动信息
5. **CampaignUser** - 活动用户关系
6. **Flash** - 快闪活动
7. **Pool** - 奖池
8. **Task** - 任务
9. **TaskUser** - 任务用户关系
10. **TreasureBox** - 宝箱
11. **UserVideo** - 用户视频
12. **Verification** - 验证信息

### User 表完整字段
```
- id, createdAt, updatedAt
- name, email, emailVerified, image
- kindleScore (积分), rank (排名)
- inviterId (邀请人)
- walletAddress (钱包地址)
- isBusiness (企业用户), isAdmin (管理员), firstComerBadge (先行者徽章)
- TikTok 数据: bio, followerCount, followingCount, isStar, likeCount, visibleVideosCount
- twitterHandle (Twitter 账号)
```

## 常用命令

### 1. 打开数据库可视化工具（Prisma Studio）
```bash
pnpm prisma studio
```
然后访问 http://localhost:5555

### 2. 生成假数据
```bash
node seed-fake-data.mjs
```
这会创建：
- 10 个测试用户（包含完整的社交数据）
  - 前2个是企业用户
  - 第1个是管理员
  - 前5个有先行者徽章
  - 前3个是明星用户
- 3 个活动
- 每个活动有 5-8 个参与用户
- 5 个会话

### 3. 清空所有数据
```bash
node clear-data.mjs
```
⚠️ 警告：这会删除数据库中的所有数据！

### 4. 从数据库同步 schema
```bash
pnpm prisma db pull
```

### 5. 生成 Prisma Client
```bash
pnpm prisma generate
```

### 6. 启动开发服务器
```bash
pnpm dev
```

## 快速开始

1. **查看现有数据**
```bash
pnpm prisma studio
```

2. **生成测试数据**
```bash
node seed-fake-data.mjs
```

3. **启动应用**
```bash
pnpm dev
```

## 当前数据统计
- 用户数: 31
- 活动数: 1  
- 活动参与数: 3

## 注意事项

1. ✅ 数据库连接已配置并测试成功
2. ✅ Prisma Client 已生成
3. ✅ 用户表包含完整的21个字段
4. ✅ Prisma Studio 已在 http://localhost:5555 启动
5. ⚠️  这是测试环境的数据库，请勿进行破坏性操作
6. 💡 生成的假数据包含真实的字段和合理的测试值

## 测试数据说明

使用 `seed-fake-data.mjs` 生成的测试用户包含：
- **基本信息**: 姓名、邮箱、头像
- **积分和排名**: kindleScore (0-5000), rank (1-10)
- **社交数据**: 
  - followerCount (粉丝数: 100-100,000)
  - followingCount (关注数: 50-5,000)
  - likeCount (获赞数: 1,000-1,000,000)
  - visibleVideosCount (视频数: 10-500)
- **特殊标识**: 
  - 管理员、企业用户、先行者徽章、明星用户
- **社交账号**: Twitter handle

这样您就可以在本地完整测试产品的各种功能！

