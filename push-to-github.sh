#!/bin/bash

# 推送项目到 GitHub 的脚本
set -e

echo "🚀 准备将项目推送到 GitHub..."
echo ""

# 颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 步骤 1: 检查 Git 状态
echo "📋 步骤 1/4: 检查 Git 状态..."
cd /Users/a1/peak

if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}!${NC} 发现未提交的更改，正在提交..."
    git add .
    git commit -m "Prepare project for GitHub deployment" || true
    echo -e "${GREEN}✓${NC} 更改已提交"
else
    echo -e "${GREEN}✓${NC} 工作区干净"
fi

echo ""

# 步骤 2: 创建 GitHub 仓库
echo "📋 步骤 2/4: 创建 GitHub 仓库"
echo ""
echo -e "${BLUE}请按照以下步骤操作：${NC}"
echo ""
echo "1. 访问 https://github.com/new"
echo "2. 仓库名称输入: peak-flash"
echo "3. 选择 Public (公开仓库，GitHub Pages 免费版需要)"
echo "4. 不要勾选任何初始化选项（README, .gitignore 等）"
echo "5. 点击 'Create repository'"
echo ""
echo -e "${YELLOW}完成后，复制显示的仓库 URL（类似: https://github.com/username/peak-flash.git）${NC}"
echo ""
read -p "请粘贴你的 GitHub 仓库 URL: " GITHUB_URL

if [ -z "$GITHUB_URL" ]; then
    echo -e "${YELLOW}未输入 URL，使用手动步骤...${NC}"
    echo ""
    echo "请手动运行："
    echo "  git remote add github YOUR_GITHUB_URL"
    echo "  git push github main"
    exit 1
fi

echo ""

# 步骤 3: 添加 GitHub 远程仓库
echo "📋 步骤 3/4: 添加 GitHub 远程仓库..."

# 检查是否已存在
if git remote | grep -q "github"; then
    echo -e "${YELLOW}!${NC} GitHub 远程仓库已存在，更新 URL..."
    git remote set-url github "$GITHUB_URL"
else
    echo "添加 GitHub 远程仓库..."
    git remote add github "$GITHUB_URL"
fi

echo -e "${GREEN}✓${NC} GitHub 远程仓库已配置"
echo ""

# 步骤 4: 推送到 GitHub
echo "📋 步骤 4/4: 推送代码到 GitHub..."

# 获取当前分支
CURRENT_BRANCH=$(git branch --show-current)
echo "当前分支: $CURRENT_BRANCH"
echo ""

echo "正在推送..."
if git push github $CURRENT_BRANCH; then
    echo -e "${GREEN}✓${NC} 代码已成功推送到 GitHub"
else
    echo -e "${YELLOW}!${NC} 推送失败，尝试设置上游并推送..."
    git push -u github $CURRENT_BRANCH
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 成功推送到 GitHub！${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📍 你的 GitHub 仓库："
echo -e "${BLUE}${GITHUB_URL%.git}${NC}"
echo ""
echo "🌐 下一步：部署到 Cloudflare Pages"
echo ""
echo "1. 访问 https://dash.cloudflare.com/"
echo "2. Workers & Pages → Create → Pages → Connect to Git"
echo "3. 选择 GitHub，找到你的 peak-flash 仓库"
echo "4. 配置："
echo "   - Build command: pnpm build:prod"
echo "   - Build output: build/client"
echo "5. Deploy!"
echo ""
echo "部署完成后访问："
echo -e "${GREEN}https://your-project.pages.dev/b/flash${NC}"
echo ""

