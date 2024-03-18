/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.redbarn.com',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            },
        ],
    },
};

export default nextConfig;
