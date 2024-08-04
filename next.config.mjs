/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tiendariver.vteximg.com.br',
            },
        ],
    },
};

export default nextConfig;
