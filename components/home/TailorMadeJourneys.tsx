'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function TailorMadeJourneys() {
	return (
		<Section
			className='bg-white relative overflow-hidden '
			fullWidth
		>
			<div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px] border-accent border-2'>
				{/* Image Side */}
				{/* Image Side */}
				<div className='relative w-full md:h-full'>
					<Image
						src='/assets/map.png'
						alt='Tailor Made Journey'
						width={200}
						height={200}
						className='w-full h-auto md:h-full object-cover lg:object-contain'
					/>
				</div>

				{/* Content Side */}
				<div className='flex flex-col justify-center px-8 md:px-20 py-16 bg-[#d0d8c3] text-black'>
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
						<h2 className='text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1f2b44]'>
							Crafting Your <br />
							Perfect Escape
						</h2>
						<div className='w-24 h-px bg-accent mt-6' />
						<p className='text-black/80 text-lg leading-relaxed font-light'>
							We believe that true luxury lies in the details. Our
							travel designers work closely with you to curate a
							journey that reflects your passions, pace, and
							preferences. From private villas to exclusive
							cultural access, every moment is tailored to you.
						</p>
						<ul className='space-y-3 py-4 text-black/90'>
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
							<Link
								href={`https://wa.me/94777123456?text=Hi, I am interested in booking the ${''} package.`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button size='lg'>Start Planning</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</Section>
	);
}
