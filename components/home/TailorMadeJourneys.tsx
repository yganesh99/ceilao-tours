'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function TailorMadeJourneys() {
	return (
		<Section
			className='bg-secondary/30 relative overflow-hidden'
			fullWidth
		>
			<div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
				{/* Image Side */}
				<div className='relative h-96 md:h-full w-full'>
					<Image
						src='https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2866&auto=format&fit=crop'
						alt='Tailor Made Journey'
						fill
						className='object-cover'
					/>
				</div>

				{/* Content Side */}
				<div className='flex flex-col justify-center px-8 md:px-20 py-16 bg-primary text-secondary'>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='space-y-6 max-w-xl'
					>
						<span className='text-accent text-sm font-medium uppercase tracking-widest'>
							Bespoke Travel
						</span>
						<h2 className='text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white'>
							Crafting Your <br />
							Perfect Escape
						</h2>
						<p className='text-white/80 text-lg leading-relaxed font-light'>
							We believe that true luxury lies in the details. Our
							travel designers work closely with you to curate a
							journey that reflects your passions, pace, and
							preferences. From private villas to exclusive
							cultural access, every moment is tailored to you.
						</p>
						<ul className='space-y-3 py-4 text-white/90'>
							<li className='flex items-center space-x-3'>
								<span className='w-1.5 h-1.5 rounded-full bg-accent' />
								<span>Personalized Itineraries</span>
							</li>
							<li className='flex items-center space-x-3'>
								<span className='w-1.5 h-1.5 rounded-full bg-accent' />
								<span>Private Chauffeur & Guide</span>
							</li>
							<li className='flex items-center space-x-3'>
								<span className='w-1.5 h-1.5 rounded-full bg-accent' />
								<span>24/7 Concierge Support</span>
							</li>
						</ul>
						<div className='pt-6'>
							<Button
								size='lg'
								className='bg-accent text-white hover:bg-accent/80'
							>
								Start Planning
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</Section>
	);
}
