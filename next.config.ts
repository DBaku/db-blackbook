import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error React Compiler is currently experimental
    reactCompiler: true,
  },
};

export default nextConfig;
