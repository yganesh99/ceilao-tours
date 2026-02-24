'use client';

import { VolumeX, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RefObject } from 'react';

interface MuteToggleButtonProps {
	isMuted: boolean;
	onClick: () => void;
	className?: string;
}

export function MuteToggleButton({
	isMuted,
	onClick,
	className,
}: MuteToggleButtonProps) {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				onClick();
			}}
			className={cn(
				'absolute z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm border border-white/10',
				className,
			)}
			aria-label={isMuted ? 'Unmute video' : 'Mute video'}
		>
			{isMuted ? (
				<VolumeX className='w-5 h-5' />
			) : (
				<Volume2 className='w-5 h-5' />
			)}
		</button>
	);
}
