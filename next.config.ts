import type { NextConfig } from "next";

const isPagesExport = process.env.EXPORT_MODE === 'true'

const nextConfig: NextConfig = {
  ...(isPagesExport && {
    output: 'export',
    basePath: '/portfolio',
    images: { unoptimized: true },
  }),
};

export default nextConfig;
