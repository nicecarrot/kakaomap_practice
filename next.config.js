/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // using swc(rust based compiler)
  swcMinify: true,

  images: {
    domains: ["bgf-cu.xcache.kinxcdn.com"],
  },
};

module.exports = nextConfig;
