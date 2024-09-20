import createWithPWA from 'next-pwa';

const withPWA = createWithPWA({
    dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(nextConfig);
