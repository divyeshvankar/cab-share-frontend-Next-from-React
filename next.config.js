/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });

    return config;
  },
};

module.exports = nextConfig
