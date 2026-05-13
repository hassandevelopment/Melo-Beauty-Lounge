/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Melo-Beauty-Lounge",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

export default nextConfig;
