'use client';

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Sparkles, Compass, Route, Heart } from 'lucide-react';

const navSections = [
	{ id: 'bespoke-elite', label: 'I. Bespoke & Elite Services' },
	{ id: 'planning', label: 'II. Planning Your Journey' },
	{ id: 'logistics', label: 'III. Logistics & Connectivity' },
	{ id: 'culture', label: 'IV. Culture & Wellbeing' },
];

export default function FaqPage() {
	return (
		<main className='bg-background min-h-screen'>
			<div className='container mx-auto px-4 md:px-6 py-16 md:py-24 mt-20'>
				<div className='relative z-10 text-center px-4 max-w-4xl mx-auto mb-12'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='text-3xl md:text-5xl font-playfair text-[#1f2b44] tracking-wide mb-2'
					>
						Frequently Asked Questions
					</motion.h1>
					<div className='w-24 h-0.5 bg-accent mx-auto mt-4' />
				</div>

				<div className='flex flex-col lg:flex-row gap-12 lg:gap-20'>
					<aside className='hidden lg:block w-72 shrink-0'>
						<div className='sticky top-32 space-y-2 border-l border-primary/10 pl-6'>
							<h3 className='font-playfair text-xl text-[#1f2b44] mb-6'>
								Contents
							</h3>
							{navSections.map((section) => (
								<ScrollLink
									key={section.id}
									to={section.id}
									smooth={true}
									duration={800}
									offset={-100}
									className='block text-sm text-foreground/60 hover:text-accent cursor-pointer transition-colors py-1.5 font-inter leading-snug'
									activeClass='text-accent font-medium'
									spy={true}
								>
									{section.label}
								</ScrollLink>
							))}
						</div>
					</aside>

					<div className='flex-1 max-w-4xl bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-sm font-inter text-foreground/80 leading-relaxed space-y-16 border border-accent'>
						<FaqSection
							id='bespoke-elite'
							title='I. Bespoke & Elite Services'
							icon={<Sparkles className='w-6 h-6 text-accent' />}
						>
							<ul className='space-y-8'>
								<FaqItem
									question='Do you provide VIP Airport Services?'
									answer='Absolutely. To ensure a seamless arrival, we can coordinate "Silk Route" or VIP Fast-Track assistance at Bandaranaike International Airport, allowing you to bypass standard queues for immigration and customs.'
								/>
								<FaqItem
									question='Can you arrange private air transfers within the island?'
									answer='Yes. To maximize your leisure time and offer breathtaking aerial perspectives of the island, we can arrange private helicopter charters or scheduled domestic flights.'
								/>
								<FaqItem
									question='How do you ensure privacy for high-profile guests?'
									answer='Discretion is our hallmark. We specialize in securing exclusive-use private villas and curating secluded experiences to ensure your journey remains intimate and entirely private.'
								/>
								<FaqItem
									question='Are your itineraries fully customizable?'
									answer="Indeed. Every journey we design is a unique reflection of our guests' desires. From private heritage tours to specialized wellness retreats, every detail can be accommodated upon request."
								/>
							</ul>
						</FaqSection>

						<FaqSection
							id='planning'
							title='II. Planning Your Journey'
							icon={<Compass className='w-6 h-6 text-accent' />}
						>
							<ul className='space-y-8'>
								<li className='flex gap-4'>
									<div className='w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0' />
									<div>
										<strong className='text-[#1f2b44] block mb-2 font-playfair text-lg'>
											Do I require a visa to visit Sri
											Lanka?
										</strong>
										<p className='text-sm'>
											Most travelers require an Electronic
											Travel Authorization (ETA) prior to
											arrival. This is a seamless online
											process which can be completed at
											the official portal:{' '}
											<a
												href='https://eta.gov.lk/slvisa/'
												target='_blank'
												rel='noopener noreferrer'
												className='text-accent hover:underline font-medium'
											>
												eta.gov.lk/slvisa
											</a>
											.
										</p>
									</div>
								</li>
								<FaqItem
									question='When is the most opportune time to visit?'
									answer='Sri Lanka is a captivating year-round destination. We recommend the West, South Coast, and Hill Country from November to April, while the East Coast is at its finest from May to September.'
								/>
								<FaqItem
									question='How many days should I dedicate to my stay?'
									answer='To truly immerse yourself in the island’s highlights at a refined pace, we recommend 7–14 days. However, for shorter escapes of 5–6 days, we can design a high-impact, bespoke itinerary.'
								/>
								<FaqItem
									question='Is travel insurance necessary?'
									answer='For your absolute peace of mind, we strongly recommend a comprehensive travel insurance policy covering medical requirements, unforeseen cancellations, and personal belongings.'
								/>
							</ul>
						</FaqSection>

						<FaqSection
							id='logistics'
							title='III. Logistics & Connectivity'
							icon={<Route className='w-6 h-6 text-accent' />}
						>
							<ul className='space-y-8'>
								<FaqItem
									question='How do I navigate between destinations?'
									answer='While our roads are scenic, travel times vary. For example, Colombo to Kandy is approximately 3.5 hours, while the journey to Galle via the expressway is roughly 2 hours. We plan your routes with precision to minimize travel fatigue.'
								/>
								<FaqItem
									question='What are the connectivity options?'
									answer='Complimentary Wi-Fi is standard across our partner hotels and refined cafes. Upon your arrival, our team can assist you in acquiring a local SIM card for effortless data and international calling.'
								/>
								<FaqItem
									question='What currency and payment methods are accepted?'
									answer='The local currency is the Sri Lankan Rupee (LKR). While credit and debit cards are widely accepted at luxury hotels and boutiques, we recommend carrying a small amount of cash for artisanal finds or rural excursions.'
								/>
							</ul>
						</FaqSection>

						<FaqSection
							id='culture'
							title='IV. Culture & Wellbeing'
							icon={<Heart className='w-6 h-6 text-accent' />}
						>
							<ul className='space-y-8'>
								<FaqItem
									question='What culinary experiences can I expect?'
									answer='Sri Lanka offers a sophisticated palette of local flavors, from refined rice & curry to fresh, sustainably sourced seafood. International cuisine is expertly prepared in our selected hotels, and we are delighted to arrange specialized dietary menus upon request.'
								/>
								<FaqItem
									question='What is the recommended attire?'
									answer='We suggest light, breathable fabrics. Modest attire—covering shoulders and knees—is required for sacred temple visits, where it is also customary to remove footwear. A light jacket is essential if your journey takes you into the cooler Hill Country.'
								/>
								<FaqItem
									question='What are the health guidelines regarding water and vaccinations?'
									answer='We recommend enjoying only bottled or filtered water, which is readily available. While no specific vaccinations are mandatory for most travelers, we advise ensuring your routine vaccines are up to date and consulting your physician prior to departure.'
								/>
							</ul>
						</FaqSection>
					</div>
				</div>
			</div>
		</main>
	);
}

function FaqSection({
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
			<div className='flex items-center gap-4 mb-8 border-b border-primary/10 pb-4'>
				{icon}
				<h2 className='text-2xl md:text-3xl font-playfair text-[#1f2b44]'>
					{title}
				</h2>
			</div>
			<div className='pl-0 md:pl-2'>{children}</div>
		</motion.section>
	);
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
	return (
		<li className='flex gap-4'>
			<div className='w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0' />
			<div>
				<strong className='text-[#1f2b44] block mb-2 font-playfair text-lg'>
					{question}
				</strong>
				<p className='text-sm'>{answer}</p>
			</div>
		</li>
	);
}
