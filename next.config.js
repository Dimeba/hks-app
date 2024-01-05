/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
		googleAnalytics: process.env.GOOGLE_ANALYTICS
	},
	images: {
		domains: ['images.ctfassets.net', 'videos.ctfassets.net'],
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 768, 1024, 1280, 1600]
		// imageSizes: [16, 32, 48, 64, 96]
	}
}

module.exports = nextConfig
