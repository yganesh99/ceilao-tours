'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About Us', href: '/about-us' },
	{ name: 'Tours & Experiences', href: '/tours' },
	{ name: 'Tailor-Made Journeys', href: '/tailor-made' },
	// { name: 'Contact', href: '/contact' },
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

	const isHome = pathname === '/';

	return (
		<header
			// className={cn(
			// 	'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
			// 	isScrolled || !isHome
			// 		? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-primary/10 py-3'
			// 		: 'bg-transparent py-6'
			// )}
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
				isScrolled
					? 'bg-background/70 backdrop-blur-lg shadow-md border-primary/20'
					: 'bg-background/95 backdrop-blur-sm shadow-none border-primary/10 py-3',
			)}
		>
			<div className='container mx-auto px-4 md:px-6 flex items-center justify-between'>
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

				{/* Desktop Nav */}
				<nav className='hidden lg:flex items-center space-x-8'>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							// className={cn(
							// 	'text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors',
							// 	isScrolled || !isHome
							// 		? 'text-primary'
							// 		: 'text-white/90 hover:text-white'
							// )}
							className='text-[#1f2b44] hover:underline underline-offset-8 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
						>
							{link.name}
						</Link>
					))}
					{/* <Button
						// variant={isScrolled || !isHome ? 'solid' : 'outline'}
						variant='solid'
						// className={cn(
						// 	!isScrolled && isHome
						// 		? 'border-white text-white hover:bg-white hover:text-primary'
						// 		: ''
						// )}
						className='bg-accent text-white hover:bg-accent/80'
					>
						Plan Now
					</Button> */}
				</nav>

				{/* Mobile Menu Toggle */}
				<button
					className='lg:hidden z-50 p-2'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? (
						<X
							// className={cn(
							// 	'h-6 w-6',
							// 	isScrolled || !isHome || mobileMenuOpen
							// 		? 'text-primary'
							// 		: 'text-white'
							// )}
							className='h-6 w-6 text-primary'
						/>
					) : (
						<Menu
							// className={cn(
							// 	'h-6 w-6',
							// 	isScrolled || !isHome
							// 		? 'text-primary'
							// 		: 'text-white'
							// )}
							className='h-6 w-6 text-primary'
						/>
					)}
				</button>

				{/* Mobile Nav Overlay */}
				{mobileMenuOpen && (
					<div className='fixed inset-0 bg-background h-screen z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-200'>
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className='text-2xl font-playfair text-[#1f2b44] hover:text-accent'
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}
						{/* <Button
							size='lg'
							onClick={() => setMobileMenuOpen(false)}
							className='bg-accent text-white hover:bg-accent/80'
						>
							Plan Now
						</Button> */}
					</div>
				)}
			</div>
		</header>
	);
}
