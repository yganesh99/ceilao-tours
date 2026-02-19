'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sections = [
	{
		title: 'Promoting the Spirit of Ceilão',
		content: (
			<>
				<p className='mb-4'>
					At Ceilão Travel & Tours, we are curators of the island’s
					unparalleled nature and heritage. As the travel arm of the
					Ceilão Collection, our mission is to showcase the beauty of
					Sri Lanka to the world through luxury hospitality.
				</p>
				<p>
					We are committed to delivering bespoke travel solutions that
					honor the authentic spirit of our island while fostering
					deep, respectful connections between our guests and our
					home.
				</p>
			</>
		),
	},
	{
		title: 'Social Accountability: The Hopeful Foundation',
		content: (
			<>
				<p className='mb-4'>
					We believe that true luxury is measured by the positive
					impact we leave behind. To ensure our growth supports the
					nation, Ceilão Travel & Tours operates with a group-wide
					social accountability framework:
				</p>
				<ul className='list-disc pl-5 space-y-2 mt-4'>
					<li>
						<strong>The Profit Pledge:</strong> A dedicated
						percentage of all profits from our tours is allocated to
						the Hopeful Foundation, our official charitable arm.
					</li>
					<li>
						<strong>
							Charitable Services & Memorable Experiences:
						</strong>{' '}
						These funds provide essential healthcare, educational
						support, and livelihood development to underprivileged
						communities. We offer curated, meaningful experiences
						designed to build lasting memories for both the local
						community and the families who travel with us.
					</li>
					<li>
						<strong>A Lasting Legacy:</strong> By traveling with us,
						our guests ensure that their journey contributes
						directly to the well-being and the future of the
						communities that make Sri Lanka so unique.
					</li>
				</ul>
			</>
		),
		image: '/assets/hopeful-foundation.webp',
	},
	{
		title: 'Environmental Responsibility',
		content: (
			<>
				<p className='mb-4'>
					The natural beauty of Sri Lanka is the heart of our
					business. We are committed to protecting this heritage for
					future generations by:
				</p>
				<ul className='list-disc pl-5 space-y-2 mt-4'>
					<li>
						<strong>Resource Preservation:</strong> Actively working
						to reduce our carbon footprint, minimize waste, and
						eliminate single-use plastics throughout our operations.
					</li>
					<li>
						<strong>Ethical Tourism:</strong> Partnering only with
						operators who adhere to strict animal welfare standards
						and promoting "Travel Kindly" principles that respect
						local traditions and biodiversity.
					</li>
				</ul>
			</>
		),
	},
	{
		title: 'Service Excellence & Integrity',
		content: (
			<>
				<p className='mb-4'>
					We are committed to the highest standards of professional
					ethics:
				</p>
				<ul className='list-disc pl-5 space-y-2 mt-4'>
					<li>
						<strong>Uncompromising Quality:</strong> Maintaining
						rigorous standards of safety and hospitality from
						enquiry to departure.
					</li>
					<li>
						<strong>Transparency:</strong> Providing honest,
						transparent pricing and 24/7 support to ensure our
						guests feel secure and supported throughout their
						unforgettable island experience.
					</li>
				</ul>
			</>
		),
	},
];

export function CommitmentContent() {
	return (
		<section className='py-20 md:py-32 bg-background relative'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col space-y-20 md:space-y-32'>
					{sections.map((section, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.7 }}
							className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}
						>
							{/* Text Section */}
							<div
								className={`flex-1 ${section.image ? '' : 'md:max-w-3xl md:mx-auto text-center'}`}
							>
								<h2 className='text-3xl md:text-4xl font-playfair text-[#1f2b44] mb-6'>
									{section.title}
								</h2>
								<div
									className={`w-20 h-0.5 bg-accent mb-6 ${section.image ? '' : 'mx-auto'}`}
								></div>
								<div className='text-lg text-foreground/80 leading-relaxed font-light font-inter'>
									{section.content}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
