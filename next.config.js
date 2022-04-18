/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'pokeapi.co'], //permitir este dominio
  }
}

module.exports = nextConfig
