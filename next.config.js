/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable any future optimizations here.
  images: {
    // Allow serving static images from the /public folder by default.
    unoptimized: false
  }
}

module.exports = nextConfig
