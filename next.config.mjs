/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
    ],
  },

};

export default nextConfig;

