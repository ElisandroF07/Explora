'use client';

import { FaCircleInfo, FaFacebook } from 'react-icons/fa6';
import google from '@/assets/images/googleLogo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SignUp() {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const easyRegEx = /^[a-zA-Z0-9]{1,20}$/;
	const mediumRegEx = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{5,20}$/;
	const strongRegEx =
		/^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!"'-«».,<>#$%^&*()/\\a-zA-Z0-9]{8,20}$/;
	const emailRegEx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
	let passwordLevel = '';

	function check(): void {
		if (passwordLevel == 'easy' || passwordLevel == 'none') {
			let progressPWD = document.querySelector(
				'.progressPWD'
			) as HTMLDivElement;
			let textPWD = document.querySelector('.textPWD') as HTMLParagraphElement;
			progressPWD.style.width = '0%';
			textPWD.style.color = '#ff2626';
			textPWD.innerText = 'Password must contain letters and numbers';
		}

		let inputControls = document.querySelectorAll(
			'.inputControl'
		) as NodeListOf<HTMLDivElement>;
		inputControls?.forEach((inputControl) => {
			let input = inputControl.querySelector('.input') as HTMLInputElement;
			if (input?.value === '') {
				input.style.borderColor = '#ff0000';
				let warningIcon = inputControl.querySelector('.warning') as HTMLElement;
				warningIcon?.classList.remove('opacity-0');
			}
		});

		if (!emailRegEx.test(email)) {
			let warningIconEmail = document.querySelector(
				'.warning.email'
			) as HTMLElement;
			warningIconEmail?.classList.remove('opacity-0');
		} else {
			let warningIconEmail = document.querySelector(
				'.warning.email'
			) as HTMLElement;
			warningIconEmail?.classList.add('opacity-0');
		}
	}

	function resetInput(event: React.FocusEvent<HTMLInputElement>): void {
		let input = event.target as HTMLInputElement;
		let warningIcon = input.parentElement?.querySelector(
			'.warning'
		) as HTMLElement;
		warningIcon?.classList.add('opacity-0');
		input.style.borderColor = '#aaa';
	}

	useEffect(() => {
		let progressPWD = document.querySelector('.progressPWD') as HTMLDivElement;
		let textPWD = document.querySelector('.textPWD') as HTMLParagraphElement;
		if (easyRegEx.test(password)) {
			progressPWD.style.width = '30%';
			progressPWD.style.backgroundColor = '#ff2626';
			textPWD.innerText = 'Easy';
			textPWD.style.color = '#ff2626';
			passwordLevel = 'easy';
		}
		if (mediumRegEx.test(password)) {
			progressPWD.style.width = '50%';
			progressPWD.style.backgroundColor = '#1877F2';
			textPWD.innerText = 'Medium';
			textPWD.style.color = '#1877F2';
			passwordLevel = 'medium';
		}
		if (strongRegEx.test(password)) {
			progressPWD.style.width = '70%';
			progressPWD.style.backgroundColor = '#00bf00';
			textPWD.innerText = 'Hard';
			textPWD.style.color = '#00bf00';
			passwordLevel = 'hard';
		}
		if (
			!easyRegEx.test(password) &&
			!mediumRegEx.test(password) &&
			!strongRegEx.test(password)
		) {
			progressPWD.style.width = '0%';
			textPWD.innerText = '';
			passwordLevel = 'none';
		}
	}, [password]);

	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<div>
				<h1
					className='font-bold text-[24px] w-[70%] mt-[30px]'
					style={{ lineHeight: '20px' }}
				>
					Create Account
				</h1>
				<p className='font-light text-[14px] mt-[15px] text-[#767676]'>
					Connect with your friends today!
				</p>
			</div>
			<form className='mt-[30px] flex flex-col gap-[12px]'>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label htmlFor='name' className='font-semibold text-[12px]'>
						Name
					</label>
					<input
						className='input w-full h-[45px] outline-none rounded-lg pl-[20px]'
						style={{ border: '1px solid #c7c7c7' }}
						type='text'
						name='name'
						placeholder='Enter your name'
						onChange={(event) => {
							setName(event.target.value);
						}}
						onFocus={(event) => {
							resetInput(event);
						}}
					/>
					<FaCircleInfo className='warning text-red-500 opacity-0 transition-opacity duration-300 w-[15px] h-[15px] absolute right-[18px] top-[36px]' />
				</div>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label htmlFor='email' className='font-semibold text-[12px]'>
						Email Address
					</label>
					<input
						className='input w-full h-[45px] outline-none rounded-lg pl-[20px]'
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
					<FaCircleInfo className='warning email text-red-500 opacity-0 transition-opacity duration-300 w-[15px] h-[15px] absolute right-[18px] top-[36px]' />
				</div>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label htmlFor='password' className='font-semibold text-[12px]'>
						Password
					</label>
					<input
						className='input w-full h-[45px] outline-none rounded-lg pl-[20px]'
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
					<div className='flex w-full items-center justify-between'>
						<div
							className='progressPWD w-[0%] h-[6px] rounded transition-all duration-300 bg-red-500'
							style={{ border: '0px solid #aaa' }}
						></div>
						<p className='textPWD font-semibold transition-colors duration-300 text-[13px] text-red-500'></p>
					</div>
					<FaCircleInfo className='warning text-red-500 opacity-0 transition-opacity duration-300 w-[15px] h-[15px] absolute right-[18px] top-[36px]' />
				</div>
				<div className='inputControl flex gap-[10px] items-center justify-start'>
					<input
						type='checkbox'
						name='conditions'
						className='w-[20px] h-[20px] rounded-md'
						required={true}
					/>
					<label
						htmlFor='password'
						className='checkBox font-semibold text-[13px]'
					>
						I agree to the terms and conditions
					</label>
				</div>
				<button
					type='button'
					className='signButton w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] transition-colors duration-300 mt-[35px]  text-[14px]'
					onClick={() => {
						check();
					}}
				>
					Sign Up
				</button>
				<div className='flex items-center justify-center mt-[10px] mb-[10px]'>
					<div className='w-[80%] h-[.8px] bg-[var(--passive-color)] opacity-50'></div>
					<div className='w-full text-center text-[13px]  opacity-80'>
						Or Sign Up With
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
					<p className='w-full text-center mt-[20px] text-[13px] mb-[20px]  opacity-60'>
						Already have an account?{' '}
						<Link
							href='/signIn'
							className='font-semibold opacity-1 text-[#35308b]'
						>
							Login
						</Link>
					</p>
				</div>
			</form>
		</main>
	);
}
