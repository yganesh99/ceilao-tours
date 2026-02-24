'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MuteToggleButton } from '@/components/ui/MuteToggleButton';

interface PageHeaderProps {
	title?: string;
	subtitle?: string;
	image: string;
	className?: string;
	isVideo?: boolean;
	videoSrc?: string;
}

export function PageHeader({
	title,
	subtitle,
	image,
	className,
	isVideo = false,
	videoSrc,
}: PageHeaderProps) {
	const [isMuted, setIsMuted] = useState(true);

	return (
		<section
			className={cn(
				'relative h-[90vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden',
				className,
			)}
		>
			<div className='absolute inset-0 z-0'>
				{!isVideo && !videoSrc && (
					<Image
						src={image}
						alt={title || ''}
						fill
						className='object-cover'
						priority
					/>
				)}
				{videoSrc && (
					<video
						className='absolute inset-0 w-full h-full object-contain md:object-cover object-[20%_100%] bg-black'
						autoPlay
						muted={isMuted}
						loop
						playsInline
						preload='metadata'
					>
						<source
							src={videoSrc}
							type='video/mp4'
						/>
					</video>
				)}
				{isVideo && (
					<div className='absolute inset-0 bg-neutral-900 overflow-hidden'>
						<iframe
							className='absolute top-1/2 left-1/2 pointer-events-none'
							src={image}
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							style={{
								border: 'none',
								width: '100vw',
								height: '56.25vw', // 16:9 aspect ratio
								minHeight: '100vh',
								minWidth: '177.78vh', // 16:9 aspect ratio
								transform: 'translate(-50%, -50%)',
							}}
						></iframe>
						<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent' />
					</div>
				)}
				<div className='absolute inset-0 bg-black/40' />

				{/* Sound Control for direct videos */}
				{videoSrc && (
					<MuteToggleButton
						isMuted={isMuted}
						onClick={() => setIsMuted((prev) => !prev)}
						className='bottom-8 right-8'
					/>
				)}
			</div>

			<div className='relative z-10 text-center text-white px-4 space-y-4 mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700'>
				{subtitle && (
					<span className='block text-accent text-xs md:text-base font-medium uppercase tracking-[0.2em] mb-2'>
						{subtitle}
					</span>
				)}
				<h1 className='text-lg md:text-6xl font-bold font-playfair'>
					{title}
				</h1>
			</div>
		</section>
	);
}
