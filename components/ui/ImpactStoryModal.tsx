import React from 'react';
import { IoClose } from 'react-icons/io5';

interface ImpactStoryModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ImpactStoryModal: React.FC<ImpactStoryModalProps> = ({
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
					<h3 className='text-xl font-playfair text-primary'>
						A legacy in the making.
					</h3>
					<p className='text-foreground/80 font-sans leading-relaxed text-sm'>
						We are currently finalizing the initiatives that will
						preserve our heritage and empower our communities. Our
						impact story launches soon
					</p>
				</div>
			</div>
		</div>
	);
};

export default ImpactStoryModal;
