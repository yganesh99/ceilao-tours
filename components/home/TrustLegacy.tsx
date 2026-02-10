'use client';

import { Section } from '@/components/ui/Section';
import { ShieldCheck, Leaf, Star, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
	{
		icon: Star,
		title: 'Refined Curation',
		description:
			'A lifetime of island secrets, edited for the exceptional.',
	},
	{
		icon: ShieldCheck,
		title: 'Peace of Mind',
		description: 'We manage the complexity. You stay in the moment.',
	},
	{
		icon: Leaf,
		title: 'Mindful Luxury',
		description:
			'Sanctuaries that honor the land, preserving the heritage of our people and places.',
	},
	{
		icon: HeartHandshake,
		title: 'Intimate Encounters',
		description:
			'Private moments with the artisans, historians, and estates that define our island.',
	},
];

export function TrustLegacy() {
	return (
		<Section className='bg-background'>
			<div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
				<h2 className='text-3xl md:text-4xl font-playfair text-accent'>
					The Ceilão Promise
				</h2>
				<div className='w-24 h-px bg-accent mx-auto mt-6' />
				<p className='text-[#1f2b44] text-lg font-light leading-relaxed'>
					Your journey is more than just a vacation; it is a tapestry
					of memories woven with trust, excellence, and a deep love
					for our island home.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{features.map((feature, index) => (
					<motion.div
						key={feature.title}
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className='flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary/20 transition-colors'
					>
						<div className='h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4 text-accent'>
							<feature.icon className='h-6 w-6' />
						</div>
						<h3 className='text-lg font-bold font-playfair text-accent mb-2'>
							{feature.title}
						</h3>
						<p className='text-sm text-[#1f2b44] leading-relaxed'>
							{feature.description}
						</p>
					</motion.div>
				))}
			</div>
		</Section>
	);
}
