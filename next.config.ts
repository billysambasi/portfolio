import type { NextConfig } from "next";

const isPagesExport = process.env.EXPORT_MODE === 'true'

const nextConfig: NextConfig = {
  ...(isPagesExport && {
    output: 'export',
    basePath: '/portfolio',
  }),
};

export default nextConfig;
