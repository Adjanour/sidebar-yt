/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
    },
};

module.exports = {pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']}
