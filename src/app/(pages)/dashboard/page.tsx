'use client';

import Link from 'next/link';
import Image from 'next/image';
import useUserStore from '@/contexts/stores/userStore';
import Header from '@/components/dashboard/header';
import Cooming from '@/components/dashboard/cooming';

export default function Dashboard() {
	const firstName = useUserStore((state) => state.firstName);
	const lastName = useUserStore((state) => state.lastName);
	const pictureUrl = useUserStore((state) => state.pictureUrl);

	return (
		<div className='card w-full h-full flex flex-col items-center pt-[25px] p-[15px] relative'>
			<Header
				pictureUrl={pictureUrl}
				firstName={firstName}
				lastName={lastName}
			/>
			<Cooming />
			{/* <div className=' px-[20px] py-[10px] absolute bottom-[10px]'>
				<h1
					className='font-black text-[32px] w-[70%]'
					style={{ lineHeight: '40px' }}>
					Page Under Development
				</h1>
				<p className='font-light text-[16px] mt-[10px] text-[#5a5a5a] text-[13px]'>
					We are working to offer the best for you
				</p>
				<Link href='/introduction'>
					<button className='w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mb-3 mt-[15%]  text-[14px]'>
						Back To Home
					</button>
				</Link>
			</div> */}
		</div>
	);
}
