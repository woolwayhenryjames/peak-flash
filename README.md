# PEAK.AI Website

A modern, full-stack web application for PEAK.AI, built with React Router and Prisma for database management.

一个现代化的全栈网络应用程序，为 PEAK.AI 构建，使用 React Router 并使用 Prisma 进行数据库管理。

## Features | 功能特点

- 🚀 Server-side rendering with React Router | 使用 React Router 的服务器端渲染
- 💾 Database integration with Prisma ORM | 通过 Prisma ORM 集成数据库
- ⚡️ Hot Module Replacement (HMR) for rapid development | 用于快速开发的热模块替换 (HMR)
- 📦 Asset bundling and optimization | 资源打包和优化
- 🔄 Data loading and mutations | 数据加载和变更
- 🔒 TypeScript by default | 默认使用 TypeScript
- 🎉 TailwindCSS for styling | 使用 TailwindCSS 进行样式设计
- 🔌 API endpoints for frontend-backend communication | 用于前后端通信的 API 端点

## Tech Stack | 技术栈

- **Frontend | 前端**: React with React Router
- **Backend | 后端**: Node.js
- **Database | 数据库**: Prisma ORM
- **Styling | 样式**: TailwindCSS
- **Deployment | 部署**: Docker-ready

## Getting Started | 开始使用

### Installation | 安装

Install the dependencies | 安装依赖:

```bash
pnpm install
```

### Database Setup | 数据库设置

Set up your database connection in the `.env` file | 在 .env 文件中设置数据库连接 :

```
DATABASE_URL="postgresql://username:password@localhost:5432/infinity_ground"
```

Initialize the database | 初始化数据库:

```bash
npx prisma migrate dev
```

### Development | 开发

Start the development server with HMR | 启动热更新的开发服务器:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173` | 你的应用程序将在 `http://localhost:5173` 可用.

## Building for Production | 生产构建

Create a production build | 创建生产构建:

```bash
pnpm build:staging
```

## Deployment | 部署

### Docker Deployment | Docker 部署

This project includes three Dockerfiles optimized for different package managers | 本项目包含三个为不同包管理器优化的 Dockerfile:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t infinity-ground .

# For pnpm
docker build -f Dockerfile.pnpm -t infinity-ground .

# For bun
docker build -f Dockerfile.bun -t infinity-ground .

# Run the container
docker run -p 3000:3000 infinity-ground
```

The containerized application can be deployed to any platform that supports Docker, including | 容器化应用程序可以部署到任何支持 Docker 的平台，包括:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment | 自定义部署

If you're familiar with deploying Node applications, the built-in app server is production-ready | 如果您熟悉部署 Node 应用程序，内置的应用服务器已经可以用于生产环境。

Make sure to deploy the output of `pnpm build:staging`| 确保部署 pnpm build:staging 的输出为：

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling | 样式设计

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. The configuration can be customized in `tailwind.config.js` | 本项目使用 [Tailwind CSS](https://tailwindcss.com/) 进行样式设计。配置可以在 `tailwind.config.js` 中自定义.

## Database Management | 数据库管理

The project uses Prisma as an ORM to interact with the database. Prisma schema is defined in prisma/schema.prisma | 项目使用 Prisma 作为 ORM 与数据库交互。Prisma 模式定义在 prisma/schema.prisma 中。

Common Prisma commands | 常用 Prisma 命令:

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Run migrations
npx prisma migrate dev

# Open Prisma Studio to view and edit data
npx prisma studio
```

---

Built with ❤️ for Infinity Ground | 用 ❤️ 为 Infinity Ground 构建
