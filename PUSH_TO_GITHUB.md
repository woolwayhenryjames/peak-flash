# 🚀 将项目推送到 GitHub - 完整指南

## 📦 方法 1：使用自动化脚本（推荐）

### 第一步：在 GitHub 创建仓库

1. **访问** https://github.com/new
2. **仓库名称：** `peak-flash`（或你喜欢的名称）
3. **可见性：** 选择 `Public`（公开）
4. **重要：** 不要勾选任何选项：
   - ❌ 不要添加 README
   - ❌ 不要添加 .gitignore
   - ❌ 不要选择 license
5. 点击 **"Create repository"**

### 第二步：运行自动脚本

```bash
cd /Users/a1/peak
bash push-to-github.sh
```

脚本会：
- ✅ 自动提交未保存的更改
- ✅ 提示你输入 GitHub 仓库 URL
- ✅ 添加远程仓库
- ✅ 推送所有代码

---

## 📦 方法 2：手动推送

如果脚本有问题，手动操作：

### 1. 创建 GitHub 仓库（同上）

### 2. 提交当前更改

```bash
cd /Users/a1/peak
git add .
git commit -m "Add Flash page prototype"
```

### 3. 添加 GitHub 远程仓库

```bash
# 替换 YOUR_USERNAME 为你的 GitHub 用户名
git remote add github https://github.com/YOUR_USERNAME/peak-flash.git
```

### 4. 推送代码

```bash
git push github main
```

如果提示错误，使用：
```bash
git push -u github main
```

---

## 🔐 如果需要身份验证

### 使用 Personal Access Token

1. **创建 Token：**
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token
   - 勾选 `repo` 权限
   - Generate token
   - **复制 token（只显示一次！）**

2. **推送时：**
   - Username: 你的 GitHub 用户名
   - Password: 粘贴刚才的 token

### 或使用 SSH

```bash
# 使用 SSH URL
git remote add github git@github.com:YOUR_USERNAME/peak-flash.git
git push github main
```

---

## ✅ 推送成功后

你的代码会在：
```
https://github.com/YOUR_USERNAME/peak-flash
```

---

## 🌐 下一步：部署到 Cloudflare Pages

### 方式 1：自动部署（推荐）

1. **访问** https://dash.cloudflare.com/
2. **Workers & Pages** → Create application → Pages
3. **Connect to Git** → 选择 GitHub
4. **授权** Cloudflare 访问你的 GitHub
5. **选择仓库** `peak-flash`
6. **配置构建：**
   ```
   Build command: pnpm build:prod
   Build output: build/client
   ```
7. **Save and Deploy**

### 方式 2：使用 Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages project create peak-flash
wrangler pages deploy build/client --project-name peak-flash
```

---

## 🎯 部署完成后

你的 Flash 页面将在：
```
https://peak-flash.pages.dev/b/flash
```

可以自定义域名为：
```
https://your-custom-name.pages.dev/b/flash
```

---

## 📤 分享给同事

```
🔗 Flash 页面原型：https://peak-flash.pages.dev/b/flash

功能：
✅ 三步创建流程
✅ 表单验证
✅ 完整交互
✅ 响应式设计

注意：纯前端原型，数据不保存。
```

---

## ❓ 常见问题

### Q: 推送时要求用户名密码？
A: 使用 Personal Access Token 作为密码（见上方）

### Q: 推送被拒绝？
A: 可能是分支保护，尝试：
```bash
git push -f github main
```

### Q: 已经有 origin 远程仓库？
A: 没关系，我们用 `github` 作为远程名称，不会冲突

---

## 🎉 现在开始

**运行：**
```bash
cd /Users/a1/peak
bash push-to-github.sh
```

或按照手动步骤操作！

几分钟后，你的项目就在 GitHub 上了！🚀

