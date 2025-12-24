'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
	return (
		<section className='relative h-screen min-h-[800px] w-full overflow-hidden'>
			{/* Background Image/Video Placeholder */}
			<div className='absolute inset-0 bg-neutral-900 overflow-hidden'>
				<iframe
					className='absolute top-1/2 left-1/2 pointer-events-none'
					src='https://www.youtube.com/embed/eWJWA9hv4yw?autoplay=1&mute=1&loop=1&playlist=eWJWA9hv4yw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1'
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

			{/* Content */}
			<div className='relative h-full flex flex-col justify-center items-center text-center px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='space-y-6 max-w-4xl'
				>
					<span className='text-accent text-sm md:text-base font-medium uppercase tracking-[0.2em]'>
						Welcome to Sri Lanka
					</span>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] text-white leading-tight'>
						Discover the Art of <br />
						<span className='italic'>Timeless Travel</span>
					</h1>
					<p className='text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed'>
						Curating bespoke journeys through the emerald island’s
						most enchanting landscapes and exclusive retreats.
					</p>

					<div className='pt-8 flex flex-col md:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							className='bg-primary text-white hover:bg-primary/80'
						>
							Explore Our Collections
						</Button>
						<Button
							size='lg'
							// variant='outline'
							className='text-white bg-accent hover:bg-accent/80'
						>
							Plan Your Trip
						</Button>
					</div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
				className='absolute bottom-12 left-1/2 transform -translate-x-1/2'
			>
				<div className='w-[1px] h-16 bg-white/20 relative overflow-hidden'>
					<div className='absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce-slow' />
				</div>
			</motion.div>
		</section>
	);
}
