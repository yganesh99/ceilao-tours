import { Hero } from '@/components/home/Hero';
import { ConnectSection } from '@/components/home/ConnectSection';
import { FoundationSection } from '@/components/home/FoundationSection';
import { SignatureExperiences } from '@/components/home/SignatureExperiences';
import { TailorMadeJourneys } from '@/components/home/TailorMadeJourneys';
import { TrustLegacy } from '@/components/home/TrustLegacy';

export default function Home() {
	return (
		<>
			<Hero />
			<SignatureExperiences />
			<TailorMadeJourneys />
			<ConnectSection />
			<TrustLegacy />
			<FoundationSection />
		</>
	);
}
