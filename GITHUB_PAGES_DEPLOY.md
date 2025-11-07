# 🚀 GitHub/GitLab Pages 静态部署指南

## 检测到你使用 GitLab，以下是两个选项：

---

## ✅ 选项 1：GitLab Pages（推荐，因为你已经在用 GitLab）

### 步骤：

1. **在项目根目录创建 `.gitlab-ci.yml`**

已经为你创建好了这个文件（见下方）。

2. **推送代码到 GitLab**

```bash
cd /Users/a1/peak
git add .
git commit -m "Add GitLab Pages deployment"
git push origin main  # 或者你的主分支名
```

3. **等待部署完成**

- 访问你的 GitLab 项目页面
- 进入 CI/CD → Pipelines
- 等待构建完成（约 3-5 分钟）

4. **访问页面**

部署完成后，页面会在：
```
https://peak-ai.gitlab.io/frontend/b/flash
```

或者在 GitLab 项目中：Settings → Pages 查看具体 URL

---

## ✅ 选项 2：GitHub Pages

如果你想使用 GitHub Pages：

1. **在 GitHub 创建一个新仓库**

2. **添加 GitHub 远程仓库**

```bash
cd /Users/a1/peak
git remote add github https://github.com/your-username/peak-flash.git
```

3. **推送到 GitHub**

```bash
git push github main  # 推送代码
```

4. **运行部署命令**

```bash
pnpm deploy
```

5. **启用 GitHub Pages**

- 访问 GitHub 仓库
- Settings → Pages
- Source: Deploy from a branch
- Branch: `gh-pages`

6. **访问页面**

```
https://your-username.github.io/peak-flash/b/flash
```

---

## 📦 已配置的文件

✅ `package.json` - 添加了 `deploy` 和 `predeploy` 脚本
✅ `.gitlab-ci.yml` - GitLab CI/CD 配置（即将创建）

---

## 🔧 故障排除

### 问题：部署后页面空白或 404

**原因：** React Router 需要服务端支持，或者需要配置 basename

**解决方案：** 创建一个 404.html 来处理路由

我会为你创建这个文件。

### 问题：静态资源加载失败

**解决方案：** 检查 `homepage` 字段是否正确设置

---

## 💡 推荐步骤

**对于你的情况（GitLab 用户），我推荐：**

1. 使用 GitLab Pages（更简单，已经集成）
2. 我现在为你创建 `.gitlab-ci.yml` 配置
3. 你只需要 `git push` 即可自动部署

准备好了吗？我现在创建配置文件。



