import React from 'react';

interface IProps {
    title: string,
    subtitle: string
}

export default function FormHeader(props: IProps) {
	return (
		<div>
			<h1
				className='font-bold text-[24px] w-[70%] mt-[30px]'
				style={{ lineHeight: '20px' }}>
				{' '}
				{props.title}
			</h1>
			<p className='font-light text-[14px] mt-[15px] text-[#767676]'>
				{props.subtitle}
			</p>
		</div>
	);
}
