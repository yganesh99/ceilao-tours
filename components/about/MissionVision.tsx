'use client';

import { motion } from 'framer-motion';

export function MissionVision() {
	return (
		<section className='py-10 md:py-32 bg-background relative overflow-hidden'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid md:grid-cols-2 gap-12 md:gap-20 items-stretch'>
					{/* Mission Statement */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex flex-col space-y-6'
					>
						<h2 className='text-2xl md:text-4xl font-playfair text-[#1f2b44]'>
							Mission Statement
						</h2>
						<div className='w-20 h-0.5 bg-accent'></div>
						<p className='text-sm md:text-lg text-foreground/80 leading-relaxed font-light font-inter'>
							At Ceilão Travel & Tours, we craft journeys that go
							beyond luxury to reveal the raw, authentic soul of
							Sri Lanka. We curate heartfelt experiences that
							honor our island’s heritage and uplift its
							communities—ensuring every guest leaves with
							memories that last a lifetime and a connection to
							our home that is not just seen, but truly felt.
						</p>
					</motion.div>

					{/* Vision Statement */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='flex flex-col space-y-6'
					>
						<h2 className='text-2xl md:text-4xl font-playfair text-[#1f2b44]'>
							Vision Statement
						</h2>
						<div className='w-20 h-0.5 bg-accent'></div>
						<p className='text-sm md:text-lg text-foreground/80 leading-relaxed font-light font-inter'>
							To be Sri Lanka’s premier curator of luxury
							journeys, where every experience reveals the
							island’s soul and fosters a lasting legacy for its
							communities. We envision a future where travel is a
							profound discovery of heritage and meaningful
							impact—sharing an island that is not just seen, but
							truly felt, with the world.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
