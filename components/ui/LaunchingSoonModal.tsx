import React from 'react';
import { IoClose } from 'react-icons/io5';
import { Button } from './Button';

interface LaunchingSoonModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LaunchingSoonModal: React.FC<LaunchingSoonModalProps> = ({
	isOpen,
	onClose,
}) => {
	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in '
			onClick={onClose}
		>
			<div
				className='relative bg-background rounded-lg p-8 max-w-xs w-full text-center shadow-2xl animate-scale-up border-accent border-2'
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
				<div className='space-y-10'>
					<p className='text-foreground/80 font-sans leading-relaxed'>
						Our digital story is being curated!
					</p>
					{/* <Button onClick={onClose}>Got it</Button> */}
				</div>
			</div>
		</div>
	);
};

export default LaunchingSoonModal;
