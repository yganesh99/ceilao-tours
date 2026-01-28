'use client';

import { Section } from '@/components/ui/Section';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
	{
		name: 'Instagram',
		href: '#',
		icon: Instagram,
	},
	{
		name: 'Facebook',
		href: '#',
		icon: Facebook,
	},
	{
		name: 'Twitter',
		href: '#',
		icon: Twitter,
	},
];

export function ConnectSection() {
	return (
		<Section className='bg-background py-12 md:py-24'>
			<div className='flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto px-4'>
				<div>
					<h2 className='text-3xl md:text-4xl font-playfair text-[#1f2b44]'>
						Connect
					</h2>
				</div>

				<div className='flex items-center gap-8'>
					{socialLinks.map((social) => (
						<Link
							key={social.name}
							href={social.href}
							className='text-primary/60 hover:text-primary transition-colors duration-300 transform hover:scale-110'
							aria-label={`Follow us on ${social.name}`}
						>
							<social.icon className='w-6 h-6 md:w-8 md:h-8' />
						</Link>
					))}
				</div>
			</div>
		</Section>
	);
}
