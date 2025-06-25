/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use webpack for compilation instead of SWC
  webpack: (config, { dev, isServer }) => {
    // Optimize for WebContainer environment
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@next/swc-linux-x64-gnu': false,
        '@next/swc-linux-x64-musl': false,
      }
    }
    return config
  },
  // Disable SWC minification
  swcMinify: false,
  // Use Terser for minification instead
  experimental: {
    forceSwcTransforms: false,
  }
}

module.exports = nextConfig