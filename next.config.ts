import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow LAN devices to hit this dev server. Next 16 blocks cross-origin
  // requests to /_next/webpack-hmr etc. by default. Wildcard is fine because
  // this only matters in `next dev` — never in production.
  allowedDevOrigins: ["*"],
};

export default nextConfig;
