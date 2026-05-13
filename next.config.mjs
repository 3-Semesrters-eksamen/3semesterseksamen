/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
