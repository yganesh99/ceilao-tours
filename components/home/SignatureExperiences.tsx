'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
];

export function SignatureExperiences() {
	return (
		<Section className='bg-background'>
			<div className='text-center mb-16 space-y-4'>
				<span className='text-accent text-sm font-medium uppercase tracking-widest'>
					Curated Collections
				</span>
				<h2 className='text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-primary'>
					Signature Experiences
				</h2>
				<div className='w-24 h-[1px] bg-accent mx-auto mt-6' />
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{experiences.map((exp, index) => (
					<motion.div
						key={exp.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className='group cursor-pointer'
					>
						<div className='relative h-[500px] w-full overflow-hidden mb-6'>
							<Image
								src={exp.image}
								alt={exp.title}
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105'
							/>
							<div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500' />
						</div>
						<div className='space-y-2 text-center md:text-left'>
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
					</motion.div>
				))}
			</div>

			<div className='mt-16 text-center'>
				<Button
					variant='outline'
					size='lg'
					className='border-primary text-primary hover:bg-primary hover:text-white'
				>
					View All Experiences
				</Button>
			</div>
		</Section>
	);
}
