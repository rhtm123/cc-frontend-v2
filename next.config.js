/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    API_URL: process.env.API_URL,
    HOSTNAME: process.env.HOSTNAME,
    API_PYTHON_CODE_URL:process.env.API_PYTHON_CODE_URL,
    EDITOR_HANDLE_URL:process.env.EDITOR_HANDLE_URL,
    LAB_SITE:process.env.LAB_SITE,
  },
  webpack: (config, { dev, isServer }) => {
    // Note, preact is only enabled for production builds (`next build`)
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      };
    }
 
    return config;
  },
}

module.exports = nextConfig
