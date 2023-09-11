'use client';

import { FaFacebook, FaCircleInfo } from 'react-icons/fa6';
import google from '@/assets/images/googleLogo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SignIn() {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	function check(): void {
		let inputControls = document.querySelectorAll(
			'.inputControl'
		) as NodeListOf<HTMLDivElement>;
		inputControls?.forEach((inputControl) => {
			let input = inputControl.querySelector('.input') as HTMLInputElement;
			if (input?.value === '') {
				input.style.borderColor = '#ff0000';
				let warningIcon = inputControl.querySelector('.warning') as HTMLElement;
				warningIcon?.classList.remove('opacity-0');
			} else {
				console.log(input);
			}
		});
	}

	function resetInput(event: React.FocusEvent<HTMLInputElement>): void {
		let input = event.target as HTMLInputElement;
		let warningIcon = input.parentElement?.querySelector(
			'.warning'
		) as HTMLElement;
		warningIcon?.classList.add('opacity-0');
		input.style.borderColor = '#aaa';
	}

	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<div>
				<h1
					className='font-bold text-[24px] w-[70%] mt-[30px]'
					style={{ lineHeight: '20px' }}
				>
					{' '}
					Hi, Wellcome Back!
				</h1>
				<p className='font-light text-[14px] mt-[15px] text-[#767676]'>
					Hello again, you've been missed!
				</p>
			</div>
			<form className='mt-[30px] flex flex-col gap-[20px]'>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label htmlFor='email' className='font-semibold text-[12px]'>
						{' '}
						Email Address{' '}
					</label>
					<input
						className='input w-full h-[45px] transition-colors duration-300 outline-none rounded-md px-[20px]'
						style={{ border: '1px solid #c7c7c7' }}
						type='email'
						name='email'
						placeholder='Enter your email'
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						onFocus={(event) => {
							resetInput(event);
						}}
					/>
					<FaCircleInfo className='warning text-red-500 opacity-0 transition-opacity duration-300 w-[15px] h-[15px] absolute right-[18px] top-[36px]' />
				</div>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label htmlFor='password' className='font-semibold text-[12px]'>
						Password
					</label>
					<input
						className='input w-full h-[45px] transition-colors duration-300 outline-none rounded-md px-[20px]'
						style={{ border: '1px solid #c7c7c7' }}
						type='password'
						name='password'
						placeholder='Enter your password'
						onChange={(event) => {
							setPassword(event.target.value);
						}}
						onFocus={(event) => {
							resetInput(event);
						}}
					/>
					<FaCircleInfo className='warning text-red-500 opacity-0 transition-opacity duration-300 w-[15px] h-[15px] absolute right-[18px] top-[36px]' />
				</div>
				<div className='inputControl flex justify-between'>
					<div className='flex gap-[10px] items-center justify-start'>
						<input
							type='checkbox'
							name='conditions'
							className='w-[20px] h-[20px] rounded-md'
						/>{' '}
						<label htmlFor='password' className='font-semibold text-[13px]'>
							Remember Me
						</label>
					</div>
					<div>
						<p className='font-semibold text-[13px] text-red-400'>
							Forgot Password
						</p>
					</div>
				</div>
				<button
					type='button'
					className='w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mt-[35px] text-[14px]'
					onClick={() => {
						check();
					}}
				>
					Login
				</button>
				<div className='flex items-center justify-center mt-[10px] mb-[10px]'>
					<div className='w-[80%] h-[.8px] bg-[var(--passive-color)] opacity-50'></div>
					<div className='w-full text-center text-[13px]  opacity-80'>
						Or Login With
					</div>
					<div className='w-[80%] h-[.8px] bg-[var(--passive-color)] opacity-50'></div>
				</div>
				<div className='flex justify-between'>
					<button
						className='w-[48%] h-[45px] rounded-md bg-[var(--foreground)] flex items-center justify-center gap-[10px]'
						style={{ border: '1px solid #c7c7c7' }}
					>
						<FaFacebook className='text-[#1877F2] w-[20px] h-[20px]' />
						<p className='text-[var(--passive-color)] font-semibold text-[13px]'>
							Facebook
						</p>
					</button>
					<button
						className='w-[48%] h-[45px] rounded-md bg-[var(--foreground)] flex items-center justify-center gap-[10px]'
						style={{ border: '1px solid #c7c7c7' }}
					>
						<Image src={google} alt='google' className='w-[20px] h-[20px]' />
						<p className='text-[var(--passive-color)] font-semibold text-[13px]'>
							Google
						</p>
					</button>
				</div>
				<div className='w-full flex items-center justify-center'>
					<p className='w-full text-center mt-[20px] text-[13px]  opacity-60'>
						Don't have an account?{' '}
						<Link
							href='/signUp'
							className='font-semibold opacity-1 text-[#35308b]'
						>
							Sign Up
						</Link>
					</p>
				</div>
			</form>
		</main>
	);
}
