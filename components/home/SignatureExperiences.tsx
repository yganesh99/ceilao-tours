'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

const experiences = [
	{
		id: 1,
		title: 'Culture & Heritage',
		// category: 'Culture & Heritage',
		video: '/assets/video-1.webm',
		poster: '/assets/thumbnail-1.png',
		description:
			'Stay in colonial-era bungalows amidst rolling hills and misty tea plantations.',
	},
	{
		id: 2,
		title: 'Nature & Wildlife',
		// category: 'Wildlife',
		video: '/assets/video-2.webm',
		poster: '/assets/thumbnail-2.png',
		description:
			'Experience the thrill of Yala National Park from the comfort of a luxury tented lodge.',
	},
	{
		id: 3,
		title: 'Hill Country & Tea',
		// category: 'Culture',
		video: '/assets/video-3.webm',
		poster: '/assets/thumbnail-3.png',
		description:
			'Walk the cobblestone streets of a living UNESCO World Heritage site.',
	},
	{
		id: 4,
		title: 'Experiences',
		// category: 'Culture',
		video: '/assets/video-4.webm',
		poster: '/assets/thumbnail-3.png',
		description:
			'Walk the cobblestone streets of a living UNESCO World Heritage site.',
	},
	{
		id: 5,
		title: 'Wellness',
		// category: 'Culture',
		video: '/assets/video-5.webm',
		poster: '/assets/thumbnail-3.png',
		description:
			'Walk the cobblestone streets of a living UNESCO World Heritage site.',
	},
];

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

function ExperienceCard({
	exp,
	index,
	shouldPlay,
}: {
	exp: (typeof experiences)[0];
	index: number;
	shouldPlay: boolean;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		if (shouldPlay) {
			timeoutId = setTimeout(() => {
				videoRef.current?.play().catch(() => {
					// Autoplay might be blocked
				});
			}, 500);
		} else {
			// videoRef.current?.pause();
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [shouldPlay]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
			}}
			viewport={{ once: true }}
			className='pl-4 md:pl-6 lg:pl-8 min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[33.33%] relative shrink-0'
		>
			<div className='group cursor-pointer h-full'>
				<div className='relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden mb-6 rounded-lg shadow-sm bg-neutral-900'>
					<video
						ref={videoRef}
						muted
						loop
						playsInline
						poster={exp.poster}
						className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
					>
						<source
							src={exp.video}
							type='video/webm'
						/>
					</video>
					<div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none' />
				</div>
				<div className='space-y-2 text-left'>
					{/* <span className='text-xs font-bold uppercase tracking-widest text-accent'>
						{exp.category}
					</span> */}
					<h3 className='text-3xl font-playfair text-accent'>
						{exp.title}
					</h3>
					<p className='text-muted-foreground text-sm leading-relaxed max-w-sm'>
						{exp.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export function SignatureExperiences() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		loop: false,
		dragFree: true,
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const sectionRef = useRef(null);
	const isSectionInView = useInView(sectionRef, { amount: 1 });

	return (
		<>
			{/* Heading Section */}
			<Section className='bg-white pb-8 md:pb-12 rounded-b-3xl md:rounded-b-[2.5rem] z-10 relative'>
				<div className='text-center space-y-4 max-w-2xl mx-auto'>
					<span className='text-accent text-sm font-medium uppercase tracking-widest'>
						Curated Collections
					</span>
					<h2 className='text-4xl md:text-5xl lg:text-5xl font-playfair text-[#1f2b44]'>
						Signature Experiences
					</h2>
					<div className='w-24 h-[1px] bg-accent mx-auto mt-6' />
				</div>
			</Section>

			{/* Carousel Section */}
			<Section className='bg-white pt-12 md:pt-16 -mt-8'>
				<div
					className='relative group'
					ref={sectionRef}
				>
					<div
						className='overflow-hidden'
						ref={emblaRef}
					>
						<div className='flex -ml-4 md:-ml-8 py-4'>
							{experiences.map((exp, index) => (
								<ExperienceCard
									key={exp.id}
									exp={exp}
									index={index}
									shouldPlay={isSectionInView}
								/>
							))}
						</div>
					</div>

					{/* Navigation Controls */}
					<Button
						variant='outline'
						size='icon'
						className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-[#f7f3ed]/90 backdrop-blur-sm border-none shadow-md hover:bg-[#e6e2db] text-primary transition-all z-10 hidden md:flex'
						onClick={scrollPrev}
					>
						<ChevronLeft className='h-5 w-5' />
						<span className='sr-only'>Previous slide</span>
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-[#f7f3ed]/90 backdrop-blur-sm border-none shadow-md hover:bg-[#e6e2db] text-primary transition-all z-10 hidden md:flex'
						onClick={scrollNext}
					>
						<ChevronRight className='h-5 w-5' />
						<span className='sr-only'>Next slide</span>
					</Button>

					{/* Mobile Swipe Hint (Optional visual cue) */}
					<div className='md:hidden flex justify-center mt-6 gap-2'>
						<div className='w-1.5 h-1.5 rounded-full bg-primary/20' />
						<div className='w-1.5 h-1.5 rounded-full bg-primary/40' />
						<div className='w-1.5 h-1.5 rounded-full bg-primary/20' />
					</div>
				</div>

				{/* <div className='mt-16 text-center'>
					<Button
						size='lg'
						className='bg-accent hover:bg-accent/80 text-white'
					>
						View All Experiences
					</Button>
				</div> */}
			</Section>
		</>
	);
}
