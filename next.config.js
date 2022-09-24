/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER: process.env.SERVER,
    },
    images: {
        domains: ['48tools.com'],
    },
};

module.exports = nextConfig;
