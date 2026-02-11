'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
	return (
		<section className='relative w-full aspect-video md:aspect-auto h-[340px] md:h-screen min-h-auto md:min-h-[800px] overflow-hidden'>
			{/* Background Image/Video Placeholder */}
			<div className='absolute inset-0 bg-neutral-900 overflow-hidden'>
				{/* Desktop Video */}
				<video
					className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none'
					autoPlay
					muted
					loop
					playsInline
				>
					<source
						src='/assets/hero.webm'
						media='(min-width: 768px)'
						type='video/webm'
					/>
					<source
						src='/assets/hero-m.webm'
						media='(max-width: 767px)'
						type='video/webm'
					/>
				</video>
				<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent' />
			</div>
		</section>
	);
}
