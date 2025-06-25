/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC and use Babel instead to avoid binary loading issues
  swcMinify: false,
  compiler: {
    // Remove React properties in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ensure compatibility with WebContainer environment
  experimental: {
    esmExternals: 'loose',
  }
}

module.exports = nextConfig