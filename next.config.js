/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      pure: true,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
