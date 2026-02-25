'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type ItineraryItem = {
	day: string;
	title: string;
	description: string;
};

export function ItineraryAccordion({
	itinerary,
}: {
	itinerary: ItineraryItem[];
}) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<div className='space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
			{itinerary.map((item, index) => {
				const isOpen = openIndex === index;

				return (
					<div
						key={index}
						className='relative flex items-start group'
					>
						{/* Timeline Dot */}
						<div className='absolute left-0 mt-4 md:mt-5 ml-3 w-4 h-4 rounded-full border-2 border-accent bg-background z-10 group-hover:bg-accent transition-colors' />

						<div className='ml-12 w-full'>
							<div
								className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-accent/30 shadow-md shadow-accent/5' : 'border-slate-200 shadow-sm hover:border-accent/30 hover:shadow-md hover:shadow-accent/5'}`}
							>
								<button
									onClick={() =>
										setOpenIndex(isOpen ? null : index)
									}
									className='w-full flex items-center justify-between p-4 md:p-5 text-left bg-white transition-colors'
								>
									<div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-5 flex-1 pr-4'>
										<span className='inline-block px-3 py-1 text-xs font-bold tracking-wider text-accent uppercase border border-accent/20 rounded-md bg-accent/5 w-fit whitespace-nowrap shadow-sm'>
											{item.day}
										</span>
										<h3
											className={`text-lg transition-colors duration-300 font-bold ${isOpen ? 'text-accent' : 'text-[#1f2b44]'}`}
										>
											{item.title}
										</h3>
									</div>
									<div
										className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-accent/10 border-accent/20' : 'bg-slate-50 border-slate-100 group-hover:bg-accent/5 group-hover:border-accent/10'}`}
									>
										<ChevronDown
											className={`w-4 h-4 transition-transform duration-300 ${
												isOpen
													? 'rotate-180 text-accent'
													: 'text-slate-500 group-hover:text-accent'
											}`}
										/>
									</div>
								</button>

								{/* 
									AnimatePresence and motion.div handle the smooth height expansion/collapse 
									framer-motion handles height: "auto" gracefully 
								*/}
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: 'auto',
												opacity: 1,
											}}
											exit={{ height: 0, opacity: 0 }}
											transition={{
												duration: 0.3,
												ease: 'easeInOut',
											}}
										>
											<div className='px-4 pb-4 md:px-5 md:pb-5 text-muted-foreground text-sm sm:text-lg leading-relaxed pt-2 border-t border-slate-50'>
												<p>{item.description}</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
