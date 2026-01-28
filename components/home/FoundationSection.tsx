'use client';

import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function FoundationSection() {
	return (
		<Section className='bg-background py-16 md:py-24'>
			<div className='flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl mx-auto'>
				{/* Logo Side */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='w-full md:w-1/3 flex justify-center md:justify-end'
				>
					<div className='relative w-48 h-48 md:w-64 md:h-64'>
						<Image
							src='/assets/hopeful-foundation.png'
							alt='Hopeful Foundation Logo'
							fill
							className='object-contain'
						/>
					</div>
				</motion.div>

				{/* Text Side */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className='w-full md:w-2/3 text-center md:text-left space-y-4'
				>
					<h3 className='text-2xl md:text-3xl font-playfair text-[#1f2b44] mb-4'>
						Giving Back
					</h3>
					<p className='text-muted-foreground leading-relaxed'>
						We believe in the power of travel to transform lives,
						not just for our guests but for our local communities.
						Through the Hopeful Foundation, a portion of every
						journey contributes to education and healthcare
						initiatives in rural Sri Lanka. We are committed to
						sustainable tourism that preserves our heritage and
						empowers future generations.
					</p>
				</motion.div>
			</div>
		</Section>
	);
}
