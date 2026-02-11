'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';
import { experiences } from '@/lib/data';

import { useRef, useEffect, useState } from 'react';
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
				if (videoRef.current) {
					videoRef.current.muted = true; // Ensure muted for autoplay
					videoRef.current.play().catch(() => {
						// Autoplay might be blocked
					});
				}
			}, 500);
		} else {
			videoRef.current?.pause();
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
			className='pl-0 md:pl-6 lg:pl-8 min-w-full md:min-w-[50%] lg:min-w-[50%] h-dvh md:h-auto relative shrink-0'
		>
			<div className='group cursor-pointer h-full relative overflow-hidden'>
				<div className='absolute inset-0 md:relative h-full md:h-[500px] lg:h-[700px] w-full overflow-hidden mb-0 md:mb-6 rounded-none md:rounded-lg shadow-sm bg-neutral-900'>
					<video
						ref={videoRef}
						muted
						loop
						playsInline
						preload='none'
						poster={exp.poster}
						className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
					>
						<source
							src={exp.video}
							type='video/webm'
						/>
					</video>
					<div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none' />
					{/* Mobile Overlay Gradient */}
					<div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent md:hidden pointer-events-none' />
				</div>
				<div className='absolute bottom-0 left-0 w-full p-8 md:p-0 z-20 md:static space-y-2 text-left'>
					{/* <span className='text-xs font-bold uppercase tracking-widest text-accent'>
						{exp.category}
					</span> */}
					<h3 className='text-3xl font-playfair text-accent'>
						{exp.title}
					</h3>
					<p className='text-gray-200 lg:text-[#1f2b44] text-sm leading-relaxed max-w-md'>
						{exp.description}
					</p>
					<Link
						href={`/experiences/${exp.id}`}
						className='inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-bold pt-4 hover:translate-x-2 transition-transform duration-300'
					>
						View Itinerary <ArrowRight className='w-4 h-4' />
					</Link>
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

	const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

	const onScroll = useCallback(() => {
		if (!emblaApi) return;
		const slidesInView = emblaApi.slidesInView();
		setVisibleIndices(slidesInView);
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onScroll();
		emblaApi.on('select', onScroll);
		emblaApi.on('scroll', onScroll);
		emblaApi.on('reInit', onScroll);

		return () => {
			emblaApi.off('select', onScroll);
			emblaApi.off('scroll', onScroll);
			emblaApi.off('reInit', onScroll);
		};
	}, [emblaApi, onScroll]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const sectionRef = useRef(null);
	// Always use 0.2 as per user adjustment
	const triggerAmount = 0.2;

	const isSectionInView = useInView(sectionRef, { amount: triggerAmount });

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
			<Section
				className='bg-white pt-0 md:pt-16 -mt-8 md:py-0 py-0'
				containerClassName='px-0 md:px-6 lg:px-8'
			>
				<div
					className='relative group h-dvh md:h-auto'
					ref={sectionRef}
					key={triggerAmount} // Force re-mount to update observer options
				>
					<div
						className='overflow-hidden h-full'
						ref={emblaRef}
					>
						<div className='flex ml-0 md:-ml-8 py-0 md:py-4 h-full'>
							{experiences.map((exp, index) => (
								<ExperienceCard
									key={exp.id}
									exp={exp}
									index={index}
									shouldPlay={
										isSectionInView &&
										visibleIndices.includes(index)
									}
								/>
							))}
						</div>
					</div>

					{/* Navigation Controls */}
					<Button
						variant='outline'
						size='icon'
						className='absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex'
						onClick={scrollPrev}
					>
						<ChevronLeft className='h-5 w-5' />
						<span className='sr-only'>Previous slide</span>
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex'
						onClick={scrollNext}
					>
						<ChevronRight className='h-5 w-5' />
						<span className='sr-only'>Next slide</span>
					</Button>

					{/* Mobile Swipe Hint (Optional visual cue) */}
					<div className='md:hidden absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2'>
						<div className='w-1.5 h-1.5 rounded-full bg-white/40' />
						<div className='w-1.5 h-1.5 rounded-full bg-white/80' />
						<div className='w-1.5 h-1.5 rounded-full bg-white/40' />
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
