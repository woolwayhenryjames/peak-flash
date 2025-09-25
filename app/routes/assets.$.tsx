import type { LoaderFunctionArgs } from "react-router";

import { getAsset } from "~/services/aws-s3.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const s3Key = params["*"];
  if (!s3Key) {
    return new Response("Not found", { status: 404 });
  }
  const assets = await getAsset(s3Key);

  // Add long cache headers for static assets
  return new Response(assets?.Body as unknown as ReadableStream, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": assets?.ContentType ?? "application/octet-stream",
    },
  });
};
