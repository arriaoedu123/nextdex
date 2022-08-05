/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.traction.one", "assets.pokemon.com"],
  },
};

module.exports = nextConfig;
