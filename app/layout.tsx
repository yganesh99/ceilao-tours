import type { Metadata } from 'next';
import { Playfair_Display, Inter, Poiret_One } from 'next/font/google';
import localFont from 'next/font/local';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FramerProvider } from '@/components/layout/FramerProvider';
import './globals.css';

const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
	display: 'swap',
});

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const poiretOne = Poiret_One({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-poiret-one',
	display: 'swap',
});

const bilgie = localFont({
	src: '../public/bilgie.ttf',
	variable: '--font-bilgie',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Ceilão Travel & Tours | Curated Journeys. Heartfelt Experiences.',
	description:
		'Bespoke journeys for the discerning traveler. Discover the Soul of Sri Lanka through refined hospitality where every journey carries purpose.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${playfair.variable} ${inter.variable} ${poiretOne.variable} ${bilgie.variable} antialiased bg-background text-foreground`}
			>
				<Header />
				<FramerProvider>
					<main className='min-h-fit'>{children}</main>
				</FramerProvider>
				<Footer />
			</body>
		</html>
	);
}
