'use client';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

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
		<section
			id='about'
			className='bg-white py-4'
		>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-20'>
				<div className='bg-[#d0d8c3] shadow-xl grid md:grid-cols-2 text-center'>
					<div className='bg-white py-4 sm:py-20 md:py-16 px-1 sm:px-10 lg:px-20 border-b md:border-b-0 md:border-r border-white/10'>
						<div className='flex flex-col items-center justify-center space-y-4'>
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className='self-start ml-16'
							>
								<div className='w-24 md:w-28'>
									<Image
										src='/assets/collection-logo.png'
										alt='Ceilão Collection Logo'
										width={0}
										height={0}
										sizes='100vw'
										className='w-full h-auto'
									/>
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<div className='w-56 md:w-80'>
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
						</div>
					</div>

					<div className='py-4 sm:py-20 md:py-16 px-1 sm:px-10 lg:px-20'>
						<h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 tracking-wide font-serif text-[#cea263]'>
							Our Story
						</h1>

						<p className='text-[#1f2b44] justify-center px-0.5 sm:px-1 mt-16'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
						<div className='mt-12 flex items-center justify-start gap-12'>
							<h3 className='text-xl sm:text-2xl font-serif text-[#cea263] tracking-wide'>
								Connect
							</h3>
							<div className='flex justify-center items-center gap-4'>
								{socialLinks.map((social, index) => (
									<Fragment key={social.name}>
										<Link
											href={social.href}
											className='text-primary/60 hover:text-accent transition-colors duration-300 transform hover:scale-110'
											aria-label={`Follow us on ${social.name}`}
										>
											<social.icon className='w-6 h-6 md:w-8 md:h-8' />
										</Link>
										{index < socialLinks.length - 1 && (
											<div className='w-[2px] h-6 bg-[#cea263]' />
										)}
									</Fragment>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
