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
			<Hero />
			<About />
			{/* <div className='w-full border-t border-white border-40' /> */}
			<SignatureExperiences />
			<TailorMadeJourneys />
			<ConnectSection />
			<TrustLegacy />
			<FoundationSection />
		</>
	);
}
