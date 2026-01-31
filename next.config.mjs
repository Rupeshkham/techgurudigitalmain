/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // 🔴 cPanel static hosting साठी MUST
  output: 'export',

  // 🔴 assets path issue avoid करण्यासाठी
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
