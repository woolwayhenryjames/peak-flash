#!/bin/bash

# GitHub Pages 部署脚本
# 使用方法: bash deploy-github.sh

set -e  # 遇到错误立即退出

echo "🚀 开始部署到 GitHub Pages..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 步骤 1: 检查是否有 GitHub 远程仓库
echo "📋 步骤 1/6: 检查 Git 配置..."

if git remote | grep -q "github"; then
    echo -e "${GREEN}✓${NC} GitHub 远程仓库已存在"
    GITHUB_REMOTE="github"
else
    echo -e "${YELLOW}!${NC} 未找到 GitHub 远程仓库"
    echo ""
    echo "请输入你的 GitHub 仓库 URL (例如: https://github.com/username/repo.git):"
    read GITHUB_URL
    
    if [ -z "$GITHUB_URL" ]; then
        echo -e "${RED}✗${NC} 未输入 GitHub URL，退出..."
        exit 1
    fi
    
    echo "添加 GitHub 远程仓库..."
    git remote add github "$GITHUB_URL"
    GITHUB_REMOTE="github"
    echo -e "${GREEN}✓${NC} GitHub 远程仓库已添加"
fi

echo ""

# 步骤 2: 检查工作区状态
echo "📋 步骤 2/6: 检查工作区状态..."

if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}!${NC} 发现未提交的更改"
    echo "提交这些更改..."
    git add .
    git commit -m "Add Flash page prototype for GitHub Pages deployment" || true
    echo -e "${GREEN}✓${NC} 更改已提交"
else
    echo -e "${GREEN}✓${NC} 工作区干净"
fi

echo ""

# 步骤 3: 推送代码到 GitHub
echo "📋 步骤 3/6: 推送代码到 GitHub..."

# 获取当前分支
CURRENT_BRANCH=$(git branch --show-current)
echo "当前分支: $CURRENT_BRANCH"

# 推送到 GitHub
echo "推送到 GitHub..."
git push $GITHUB_REMOTE $CURRENT_BRANCH || {
    echo -e "${YELLOW}!${NC} 推送失败，尝试强制推送..."
    echo "是否强制推送? (y/n):"
    read FORCE_PUSH
    if [ "$FORCE_PUSH" = "y" ]; then
        git push -f $GITHUB_REMOTE $CURRENT_BRANCH
    else
        echo -e "${RED}✗${NC} 取消推送"
        exit 1
    fi
}

echo -e "${GREEN}✓${NC} 代码已推送到 GitHub"
echo ""

# 步骤 4: 构建项目
echo "📋 步骤 4/6: 构建项目..."
pnpm build:prod
echo -e "${GREEN}✓${NC} 项目构建完成"
echo ""

# 步骤 5: 部署到 GitHub Pages
echo "📋 步骤 5/6: 部署到 GitHub Pages..."
pnpm deploy
echo -e "${GREEN}✓${NC} 部署到 GitHub Pages 完成"
echo ""

# 步骤 6: 显示访问信息
echo "📋 步骤 6/6: 生成访问信息..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 部署成功！${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📍 请按照以下步骤启用 GitHub Pages："
echo ""
echo "1. 访问你的 GitHub 仓库"
echo "2. 进入 Settings → Pages"
echo "3. Source: 选择 'Deploy from a branch'"
echo "4. Branch: 选择 'gh-pages' 分支"
echo "5. 点击 Save"
echo ""
echo "⏱️  等待 1-2 分钟后，访问："
echo ""
echo -e "${GREEN}🔗 https://peak-ai.github.io/flash-prototype/b/flash${NC}"
echo ""
echo "或者检查你的实际 URL（可能不同）："
echo "Settings → Pages → Your site is live at..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📤 分享给同事："
echo "将上面的链接发送给同事即可查看 Flash 页面原型"
echo ""


