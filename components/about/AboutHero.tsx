'use client';

import Image from 'next/image';

export function AboutHero() {
	return (
		<section className='relative h-fit w-full flex items-center justify-center overflow-hidden mt-32'>
			{/* Content */}
			<div className='relative z-10 text-center px-4 max-w-4xl mx-auto py-2'>
				<h1 className='text-4xl md:text-5xl lg:text-6xl font-playfair text-[#1f2b44] tracking-wide'>
					About Us
				</h1>
				<div className='w-24 h-0.5 bg-accent mx-auto mt-6' />
			</div>
		</section>
	);
}
