/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'drive.google.com',
            }
        ]
    },
    experimental:{
        serverActions: true,
    },
}

module.exports = nextConfig
