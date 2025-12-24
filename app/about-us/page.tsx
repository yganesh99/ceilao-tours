import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import Image from 'next/image';

export default function AboutPage() {
	return (
		<>
			<PageHeader
				title='Our Story'
				subtitle='The Spirit of Ceilao'
				image='https://www.youtube.com/embed/OxFOuZCokLk?autoplay=1&mute=1&loop=1&playlist=OxFOuZCokLk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1'
				isVideo={true}
			/>

			<Section className='bg-background'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
					<div className='space-y-6'>
						<h2 className='text-3xl font-[family-name:var(--font-playfair)] text-primary'>
							Guardians of Authenticity
						</h2>
						<div className='w-16 h-1 bg-accent' />
						<p className='text-muted-foreground leading-relaxed'>
							Founded on a deep passion for Sri Lanka’s rich
							heritage and untold stories, Ceilao Travel was born
							from a desire to showcase the island beyond the
							guidebooks. We are a collective of explorers,
							historians, and luxury hospitality experts dedicated
							to crafting journeys that resonate on a soulful
							level.
						</p>
						<p className='text-muted-foreground leading-relaxed'>
							Our philosophy is simple: Luxury is not just about
							opulence; it is about exclusivity, personalization,
							and the seamless orchestration of moments that take
							your breath away.
						</p>
					</div>
					<div className='relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl'>
						<Image
							src='https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=2938&auto=format&fit=crop'
							alt='Sri Lankan Tea Plantation'
							fill
							className='object-cover'
						/>
					</div>
				</div>
			</Section>

			<Section className='bg-secondary/20'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<h2 className='text-3xl font-[family-name:var(--font-playfair)] text-primary mb-4'>
						Why Choose Ceilao
					</h2>
					<p className='text-muted-foreground'>
						We ensure every step of your journey is handled with
						white-glove service.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{[
						{
							title: 'Local Presence',
							desc: 'Headquartered in Colombo with a network of local insiders across the island.',
						},
						{
							title: 'Curated Portfolio',
							desc: 'We only recommend properties and experiences we have personally vetted.',
						},
						{
							title: '24/7 Support',
							desc: 'A dedicated concierge team available around the clock during your stay.',
						},
					].map((item) => (
						<div
							key={item.title}
							className='bg-background p-8 rounded-lg shadow-sm border border-primary/5 hover:border-accent/50 transition-colors'
						>
							<h3 className='text-xl font-[family-name:var(--font-playfair)] text-primary mb-3'>
								{item.title}
							</h3>
							<p className='text-sm text-muted-foreground'>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</Section>
		</>
	);
}
