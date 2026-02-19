'use client';

export function Hero() {
	return (
		<section className='relative w-full h-[36vh] lg:h-screen overflow-hidden'>
			<div className='absolute inset-0 overflow-hidden'>
				{/* Mobile (9:16) */}
				<video
					className='absolute inset-0 w-full h-full object-[20%_100%] sm:hidden bg-black'
					autoPlay
					muted
					loop
					playsInline
					preload='metadata'
					poster='/assets/hero-m-poster.jpg'
				>
					<source
						src='/assets/hero-small.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Tablet (3:4) */}
				<video
					className='absolute inset-0 w-full h-full object-cover hidden sm:block md:hidden'
					autoPlay
					muted
					loop
					playsInline
					preload='metadata'
					poster='/assets/hero-t-poster.jpg'
				>
					<source
						src='/assets/hero-small.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Desktop (16:9) */}
				<video
					className='absolute inset-0 w-full h-full object-cover hidden md:block'
					autoPlay
					muted
					loop
					playsInline
					preload='metadata'
					poster='/assets/hero-d-poster.jpg'
				>
					<source
						src='/assets/hero-small.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Optional overlays */}
				<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent' />
			</div>
		</section>
	);
}
