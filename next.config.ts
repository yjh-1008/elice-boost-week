import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/academy/:path*',
        destination: 'https://api-rest.elice.io/:academy*',
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
