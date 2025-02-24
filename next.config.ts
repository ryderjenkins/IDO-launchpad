import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource', // This will emit the file to the output directory
    });
    return config;
  },
};

export default nextConfig;
