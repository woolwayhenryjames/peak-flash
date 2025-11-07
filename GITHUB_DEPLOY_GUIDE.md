# 🚀 GitHub Pages 部署 - 完整指南

## 📋 准备工作

### 1. 在 GitHub 创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`flash-prototype` (或其他名称)
3. 设置为 **Public** (GitHub Pages 免费版需要公开仓库)
4. **不要**勾选 "Add a README file"
5. 点击 "Create repository"

---

## 🎯 方法 1：使用自动部署脚本（推荐）

### 运行部署脚本：

```bash
cd /Users/a1/peak
bash deploy-github.sh
```

脚本会自动：
- ✅ 提示你输入 GitHub 仓库 URL
- ✅ 提交并推送代码
- ✅ 构建项目
- ✅ 部署到 GitHub Pages

---

## 🎯 方法 2：手动部署步骤

如果自动脚本有问题，按以下步骤手动操作：

### 步骤 1: 添加 GitHub 远程仓库

```bash
cd /Users/a1/peak

# 替换为你的实际 GitHub 仓库 URL
git remote add github https://github.com/YOUR_USERNAME/flash-prototype.git
```

### 步骤 2: 提交当前更改

```bash
git add .
git commit -m "Add Flash page prototype for GitHub Pages"
```

### 步骤 3: 推送到 GitHub

```bash
# 推送到 main 分支
git push github main

# 如果报错说分支不存在，先推送并设置上游：
git push -u github main
```

### 步骤 4: 部署到 GitHub Pages

```bash
pnpm deploy
```

这会创建并推送 `gh-pages` 分支。

---

## ⚙️ 在 GitHub 启用 Pages

部署完成后：

1. **访问你的 GitHub 仓库**
   ```
   https://github.com/YOUR_USERNAME/flash-prototype
   ```

2. **进入 Settings**
   - 点击仓库页面顶部的 "Settings" 标签

3. **配置 Pages**
   - 左侧菜单找到 "Pages"
   - Source: 选择 "Deploy from a branch"
   - Branch: 选择 "gh-pages" 分支，目录选择 "/ (root)"
   - 点击 "Save"

4. **等待部署**
   - 页面顶部会显示 "Your site is live at..."
   - 通常需要 1-2 分钟

5. **访问页面**
   ```
   https://YOUR_USERNAME.github.io/flash-prototype/b/flash
   ```

---

## 🔍 示例 URL 结构

假设你的 GitHub 用户名是 `peakai`，仓库名是 `flash-prototype`：

```
仓库地址: https://github.com/peakai/flash-prototype
Pages 地址: https://peakai.github.io/flash-prototype/b/flash
```

---

## ❓ 常见问题

### Q: 显示 404 Not Found

**解决方案：**

1. 确认 GitHub Pages 已启用：
   - Settings → Pages → 显示绿色的成功消息

2. 确认 `gh-pages` 分支存在：
   - 仓库页面点击分支下拉菜单，查看是否有 `gh-pages`

3. 等待几分钟，GitHub Pages 部署需要时间

4. 清除浏览器缓存，或使用无痕模式访问

### Q: 样式显示不正常

**解决方案：**

检查 `package.json` 中的 `homepage` 字段：

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
}
```

确保与实际 URL 匹配。

### Q: 推送时要求登录

**解决方案：**

使用 Personal Access Token：

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. 勾选 `repo` 权限
4. 复制 token
5. 在推送时使用 token 作为密码

或者使用 SSH：

```bash
# 改用 SSH URL
git remote set-url github git@github.com:YOUR_USERNAME/flash-prototype.git
```

---

## 🎉 部署成功后

将以下信息发送给同事：

```
📍 Flash 页面原型已上线！

🔗 访问链接: https://YOUR_USERNAME.github.io/flash-prototype/b/flash

这是一个可交互的原型页面，包含：
✅ 三步 Flash 创建流程
✅ 表单填写和验证
✅ 响应式设计（支持手机/平板/桌面）

注意：这是纯前端原型，不连接后端，填写的数据不会保存。
```

---

## 🔄 更新页面

如果修改了代码，重新部署：

```bash
git add .
git commit -m "Update Flash page"
git push github main
pnpm deploy
```

---

## 📞 需要帮助？

如果遇到问题，请提供：
1. GitHub 仓库 URL
2. 错误信息截图
3. 浏览器控制台错误

---

**现在开始吧！运行 `bash deploy-github.sh` 或按照手动步骤操作。** 🚀


