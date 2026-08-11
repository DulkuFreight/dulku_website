import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[#F40009] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#F40009]/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-[#F40009] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#F40009]/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "Dulku Freight | Cross Dock & Fulfillment";
const SITE_DESCRIPTION =
  "Dulku Freight delivers cross-docking, container transloading, warehouse storage, and 3PL fulfillment services in Avenel, NJ near Port Newark, supporting importers, trucking companies, freight forwarders, distributors, and eCommerce brands.";
const SITE_OG_IMAGE = "/og-image.png?v=1";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0f0f10" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Dulku Freight Industries" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: SITE_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: SITE_OG_IMAGE },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=6" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png?v=6" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png?v=6" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png?v=6" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=6" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png?v=6" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png?v=6" },
      { rel: "manifest", href: "/site.webmanifest?v=6" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Dulku Freight | Cross Dock &amp; Fulfillment</title>
        <meta name="description" content="Dulku Freight delivers cross-docking, container transloading, warehouse storage, and 3PL fulfillment services in Avenel, NJ near Port Newark, supporting importers, trucking companies, freight forwarders, distributors, and eCommerce brands." />
        <meta property="og:title" content="Dulku Freight | Cross Dock &amp; Fulfillment" />
        <meta property="og:description" content="Dulku Freight delivers cross-docking, container transloading, warehouse storage, and 3PL fulfillment services in Avenel, NJ near Port Newark, supporting importers, trucking companies, freight forwarders, distributors, and eCommerce brands." />
        <meta property="og:image" content="/og-image.png?v=1" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dulku Freight | Cross Dock &amp; Fulfillment" />
        <meta name="twitter:description" content="Dulku Freight delivers cross-docking, container transloading, warehouse storage, and 3PL fulfillment services in Avenel, NJ near Port Newark, supporting importers, trucking companies, freight forwarders, distributors, and eCommerce brands." />
        <meta name="twitter:image" content="/og-image.png?v=1" />
        <HeadContent />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=6" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=6" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=6" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=6" />
        <link rel="manifest" href="/site.webmanifest?v=6" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}

