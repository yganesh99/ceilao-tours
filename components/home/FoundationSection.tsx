'use client';

import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function FoundationSection() {
	return (
		<Section className='bg-white py-16 md:py-24'>
			<div className='flex flex-col md:flex-row items-center gap-x-8 gap-y-2 md:gap-12 max-w-6xl mx-auto'>
				{/* Logo Side */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='w-full md:w-1/3 flex justify-center md:justify-start'
				>
					<div className='relative w-48 h-20 md:w-64 md:h-64'>
						<Image
							src='/assets/hopeful-foundation.png'
							alt='Hopeful Foundation Logo'
							fill
							className='object-contain'
						/>
					</div>
				</motion.div>

				{/* Separator */}
				<motion.div
					initial={{ opacity: 0, scaleY: 0 }}
					whileInView={{ opacity: 1, scaleY: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className='hidden md:block w-px h-48 bg-[#cea263]/40'
				/>

				{/* Text Side */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className='w-full md:w-2/3 text-center md:text-left space-y-4'
				>
					<p className='text-[#1f2b44] leading-relaxed'>
						We believe in <strong>giving back</strong> the power of
						travel to transform lives, not just for our guests but
						for our local communities. Through the Hopeful
						Foundation, a portion of every journey contributes to
						education and healthcare initiatives in rural Sri Lanka.
						We are committed to sustainable tourism that preserves
						our heritage and empowers future generations.
					</p>
					<Button
						type='button'
						size='sm'
					>
						Contribute
					</Button>
				</motion.div>
			</div>
		</Section>
	);
}
