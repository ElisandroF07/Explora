'use client';

import React from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPopularCourses from '../cards/cardPopularCourses';
import 'swiper/css/bundle';
import Link from 'next/link';

export default function PopularCoursesSlider() {
	return (
		<div>
			<Swiper
				className='w-full h-full'
				slidesPerView={2}
				spaceBetween={10}
				navigation={true}>
				<SwiperSlide>
					<div>
						<Link
							href='/'
							className='flex flex-col items-center justify-center gap-2 px-3 py-1 w-max rounded-lg bg-blue-500'>
							<h1 className='font-bold text-white text-[14px] w-max'>
								All
							</h1>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
