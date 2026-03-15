/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jcoco.org",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
