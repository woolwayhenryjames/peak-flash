import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useEffect } from "react";
import { AppKitProvider } from "~/components/AppKitProvider";
import LoadingProgressBar from "~/components/LoadingProgressBar";
import { pageview } from "~/lib/gtags.client";
import { headersMiddleware } from "~/middleware/headers";

export const middleware = [headersMiddleware];

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/icons/favicon-96x96.png",
    sizes: "96x96",
  },
  { rel: "icon", type: "image/svg+xml", href: "/icons/favicon.svg" },
  { rel: "shortcut icon", href: "/icons/favicon.ico" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon.png",
  },
  { rel: "manifest", href: "/icons/site.webmanifest" },

  // Prefetch critical routes for faster navigation
  { rel: "prefetch", href: "/u" },
  { rel: "prefetch", href: "/u/ascent" },
];

const gaTrackingId = "G-FD4ZDVH6YP";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.MODE === "production") {
      pageview(location.pathname, gaTrackingId);
    }
  }, [location]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
          name="viewport"
        />
        <meta content="PEAK AI" name="apple-mobile-web-app-title" />
        <Meta />
        <Links />
      </head>
      <body>
        {import.meta.env.MODE === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              // biome-ignore lint/security/noDangerouslySetInnerHtml: dynamic gaTrackingId
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
              id="gtag-init"
            />
          </>
        )}
        {children}
        <ScrollRestoration />
        <Scripts />
        <svg className="size-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Glow Container Effect Definitions</title>
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="myCustomShape">
              <path d="M1 0 H0.068 C0.434 0.127 0.804 0.096 0.895 0.247 C0.934 0.152 0.938 0.116 1 0 Z" />
            </clipPath>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="objectBoundingBox"
              height="100%"
              id="prefix__prefix__filter1_ddf_134_3428"
              width="100%"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.245192 0 0 0 0 0.421314 0 0 0 0 1 0 0 0 0.57 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_134_3428"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="9" />
              <feGaussianBlur stdDeviation="5.2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.954327 0 0 0 0 0.470281 0 0 0 0 0.470281 0 0 0 0.25 0" />
              <feBlend
                in2="effect1_dropShadow_134_3428"
                result="effect2_dropShadow_134_3428"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect2_dropShadow_134_3428"
                result="shape"
              />
              <feGaussianBlur
                result="effect3_foregroundBlur_134_3428"
                stdDeviation="2"
              />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <AppKitProvider>
      <LoadingProgressBar />
      <Outlet />
    </AppKitProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
