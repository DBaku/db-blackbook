import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `experimental.reactCompiler` was moved to top-level `reactCompiler`
  // See: https://nextjs.org/docs/messages/invalid-next-config
  // Enable only if you're targeting the specific react compiler feature
  reactCompiler: true,
};

export default nextConfig;
