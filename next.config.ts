import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Build sırasında TS hataları olsa bile derlemeye devam et
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
