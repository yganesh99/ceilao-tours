'use client';

import { useState, useRef } from 'react';
import { MuteToggleButton } from '@/components/ui/MuteToggleButton';
import { useInView } from 'framer-motion';
import { preload } from 'react-dom';

export function Hero() {
	preload('https://ceilao-travel.b-cdn.net/hero-poster.jpg', {
		as: 'image',
		fetchPriority: 'high',
	});
	const [isMutedState, setIsMutedState] = useState(true);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1 });

	// Always mute when out of view, otherwise respect user's explicit choice
	const isMuted = !isInView || isMutedState;

	return (
		<section
			ref={sectionRef}
			className='relative w-full h-[75vw] xs:h-[65vw] sm:h-[75vw] lg:h-screen overflow-hidden'
		>
			<div className='absolute inset-0 overflow-hidden'>
				<video
					className='absolute inset-0 w-full h-full object-contain object-[20%_100%] sm:object-cover sm:object-[0%_0%] bg-black'
					autoPlay
					muted={isMuted}
					loop
					playsInline
					preload='metadata'
					// @ts-expect-error React 19 supports fetchpriority but types might not
					fetchPriority='high'
					poster='https://ceilao-travel.b-cdn.net/hero-poster.jpg'
				>
					<source
						src='https://ceilao-travel.b-cdn.net/hero-s.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Optional overlays */}
				{/* <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none' /> */}

				{/* Sound Control */}
				<MuteToggleButton
					isMuted={isMuted}
					onClick={() => setIsMutedState((prev) => !prev)}
					className='bottom-8 right-8'
				/>
			</div>
		</section>
	);
}
