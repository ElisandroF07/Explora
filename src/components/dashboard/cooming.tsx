import React from 'react';
import Link from 'next/link';

export default function Cooming() {
	return (
		<div className='w-full mt-[20px]  '>
			<div className='w-full h-[100px] bg-zinc-100 rounded-lg'></div>
			<div className='w-full mt-[20px] h-[200px] flex items-center justify-between'>
				<div className='w-[60%] h-full bg-zinc-100 rounded-lg'></div>
				<div className='w-[35%] h-full flex flex-col items-center justify-between'>
					<div className='w-full h-[45%] bg-zinc-100 rounded-lg'></div>
					<div className='w-full h-[45%] bg-zinc-100 rounded-lg'></div>
				</div>
			</div>
			<div className='w-full mt-[20px] h-[200px] flex flex-row-reverse items-center justify-between'>
				<div className='w-[60%] h-full bg-zinc-100 rounded-lg'></div>
				<div className='w-[35%] h-full flex flex-col items-center justify-between'>
					<div className='w-full h-[45%] bg-zinc-100 rounded-lg'></div>
					<div className='w-full h-[45%] bg-zinc-100 rounded-lg'></div>
				</div>
			</div>
			<div className='mt-[20px]'>
				<p className='font-light text-[16px] mt-[10px] text-[#5a5a5a] text-[13px]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
					libero voluptatem velit, officiis ipsum quaerat doloremque est
					voluptate consequatur ad error, ab ipsam quasi ipsa neque! Eos
					mollitia commodi ratione?
				</p>
				<Link href='/introduction'>
					<button className='w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mb-3 mt-[20px]  text-[14px]'>
						Back To Home
					</button>
				</Link>
			</div>
		</div>
	);
}
