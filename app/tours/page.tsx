'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';

export default function ToursPage() {
	return (
		<>
			<PageHeader
				title='Our Commitment'
				subtitle='Preserving Heritage, Empowering Community'
				image='https://images.unsplash.com/photo-1546708773-e529522e2075?q=80&w=2940&auto=format&fit=crop'
			/>

			<Section className='bg-background'>
				<div className='absolute inset-0 z-10 bg-black/40' />
				<div className='relative z-20 text-center text-white px-4 space-y-4 max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-7xl font-playfair font-bold text-white mb-6'>
						The Island&apos;s Finest Journeys
					</h1>
					<p className='text-lg md:text-xl text-gray-200'>
						Carefully crafted itineraries for the discerning
						traveler
					</p>
				</div>
			</Section>
			<Section className='bg-background'>
				<div className='container mx-auto px-6'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-playfair text-primary mb-6'>
							Sustainable & Responsible Tourism
						</h2>
						<p className='text-muted-foreground leading-relaxed text-lg mb-6'>
							At Ceilão Travel & Tours, we believe in travel that
							honors the places we visit. Our commitment goes
							beyond providing exceptional experiences; we strive
							to protect Sri Lanka&apos;s natural beauty and
							uplift its local communities.
						</p>
						<p className='text-muted-foreground leading-relaxed'>
							Every journey with us supports local artisans,
							promotes wildlife conservation, and ensures that the
							benefits of tourism are shared with the people who
							call this island home.
						</p>
					</div>
				</div>
			</Section>
		</>
	);
}
