import type { NextConfig } from "next";

// Στατικό export για GitHub Pages (βλ. .github/workflows/deploy.yml).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
