'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMentor from '../cards/cardMentor';
import 'swiper/css';
import 'swiper/css/bundle';
import { useQuery } from 'react-query';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

export default function MentorSlider() {
	const { data, error, isLoading } = useQuery(['mentor', 1], () => {
		return axios
			.get(`https://api.github.com/users`)
			.then((response) => response.data);
	});

	if (isLoading) {
		return (
			<Skeleton
				height={50}
				borderRadius={10}
			/>
		);
	}

	return (
		<div>
			<Swiper
				className='w-full h-full'
				slidesPerView={4}>
				{data?.map((mentor: any, index: any) => {
					return (
						<SwiperSlide key={index}>
							<CardMentor
								image={mentor.avatar_url}
								name={mentor.login}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
