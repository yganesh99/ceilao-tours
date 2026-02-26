'use client';

import { useState, useRef, useEffect } from 'react';
import { MuteToggleButton } from '@/components/ui/MuteToggleButton';
import { useInView } from 'framer-motion';
import { preload } from 'react-dom';

export function Hero() {
	preload('https://ceilao-travel.b-cdn.net/hero-poster.jpg', {
		as: 'image',
		fetchPriority: 'high',
	});
	const [isMuted, setIsMuted] = useState(true);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1 });

	useEffect(() => {
		if (!isInView) {
			setIsMuted(true);
		}
	}, [isInView]);

	return (
		<section
			ref={sectionRef}
			className='relative w-full h-[75vw] xs:h-[65vw] sm:h-[75vw] lg:h-screen overflow-hidden'
		>
			<div className='absolute inset-0 overflow-hidden'>
				{/* Mobile (9:16) */}
				<video
					className='absolute inset-0 w-full h-full object-contain object-[20%_100%] xs:hidden bg-black'
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

				{/* Tablet (3:4) */}
				<video
					className='absolute inset-0 w-full h-full object-contain object-[20%_100%] hidden xs:block sm:hidden'
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

				{/* Desktop (16:9) */}
				<video
					className='absolute inset-0 w-full h-full object-cover hidden sm:block'
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
