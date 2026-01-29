'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
	{ name: 'Home', href: '/#hero' },
	{ name: 'Our Story', href: '/#our-story' },
	{ name: 'Curated Collections', href: '/#curated-collections' },
	{ name: 'Bespoke Travel', href: '/#bespoke-travel' },
	{ name: 'The Ceilão Promise', href: '/#promise' },
	{ name: 'Hopeful Foundation', href: '/#foundation' },
	{ name: 'Contact', href: '/#contact' },
];

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<>
			<header
				className={cn(
					'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
					isScrolled
						? 'bg-background/70 backdrop-blur-lg shadow-md border-primary/20'
						: 'bg-background/95 backdrop-blur-sm shadow-none border-primary/10 py-3',
				)}
			>
				<div className='relative pl-0 pr-4 md:pl-0 md:pr-6 flex items-center justify-between'>
					{/* Logo */}
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

					<span className='absolute pl-8 md:pl-0 left-1/2 -translate-x-1/2 block text-[10px] md:text-sm font-semibold text-accent italic font-playfair tracking-wide text-center whitespace-nowrap'>
						Curated Journeys. Heartfelt Hospitality.
					</span>

					{/* Mobile Menu Toggle */}
					<div className='z-50'>
						<Button
							variant='ghost'
							size='icon'
							onClick={toggleMenu}
							className='hover:bg-transparent text-[#1f2b44] hover:text-[#1f2b44]'
							aria-label='Open Menu'
						>
							<Menu className='h-8 w-8' />
						</Button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Backdrop & Drawer */}
			<div
				className={`fixed inset-0 z-60 transition-all duration-300 ${
					mobileMenuOpen
						? 'opacity-100 visible'
						: 'opacity-0 invisible delay-300'
				}`}
			>
				{/* Backdrop */}
				<div
					className='absolute inset-0 bg-black/50 transition-opacity duration-300'
					onClick={closeMenu}
				/>

				{/* Drawer */}
				<div
					className={`absolute top-0 right-0 h-fit w-2/3 max-w-xs bg-navy text-[#cea263] transform transition-transform duration-300 ease-out ${
						mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
					onClick={closeMenu}
				>
					<div className='flex flex-col h-full pl-28 pr-0 py-28'>
						{/* Navigation Links */}
						<nav>
							<ul className='flex flex-col space-y-6 uppercase tracking-widest text-xs font-light text-center'>
								{navLinks.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											onClick={closeMenu}
											className='hover:text-white transition-colors block border-b border-[#cea263]/20 pb-2'
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
