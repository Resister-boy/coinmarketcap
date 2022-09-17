/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MORALIS_SERVER: process.env.MORALIS_SERVER,
    MORALIS_SERVER_ID: process.env.MORALIS_SERVER_ID
  }
}

module.exports = nextConfig
