/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
  
// }


const nextConfig =withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    reactStrictMode:true,
    swcMinify:true,
    images: {
      unoptimized: true,
    },
  }],
  // your other plugins here

]);
module.exports = nextConfig
