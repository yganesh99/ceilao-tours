import { AboutHero } from '@/components/about/AboutHero';
import { MissionVision } from '@/components/about/MissionVision';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Us | Ceilão Travel & Tours',
	description:
		'Learn about our mission to craft journeys that reveal the authentic soul of Sri Lanka.',
};

export default function AboutPage() {
	return (
		<main>
			<AboutHero />
			<MissionVision />
		</main>
	);
}
