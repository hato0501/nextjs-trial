/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost', 'hydrogen-ems-engine-container'], //ここにドメインを指定
    },
}

module.exports = nextConfig
