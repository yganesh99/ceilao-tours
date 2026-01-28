'use client';

import { Section } from '@/components/ui/Section';
import { ShieldCheck, Leaf, Star, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
	{
		icon: Star,
		title: 'Unrivaled Expertise',
		description:
			'Over 20 years of crafting intimate, high-end journeys across Sri Lanka.',
	},
	{
		icon: ShieldCheck,
		title: 'Peace of Mind',
		description:
			'From arrival to departure, every detail is managed with precision and care.',
	},
	{
		icon: Leaf,
		title: 'Sustainable Luxury',
		description:
			'We partner with eco-conscious properties and support local communities.',
	},
	{
		icon: HeartHandshake,
		title: 'Authentic Connections',
		description:
			'Exclusive access to local artisans, historians, and private estates.',
	},
];

export function TrustLegacy() {
	return (
		<Section className='bg-[#d0d8c3]'>
			<div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1f2b44]'>
					The Ceilao Promise
				</h2>
				<p className='text-muted-foreground text-lg font-light leading-relaxed'>
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
						<div className='h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4 text-[#1f2b44]'>
							<feature.icon className='h-6 w-6' />
						</div>
						<h3 className='text-lg font-bold font-[family-name:var(--font-playfair)] text-[#1f2b44] mb-2'>
							{feature.title}
						</h3>
						<p className='text-sm text-muted-foreground leading-relaxed'>
							{feature.description}
						</p>
					</motion.div>
				))}
			</div>
		</Section>
	);
}
