import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function TailorMadePage() {
	return (
		<>
			<PageHeader
				title='Tailor-Made Journeys'
				subtitle='Designed Around You'
				image='https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2938&auto=format&fit=crop'
			/>

			<Section className='bg-background'>
				<div className='text-center max-w-3xl mx-auto mb-16 space-y-6'>
					<p className='text-xl text-primary font-[family-name:var(--font-playfair)] italic'>
						&quot;The world is a book and those who do not travel
						read only one page.&quot;
					</p>
					<p className='text-muted-foreground leading-relaxed'>
						At Ceilao, we understand that no two travelers are
						alike. That is why we do not offer pre-packaged deals.
						Instead, we start with a blank canvas and your
						inspiration. Whether you want to charter a private
						yacht, enjoy a sunrise breakfast atop a rock fortress,
						or retreat to a secluded tea bungalow, we make it
						happen.
					</p>
				</div>

				<div className='flex justify-center'>
					<Button
						size='lg'
						className='bg-accent text-white hover:bg-accent/90'
					>
						Start Planning With an Expert
					</Button>
				</div>
			</Section>
		</>
	);
}
