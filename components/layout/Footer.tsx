'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Footer() {
	const [showLegalMenu, setShowLegalMenu] = useState(false);

	return (
		<footer
			id='contact'
			className='bg-[#d0d8c3] text-[#1f2b44] py-6'
		>
			<div className='container mx-auto px-6 flex flex-col items-center'>
				{/* Logo */}
				<div className='relative w-40 h-40 opacity-80 hover:opacity-100 transition-opacity'>
					<Link href='/'>
						<Image
							src='https://ceilao-travel.b-cdn.net/ceilao-tours-logo.webp'
							alt='Ceilão Travel Logo'
							fill
							className='object-contain'
							priority
						/>
					</Link>
				</div>

				{/* Brand Statement */}
				<p className='text-center text-[#1f2b44]/80 text-sm max-w-3xl mb-8 font-light leading-relaxed'>
					Ceilão Travel & Tours specializes in refined, effortless
					journeys that honor the soul of Sri Lanka. Merging luxury
					with impact, we preserve our heritage and empower our
					community through purposeful journeys.
				</p>

				{/* Navigation Links */}
				<div className='min-h-[24px] flex flex-wrap justify-center gap-6 md:gap-8 mb-10 text-xs tracking-widest uppercase text-[#1f2b44]/80 font-medium'>
					{!showLegalMenu ? (
						<>
							<a
								onClick={() => setShowLegalMenu(true)}
								className='hover:text-accent transition-colors uppercase tracking-widest focus:outline-none'
							>
								Legal
							</a>
							<Link
								href='/commitment'
								className='hover:text-accent transition-colors uppercase tracking-widest'
							>
								Commitment
							</Link>
							<Link
								href='/about-us'
								className='hover:text-accent transition-colors uppercase tracking-widest'
							>
								About Us
							</Link>
							<Link
								href='/faq'
								className='hover:text-accent transition-colors uppercase tracking-widest'
							>
								FAQ
							</Link>
							<Link
								href='/contact'
								className='hover:text-accent transition-colors uppercase tracking-widest'
							>
								Contact
							</Link>
						</>
					) : (
						<>
							<Link
								href='/privacy-policy'
								className='hover:text-accent transition-colors uppercase tracking-widest'
							>
								Privacy Policy
							</Link>
							<Link
								href='/terms-and-conditions'
								className='hover:text-accent transition-colors uppercase tracking-widest'
							>
								Terms & Conditions
							</Link>
							<a
								onClick={() => setShowLegalMenu(false)}
								className='hover:text-accent transition-colors uppercase tracking-widest focus:outline-none'
							>
								Close
							</a>
						</>
					)}
				</div>

				{/* Copyright */}
				<div className='text-[10px] text-[#1f2b44]/50 uppercase tracking-wider text-center'>
					<p className='mt-2'>
						Ceilão Travel & Tours (Private) Limited - PV 00349070 |
						Registered in Sri Lanka.
					</p>
					<p>
						&copy; {new Date().getFullYear()} Ceilão Travel & Tours.
						All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
