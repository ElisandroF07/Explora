'use client';

import Card1 from '@/components/introduction/card1';
import Card2 from '@/components/introduction/card2';
import Card3 from '@/components/introduction/card3';
import Card4 from '@/components/introduction/card4';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

export default function Introduction() {
	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full '>
			<div className='w-full h-full'>
				<Swiper
					className='w-full h-full'
					pagination={{
						dynamicBullets: true,
					}}
					navigation={true}
					onSlideChange={(swiper) => {
						let nextButton = document.querySelector(
							'.swiper-button-next'
						) as HTMLDivElement;
						let navigation = document.querySelector(
							'.swiper-pagination'
						) as HTMLDivElement;
						if (swiper.activeIndex === 3) {
							nextButton!.style.display = 'none';
							navigation!.style.display = 'none';
						} else {
							nextButton!.style.display = 'flex';
							navigation!.style.display = 'initial';
						}
					}}
					modules={[Pagination, Navigation]}>
					<SwiperSlide>
						<Card1 />
					</SwiperSlide>
					<SwiperSlide>
						<Card2 />
					</SwiperSlide>
					<SwiperSlide>
						<Card3 />
					</SwiperSlide>
					<SwiperSlide>
						<Card4 />
					</SwiperSlide>
				</Swiper>
			</div>
		</main>
	);
}
