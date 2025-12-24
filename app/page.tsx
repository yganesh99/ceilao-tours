import { Hero } from '@/components/home/Hero';
import { SignatureExperiences } from '@/components/home/SignatureExperiences';
import { TailorMadeJourneys } from '@/components/home/TailorMadeJourneys';
import { TrustLegacy } from '@/components/home/TrustLegacy';

export default function Home() {
	return (
		<>
			<Hero />
			<SignatureExperiences />
			<TailorMadeJourneys />
			<TrustLegacy />
		</>
	);
}
