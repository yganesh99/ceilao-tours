import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'solid' | 'outline' | 'ghost' | 'link';
	size?: 'sm' | 'md' | 'lg' | 'icon';
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = 'solid', size = 'md', ...props }, ref) => {
		// Base styles
		const baseStyles =
			'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest';

		// Variant styles
		const variants = {
			solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
			outline:
				'border border-input bg-background hover:bg-accent hover:text-accent-foreground border-primary',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline',
		};

		// Size styles
		const sizes = {
			sm: 'h-9 px-3',
			md: 'h-11 px-8 py-2',
			lg: 'h-14 px-10 py-3 text-base',
			icon: 'h-10 w-10',
		};

		return (
			<button
				className={cn(
					baseStyles,
					variants[variant],
					sizes[size],
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button };
