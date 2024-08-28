/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static01.nyt.com',
        port: '',
        pathname: '/images/**',
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  async headers() {
    return [ 
        {
            // matching all API routes
            source: "/",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
}
}

// module.exports = {
//   experimental: {
//     nextScriptWorkers: true,
//   },
// }

// // next.config.js
// module.exports = {
//   async rewrites() {
//       return [
//         {
//           //https://dev-cdn.synt.com/synt-opt-in-script.js
//           source: '/api/:path*',
//           destination: 'https://api.example.com/:path*',
//         },
//       ]
//     },
// };

export default nextConfig;
