'use client';

import React from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMentor from '../cards/cardMentor';
import 'swiper/css';
import 'swiper/css/bundle';

export default function MentorSlider() {
	return (
		<div>
			<Swiper
				className='w-full h-full'

				slidesPerView={4}
				navigation={true}
				>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
				<SwiperSlide>
					<CardMentor />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
