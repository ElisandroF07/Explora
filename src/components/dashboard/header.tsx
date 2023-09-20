'use client';

import React from 'react';
import Image from 'next/image';
import useUserStore from '@/contexts/stores/userStore';
import { FaRegBell, FaRegBookmark } from 'react-icons/fa6';

export default function Header() {
	const firstName = useUserStore((state) => state.firstName);
	const lastName = useUserStore((state) => state.lastName);
	const pictureUrl = useUserStore((state) => state.pictureUrl);

	return (
		<div className='w-full flex  items-center justify-between'>
			<div className='flex'>
				{pictureUrl && (
				<Image
					src={pictureUrl}
					alt='picture'
					width={40}
					height={40}
					className='rounded-full'
				/>
			)}
				<div>
					<p className='font-light text-[14px] text-[#767676]'>
						Good Evening 👋
					</p>
					<h1
						className='font-bold text-[20px] mt-[15px]'
						style={{ lineHeight: '0px' }}>
						{firstName || 'Unknow'} {lastName || 'User'}
					</h1>
				</div>
			</div>
			<div className='flex gap-4'>
				<FaRegBell className='text-[#767676] w-[20px] h-[20px]' />
				<FaRegBookmark className='text-[#767676] w-[20px] h-[20px]' />
			</div>
		</div>
	);
}
