import React from 'react';
import Image from 'next/image';

interface IProps {
	pictureUrl: string;
	firstName: string;
	lastName: string;
}

export default function Header(props: IProps) {
	return (
		<div className='w-full flex items-center justify-between'>
			<div>
				<h1
					className='font-bold text-[24px] mt-[20px]'
					style={{ lineHeight: '0px' }}>
					Wellcome! 👋
				</h1>
				<p className='font-light text-[14px] mt-[20px] text-[#767676]'>
					Wellcome {props.firstName || 'Unknow'} {props.lastName || 'User'}
				</p>
			</div>
			<Image
				src={props.pictureUrl}
				alt='picture'
				width={40}
				height={40}
				className='rounded-full'
			/>
		</div>
	);
}
