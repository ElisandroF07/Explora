import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
	courseTitle: string;
}

export default function CardPopularCourses(props: IProps) {
	return (
		<div>
			<Link
				href='/'
				className='flex flex-col items-center justify-center px-3 py-1 w-max bg-blue-100 opacity-80 rounded-lg'>
				<h1 className='text-blue-600 text-[13px] w-max'>{props.courseTitle}</h1>
			</Link>
		</div>
	);
}
