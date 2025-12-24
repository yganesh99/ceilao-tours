import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	className?: string;
	containerClassName?: string;
	fullWidth?: boolean;
}

export function Section({
	className,
	containerClassName,
	fullWidth = false,
	children,
	...props
}: SectionProps) {
	return (
		<section
			className={cn('w-full py-16 md:py-24', className)}
			{...props}
		>
			<div
				className={cn(
					'mx-auto px-4 md:px-6 lg:px-8',
					fullWidth ? 'w-full' : 'max-w-7xl',
					containerClassName
				)}
			>
				{children}
			</div>
		</section>
	);
}
