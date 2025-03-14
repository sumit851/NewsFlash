/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.inshorts.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
