import type { NextConfig } from "next";

// docker
// const nextConfig: NextConfig = {
//   output: "standalone",
// };

// firebase
const nextConfig: NextConfig = {
  output: "export", // 產出純靜態
  images: { unoptimized: true }, // Firebase Hosting 沒有 Next Image server
  trailingSlash: true, // 建議：避免路由在 hosting 上 404（可選）
};

export default nextConfig;
