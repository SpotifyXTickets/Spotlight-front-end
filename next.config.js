/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s1.ticketm.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.ticketmaster.eu",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
