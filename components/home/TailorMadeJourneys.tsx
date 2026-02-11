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
							No two travelers are the same, and neither should
							their journeys be. Our travel designers curate every
							detail to your passions, pace, and preferences.
							Beyond the standard itinerary, we handcraft personal
							experiences as individual as you are.
						</p>
						<ul className='space-y-4 py-4 text-black/90'>
							{[
								{
									title: 'Handcrafted Itineraries',
									desc: 'Meticulously designed to reflect your unique spirit.',
								},
								{
									title: 'Seamless Arrival',
									desc: 'VIP fast-track and meet-and-greet for an elegant transition.',
								},
								{
									title: 'Private Chauffeur-Guide',
									desc: 'Seamless travel led by the island’s most expert storytellers.',
								},
								{
									title: 'Anticipatory Concierge',
									desc: 'Discrete, 24/7 support for a truly effortless journey.',
								},
								{
									title: 'Exclusive Access',
									desc: 'Private "key-holder" entry to Sri Lanka’s most storied hidden gems.',
								},
							].map((item, index) => (
								<li
									key={index}
									className='flex items-start space-x-3'
								>
									<span className='w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0' />
									<div className='flex flex-col'>
										<span className='font-medium text-[#1f2b44]'>
											{item.title}
										</span>
										<p className='text-sm text-black/70 leading-relaxed font-light'>
											{item.desc}
										</p>
									</div>
								</li>
							))}
						</ul>
						<div className='pt-6'>
							<Link
								href={`https://wa.me/94777123456?text=Hi, I am interested in booking the ${''} package.`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button size='lg'>Begin Your Curation</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</Section>
	);
}
