'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import InfoModal from '../ui/InfoModal';

export function Footer() {
	const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
	const [isCommitmentModalOpen, setIsCommitmentModalOpen] = useState(false);

	return (
		<footer
			id='contact'
			className='bg-[#d0d8c3] text-[#1f2b44] py-6'
		>
			<div className='container mx-auto px-6 flex flex-col items-center'>
				{/* Logo */}
				<div className='relative w-40 h-20 mb-8 opacity-90 hover:opacity-100 transition-opacity'>
					<Link href='/'>
						<Image
							src='/assets/ceilao-tours-logo.webp'
							alt='Ceilao Travel'
							fill
							className='object-cover'
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
				<div className='flex flex-wrap justify-center gap-6 md:gap-8 mb-10 text-xs tracking-widest uppercase text-[#1f2b44]/80 font-medium'>
					<button
						onClick={() => setIsLegalModalOpen(true)}
						className='hover:text-accent transition-colors uppercase tracking-widest'
					>
						Legal
					</button>
					<button
						onClick={() => setIsCommitmentModalOpen(true)}
						className='hover:text-accent transition-colors uppercase tracking-widest'
					>
						Commitment
					</button>
					<Link
						href='/tailor-made'
						className='hover:text-accent transition-colors'
					>
						Contact
					</Link>
				</div>

				{/* Modals */}
				<InfoModal
					isOpen={isLegalModalOpen}
					onClose={() => setIsLegalModalOpen(false)}
					title='Legal'
				>
					We are currently refining our terms to better protect your
					journey and ensure absolute excellence. Our updated
					framework will be available here soon.
				</InfoModal>

				<InfoModal
					isOpen={isCommitmentModalOpen}
					onClose={() => setIsCommitmentModalOpen(false)}
					title='Commitment'
				>
					We are currently refining our formal charters of trust and
					excellence. Our core commitments will be shared here soon.
				</InfoModal>

				{/* Copyright */}
				<div className='text-[10px] text-[#1f2b44]/50 uppercase tracking-wider text-center'>
					<p className='mt-2'>
						Ceilão Travel & Tours (Private) Limited:- PV 00349070 |
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
