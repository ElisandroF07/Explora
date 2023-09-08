'use client';

import 'swiper/css';
import 'swiper/css/bundle';
import { FaAngleRight } from 'react-icons/fa6';
import Card1 from '@/components/introduction/cards/card1';
import Card2 from '@/components/introduction/cards/card2';
import Card3 from '@/components/introduction/cards/card3';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Introduction() {
	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full '>
			<section className='w-full h-full'>
				<Swiper
					className='w-full h-full'
					pagination={{
						dynamicBullets: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
				>
					<SwiperSlide>
						<Card1 />
					</SwiperSlide>
					<SwiperSlide>
						<Card2 />
					</SwiperSlide>
					<SwiperSlide>
						<Card3 />
					</SwiperSlide>
				</Swiper>
			</section>
		</main>
	);
}
