const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/profile' : '',
  assetPrefix: isProd ? '/profile' : '',
};

export default nextConfig;
