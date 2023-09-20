'use client';

import React from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPopularCourses from '../cards/cardPopularCourses';
import 'swiper/css/bundle';

export default function PopularCoursesSlider() {
	return (
		<div>
			<Swiper
				className='w-full h-full'

				slidesPerView={2}
				spaceBetween={10}
				navigation={true}
				>
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
				<SwiperSlide>
					<CardPopularCourses />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
