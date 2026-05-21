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
      {
        protocol: "https",
        hostname: "nightclub-api-7yf5.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
