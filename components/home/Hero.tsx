'use client';

export function Hero() {
	return (
		<section className='relative w-full md:aspect-auto h-screen min-h-auto overflow-hidden'>
			<div className='absolute inset-0 bg-neutral-900 overflow-hidden'>
				{/* Mobile / Tablet Video (4:3) — hidden on md+ screens */}
				<video
					className='absolute top-0 left-0 w-full h-full object-cover object-center pointer-events-none md:hidden'
					autoPlay
					muted
					loop
					playsInline
					preload='metadata'
				>
					{/* MP4 fallback — place your compressed hero-m.mp4 in /public/assets/ */}
					<source
						src='/assets/hero-m.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Desktop Video (16:9) — hidden below md breakpoint */}
				<video
					className='absolute top-0 left-0 w-full h-full object-cover object-center pointer-events-none hidden md:block'
					autoPlay
					muted
					loop
					playsInline
					preload='metadata'
				>
					{/* MP4 fallback — place your compressed hero.mp4 in /public/assets/ */}
					<source
						src='/assets/hero.mp4'
						type='video/mp4'
					/>
				</video>

				<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent' />
			</div>
		</section>
	);
}
