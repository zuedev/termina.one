/** @type {import('next').NextConfig} */
const nextConfig = {};

// build as standalone if docker is building
if (process.env.DOCKER_BUILD) nextConfig.output = "standalone";

module.exports = nextConfig;
