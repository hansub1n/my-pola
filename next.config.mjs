/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bklgchsqepfcmckrvbug.supabase.co',
        pathname: '/storage/v1/object/public/challenges/**',
      },
      {
        protocol: 'https',
        hostname: 'bklgchsqepfcmckrvbug.supabase.co',
        pathname: '/storage/v1/object/public/items/**',
      },
      {
        protocol: 'https',
        hostname: 'henszvzcktnwvspttjvo.supabase.co',
        pathname: '/storage/v1/object/public/items/**',
      },
      {
        protocol: 'https',
        hostname: 'henszvzcktnwvspttjvo.supabase.co',
        pathname: '/storage/v1/object/public/challenges/**',
      },
    ],
  },
};

export default nextConfig;
