import type { LoaderFunctionArgs } from "react-router";

import { getAsset } from "~/services/aws-s3.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const s3Key = params["*"];
  if (!s3Key) {
    return new Response("Not found", { status: 404 });
  }

  // Future: Check client capabilities for WebP optimization
  // const acceptHeader = request.headers.get("Accept") || "";
  // const supportsWebP = acceptHeader.includes("image/webp");

  const assets = await getAsset(s3Key);
  if (!assets?.Body) {
    return new Response("Asset not found", { status: 404 });
  }

  // Determine content type and set appropriate headers
  const contentType = assets.ContentType ?? "application/octet-stream";
  const isImage = contentType.startsWith("image/");

  const headers: Record<string, string> = {
    "Cache-Control": "public, max-age=31536000, immutable",
    "Content-Type": contentType,
  };

  // Add performance headers for images
  if (isImage) {
    headers.Vary = "Accept";
    // Enable compression for SVGs
    if (contentType === "image/svg+xml") {
      headers["Content-Encoding"] = "gzip";
    }
  }

  // Add security headers for all assets
  headers["X-Content-Type-Options"] = "nosniff";

  return new Response(assets.Body as unknown as ReadableStream, { headers });
};
