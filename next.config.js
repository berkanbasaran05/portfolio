/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "localhost", "lh3.googleusercontent.com","s3-alpha-sig.figma.com"],
  },
}

module.exports = nextConfig
