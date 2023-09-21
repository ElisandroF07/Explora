'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import useUserStore from '@/contexts/stores/userStore';
import { FaRegBell, FaRegBookmark } from 'react-icons/fa6';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

export default function Header() {
	type userDataType = {
		[key: string]: string;
	};

	interface ICurrentUserData {
		firstName: string;
		lastName: string;
		pictureUrl: string;
	}

	const [currentUser, setCurrentUser] = useState<ICurrentUserData>();

	useEffect(() => {
		if (localStorage.getItem('currentUser')) {
			const data = JSON.parse(localStorage.getItem('currentUser') || '');
			setCurrentUser(data);
		}
	}, []);

	const firstName = useUserStore((state) => state.firstName);
	const lastName = useUserStore((state) => state.lastName);
	const pictureUrl = useUserStore((state) => state.pictureUrl);

	return (
		<div className='w-full flex  items-center justify-between'>
			<div className='flex mr-4'>
				{currentUser?.pictureUrl ? (
					<Image
						src={currentUser.pictureUrl}
						alt='picture'
						width={50}
						height={50}
						className='rounded-full'
					/>
				) : (
					<Skeleton
						width={50}
						height={50}
						circle
					/>
				)}
				<div className='ml-4'>
					<p className='font-light text-[14px] text-[#767676]'>
						Good Evening 👋
					</p>
					<Suspense fallback='loading...'>
						<h1 className='font-semibold text-[20px] mt-[0px]'>
							{currentUser?.firstName || (
								<Skeleton
									width={150}
									height={25}
									borderRadius={30}
								/>
							)}{' '}
							{currentUser?.lastName || ''}
						</h1>
					</Suspense>
				</div>
			</div>
			<div className='flex gap-4'>
				<FaRegBell className='text-[#767676] w-[20px] h-[20px]' />
				<FaRegBookmark className='text-[#767676] w-[20px] h-[20px]' />
			</div>
		</div>
	);
}
