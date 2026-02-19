import { CommitmentHero } from '@/components/commitment/CommitmentHero';
import { CommitmentContent } from '@/components/commitment/CommitmentContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Our Commitment | Ceilão Travel & Tours',
	description:
		'Our commitment to promoting the spirit of Ceilão, social accountability, environmental responsibility, and service excellence.',
};

export default function CommitmentPage() {
	return (
		<main>
			<CommitmentHero />
			<CommitmentContent />
		</main>
	);
}
