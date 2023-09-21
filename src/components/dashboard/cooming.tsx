import React, { Suspense } from 'react';
import Image from 'next/image';
import { FaMagnifyingGlass, FaFilter } from 'react-icons/fa6';
import MentorSlider from './sliders/mentorSlider';
import PopularCoursesSlider from './sliders/popularCoursesSlider';
import 'react-loading-skeleton/dist/skeleton.css';
import card from '@/components/dashboard/Card 2.svg';
import card1 from '@/components/dashboard/Card 1.svg';

export default function Cooming() {
	return (
		<div className='w-full'>
			<div className='mb-[20px] mt-[30px] flex items-center justify-center'>
				<button
					className='w-[20%] bg-zinc-200 h-[45px] flex items-center justify-center outline-none border-none'
					style={{
						borderTopLeftRadius: '10px',
						borderBottomLeftRadius: '10px',
					}}>
					<FaMagnifyingGlass className='text-zinc-500' />
				</button>
				<input
					type='text'
					name=''
					id=''
					className=' w-[70%] bg-zinc-200 h-[45px] text-[13px] outline-none border-none'
					placeholder='Search course'
				/>
				<button
					className='w-[20%] bg-zinc-200 h-[45px] flex items-center justify-center outline-none border-none'
					style={{
						borderTopRightRadius: '10px',
						borderBottomRightRadius: '10px',
					}}>
					<FaFilter className='text-blue-400' />
				</button>
			</div>
			<div className='w-full'>
				<Image
					src={card}
					alt='card'
					className='w-full'
				/>
			</div>
			<div className='w-full mt-[30px]'>
				<div className='flex items-center justify-between mb-[20px]'>
					<h1 className='font-bold text-[15px] '>Top Mentors</h1>
					<h1 className='font-bold text-[15px] text-[#0074e0] '>See All</h1>
				</div>
				<div className='w-full'>
					<MentorSlider />
				</div>
			</div>
			<div className='w-full mt-[30px]'>
				<h1 className='font-bold text-[15px] mb-[10px]'>
					Most Popular Courses
				</h1>
				<div className='w-full'>
					<PopularCoursesSlider />
				</div>
			</div>
			<div className='w-full mt-[20px]'>
				<Image
					src={card1}
					alt='card'
					className='w-full'
				/>
			</div>
		</div>
	);
}
