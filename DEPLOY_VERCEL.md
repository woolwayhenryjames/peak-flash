# 将 Flash 页面部署到 Vercel - 简化方案

## 🎯 推荐方案：使用 Vercel + React Router v7

由于你的项目使用 React Router v7（SSR），我已经配置好了 Vercel 部署。

## 📦 快速部署步骤

### 1. 确保代码已提交

```bash
cd /Users/a1/peak
git add .
git commit -m "Add Flash page for Vercel deployment"
git push
```

### 2. 使用 Vercel CLI 部署

```bash
# 安装 Vercel CLI（如果还没安装）
npm install -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

### 3. 访问页面

部署完成后，访问：
```
https://your-project-name.vercel.app/b/flash
```

## 🔧 已配置的文件

- ✅ `vercel.json` - Vercel 配置
- ✅ `api/index.js` - Serverless 函数入口

## 📝 如果仍然 404

### 方案 A：检查路由

确认你访问的是正确的 URL：
```
https://your-domain.vercel.app/b/flash
```

### 方案 B：查看构建日志

在 Vercel 控制台查看：
1. 访问 https://vercel.com/dashboard
2. 找到你的项目
3. 点击最新的部署
4. 查看 "Build Logs" 和 "Function Logs"

### 方案 C：使用简化配置

如果 SSR 有问题，可以尝试静态部署。修改 `package.json` 添加：

```json
{
  "scripts": {
    "build:static": "react-router build --ssr=false"
  }
}
```

然后在 Vercel 中使用 `pnpm build:static` 作为构建命令。

## 🌐 备选方案：使用其他托管服务

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

### Cloudflare Pages
1. 访问 https://pages.cloudflare.com
2. 连接 Git 仓库
3. 构建命令：`pnpm build:prod`
4. 输出目录：`build/client`

## 🔍 调试技巧

1. **本地测试生产构建：**
```bash
pnpm build:prod
pnpm start
```
然后访问 http://localhost:3000/b/flash

2. **检查构建输出：**
```bash
ls -la build/
ls -la build/client/
ls -la build/server/
```

3. **Vercel 日志：**
```bash
vercel logs your-deployment-url
```

## ❓ 常见问题

**Q: 为什么会 404？**
A: 可能原因：
- 路由配置问题
- 构建失败
- 静态资源路径不对
- 需要服务端但配置了纯静态

**Q: 如何只部署 Flash 页面？**
A: 整个项目都会部署，但同事只需要访问 `/b/flash` 路径即可。

**Q: 部署需要多久？**
A: 通常 2-5 分钟，取决于项目大小。

## 📧 需要帮助？

如果遇到问题：
1. 查看 Vercel 构建日志
2. 检查浏览器控制台错误
3. 分享错误信息以便进一步诊断

---

**提示：** 部署成功后，记得将 URL 分享给同事！
