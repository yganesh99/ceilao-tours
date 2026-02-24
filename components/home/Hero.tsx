'use client';

import { useState } from 'react';
import { MuteToggleButton } from '@/components/ui/MuteToggleButton';

export function Hero() {
	const [isMuted, setIsMuted] = useState(true);

	return (
		<section className='relative w-full h-[36vh] lg:h-screen overflow-hidden'>
			<div className='absolute inset-0 overflow-hidden'>
				{/* Mobile (9:16) */}
				<video
					className='absolute inset-0 w-full h-full object-contain object-[20%_100%] sm:hidden bg-black'
					autoPlay
					muted={isMuted}
					loop
					playsInline
					preload='metadata'
					// poster='/assets/hero-m-poster.jpg'
				>
					<source
						src='/assets/hero-s.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Tablet (3:4) */}
				<video
					className='absolute inset-0 w-full h-full object-cover hidden sm:block md:hidden'
					autoPlay
					muted={isMuted}
					loop
					playsInline
					preload='metadata'
					// poster='/assets/hero-t-poster.jpg'
				>
					<source
						src='/assets/hero-s.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Desktop (16:9) */}
				<video
					className='absolute inset-0 w-full h-[3/4] object-cover hidden md:block'
					autoPlay
					muted={isMuted}
					loop
					playsInline
					preload='metadata'
					// poster='/assets/hero-d-poster.jpg'
				>
					<source
						src='/assets/hero-s.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Optional overlays */}
				<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none' />

				{/* Sound Control */}
				<MuteToggleButton
					isMuted={isMuted}
					onClick={() => setIsMuted((prev) => !prev)}
					className='bottom-8 right-8'
				/>
			</div>
		</section>
	);
}
