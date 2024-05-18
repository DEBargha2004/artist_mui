/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "unsplash.com",
      "images.unsplash.com",
      "cdna.artstation.com",
      "cdnb.artstation.com",
      "www.gravatar.com"

    ],
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

export default nextConfig;
