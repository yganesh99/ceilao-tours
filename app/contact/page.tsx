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
			<section className='relative h-fit w-full flex items-center justify-center overflow-hidden mt-32'>
				{/* Content */}
				<div className='relative z-10 text-center px-4 max-w-4xl mx-auto py-2'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-playfair text-[#1f2b44] tracking-wide'>
						Contact
					</h1>
					<div className='w-24 h-0.5 bg-accent mx-auto mt-6' />
				</div>
			</section>
			<Section className='bg-background'>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch'>
					{/* Left Segment - Consultation / Planning */}
					<div className='flex-1 flex flex-col justify-center space-y-8'>
						<div>
							{/* <h2 className='text-3xl font-[family-name:var(--font-playfair)] text-primary mb-6'>
								Plan Your Journey
							</h2> */}
							<p className='text-muted-foreground leading-relaxed text-lg mb-6'>
								To explore the possibilities of the island or
								for refined inquiries and collaborations, we
								invite you to engage with our curators for
								immediate guidance.
							</p>
						</div>
						<Button
							size='lg'
							// asChild
						>
							<a
								href={`https://wa.me/94771319589?text=${encodeURIComponent(
									'Hello Ceilão Travel & Tours! I’m reaching out through the website.\n\nMy name:\n\nMessage:',
								)}`}
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
											href='mailto:connect@ceilaotravel.com?subject=Connecting%20with%20Ceilão%20Travel%20%26%20Tours'
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
										href='https://www.instagram.com/ceilao.travels?igsh=NHR2eHZmdDhsaDY='
										// onClick={() => setIsModalOpen(true)}
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
										href='https://www.tiktok.com/@ceilao.travels?_r=1&_t=ZS-94CF0CH815A'
										// onClick={() => setIsModalOpen(true)}
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
										href='https://www.facebook.com/share/18869zyGwa/?mibextid=wwXIfr'
										// onClick={() => setIsModalOpen(true)}
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
