/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require("next-intl/plugin");

try {
	const withNextIntl = createNextIntlPlugin();

	const nextConfig = {
		images: {
			remotePatterns: [
				{
					protocol: "https",
					hostname: "images.pexels.com",
				},
			],
		},
	};

	module.exports = withNextIntl(nextConfig);
} catch (error) {
	throw new Error(error);
}
