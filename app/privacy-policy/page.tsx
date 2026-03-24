'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
	Shield,
	Lock,
	FileText,
	Eye,
	Globe,
	Server,
	UserCheck,
	Mail,
	Phone,
	MapPin,
	ChevronRight,
} from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const sections = [
	{ id: 'introduction', label: '1. Introduction' },
	{ id: 'collection', label: '2. Information Collection' },
	{ id: 'legal', label: '3. Legal Basis' },
	{ id: 'security', label: '4. Data Security' },
	{ id: 'cookies', label: '5. Cookies' },
	{ id: 'retention', label: '6. Retention' },
	{ id: 'rights', label: '7. Your Rights' },
	{ id: 'contact', label: '8. Contact' },
];

export default function PrivacyPolicyPage() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<main
			ref={containerRef}
			className='bg-background min-h-screen'
		>
			<div className='container mx-auto px-4 md:px-6 py-16 md:py-24 mt-20'>
				<div className='relative z-10 text-center px-4 max-w-4xl mx-auto mb-12'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='text-4xl md:text-7xl font-playfair text-[#1f2b44] tracking-wide'
					>
						Privacy Policy
					</motion.h1>
					<div className='w-24 h-0.5 bg-accent mx-auto mt-4' />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
						className='mt-4 text-[#1f2b44]/60 text-xs font-inter uppercase tracking-widest'
					>
						Last Updated: February 2026
					</motion.div>
				</div>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-20'>
					{/* Sticky Sidebar Navigation */}
					<aside className='hidden lg:block w-64 shrink-0'>
						<div className='sticky top-32 space-y-2 border-l border-primary/10 pl-6'>
							<h3 className='font-playfair text-xl text-primary mb-6'>
								Contents
							</h3>
							{sections.map((section) => (
								<ScrollLink
									key={section.id}
									to={section.id}
									smooth={true}
									duration={800}
									offset={-100}
									className='block text-sm text-foreground/60 hover:text-accent cursor-pointer transition-colors py-1 font-inter'
									activeClass='text-accent font-medium'
									spy={true}
								>
									{section.label}
								</ScrollLink>
							))}
						</div>
					</aside>

					{/* Main Content */}
					<div className='flex-1 max-w-4xl font-inter text-foreground/80 leading-relaxed space-y-20'>
						{/* 1. Introduction */}
						<Section
							id='introduction'
							title='1. Introduction and Commitment'
							icon={<Shield className='w-6 h-6 text-accent' />}
						>
							<p className='text-lg md:text-xl font-light text-foreground/90 mb-6'>
								Ceilão Travel & Tours strives to provide an
								unforgettable island experience by providing
								customized tour packages in Sri Lanka.
							</p>
							<p>
								This website is operated by Ceilão Travel &
								Tours (Private) Limited (Registration Number: PV
								00349070), and we take the privacy of your
								personal information very seriously. This
								Privacy Policy outlines your rights and our
								obligations under the Sri Lanka Personal Data
								Protection Act No. 9 of 2022 (PDPA).
							</p>
						</Section>

						{/* 2. Information Collection */}
						<Section
							id='collection'
							title='2. Information We Collect'
							icon={<FileText className='w-6 h-6 text-accent' />}
						>
							<p className='mb-8'>
								To provide bespoke travel arrangements and
								accurate quotes, we collect and use several
								categories of information:
							</p>
							<div className='grid md:grid-cols-2 gap-6'>
								<InfoCard
									title='Enquiries & Planning'
									items={[
										'Name, Contact, Email',
										'Address, Occupation',
										'Travel Dates, Ages',
									]}
								/>
								<InfoCard
									title='Bookings'
									items={[
										'Payment Details',
										'Dietary Preferences',
										'Tour Requirements',
									]}
								/>
								<InfoCard
									title='Regulatory'
									items={[
										'Passport Information',
										'Health Status',
										'Passenger Information',
									]}
								/>
								<InfoCard
									title='Children'
									items={[
										'Ages only',
										'Parental Consent',
										'Visa Requirements',
									]}
								/>
							</div>
						</Section>

						{/* 3. Legal Basis */}
						<Section
							id='legal'
							title='3. Legal Basis for Processing'
							icon={<Lock className='w-6 h-6 text-accent' />}
						>
							<ul className='space-y-4'>
								<ListItem
									title='Contractual Necessity'
									desc='Required to provide a quote or perform the travel services in your contract.'
								/>
								<ListItem
									title='Legitimate Interest'
									desc='Used to provide on-tour assistance, obtain feedback, or offer related travel products.'
								/>
								<ListItem
									title='Consent'
									desc='Specifically obtained for managing visa applications or processing sensitive health data.'
								/>
							</ul>
						</Section>

						{/* 4. Data Sharing */}
						<Section
							id='security'
							title='4. Data Sharing and Security'
							icon={<Server className='w-6 h-6 text-accent' />}
						>
							<div className='bg-white p-8 rounded-lg shadow-sm border border-primary/5 space-y-6'>
								<div className='flex gap-4'>
									<Globe className='w-5 h-5 text-primary shrink-0 mt-1' />
									<div>
										<h4 className='font-playfair text-lg text-primary mb-2'>
											Service Providers
										</h4>
										<p className='text-sm'>
											We share necessary details with
											hotels, transport providers, and
											activity operators to fulfill your
											itinerary.
										</p>
									</div>
								</div>
								<div className='w-full h-px bg-primary/5' />
								<div className='flex gap-4'>
									<Lock className='w-5 h-5 text-primary shrink-0 mt-1' />
									<div>
										<h4 className='font-playfair text-lg text-primary mb-2'>
											Secure Payments
										</h4>
										<p className='text-sm'>
											We use trusted third-party payment
											channels (such as WebXPay). We do
											not store full credit card numbers.
										</p>
									</div>
								</div>
								<div className='w-full h-px bg-primary/5' />
								<div className='flex gap-4'>
									<Shield className='w-5 h-5 text-primary shrink-0 mt-1' />
									<div>
										<h4 className='font-playfair text-lg text-primary mb-2'>
											Security Standards
										</h4>
										<p className='text-sm'>
											We implement technical and physical
											safeguards—including encryption and
											firewalls—in accordance with
											standard industry practices.
										</p>
									</div>
								</div>
							</div>
						</Section>

						{/* 5. Cookies */}
						<Section
							id='cookies'
							title='5. Cookies and Web Analytics'
							icon={<Eye className='w-6 h-6 text-accent' />}
						>
							<p className='mb-6'>
								Our website uses Google Analytics to understand
								site traffic and improve your browsing
								experience.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='flex-1 p-6 bg-secondary/30 rounded-lg'>
									<h4 className='font-playfair text-primary mb-2'>
										Opt-Out
									</h4>
									<p className='text-sm'>
										You may install the Google Analytics
										opt-out browser add-on.
									</p>
								</div>
								<div className='flex-1 p-6 bg-secondary/30 rounded-lg'>
									<h4 className='font-playfair text-primary mb-2'>
										Browser Control
									</h4>
									<p className='text-sm'>
										You can update your browser settings to
										refuse cookies.
									</p>
								</div>
							</div>
						</Section>

						{/* 6. Retention */}
						<Section
							id='retention'
							title='6. Data Retention'
							icon={<Server className='w-6 h-6 text-accent' />}
						>
							<p>
								We retain your personal information only for the
								duration required to provide our services and to
								meet regulatory requirements. For example,
								financial records are kept for 7 years to comply
								with Sri Lankan tax and audit obligations. When
								no longer required, data is destroyed or
								permanently de-identified.
							</p>
						</Section>

						{/* 7. Your Rights */}
						<Section
							id='rights'
							title='7. Your Rights'
							icon={<UserCheck className='w-6 h-6 text-accent' />}
						>
							<div className='grid sm:grid-cols-2 gap-4'>
								{[
									'Access & Correction',
									'Erasure',
									'Objection & Restriction',
									'Data Portability',
								].map((right, index) => (
									<div
										key={index}
										className='flex items-center gap-3 p-4 border border-primary/10 rounded-md hover:border-accent/50 transition-colors'
									>
										<ChevronRight className='w-4 h-4 text-accent' />
										<span className='font-medium text-primary'>
											{right}
										</span>
									</div>
								))}
							</div>
						</Section>

						{/* 8. Contact */}
						<Section
							id='contact'
							title='8. Contact Information'
							icon={<Mail className='w-6 h-6 text-accent' />}
						>
							<div className='bg-primary text-primary-foreground p-8 rounded-xl shadow-lg relative overflow-hidden'>
								<div className='relative z-10'>
									<p className='mb-6 text-white/80'>
										To exercise your rights or report a
										privacy concern, please contact our Data
										Protection Officer:
									</p>
									<div className='space-y-4'>
										<a
											href='mailto:connect@ceilaotravel.com?subject=Connecting%20with%20Ceilão%20Travels%20%26%20Tours'
											className='flex items-center gap-4 hover:text-accent transition-colors'
										>
											<Mail className='w-5 h-5 text-accent' />
											<span>
												connect@ceilaotravel.com
											</span>
										</a>
										<a
											href='tel:+94771319489'
											className='flex items-center gap-4 hover:text-accent transition-colors'
										>
											<Phone className='w-5 h-5 text-accent' />
											<span>+94 77 131 9589</span>
										</a>
										<div className='flex items-start gap-4'>
											<MapPin className='w-5 h-5 text-accent mt-1' />
											<span>
												No 40, 1st Cross Street,
												Dippitigoda Road, Dalugama,
												Kelaniya, Sri Lanka
											</span>
										</div>
									</div>
								</div>
								{/* Decorative circle */}
								<div className='absolute -right-10 -bottom-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl'></div>
							</div>
						</Section>
					</div>
				</div>
			</div>
		</main>
	);
}

function Section({
	id,
	title,
	icon,
	children,
}: {
	id: string;
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<motion.section
			id={id}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
			className='scroll-mt-32'
		>
			<div className='flex items-center gap-4 mb-6 border-b border-primary/10 pb-4'>
				{icon}
				<h2 className='text-2xl md:text-3xl font-playfair text-primary'>
					{title}
				</h2>
			</div>
			<div className='pl-2 md:pl-10'>{children}</div>
		</motion.section>
	);
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
	return (
		<div className='p-6 bg-white border border-primary/5 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
			<h4 className='font-playfair text-lg text-primary mb-4'>{title}</h4>
			<ul className='space-y-2'>
				{items.map((item, idx) => (
					<li
						key={idx}
						className='flex items-start gap-2 text-sm'
					>
						<span className='w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0'></span>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function ListItem({ title, desc }: { title: string; desc: string }) {
	return (
		<li className='flex gap-4'>
			<div className='w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0'></div>
			<div>
				<strong className='text-primary block mb-1 font-playfair text-lg'>
					{title}
				</strong>
				<span className='text-sm'>{desc}</span>
			</div>
		</li>
	);
}
