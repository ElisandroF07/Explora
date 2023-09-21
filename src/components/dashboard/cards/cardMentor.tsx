import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dyson from '@/components/dashboard/cards/blurry_background.jpg';

interface IProps {
	image: string;
	name: string;
}

export default function CardMentor(props: IProps) {
	return (
		<div>
			<Link
				href='/'
				className='flex flex-col items-center justify-center gap-2'>
				<Image
					src={props.image}
					alt='picture'
					width={60}
					height={60}
					className='rounded-full h-[60px]'
				/>
				<h1 className=' text-[13px]'>{props.name}</h1>
			</Link>
		</div>
	);
}
