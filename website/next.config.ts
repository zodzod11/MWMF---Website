import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
