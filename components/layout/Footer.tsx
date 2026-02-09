import Link from 'next/link';
import { Mail, Phone, Instagram, Facebook, Video } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
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
							src='/assets/ceilao-tours-logo.png'
							alt='Ceilao Travel'
							fill
							className='object-cover'
							priority
						/>
					</Link>
				</div>

				{/* Brand Statement */}
				<p className='text-center text-[#1f2b44]/80 text-sm max-w-md mb-8 font-light leading-relaxed'>
					Curating bespoke, ultra-luxury journeys across the timeless
					landscapes of Sri Lanka. Experience the extraordinary.
				</p>

				{/* Contact Info */}
				<div className='flex flex-col items-center gap-3 mb-8 text-[#1f2b44]/80 text-sm'>
					<div className='flex items-center gap-2 hover:text-[#1f2b44] transition-colors'>
						<Mail size={16} />
						<a href='mailto:connect@ceilaotravel.com'>
							connect@ceilaotravel.com
						</a>
					</div>
					<div className='flex flex-wrap justify-center gap-x-6 gap-y-2'>
						<div className='flex items-center gap-2 hover:text-[#1f2b44] transition-colors'>
							<Phone size={16} />
							<a href='tel:+94771319589'>+94 77 131 9589</a>
						</div>
						<div className='flex items-center gap-2 hover:text-[#1f2b44] transition-colors'>
							<Phone size={16} />
							<a href='tel:+94112908869'>+94 11 290 8869</a>
						</div>
					</div>
				</div>

				{/* Social Media */}
				<div className='flex justify-center gap-6 mb-10'>
					<a
						href='https://instagram.com/ceilao.travels'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#1f2b44]/60 hover:text-[#1f2b44] hover:scale-110 transition-all duration-300'
						aria-label='Instagram'
					>
						<Instagram size={20} />
					</a>
					<a
						href='https://tiktok.com/@ceilao.travels'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#1f2b44]/60 hover:text-[#1f2b44] hover:scale-110 transition-all duration-300'
						aria-label='TikTok'
					>
						<Video size={20} />
					</a>
					<a
						href='https://facebook.com/CeilaoTravelAndTours'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#1f2b44]/60 hover:text-[#1f2b44] hover:scale-110 transition-all duration-300'
						aria-label='Facebook'
					>
						<Facebook size={20} />
					</a>
				</div>

				{/* Navigation Links */}
				<div className='flex flex-wrap justify-center gap-6 md:gap-8 mb-10 text-xs tracking-widest uppercase text-[#1f2b44]/80 font-medium'>
					<Link
						href='/about'
						className='hover:text-accent transition-colors'
					>
						Legal
					</Link>
					<Link
						href='/tours'
						className='hover:text-accent transition-colors'
					>
						Commitment
					</Link>
					<Link
						href='/tailor-made'
						className='hover:text-accent transition-colors'
					>
						Contact
					</Link>
				</div>

				{/* Copyright */}
				<div className='text-[10px] text-[#1f2b44]/50 uppercase tracking-wider text-center'>
					<p>
						&copy; {new Date().getFullYear()} Ceilao Travel & Tours.
						All Rights Reserved.
					</p>
					<p className='mt-2'>
						Ceilao Travel & Tours (Private) Limited:- PV 00349070 |
						Registered in Sri Lanka.
					</p>
				</div>
			</div>
		</footer>
	);
}
