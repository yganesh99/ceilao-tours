'use client';

import { useState, Fragment } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/TikTokIcon';
// import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import LaunchingSoonModal from '@/components/ui/LaunchingSoonModal';

export default function About() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const socialLinks = [
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/ceilao.travels?igsh=NHR2eHZmdDhsaDY=',
			icon: Instagram,
		},
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/share/18869zyGwa/?mibextid=wwXIfr',
			icon: Facebook,
		},
		{
			name: 'TikTok',
			href: 'https://www.tiktok.com/@ceilao.travels?_r=1&_t=ZS-94CF0CH815A',
			icon: TikTokIcon,
		},
	];

	return (
		<Section
			id='about'
			className='bg-white py-8 md:py-24'
		>
			<div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto'>
				{/* Logo Side */}
				<m.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='w-full md:w-1/3 flex flex-row md:flex-col items-center justify-center md:gap-8'
				>
					<div className='flex-1 md:flex-none flex justify-end md:justify-center pr-10 md:pr-0 md:w-28'>
						<Image
							src='https://ceilao-travel.b-cdn.net/collection-logo.webp'
							alt='Ceilão Collection Logo'
							width={0}
							height={0}
							sizes='100vw'
							className='w-20 md:w-full h-auto mt-4 md:mt-0'
						/>
					</div>
					{/* Separator */}
					<m.div
						initial={{ opacity: 0, scaleY: 0 }}
						whileInView={{ opacity: 1, scaleY: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className='md:hidden shrink-0 w-px h-24 bg-[#cea263]/60'
					/>
					<div className='flex-1 md:flex-none flex justify-start md:justify-center pl-8 md:pl-0 md:w-64 mt-2'>
						<Image
							src='https://ceilao-travel.b-cdn.net/logo.webp'
							alt='Ceilão Logo'
							width={0}
							height={0}
							sizes='100vw'
							className='w-32 md:w-full h-auto'
						/>
					</div>
				</m.div>

				{/* Separator */}
				<m.div
					initial={{ opacity: 0, scaleY: 0 }}
					whileInView={{ opacity: 1, scaleY: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className='hidden md:block w-px h-96 bg-[#cea263]/60'
				/>
				{/* <m.div
					initial={{ opacity: 0, scaleX: 0 }}
					whileInView={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className='md:hidden w-32 h-px bg-[#cea263]/40'
				/> */}

				{/* Text Side */}
				<m.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className='w-full md:w-2/3 text-center md:text-left space-y-8'
				>
					<div className='space-y-4'>
						<h1 className='mt-0 text-2xl md:text-4xl lg:text-5xl font-serif text-[#1f2b44]'>
							Our Story
						</h1>
						<div className='w-24 h-px bg-accent mt-4 mx-auto md:mx-0' />
						<p className='text-black/80 text-sm lg:text-lg leading-relaxed font-light'>
							Ceilão Travel &amp; Tours was founded on the belief
							that the true essence of Sri Lanka lies beyond the
							standard itinerary. It is found in the
							&quot;unseen&quot; moments, the raw beauty of our
							landscapes and the incomparable warmth of our
							people.
						</p>
						<p className='text-black/80 text-sm lg:text-lg leading-relaxed font-light'>
							As part of the Ceilão Collection, we curate bespoke
							journeys for the traveler who seeks depth over
							distance. We approach every itinerary as a
							handcrafted work of art, bridging the gap between
							world-class luxury and the authentic soul of our
							home.
						</p>
						<p className='text-black/80 text-sm lg:text-lg leading-relaxed font-light'>
							Our story is inseparable from the land we love.
							Through our partnership with the Hopeful Foundation,
							every journey contributes to our local communities,
							turning your discovery of the island into a lasting
							legacy for its people. We invite you to experience a
							Sri Lanka that is not just seen, but truly felt.
						</p>
					</div>

					<div className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8'>
						<h3 className='text-xl font-serif text-[#cea263] tracking-wide'>
							Connect
						</h3>
						<div className='flex items-center gap-4'>
							{socialLinks.map((social, index) => (
								<Fragment key={social.name}>
									<a
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary/60 hover:text-accent transition-colors duration-300 transform hover:scale-110 flex items-center justify-center p-1'
										aria-label={`Follow us on ${social.name}`}
									>
										<social.icon className='w-5 h-5 md:w-6 md:h-6' />
									</a>
									{index < socialLinks.length - 1 && (
										<div className='w-px h-4 bg-[#cea263]' />
									)}
								</Fragment>
							))}
						</div>
					</div>
				</m.div>
			</div>

			<LaunchingSoonModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</Section>
	);
}
