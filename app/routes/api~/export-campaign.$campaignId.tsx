import type { LoaderFunctionArgs } from "react-router";
import { utils, write } from "xlsx";
import { db } from "~/services/db.server";
import { getUserInfo } from "~/services/tiktok-api.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { campaignId } = params;

  if (!campaignId) {
    return new Response("Campaign ID is required", { status: 400 });
  }

  try {
    // First check if campaign exists
    const campaign = await db.campaign.findUnique({
      where: { id: campaignId },
    });

    if (!campaign) {
      return new Response("Campaign not found", { status: 404 });
    }

    // Fetch all campaign users with related data
    const campaignUsersData = await db.campaignUser.findMany({
      where: { campaignId },
      include: {
        user: {
          include: {
            _count: {
              select: {
                invitees: true,
              },
            },
          },
        },
      },
    });

    // Fetch videos separately for each campaign user
    const campaignUsersWithVideos = await Promise.all(
      campaignUsersData.map(async (cu) => {
        const videos = await db.userVideo.findMany({
          where: {
            campaignUserId: cu.id,
            active: true,
          },
        });
        return { ...cu, videos };
      })
    );

    // Fetch TikTok stats for all users
    const tiktokStatsMap = new Map<
      string,
      { followers: number; likes: number }
    >();

    await Promise.all(
      campaignUsersWithVideos.map(async (cu) => {
        const tiktokUsername = cu.user.email;
        if (tiktokUsername) {
          try {
            const userInfoResult = await getUserInfo(tiktokUsername);
            if (userInfoResult.isOk()) {
              const userInfo = userInfoResult.value;
              tiktokStatsMap.set(cu.user.id, {
                followers: userInfo.follower_count || 0,
                likes: userInfo.total_favorited || 0,
              });
            }
          } catch (error) {
            console.error(
              `Failed to fetch TikTok stats for ${tiktokUsername}:`,
              error
            );
          }
        }
      })
    );

    // Transform data for Excel export
    const exportData = campaignUsersWithVideos.map((cu) => {
      const tiktokUsername = cu.user.email || "";
      const tiktokProfileUrl = tiktokUsername
        ? `https://www.tiktok.com/@${tiktokUsername}`
        : "";

      // Calculate total video stats
      const totalVideoLikes = cu.videos.reduce(
        (sum: number, video) => sum + video.likeCount,
        0
      );

      // Get video URLs
      const videoUrls = cu.videos
        .map(
          (video) =>
            video.videoUrl ||
            `https://www.tiktok.com/@${tiktokUsername}/video/${video.videoId}`
        )
        .join(", ");

      // Calculate invitee stats
      const successfulInvites = cu.user._count.invitees;

      // Get TikTok stats
      const tiktokStats = tiktokStatsMap.get(cu.user.id) || {
        followers: 0,
        likes: 0,
      };

      return {
        "User ID": cu.user.email,
        "TikTok Account Link": tiktokProfileUrl,
        Followers: tiktokStats.followers,
        Likes: tiktokStats.likes,
        "Kindle Score": cu.user.kindleScore || 0,
        "Spark Points": cu.score,
        "Posted Videos Count": cu.videos.length,
        "Posted Videos Total Likes": totalVideoLikes,
        "Posted Videos Links": videoUrls,
        "Successful Invites Count": successfulInvites,
        "Spark Points from Invites": cu.bonusScore,
        "Wallet Address": cu.user.walletAddress || "",
      };
    });

    // Sort by Spark Points (descending)
    exportData.sort((a, b) => b["Spark Points"] - a["Spark Points"]);

    // Create workbook and worksheet
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(exportData);

    // Add worksheet to workbook
    utils.book_append_sheet(wb, ws, `${campaign.name} Analytics`);

    // Generate buffer
    const buffer = write(wb, { type: "buffer", bookType: "xlsx" });

    // Encode filename for Content-Disposition header to handle UTF-8 characters
    const date = new Date().toISOString().split("T")[0];
    const baseFilename = `${campaign.name}_analytics_${date}.xlsx`;

    // Create a safe ASCII filename for fallback (replace non-ASCII with underscore)
    const asciiFilename = baseFilename.replace(/[^a-zA-Z0-9._-]/g, "_");

    // Encode the UTF-8 filename according to RFC 5987
    const utf8Filename = encodeURIComponent(baseFilename);

    // Return file response
    return new Response(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${asciiFilename}"; filename*=UTF-8''${utf8Filename}`,
      },
    });
  } catch (error) {
    console.error("Error exporting campaign data:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
