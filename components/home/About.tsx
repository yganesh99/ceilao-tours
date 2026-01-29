'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';

export default function About() {
	const socialLinks = [
		{
			name: 'Instagram',
			href: '#',
			icon: Instagram,
		},
		{
			name: 'Facebook',
			href: '#',
			icon: Facebook,
		},
		{
			name: 'Twitter',
			href: '#',
			icon: Twitter,
		},
	];

	return (
		<Section
			id='about'
			className='bg-white py-16 md:py-24'
		>
			<div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto'>
				{/* Logo Side */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='w-full md:w-1/3 flex flex-col items-center justify-center gap-8'
				>
					<div className='w-20 md:w-28'>
						<Image
							src='/assets/collection-logo.png'
							alt='Ceilão Collection Logo'
							width={0}
							height={0}
							sizes='100vw'
							className='w-full h-auto'
						/>
					</div>
					<div className='w-48 md:w-64'>
						<Image
							src='/assets/logo.png'
							alt='Ceilão Logo'
							width={0}
							height={0}
							sizes='100vw'
							className='w-full h-auto'
						/>
					</div>
				</motion.div>

				{/* Separator */}
				<motion.div
					initial={{ opacity: 0, scaleY: 0 }}
					whileInView={{ opacity: 1, scaleY: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className='hidden md:block w-px h-64 bg-[#cea263]/40'
				/>
				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					whileInView={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className='md:hidden w-32 h-px bg-[#cea263]/40'
				/>

				{/* Text Side */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className='w-full md:w-2/3 text-center md:text-left space-y-8'
				>
					<div className='space-y-4'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-serif text-[#1f2b44]'>
							Our Story
						</h1>
						<div className='w-24 h-px bg-accent mt-6 mx-auto md:mx-0' />
						<p className='text-muted-foreground leading-relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>

					<div className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8'>
						<h3 className='text-xl font-serif text-[#cea263] tracking-wide'>
							Connect
						</h3>
						<div className='flex items-center gap-4'>
							{socialLinks.map((social, index) => (
								<Fragment key={social.name}>
									<Link
										href={social.href}
										className='text-primary/60 hover:text-accent transition-colors duration-300 transform hover:scale-110'
										aria-label={`Follow us on ${social.name}`}
									>
										<social.icon className='w-5 h-5 md:w-6 md:h-6' />
									</Link>
									{index < socialLinks.length - 1 && (
										<div className='w-px h-4 bg-[#cea263]' />
									)}
								</Fragment>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</Section>
	);
}
