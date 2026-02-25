import { getTourById } from '@/lib/data';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ItineraryAccordion } from '@/components/ui/ItineraryAccordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';

import { experiences } from '@/lib/data';

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
	return experiences.map((exp) => ({
		id: exp.id.toString(),
	}));
}

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
				videoSrc={tour.video}
				className='h-[70vw] xs:h-[65vw] sm:h-[75vw] lg:h-screen overflow-hidden'
			/>

			<Section className='bg-background'>
				<div className='max-w-4xl mx-auto'>
					{/* Overview */}
					<div className='mb-12 text-center md:text-left'>
						<AnimatedHeading className='text-3xl font-playfair text-[#1f2b44] mb-6'>
							Overview
						</AnimatedHeading>
						<p className='text-muted-foreground text-sm sm:text-lg leading-relaxed'>
							{tour.overview}
						</p>
						<div className='flex flex-wrap gap-4 mt-6 justify-center md:justify-start'>
							{tour.duration && (
								<div className='px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold uppercase tracking-wide'>
									Duration: {tour.duration}
								</div>
							)}
						</div>
					</div>

					{/* Itinerary */}
					<div className='mb-16'>
						<AnimatedHeading className='text-3xl font-playfair text-[#1f2b44] mb-6 text-center md:text-left'>
							Itinerary
						</AnimatedHeading>
						<ItineraryAccordion itinerary={tour.itinerary} />
					</div>

					{/* Excursions */}
					{tour.excursions && tour.excursions.items.length > 0 && (
						<div className='mb-16'>
							<AnimatedHeading className='text-3xl font-playfair text-[#1f2b44] mb-6 text-center md:text-left'>
								Add-On Excursions
							</AnimatedHeading>
							{/* {tour.excursions.theme && (
								<p className='text-accent font-semibold text-lg mb-8 text-center md:text-left'>
									Theme: {tour.excursions.theme}
								</p>
							)} */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								{tour.excursions.items.map((item, index) => (
									<div
										key={index}
										className='bg-white p-6 rounded-2xl shadow-sm border border-accent hover:shadow-md transition-all duration-300'
									>
										<div className='flex items-start gap-4'>
											<div className='shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm'>
												{String(index + 1).padStart(
													2,
													'0',
												)}
											</div>
											<div>
												<h3 className='text-[#1f2b44] font-bold text-lg mb-2'>
													{item.title}
												</h3>
												<p className='text-muted-foreground leading-relaxed text-sm'>
													{item.description}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Pricing */}
					{tour.pricing && tour.pricing.length > 0 && (
						<div className='mb-16'>
							<h2 className='text-3xl font-playfair text-[#1f2b44] mb-8 text-center md:text-left'>
								Pricing
							</h2>
							<div className='bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8'>
								{tour.pricingNote && (
									<p className='text-sm text-accent uppercase tracking-wider font-bold mb-6 text-center md:text-left'>
										{tour.pricingNote}
									</p>
								)}
								<div className='space-y-4'>
									{tour.pricing.map((option, index) => (
										<div
											key={index}
											className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-slate-100 last:border-0 last:pb-0'
										>
											<div className='font-bold text-[#1f2b44] mb-3 md:mb-0 text-lg'>
												{option.title}
											</div>
											<div className='flex flex-row gap-3 items-center whitespace-nowrap bg-background px-4 py-2 rounded-lg border border-slate-50'>
												<span className='text-lg font-bold text-accent'>
													LKR {option.lkr}
												</span>
												<span className='text-slate-300'>
													|
												</span>
												<span className='text-lg font-bold text-accent'>
													USD {option.usd}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}

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
