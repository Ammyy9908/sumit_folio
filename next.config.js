/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.buymeacoffee.com",
      "github.com",
      "avatars.githubusercontent.com",
      "user-images.githubusercontent.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
