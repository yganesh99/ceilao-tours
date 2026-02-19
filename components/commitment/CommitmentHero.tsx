'use client';

import Image from 'next/image';

export function CommitmentHero() {
	return (
		<section className='relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/assets/tailor1.webp'
					alt='Our Commitment Hero Background'
					fill
					className='object-cover brightness-50'
					priority
				/>
			</div>

			{/* Content */}
			<div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
				<h1 className='text-4xl md:text-5xl lg:text-6xl font-playfair text-accent mb-6 tracking-wide'>
					Our Commitment
				</h1>
				<p className='text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto font-inter'>
					Honoring the spirit of Ceilão through responsibility,
					integrity, and heartfelt service.
				</p>
			</div>
		</section>
	);
}
