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
					className='font-bold text-[24px] w-[70%] mt-[20px]'
					style={{ lineHeight: '0px' }}>
					Dashboard
				</h1>
				<p className='font-light text-[14px] mt-[15px] text-[#767676]'>
					Wellcome {props.firstName} {props.lastName}
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
