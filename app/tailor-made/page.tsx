'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/TikTokIcon';
import { useState } from 'react';
import LaunchingSoonModal from '@/components/ui/LaunchingSoonModal';

export default function TailorMadePage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

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
								To explore the possibilities of the island or
								for refined inquiries and collaborations, we
								invite you to engage with our curators for
								immediate guidance to start planning your
								adventure.
							</p>
						</div>
						<Button size='lg'>
							<a
								href='https://wa.me/94771319589'
								target='_blank'
								rel='noopener noreferrer'
							>
								Engage With Us
							</a>
						</Button>
					</div>

					{/* Right Segment - Contact Details & Connect */}
					<div className='flex-1 bg-secondary/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center border border-primary/5'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
							{/* Contact Details */}
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

							{/* Connect */}
							<div className='space-y-6'>
								<h3 className='text-xl font-[family-name:var(--font-playfair)] text-primary mb-4 border-b border-primary/10 pb-2'>
									Connect
								</h3>

								<div className='space-y-4'>
									<a
										// href='https://instagram.com/ceilao.travels'
										onClick={() => setIsModalOpen(true)}
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
										// href='https://tiktok.com/@ceilao.travels'
										onClick={() => setIsModalOpen(true)}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-4 group'
									>
										<div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:text-accent transition-colors'>
											<TikTokIcon size={20} />
										</div>
										<span className='text-primary font-medium group-hover:text-accent transition-colors'>
											@ceilao.travels
										</span>
									</a>

									<a
										// href='https://facebook.com/CeilaoTravelAndTours'
										onClick={() => setIsModalOpen(true)}
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
				</div>
				<LaunchingSoonModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</Section>
		</>
	);
}
