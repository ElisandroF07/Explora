import React from 'react';
import Link from 'next/link';
import { FaMagnifyingGlass, FaFilter } from 'react-icons/fa6';
import MentorSlider from './sliders/mentorSlider';
import PopularCoursesSlider from './sliders/popularCoursesSlider';

export default function Cooming() {
	return (
		<div className='w-full'>
			<div className='mb-[20px] mt-[30px] flex items-center justify-center'>
				<button
					className='w-[20%] bg-zinc-100 h-[45px] flex items-center justify-center outline-none border-none'
					style={{
						borderTopLeftRadius: '10px',
						borderBottomLeftRadius: '10px',
					}}>
					<FaMagnifyingGlass className='text-zinc-300' />
				</button>
				<input
					type='text'
					name=''
					id=''
					className=' w-[70%] bg-zinc-100 h-[45px] text-[13px] outline-none border-none'
					placeholder='Search'
				/>
				<button
					className='w-[20%] bg-zinc-100 h-[45px] flex items-center justify-center outline-none border-none'
					style={{
						borderTopRightRadius: '10px',
						borderBottomRightRadius: '10px',
					}}>
					<FaFilter className='text-zinc-300' />
				</button>
			</div>
			<div className='w-full'>
				<div className='w-full h-[20vh] bg-blue-100 rounded-lg'></div>
			</div>
			<div className='w-full mt-[20px]'>
				<h1
					className='font-bold text-[16px] mb-[10px]'>
					Top Mentors
				</h1>
				<div className='w-full'>
					<MentorSlider/>
				</div>
			</div>
			<div className='w-full mt-[30px]'>
				<h1
					className='font-bold text-[16px] mb-[10px]'>
					Most Popular Courses
				</h1>
				<div className='w-full'>
					<PopularCoursesSlider/>
				</div>
			</div>
		</div>
	);
}
