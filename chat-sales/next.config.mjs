// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "uploadthing.com",
//       "utfs.io",
//       "img.clerk.com",
//       "subdomain",
//       "files.stripe.com",
//     ],
//   },
//   //reactStrictMode: false,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
      {
        protocol: "https",
        hostname: "wordpress-1269066-4577871.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;
