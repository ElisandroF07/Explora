"use client"

import React from 'react';
import Image from 'next/image';
import useUserStore from '@/contexts/stores/userStore';

export default function Header() {

	const firstName = useUserStore((state) => state.firstName);
	const lastName = useUserStore((state) => state.lastName);
	const pictureUrl = useUserStore((state) => state.pictureUrl);

	return (
		<div className='w-full flex items-center justify-between'>
			<div>
				<h1
					className='font-bold text-[24px] mt-[20px]'
					style={{ lineHeight: '0px' }}>
					Wellcome! 👋
				</h1>
				<p className='font-light text-[14px] mt-[20px] text-[#767676]'>
					Wellcome {firstName || 'Unknow'} {lastName || 'User'}
				</p>
			</div>
			<Image
				src={pictureUrl}
				alt='picture'
				width={40}
				height={40}
				className='rounded-full'
			/>
		</div>
	);
}
