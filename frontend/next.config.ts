import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/no",
        permanent: false, // 302 redirect for root
      },
      {
        source: "/cacao",
        destination: "/no/cacao",
        permanent: true, // 301 redirect
      },
      {
        source: "/about",
        destination: "/no/about",
        permanent: true,
      },
      {
        source: "/bach",
        destination: "/no/bach",
        permanent: true,
      },
      {
        source: "/sound",
        destination: "/no/sound",
        permanent: true,
      },
      {
        source: "/nada",
        destination: "/no/acupuncture/nada",
        permanent: true,
      },
      {
        source: "/acupuncture",
        destination: "/no/acupuncture",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
