import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow next/image to serve images from these external hostnames
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // broad allow-all — production should be narrowed to specific hosts
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
