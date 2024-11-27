import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    serverActions:{
      bodySizeLimit: '5mb'
    }
  },
  reactStrictMode:false
};

export default nextConfig;
