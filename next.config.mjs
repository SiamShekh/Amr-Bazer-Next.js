/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.redbarn.com', 'i.ibb.co', 'feed-pet-11786.firebaseapp.com'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.redbarn.com',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            },
            {
                protocol: 'https',
                hostname: 'feed-pet-11786.firebaseapp.com',
            },
        ],
    },

};

export default nextConfig;
