import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { cacheAssets } from "remix-utils/cache-assets";

cacheAssets().catch((error) => {
  console.error("Failed to cache assets:", error);
});

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
