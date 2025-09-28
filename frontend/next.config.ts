import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false, // 302 redirect for root
      },
      {
        source: "/cacao",
        destination: "/en/cacao",
        permanent: true, // 301 redirect
      },
      {
        source: "/about",
        destination: "/en/about",
        permanent: true,
      },
      {
        source: "/bach",
        destination: "/en/bach",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
