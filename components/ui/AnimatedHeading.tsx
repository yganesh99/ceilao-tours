'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
}

export function AnimatedHeading({ children, className = '' }: Props) {
	return (
		<motion.h2
			className={className}
			style={{
				backgroundImage:
					'linear-gradient(120deg, #1f2b44 0%, #1f2b44 45%, var(--accent, #d4af37) 50%, #1f2b44 55%, #1f2b44 100%)',
				backgroundSize: '300% 100%',
				backgroundRepeat: 'no-repeat',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				backgroundClip: 'text',
				color: 'transparent',
			}}
			initial={{ backgroundPosition: '100% 0' }}
			whileInView={{ backgroundPosition: '0% 0' }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 3.5, ease: 'easeOut' }}
		>
			{children}
		</motion.h2>
	);
}
