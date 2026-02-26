'use client';

import { m } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
}

export function AnimatedHeading({ children, className = '' }: Props) {
	return (
		<m.h2
			className={className}
			style={{
				backgroundImage:
					'linear-gradient(120deg, #1f2b44 0%, #1f2b44 40%, var(--accent, #d4af37) 50%, #1f2b44 60%, #1f2b44 100%)',
				backgroundSize: '300% 100%',
				backgroundRepeat: 'no-repeat',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				backgroundClip: 'text',
				color: 'transparent',
			}}
			initial={{ backgroundPosition: '80% 0' }}
			whileInView={{ backgroundPosition: '20% 0' }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 5, ease: 'linear' }}
		>
			{children}
		</m.h2>
	);
}
