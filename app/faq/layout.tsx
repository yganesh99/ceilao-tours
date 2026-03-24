import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Frequently Asked Questions | Ceilão Travel & Tours',
	description:
		'Answers about bespoke travel, visas, seasons, logistics, culture, and wellbeing for your Sri Lanka journey with Ceilão Travel & Tours.',
};

export default function FaqLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
