import { FaFacebook } from 'react-icons/fa6';
import google from '@/assets/images/googleLogo.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<div>
				<h1
					className='font-bold text-[24px] w-[70%] mt-[30px]'
					style={{ lineHeight: '20px' }}
				>
					Hi, Wellcome Back!
				</h1>
				<p className='font-light text-[14px] mt-[10px] text-[#5a5a5a] text-[13px]'>
					Hello again, you've benn missed!
				</p>
			</div>
			<form className='mt-[30px] flex flex-col gap-[20px]'>
				<div className='inputControl flex flex-col gap-[5px]'>
					<label htmlFor='email' className='font-semibold text-[14px]'>
						Email Address
					</label>
					<input
						className='input w-full h-[50px] outline-none rounded-md pl-[20px]'
						style={{ border: '1px solid #aaa' }}
						type='email'
						name='email'
						placeholder='Enter your email'
					/>
				</div>
				<div className='inputControl flex flex-col gap-[5px]'>
					<label htmlFor='password' className='font-semibold text-[14px]'>
						Password
					</label>
					<input
						className='input w-full h-[50px] outline-none rounded-md pl-[20px]'
						style={{ border: '1px solid #aaa' }}
						type='password'
						name='password'
						placeholder='Enter your password'
					/>
				</div>
				<div className='inputControl flex justify-between'>
					<div className='flex gap-[10px] items-center justify-start'>
						<input
							type='checkbox'
							name='conditions'
							className='w-[20px] h-[20px] rounded-md'
						/>{' '}
						<label htmlFor='password' className='font-semibold text-[14px]'>
							Remember Me
						</label>
					</div>
					<div>
						<p className='font-semibold text-[14px] text-red-500'>Forgot Password</p>
					</div>
				</div>
				<button className='w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mt-[35px] font-semibold text-[13px]'>
					Login
				</button>
				<div className='flex items-center justify-center mt-[10px] mb-[10px]'>
					<div className='w-[80%] h-[.8px] bg-[var(--passive-color)] opacity-30'></div>
					<div className='w-full text-center mt-[10px] text-[13px]  opacity-60'>
						Or Login With
					</div>
					<div className='w-[80%] h-[.8px] bg-[var(--passive-color)] opacity-30'></div>
				</div>
				<div className='flex justify-between'>
					<button
						className='w-[45%] h-[45px] rounded-md bg-[var(--foreground)] flex items-center justify-center gap-[10px]'
						style={{ border: '1px solid #aaa' }}
					>
						<FaFacebook className='text-[#1877F2] w-[20px] h-[20px]' />
						<p className='text-[var(--passive-color)] font-semibold text-[13px]'>
							Facebook
						</p>
					</button>
					<button
						className='w-[45%] h-[45px] rounded-md bg-[var(--foreground)] flex items-center justify-center gap-[10px]'
						style={{ border: '1px solid #aaa' }}
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
							className='font-semibold text-[var(--background-body)]'
						>
							Sign Up
						</Link>
					</p>
				</div>
			</form>
		</main>
	);
}
