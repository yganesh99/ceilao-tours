import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Instagram, Video, Facebook, Mail, Phone } from 'lucide-react';

export default function TailorMadePage() {
	return (
		<>
			<PageHeader
				title='Tailor-Made Journeys'
				subtitle='Designed Around You'
				image='https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2938&auto=format&fit=crop'
			/>

			<Section className='bg-background'>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch'>
					{/* Left Segment - Consultation / Planning */}
					<div className='flex-1 flex flex-col justify-center space-y-8'>
						<div>
							<h2 className='text-3xl font-[family-name:var(--font-playfair)] text-primary mb-6'>
								Plan Your Journey
							</h2>
							<p className='text-muted-foreground leading-relaxed text-lg mb-6'>
								Our experts are ready to help you design your
								dream journey. Connect now to start planning
								your adventure.
							</p>
							<p className='text-muted-foreground leading-relaxed'>
								At Ceilao, we understand that no two travelers
								are alike. That is why we do not offer
								pre-packaged deals. Instead, we start with a
								blank canvas and your inspiration. Whether you
								want to charter a private yacht, enjoy a sunrise
								breakfast atop a rock fortress, or retreat to a
								secluded tea bungalow, we make it happen.
							</p>
						</div>

						<Button
							size='lg'
							className='bg-accent text-white hover:bg-accent/80 w-fit'
							asChild
						>
							<a
								href='https://wa.me/94771319589'
								target='_blank'
								rel='noopener noreferrer'
							>
								Start Planning With an Expert
							</a>
						</Button>
					</div>

					{/* Right Segment - Contact Details */}
					<div className='flex-1 bg-secondary/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center space-y-10 border border-primary/5'>
						<div className='space-y-6'>
							<h3 className='text-xl font-[family-name:var(--font-playfair)] text-primary mb-4 border-b border-primary/10 pb-2'>
								Contact Details
							</h3>

							<div className='flex items-start gap-4'>
								<Mail className='w-6 h-6 text-accent mt-1 shrink-0' />
								<div>
									<p className='text-xs uppercase tracking-widest text-muted-foreground mb-1'>
										Email
									</p>
									<a
										href='mailto:connect@ceilaotravel.com'
										className='text-lg font-medium text-primary hover:text-accent transition-colors'
									>
										connect@ceilaotravel.com
									</a>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<Phone className='w-6 h-6 text-accent mt-1 shrink-0' />
								<div>
									<p className='text-xs uppercase tracking-widest text-muted-foreground mb-1'>
										Phone
									</p>
									<div className='flex flex-col gap-1'>
										<a
											href='tel:+94771319589'
											className='text-lg font-medium text-primary hover:text-accent transition-colors'
										>
											+94 77 131 9589
										</a>
										<a
											href='tel:+94112908869'
											className='text-lg font-medium text-primary hover:text-accent transition-colors'
										>
											+94 11 290 8869
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className='space-y-6'>
							<h3 className='text-xl font-[family-name:var(--font-playfair)] text-primary mb-4 border-b border-primary/10 pb-2'>
								Follow Us
							</h3>

							<div className='space-y-4'>
								<a
									href='https://instagram.com/ceilao.travels'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-4 group'
								>
									<div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:text-accent transition-colors'>
										<Instagram size={20} />
									</div>
									<span className='text-primary font-medium group-hover:text-accent transition-colors'>
										@ceilao.travels
									</span>
								</a>

								<a
									href='https://tiktok.com/@ceilao.travels'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-4 group'
								>
									<div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:text-accent transition-colors'>
										<Video size={20} />
									</div>
									<span className='text-primary font-medium group-hover:text-accent transition-colors'>
										@ceilao.travels
									</span>
								</a>

								<a
									href='https://facebook.com/CeilaoTravelAndTours'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-4 group'
								>
									<div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:text-accent transition-colors'>
										<Facebook size={20} />
									</div>
									<span className='text-primary font-medium group-hover:text-accent transition-colors'>
										Ceilao Travel & Tours
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
