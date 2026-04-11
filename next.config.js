/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // The project's eslint.config.js was a stale Vite scaffold that referenced
    // uninstalled packages. We skip ESLint during builds; tsc --noEmit still runs.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
