import React from 'react';
import { IoClose } from 'react-icons/io5';

interface InfoModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}

const InfoModal: React.FC<InfoModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
}) => {
	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in'
			onClick={onClose}
		>
			<div
				className='relative bg-background rounded-lg p-8 max-w-xl w-full text-center shadow-2xl animate-scale-up border-accent border-2'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-4 right-2 text-[#1f2b44] hover:text-accent transition-colors'
					aria-label='Close modal'
				>
					<IoClose size={24} />
				</button>

				{/* Content */}
				<div className='space-y-4'>
					{title && (
						<h3 className='text-xl font-playfair text-primary'>
							{title}
						</h3>
					)}
					<div className='text-foreground/80 font-sans leading-relaxed text-sm'>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoModal;
