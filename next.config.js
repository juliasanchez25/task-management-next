/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      'ssr': true,
      'displayName': true,
      'preprocess': false
    }
  }
};

module.exports = nextConfig;
