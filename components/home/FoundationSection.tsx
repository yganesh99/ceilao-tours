'use client';
import { useState } from 'react';

import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import ImpactStoryModal from '../ui/ImpactStoryModal';

export function FoundationSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
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
							src='/assets/hopeful-foundation.webp'
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
						<strong>A commitment to our people.</strong> Every
						journey supports grassroots programs that empower the
						next generation and preserve our island’s heritage. We
						work directly with our community to ensure every impact
						reaches the source, creating a purposeful and lasting
						change.
					</p>
					<Button
						onClick={() => setIsModalOpen(true)}
						type='button'
						size='sm'
					>
						Explore the Impact
					</Button>
				</motion.div>
			</div>
			<ImpactStoryModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</Section>
	);
}
