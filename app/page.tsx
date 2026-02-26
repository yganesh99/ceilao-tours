'use client';

import { Hero } from '@/components/home/Hero';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/home/About'));
const SignatureExperiences = dynamic(
	() =>
		import('@/components/home/SignatureExperiences').then(
			(mod) => mod.SignatureExperiences,
		),
	{ ssr: false },
);
const TailorMadeJourneys = dynamic(
	() =>
		import('@/components/home/TailorMadeJourneys').then(
			(mod) => mod.TailorMadeJourneys,
		),
	{ ssr: false },
);
const TrustLegacy = dynamic(
	() =>
		import('@/components/home/TrustLegacy').then((mod) => mod.TrustLegacy),
	{ ssr: false },
);
const FoundationSection = dynamic(
	() =>
		import('@/components/home/FoundationSection').then(
			(mod) => mod.FoundationSection,
		),
	{ ssr: false },
);

export default function Home() {
	return (
		<>
			<div id='hero'>
				<Hero />
			</div>
			<div id='our-story'>
				<About />
			</div>
			<div className='w-[80%] mx-auto border-t border-accent border-0.5' />
			<div id='curated-collections'>
				<SignatureExperiences />
			</div>
			<div id='bespoke-travel'>
				<TailorMadeJourneys />
			</div>
			{/* <ConnectSection /> */}
			<div id='promise'>
				<TrustLegacy />
			</div>
			<div id='foundation'>
				<FoundationSection />
			</div>
		</>
	);
}
