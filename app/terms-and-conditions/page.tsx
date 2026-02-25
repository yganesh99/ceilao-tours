'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const sections = [
	{ id: 'registration', label: '1. Registration and Licensing' },
	{ id: 'user-agreement', label: '2. Website User Agreement' },
	{ id: 'booking', label: '3. Booking, Pricing, and Taxation' },
	{ id: 'cancellation', label: '4. Cancellation & Refund Policy' },
	{ id: 'liability', label: '5. Operational Safeguards and Liability' },
	{ id: 'responsibilities', label: '6. Traveler Responsibilities' },
	{ id: 'governing-law', label: '7. Governing Law' },
];

export default function TermsAndConditionsPage() {
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
						className='text-3xl md:text-5xl font-playfair text-[#1f2b44] tracking-wide mb-2'
					>
						Terms and Conditions
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
					<aside className='hidden lg:block w-72 shrink-0'>
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
									className='block text-sm text-foreground/60 hover:text-accent cursor-pointer transition-colors py-1.5 font-inter'
									activeClass='text-accent font-medium'
									spy={true}
								>
									{section.label}
								</ScrollLink>
							))}
						</div>
					</aside>

					{/* Main Content */}
					<div className='flex-1 max-w-4xl bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-sm font-inter text-foreground/80 leading-relaxed space-y-16 border-accent border'>
						<Section id='registration'>
							<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
								1. Registration and Licensing
							</h2>
							<ul className='list-disc pl-5 space-y-2'>
								<li>
									<strong className='text-[#1f2b44]'>
										Company Information:
									</strong>{' '}
									This website is operated by Ceilão Travel &
									Tours (Private) Limited, a company duly
									incorporated under the laws of Sri Lanka.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Business Registration:
									</strong>{' '}
									We are registered with the Registrar of
									Companies under Registration Number PV
									00349070. Our registered office is located
									at No 40, 1st Cross Street, Dippitigoda
									Road, Dalugama, Kelaniya, Sri Lanka
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										24/7 Support:
									</strong>{' '}
									We provide 24-hour emergency assistance for
									our guests. For urgent support during your
									tour, please contact our hotline at +94 77
									131 9489.
								</li>
							</ul>
						</Section>

						<Section id='user-agreement'>
							<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
								2. Website User Agreement
							</h2>
							<ul className='list-disc pl-5 space-y-2'>
								<li>
									<strong className='text-[#1f2b44]'>
										Acceptable Use:
									</strong>{' '}
									You may use this website solely for lawful
									purposes. You agree not to upload harmful,
									offensive, or inappropriate content, nor
									introduce malware or attempt unauthorized
									network access.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Intellectual Property:
									</strong>{' '}
									All trademarks, copyrights, and designs are
									the property of Ceilão Travel & Tours or its
									licensors. Content may only be downloaded or
									printed for personal, non-commercial use.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Age and Responsibility:
									</strong>{' '}
									By using this site, you confirm you are of
									legal age and capacity to enter into binding
									legal obligations and accept full
									responsibility for all activity conducted
									through your account.
								</li>
							</ul>
						</Section>

						<Section id='booking'>
							<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
								3. Booking, Pricing, and Taxation
							</h2>
							<ul className='list-disc pl-5 space-y-2'>
								<li>
									<strong className='text-[#1f2b44]'>
										Pricing Policy:
									</strong>{' '}
									Rates are net and include standard
									government taxes (currently 13%).
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Tax and Price Revisions:
									</strong>{' '}
									Rates are subject to revision in the event
									of official changes to government taxes
									(including VAT or SSCL) or significant
									unforeseen escalations in fuel prices or
									entrance fees. Any such adjustments will be
									billed with reasonable prior notice.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Special Requests:
									</strong>{' '}
									Any special requirements (e.g., dietary
									needs, allergies, room location) must be
									advised at the time of booking and confirmed
									in writing. While we will make every effort
									to communicate these to our service
									providers, their fulfillment is subject to
									availability and cannot be guaranteed.
								</li>
							</ul>
						</Section>

						<Section id='cancellation'>
							<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
								4. Cancellation & Refund Policy
							</h2>
							<p className='mb-4'>
								This section details the financial implications
								of changing or cancelling a booking:
							</p>
							<ul className='list-disc pl-5 space-y-2'>
								<li>
									<strong className='text-[#1f2b44]'>
										Cancellation Charges:
									</strong>
									<ul className='list-circle pl-5 mt-2 space-y-1'>
										<li>
											14 days or less prior to arrival:
											100% cancellation fee.
										</li>
										<li>
											15 to 28 days prior to arrival: 50%
											cancellation fee or the equivalent
											of the first two days&apos; charges.
										</li>
										<li>
											29 days or more prior to arrival: No
											cancellation fees apply, provided no
											non-refundable advance payments have
											been made to third-party suppliers
											(e.g., hotels or airlines).
										</li>
									</ul>
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Cancellation Process:
									</strong>{' '}
									Customers cancelling through the company
									(rather than the hotel directly) may receive
									a cancellation confirmation code to avoid
									&quot;No-Show&quot; charges from hotels.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Currency & Refunds:
									</strong>{' '}
									Payments are accepted in LKR or US$. The
									company is not liable for currency exchange
									gains or losses resulting from refunds.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Discrepancies:
									</strong>{' '}
									Any communication issues regarding
									cancellation or refund discrepancies must be
									brought to our attention in writing within
									10 days of the cancellation request.
								</li>
							</ul>
						</Section>

						<Section id='liability'>
							<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
								5. Operational Safeguards and Liability
							</h2>
							<ul className='list-disc pl-5 space-y-2'>
								<li>
									<strong className='text-[#1f2b44]'>
										Force Majeure:
									</strong>{' '}
									Ceilão Travel & Tours shall not be liable
									for any failure to perform its obligations
									where such failure results from &quot;Acts
									of God&quot; (including floods or monsoons),
									war, strikes, pandemics, or
									government-imposed lockdowns.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Third-Party Providers:
									</strong>{' '}
									We act as an agent for hotels and transport
									providers. While we strive to secure the
									specific hotels mentioned in your proposal,
									we reserve the right to book alternative
									properties of a similar standard if the
									original is unavailable.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Wildlife and Safari Risk:
									</strong>{' '}
									Visits to wildlife parks and participation
									in safari tours are undertaken at the
									client&apos;s own risk. Safari vehicles
									typically provide only basic insurance
									coverage as per local regulations.
								</li>
							</ul>
						</Section>

						<Section id='responsibilities'>
							<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
								6. Traveler Responsibilities
							</h2>
							<ul className='list-disc pl-5 space-y-2'>
								<li>
									<strong className='text-[#1f2b44]'>
										Travel Insurance:
									</strong>{' '}
									It is a mandatory recommendation that all
									clients obtain comprehensive travel,
									medical, and cancellation insurance before
									arrival in Sri Lanka to cover unforeseen
									illness, injury, or trip interruptions.
								</li>
								<li>
									<strong className='text-[#1f2b44]'>
										Passports and Visas:
									</strong>{' '}
									Guests are solely responsible for ensuring
									they possess a valid passport (minimum 6
									months validity) and the correct visa/ETA
									for entry into Sri Lanka.
								</li>
							</ul>
						</Section>

						<Section id='governing-law'>
							<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
								7. Governing Law
							</h2>
							<p>
								These terms are governed by the laws of the
								Democratic Socialist Republic of Sri Lanka, and
								users irrevocably submit to the non-exclusive
								jurisdiction of the courts of Sri Lanka.
							</p>
						</Section>
					</div>
				</div>
			</div>
		</main>
	);
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
	return (
		<motion.section
			id={id}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
			className='scroll-mt-32'
		>
			{children}
		</motion.section>
	);
}
