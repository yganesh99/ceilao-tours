import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

import Link from 'next/link';
import { tours } from '@/lib/data';

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
									src={
										tour.image ||
										tour.poster ||
										'/assets/thumbnail-1.png'
									}
									alt={tour.title}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary'>
									{tour.duration}
								</div>
							</div>
							<div>
								<h3 className='text-2xl font-playfair text-primary group-hover:text-accent transition-colors mb-2'>
									{tour.title}
								</h3>
								<p className='text-muted-foreground mb-4 line-clamp-2'>
									{tour.description}
								</p>
								<Link href={`/experiences/${tour.id}`}>
									<Button
										variant='link'
										className='p-0 h-auto text-accent'
									>
										view Itinerary &rarr;
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</Section>
		</>
	);
}
