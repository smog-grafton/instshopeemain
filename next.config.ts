import type { NextConfig } from "next";

const laravelApiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
const laravelApiPattern = (() => {
  if (!laravelApiUrl) return null;

  try {
    const parsed = new URL(laravelApiUrl);
    return {
      protocol: parsed.protocol.replace(":", "") as "http" | "https",
      hostname: parsed.hostname,
      port: parsed.port || undefined,
      pathname: "/**",
    };
  } catch {
    return null;
  }
})();

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
      ...(laravelApiPattern ? [laravelApiPattern] : []),
    ],
  },
};

export default nextConfig;
