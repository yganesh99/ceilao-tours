import Link from 'next/link';
import {
	Mail,
	MapPin,
	Phone,
	Instagram,
	Facebook,
	Twitter,
} from 'lucide-react';
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
				<div className='text-[10px] text-[#1f2b44]/50 uppercase tracking-wider'>
					&copy; {new Date().getFullYear()} Ceilao Travel & Tours. All
					Rights Reserved.
				</div>
			</div>
		</footer>
	);
}
