import type { UserVideo } from ".prisma/main/client";

export default function getVideosMockData(): Partial<UserVideo>[] {
  return [
    {
      videoId: "7552032446338960658",
      createTime: new Date("2025-09-17T06:47:29"),
      description: "#peakai ",
      viewCount: 0,
      likeCount: 1,
      commentCount: 1,
      shareCount: 0,
      collectCount: 1,
      videoUrl: "https://www.tiktok.com/@user/video/7552032446338960658",
      coverUrl:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
    },
    {
      videoId: "7550946116380986631",
      createTime: new Date("2025-09-17T06:47:29"),
      description: "#peakai",
      viewCount: 7,
      likeCount: 1,
      commentCount: 3,
      shareCount: 0,
      collectCount: 1,
      videoUrl: "https://www.tiktok.com/@user/video/7550946116380986631",
      coverUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop",
    },
    {
      videoId: "7550946029449907474",
      createTime: new Date("2025-09-17T06:47:10"),
      description: "#peakai",
      viewCount: 13_000,
      likeCount: 1_234,
      commentCount: 239,
      shareCount: 0,
      collectCount: 198,
      videoUrl: "https://www.tiktok.com/@user/video/7550946029449907474",
      coverUrl:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop",
    },
    {
      videoId: "7550945928895565074",
      createTime: new Date("2025-09-17T06:46:46"),
      description: "#peakai ",
      viewCount: 19,
      likeCount: 1,
      commentCount: 3,
      shareCount: 0,
      collectCount: 1,
      videoUrl: "https://www.tiktok.com/@user/video/7550945928895565074",
      coverUrl:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop",
    },
  ];
}
