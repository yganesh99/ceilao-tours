import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

const tours = [
	{
		title: 'The Royal Ceylon Odyssey',
		duration: '14 Days',
		image: 'https://images.unsplash.com/photo-1708174934550-5e95c7bf02d0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		desc: 'A grand tour covering the cultural triangle, hill country, and southern coast.',
	},
	{
		title: 'Wildlife & Wilderness',
		duration: '10 Days',
		image: 'https://images.unsplash.com/photo-1558791985-4241e4011215?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		desc: 'Encounters with leopards, elephants, and blue whales in their natural habitats.',
	},
	{
		title: 'Wellness & Ayurveda',
		duration: '12 Days',
		image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop',
		desc: 'Rejuvenate your mind and body with ancient healing traditions in luxury retreats.',
	},
	{
		title: 'Culinary Trails',
		duration: '9 Days',
		image: 'https://images.unsplash.com/photo-1687688207113-34bea1617467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp',
		desc: 'Taste the spices of the island, from street food markets to private cooking classes.',
	},
];

export default function ToursPage() {
	return (
		<>
			<PageHeader
				title='Curated Journeys'
				subtitle='Explore Our Collections'
				image='https://images.unsplash.com/photo-1590603740183-980e7f6920eb?q=80&w=2832&auto=format&fit=crop'
			/>

			<Section className='bg-background'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12'>
					{tours.map((tour) => (
						<div
							key={tour.title}
							className='group cursor-pointer'
						>
							<div className='relative h-80 w-full overflow-hidden rounded-sm mb-4'>
								<Image
									src={tour.image}
									alt={tour.title}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary'>
									{tour.duration}
								</div>
							</div>
							<div>
								<h3 className='text-2xl font-[family-name:var(--font-playfair)] text-primary group-hover:text-accent transition-colors mb-2'>
									{tour.title}
								</h3>
								<p className='text-muted-foreground mb-4 line-clamp-2'>
									{tour.desc}
								</p>
								<Button
									variant='link'
									className='p-0 h-auto text-accent'
								>
									view Itinerary &rarr;
								</Button>
							</div>
						</div>
					))}
				</div>
			</Section>
		</>
	);
}
