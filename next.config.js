/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // only if you really need it
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
