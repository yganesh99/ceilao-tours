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
		<footer className='bg-[#d0d8c3] text-[#1f2b44] pt-16 pb-8'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
					{/* Brand Column */}
					<div className='space-y-4'>
						<div className='relative h-16 md:h-18 lg:h-20 aspect-2/1'>
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
						<p className='text-[#1f2b44] text-sm leading-relaxed max-w-xs'>
							Curating bespoke, ultra-luxury journeys across the
							timeless landscapes of Sri Lanka. Experience the
							extraordinary.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-medium mb-6 uppercase tracking-widest text-[#1f2b44]'>
							Explore
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/about'
									className='text-sm hover:text-accent transition-colors'
								>
									Our Story
								</Link>
							</li>
							<li>
								<Link
									href='/tours'
									className='text-sm hover:text-accent transition-colors'
								>
									Signature Tours
								</Link>
							</li>
							<li>
								<Link
									href='/tailor-made'
									className='text-sm hover:text-accent transition-colors'
								>
									Tailor-Made Journeys
								</Link>
							</li>
							<li>
								<Link
									href='/journal'
									className='text-sm hover:text-accent transition-colors'
								>
									The Journal
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='text-lg font-medium mb-6 uppercase tracking-widest text-[#1f2b44]'>
							Contact
						</h3>
						<ul className='space-y-4'>
							<li className='flex items-start space-x-3'>
								<MapPin className='h-5 w-5 text-[#1f2b44] shrink-0' />
								<span className='text-sm text-[#1f2b44]'>
									No. 45, Galle Road,
									<br /> Colombo 03, Sri Lanka
								</span>
							</li>
							<li className='flex items-center space-x-3'>
								<Phone className='h-5 w-5 text-[#1f2b44] shrink-0' />
								<span className='text-sm text-[#1f2b44]'>
									+94 11 234 5678
								</span>
							</li>
							<li className='flex items-center space-x-3'>
								<Mail className='h-5 w-5 text-[#1f2b44] shrink-0' />
								<span className='text-sm text-[#1f2b44]'>
									concierge@ceilao.com
								</span>
							</li>
						</ul>
					</div>

					{/* Newsletter / Social */}
					<div>
						<h3 className='text-lg font-medium mb-6 uppercase tracking-widest text-[#1f2b44]'>
							Follow Us
						</h3>
						<div className='flex space-x-4 mb-8'>
							<Link
								href='#'
								className='p-2 bg-primary/30 rounded-full hover:bg-accent hover:text-white transition-colors'
							>
								<Instagram className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='p-2 bg-primary/30 rounded-full hover:bg-accent hover:text-white transition-colors'
							>
								<Facebook className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='p-2 bg-primary/30 rounded-full hover:bg-accent hover:text-white transition-colors'
							>
								<Twitter className='h-5 w-5' />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#1f2b44]'>
					<p>
						&copy; {new Date().getFullYear()} Ceilao Travel & Tours.
						All rights reserved.
					</p>
					<div className='flex space-x-6 mt-4 md:mt-0'>
						<Link
							href='/privacy'
							className='hover:text-white'
						>
							Privacy Policy
						</Link>
						<Link
							href='/terms'
							className='hover:text-white'
						>
							Terms & Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
