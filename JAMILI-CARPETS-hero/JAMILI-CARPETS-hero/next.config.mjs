/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com"
          }
        ], 
    },
  };
  
export default nextConfig;
  