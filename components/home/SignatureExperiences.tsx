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
		title: 'The Tea Country Estate',
		category: 'Heritage',
		image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Stay in colonial-era bungalows amidst rolling hills and misty tea plantations.',
	},
	{
		id: 2,
		title: 'Wild Coast Luxury',
		category: 'Wildlife',
		image: 'https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Experience the thrill of Yala National Park from the comfort of a luxury tented lodge.',
	},
	{
		id: 3,
		title: 'Galle Fort Awakening',
		category: 'Culture',
		image: 'https://images.unsplash.com/photo-1568843240915-b512cc9b4415?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Walk the cobblestone streets of a living UNESCO World Heritage site.',
	},
	{
		id: 4,
		title: 'The Royal Cultural Triangle',
		category: 'Heritage',
		image: 'https://lakpura.com/cdn/shop/files/LK94909288-02-E.jpg?v=1734631231&width=3840',
		description:
			'Climb the ancient rock fortress of Sigiriya, a marvel of ancient engineering.',
	},
	{
		id: 5,
		title: 'Pristine East Coast',
		category: 'Beach',
		image: 'https://plus.unsplash.com/premium_photo-1681223447322-46794b8cdfd5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Relax on the untouched white sands of Trincomalee and Nilaveli.',
	},
	{
		id: 6,
		title: 'Scenic Train Journey',
		category: 'Adventure',
		image: 'https://images.unsplash.com/photo-1566976273017-6e6df9bbdbee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Embark on one of the most beautiful train rides in the world through lush tea estates.',
	},
];

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

	return (
		<>
			{/* Heading Section */}
			<Section className='bg-background pb-12 rounded-b-4xl z-10 relative'>
				<div className='text-center space-y-4 max-w-2xl mx-auto'>
					<span className='text-accent text-sm font-medium uppercase tracking-widest'>
						Curated Collections
					</span>
					<h2 className='text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-primary'>
						Signature Experiences
					</h2>
					<div className='w-24 h-[1px] bg-accent mx-auto mt-6' />
				</div>
			</Section>

			{/* Carousel Section */}
			<Section className='bg-white pt-12 md:pt-16 -mt-8'>
				<div className='relative group'>
					<div
						className='overflow-hidden'
						ref={emblaRef}
					>
						<div className='flex -ml-4 md:-ml-8 py-4'>
							{experiences.map((exp, index) => (
								<motion.div
									key={exp.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									viewport={{ once: true }}
									className='pl-4 md:pl-8 min-w-[85%] md:min-w-[50%] lg:min-w-[33.33%] relative shrink-0'
								>
									<div className='group cursor-pointer h-full'>
										<div className='relative h-[400px] md:h-[500px] w-full overflow-hidden mb-6 rounded-lg shadow-sm'>
											<Image
												src={exp.image}
												alt={exp.title}
												fill
												className='object-cover transition-transform duration-700 group-hover:scale-105'
											/>
											<div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500' />
										</div>
										<div className='space-y-2 text-left'>
											<span className='text-xs font-bold uppercase tracking-widest text-accent'>
												{exp.category}
											</span>
											<h3 className='text-2xl font-[family-name:var(--font-playfair)] text-primary'>
												{exp.title}
											</h3>
											<p className='text-muted-foreground text-sm leading-relaxed max-w-sm'>
												{exp.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Navigation Controls */}
					<Button
						variant='outline'
						size='icon'
						className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-[#f7f3ed] border-none shadow-md hover:bg-[#e6e2db] text-primary transition-all z-10 hidden md:flex'
						onClick={scrollPrev}
					>
						<ChevronLeft className='h-5 w-5' />
						<span className='sr-only'>Previous slide</span>
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-[#f7f3ed] border-none shadow-md hover:bg-[#e6e2db] text-primary transition-all z-10 hidden md:flex'
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
