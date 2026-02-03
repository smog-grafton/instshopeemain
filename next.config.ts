import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deo.shopeemobile.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "proxy.extractcss.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "down-my.img.susercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cf.shopee.com.my",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.gstatic.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
