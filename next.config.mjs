import createWithPWA from 'next-pwa';

const withPWA = createWithPWA({
    dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

export default withPWA(nextConfig);
