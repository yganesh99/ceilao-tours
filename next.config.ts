import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**', // Allows all paths from this domain
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
				port: '',
				pathname: '/**', // Allows all paths from this domain
			},
			{
				protocol: 'https',
				hostname: 'lakpura.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'ceilao-travel.b-cdn.net',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
