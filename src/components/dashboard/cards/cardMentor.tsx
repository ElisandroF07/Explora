import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dyson from '@/components/dashboard/cards/blurry_background.jpg';

export default function CardMentor() {
	return (
		<div>
			<Link
				href='/'
				className='flex flex-col items-center justify-center gap-2'>
				<Image
					src={Dyson}
					alt='picture'
					width={60}
					className='rounded-full h-[60px]'
				/>
				<h1 className='font-bold text-[14px]'>Mentor</h1>
			</Link>
		</div>
	);
}
