import type { Metadata } from 'next';
import { Playfair_Display, Inter, Poiret_One } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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

export const metadata: Metadata = {
	title: 'Ceilão Travel & Tours',
	description:
		'Experience the timeless elegance of Sri Lanka with Ceilão Travel. Curated bespoke journeys, signature experiences, and unparalleled luxury.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${playfair.variable} ${inter.variable} ${poiretOne.variable} antialiased bg-background text-foreground`}
			>
				<Header />
				<main className='min-h-screen'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
