import { Hero } from '@/components/home/Hero';
import { ConnectSection } from '@/components/home/ConnectSection';
import { FoundationSection } from '@/components/home/FoundationSection';
import { SignatureExperiences } from '@/components/home/SignatureExperiences';
import { TailorMadeJourneys } from '@/components/home/TailorMadeJourneys';
import { TrustLegacy } from '@/components/home/TrustLegacy';
import About from '@/components/home/About';

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
