import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: false, // Conforme plano de performance para reduzir renderizações duplas
};

export default nextConfig;
