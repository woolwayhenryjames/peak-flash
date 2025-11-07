# 🚀 Vercel 部署 - 快速修复指南

## 已修复的配置

✅ 更新了 `vercel.json` - 简化路由配置
✅ 保留了 `api/index.js` - Serverless 函数处理所有路由

---

## 立即部署到 Vercel

### 方法 1：使用 Vercel CLI（最快）

```bash
cd /Users/a1/peak

# 1. 安装 Vercel CLI（如果还没安装）
npm install -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署
vercel --prod
```

按照提示操作，几分钟后就会得到 URL。

---

### 方法 2：使用 Vercel 网页界面

1. **访问 Vercel**
   - https://vercel.com/dashboard

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择 "Import Git Repository"
   - 连接你的 GitLab 账户
   - 选择 `peak.ai/frontend` 项目

3. **配置项目**
   - Framework Preset: `Other`
   - Build Command: `pnpm build:prod`
   - Output Directory: `build/client`
   - Install Command: `pnpm install`
   - Node.js Version: `20.x`

4. **环境变量**（如果需要）
   - 暂时不需要，页面是纯前端原型

5. **部署**
   - 点击 "Deploy"
   - 等待 3-5 分钟

6. **访问页面**
   ```
   https://your-project.vercel.app/b/flash
   ```

---

## 🔍 如果仍然 404

### 检查清单：

1. **确认构建成功**
   - Vercel Dashboard → 你的项目 → Deployments
   - 查看最新部署状态（应该是绿色勾号）

2. **查看构建日志**
   - 点击部署 → "Building"
   - 检查是否有错误

3. **查看函数日志**
   - Deployment → "Functions" 标签
   - 点击 `/api/index.js`
   - 查看是否有运行时错误

4. **测试路由**
   ```bash
   # 在本地测试构建
   pnpm build:prod
   pnpm start
   
   # 访问 http://localhost:3000/b/flash
   # 确认本地构建正常
   ```

---

## 🐛 常见问题解决

### 问题：Function invocation failed

**原因：** Serverless 函数执行错误

**解决：**
```bash
# 检查函数日志
vercel logs your-deployment-url --follow
```

### 问题：构建失败

**原因：** 依赖安装或构建错误

**解决：**
1. 查看 Vercel 构建日志
2. 在本地运行 `pnpm build:prod` 确认能成功构建
3. 检查 Node.js 版本是否匹配

### 问题：静态资源 404

**原因：** 资源路径不正确

**解决：**
已在 `vercel.json` 中配置 `/assets/` 路由

---

## 🎯 部署后测试

部署完成后，测试以下 URL：

```bash
# 主页面
https://your-project.vercel.app/b/flash

# 应该能看到：
✅ "Ready to create a new Flash?" 标题
✅ "Start New Flash" 按钮
✅ "My Flash" 部分（显示 "You haven't created any Flash tasks yet."）
```

---

## 📱 分享给同事

```
🔗 Flash 页面原型：https://your-project.vercel.app/b/flash

这是一个可交互的原型：
✅ 点击 "Start New Flash" 查看创建流程
✅ 填写三步表单
✅ 体验完整的 UI/UX

注：纯前端原型，数据不保存
```

---

## 🔄 更新部署

修改代码后重新部署：

```bash
# 推送到 Git
git add .
git commit -m "Update Flash page"
git push

# Vercel 会自动重新部署（如果连接了 Git）

# 或手动部署
vercel --prod
```

---

## ⚡ 现在就开始

**最快方式：**

```bash
cd /Users/a1/peak
vercel --prod
```

等待几分钟，就能得到可访问的 URL！

---

**需要帮助？** 分享 Vercel 部署日志或错误信息。


