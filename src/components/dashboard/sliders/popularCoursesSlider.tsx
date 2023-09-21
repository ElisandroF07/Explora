'use client';

import React, { useState } from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPopularCourses from '../cards/cardPopularCourses';
import 'swiper/css/bundle';
import Link from 'next/link';
import { useQuery } from 'react-query';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

export default function PopularCoursesSlider() {
	const { data, error, isLoading } = useQuery(['mentor', 1], () => {
		return axios
			.get(`https://api.github.com/users`)
			.then((response) => response.data);
	});

	if (isLoading) {
		return (
			<Skeleton
				height={30}
				borderRadius={10}
			/>
		);
	}

	return (
		<div>
			<Swiper
				className='w-full h-full'
				slidesPerView={4}
				spaceBetween={35}
				freeMode={true}
				modules={[FreeMode]}>
				<SwiperSlide>
					<Link
						href='#'
						className='flex flex-col items-center justify-center px-3 py-1 w-max bg-[#3200E0] opacity-80 rounded-lg'>
						<h1 className='text-white text-[13px] w-max'>All Course</h1>
					</Link>
				</SwiperSlide>
				{data?.map((mentor: any, index: any) => {
					return (
						<SwiperSlide key={index}>
							<CardPopularCourses courseTitle={mentor.login} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
