import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.replit.dev", "*.repl.co", "*.worf.replit.dev"],
};

export default nextConfig;
