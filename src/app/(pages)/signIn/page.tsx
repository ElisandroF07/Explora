'use client';

import { FaFacebook } from 'react-icons/fa6';
import google from '@/assets/images/googleLogo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const createUserSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({
			message: 'Must be a valid email',
		})
		.transform((email) => {
			return email.trim().toLowerCase();
		}),
	password: z.string().min(6, {
		message: 'Password must be atleast 6 characters',
	}),
	isRememberChecked: z.boolean(),
});

type createUserFormData = z.infer<typeof createUserSchema>;

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<createUserFormData>({
		resolver: zodResolver(createUserSchema),
	});

	function createUser(data: any) {
		console.log(data);
		window.location.pathname = '/build';
	}

	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<div>
				<h1
					className='font-bold text-[24px] w-[70%] mt-[30px]'
					style={{ lineHeight: '20px' }}>
					{' '}
					Hi, Wellcome Back!
				</h1>
				<p className='font-light text-[14px] mt-[15px] text-[#767676]'>
					Hello again, you've been missed!
				</p>
			</div>
			<form
				onSubmit={handleSubmit(createUser)}
				className='mt-[30px] flex flex-col gap-[20px]'>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label
						htmlFor='email'
						className='font-semibold text-[12px]'>
						{' '}
						Email Address{' '}
					</label>
					<input
						className='input w-full h-[45px] transition-colors bg-[#f4f4f5] duration-300 outline-none rounded-md px-[20px]'
						type='email'
						placeholder='Enter your email'
						{...register('email')}
					/>
					{errors.email && (
						<p className='textPWD transition-colors duration-300 text-[13px] text-red-500'>
							{errors.email.message}
						</p>
					)}
				</div>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label
						htmlFor='password'
						className='font-semibold text-[12px]'>
						Password
					</label>
					<input
						className='input w-full h-[45px] transition-colors bg-[#f4f4f5] duration-300 outline-none rounded-md px-[20px]'
						type='password'
						placeholder='Enter your password'
						{...register('password')}
					/>
					{errors.password && (
						<p className='textPWD transition-colors duration-300 text-[13px] text-red-500'>
							{errors.password.message}
						</p>
					)}
				</div>
				<div className='inputControl flex justify-between'>
					<div className='flex gap-[10px] items-center justify-start'>
						<input
							type='checkbox'
							className='w-[20px] h-[20px] rounded-md'
							{...register('isRememberChecked')}
						/>{' '}
						<label
							htmlFor='password'
							className='font-semibold text-[13px]'>
							Remember Me
						</label>
					</div>
					<div>
						<p className='font-semibold text-[13px] text-red-500'>
							Forgot Password
						</p>
					</div>
				</div>
				<button
					type='submit'
					className='w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mt-[35px] text-[14px]'>
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
						type='button'
						className='w-[48%] h-[45px] rounded-md bg-[#f4f4f5] flex items-center justify-center gap-[10px]'>
						<FaFacebook className='text-[#1877F2] w-[20px] h-[20px]' />
						<p className='text-[var(--passive-color)] font-semibold text-[13px]'>
							Facebook
						</p>
					</button>
					<button
						type='button'
						className='w-[48%] h-[45px] rounded-md bg-[#f4f4f5] flex items-center justify-center gap-[10px]'>
						<Image
							src={google}
							alt='google'
							className='w-[20px] h-[20px]'
						/>
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
							className='font-semibold opacity-1 text-[#35308b]'>
							Sign Up
						</Link>
					</p>
				</div>
			</form>
			{/* <script src="https://www.google.com/recaptcha/api.js?render=6LeVGR4oAAAAAC7F-JpiBuKqRP_McObFu3G8ApXR" async defer ></script> */}
		</main>
	);
}
