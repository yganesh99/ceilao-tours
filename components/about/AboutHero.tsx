'use client';

import Image from 'next/image';

export function AboutHero() {
	return (
		<section className='relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/assets/thumbnail-3.webp'
					alt='About Us Hero Background'
					fill
					className='object-cover brightness-50'
					priority
				/>
			</div>

			{/* Content */}
			<div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
				<h1 className='text-4xl md:text-5xl lg:text-6xl font-playfair text-accent mb-6 tracking-wide'>
					About Us
				</h1>
				<p className='text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto font-inter'>
					Discovering the soul of Sri Lanka through curated journeys.
				</p>
			</div>
		</section>
	);
}
