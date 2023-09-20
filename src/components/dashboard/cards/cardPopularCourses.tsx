import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CardPopularCourses() {
	return (
		<div>
			<Link
				href='/'
				className='flex flex-col items-center justify-center gap-2 px-3 py-1 w-max rounded-lg bg-blue-100'>
				<h1 className='font-bold text-blue-400 text-[14px] w-max'>Adobe Photoshop</h1>
			</Link>
		</div>
	);
}
