import type { JsonObject } from "@prisma/client/runtime/library";
import { db } from "~/services/db.server";
import { logger } from "~/services/logger.server";

export async function action({ request }: { request: Request }) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  const formData = await request.formData();
  const campaignId = formData.get("campaignId")?.toString();
  const videoUrl = formData.get("videoUrl")?.toString();
  const campaign = await db.campaign.findUnique({
    where: { id: campaignId },
  });
  if (!campaign) {
    return Response.json({ error: "Campaign not found" }, { status: 403 });
  }
  const url = `${import.meta.env.MODE === "production" ? "http://172.31.28.161:3333" : "http://localhost:3333"}/api/addUser`;
  const body = JSON.stringify({
    video_url: videoUrl,
    keywords: (campaign.joinRequirement as JsonObject)?.["Required Tags"] || [],
  });

  logger.info("Submitting video", { url, body });
  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
}
