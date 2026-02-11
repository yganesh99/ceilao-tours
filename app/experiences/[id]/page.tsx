import { getTourById } from '@/lib/data';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const tour = getTourById(id);

	if (!tour) {
		return {
			title: 'Experience Not Found',
		};
	}

	return {
		title: `${tour.title} | Celio Tours`,
		description: tour.description,
	};
}

export default async function ExperiencePage({ params }: Props) {
	const { id } = await params;
	const tour = getTourById(id);

	if (!tour) {
		notFound();
	}

	const headerImage =
		tour.image ||
		tour.poster ||
		'https://images.unsplash.com/photo-1590603740183-980e7f6920eb?q=80&w=2832&auto=format&fit=crop';

	return (
		<>
			<PageHeader
				title={tour.title}
				subtitle={tour.subtitle || tour.category || 'Experience'}
				image={headerImage}
			/>

			<Section className='bg-background'>
				<div className='max-w-4xl mx-auto'>
					{/* Overview */}
					<div className='mb-12 text-center md:text-left'>
						<h2 className='text-3xl font-playfair text-[#1f2b44] mb-6'>
							Overview
						</h2>
						<p className='text-muted-foreground text-lg leading-relaxed'>
							{tour.overview}
						</p>
						<div className='flex flex-wrap gap-4 mt-6 justify-center md:justify-start'>
							{tour.duration && (
								<div className='px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold uppercase tracking-wide'>
									Duration: {tour.duration}
								</div>
							)}
							{/* {tour.category && (
								<div className='px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold uppercase tracking-wide'>
									Category: {tour.category}
								</div>
							)} */}
						</div>
					</div>

					{/* Itinerary */}
					<div className='mb-16'>
						<h2 className='text-3xl font-playfair text-[#1f2b44] mb-8 text-center md:text-left'>
							Itinerary
						</h2>
						<div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
							{tour.itinerary.map((item, index) => (
								<div
									key={index}
									className='relative flex items-start group'
								>
									{/* Timeline Dot */}
									<div className='absolute left-0 mt-1.5 ml-3 w-4 h-4 rounded-full border-2 border-accent bg-background z-10 group-hover:bg-accent transition-colors' />

									<div className='ml-12 w-full'>
										<span className='inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-accent uppercase border border-accent/20 rounded-sm bg-accent/5'>
											{item.day}
										</span>
										<h3 className='text-xl font-bold text-[#1f2b44] mb-2'>
											{item.title}
										</h3>
										<p className='text-muted-foreground'>
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* CTA */}
					<div className='text-center p-8 md:p-12 bg-transparent rounded-2xl text-[#1f2b44] border-accent border-2 md:w-xl md:mx-auto'>
						<p className='mb-8 max-w-lg mx-auto text-lg'>
							Our curators are at your service to refine the finer
							details of this experience. Connect with us to
							tailor this journey to your rhythm.
						</p>
						<Link
							href={`https://wa.me/94777123456?text=Hi, I am interested in booking the ${tour.title} package.`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button size='lg'> Refine Your Journey</Button>
						</Link>
					</div>
				</div>
			</Section>
		</>
	);
}
