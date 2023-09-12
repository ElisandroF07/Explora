'use client';
import { FaFacebook } from 'react-icons/fa6';
import google from '@/assets/images/googleLogo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '@/api/google_recaptcha_api'

const createUserSchema = z.object({
	name: z
		.string()
		.nonempty('Username is required')
		.transform((name) => {
			return name.trim().split(' ').map((word)=>{
				return word[0].toLocaleUpperCase().concat(word.substring(1))
			})
		}),
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({
			message: 'Must be a valid email',
		})
		.transform((email) => {
			return email.trim().toLowerCase();
		}),
	password: z.string().min(6, 'Password must be atleast 6 characters'),
	isConditionsAccepted: z.literal<boolean>(true, {
		errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
	}),
});

type CreateUserFormData = z.infer<typeof createUserSchema>;

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateUserFormData>({
		resolver: zodResolver(createUserSchema),
	});

	function createUser(data: any) {
		console.log(data)
		window.location.pathname = '/build';
	}

	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<div>
				<h1
					className='font-bold text-[24px] w-[70%] mt-[30px]'
					style={{ lineHeight: '20px' }}>
					Create Account
				</h1>
				<p className='font-light text-[14px] mt-[15px] text-[#767676]'>
					Connect with your friends today!
				</p>
			</div>
			<form
				onSubmit={handleSubmit(createUser)}
				className='mt-[30px] flex flex-col gap-[12px]'>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label
						htmlFor='name'
						className='font-semibold text-[12px]'>
						Name
					</label>
					<input
						className='input w-full h-[45px] bg-[#eff1f4] outline-none rounded-lg pl-[20px]'
						
						type='text'
						placeholder='Enter your name'
						{...register('name')}
					/>
					{errors.name && (
						<p className='textPWD transition-colors duration-300 text-[13px] text-red-500'>
							{errors.name.message}
						</p>
					)}
				</div>
				<div className='inputControl flex flex-col gap-[3px] relative'>
					<label
						htmlFor='email'
						className='font-semibold text-[12px]'>
						Email Address
					</label>
					<input
						className='input w-full h-[45px] bg-[#eff1f4] outline-none rounded-lg pl-[20px]'
						
						type='email'
						placeholder='Enter your email'
						{...register('email')}
					/>
					{errors.email && (
						<p className='textPWD  transition-colors duration-300 text-[13px] text-red-500'>
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
						className='input w-full h-[45px] bg-[#eff1f4] outline-none rounded-lg pl-[20px]'
						
						type='password'
						placeholder='Enter your password'
						{...register('password')}
					/>
					{errors.password && (
						<p className='textPWD  transition-colors duration-300 text-[13px] text-red-500'>
							{errors.password.message}
						</p>
					)}

					<div className='flex w-full items-center justify-between'>
						<div
							className='progressPWD w-[0%] h-[6px] rounded transition-all duration-300 bg-red-500'
							style={{ border: '0px solid #aaa' }}></div>
						<p className='textPWD font-semibold transition-colors duration-300 text-[13px] text-red-500'></p>
					</div>
				</div>
				<div className='inputControl flex gap-[10px] items-center justify-start'>
					<input
						type='checkbox'
						className='w-[20px] h-[20px] rounded-md'
						{...register('isConditionsAccepted')}
					/>
					<label
						htmlFor='password'
						className='checkBox font-semibold text-[13px]'>
						I agree to the terms and conditions
					</label>
				</div>
				{errors.isConditionsAccepted && (
					<p className='textPWD  transition-colors duration-300 text-[13px] text-red-500'>
						{errors.isConditionsAccepted.message}
					</p>
				)}
				<button
					type='submit'
					className='signButton w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] transition-colors duration-300 mt-[35px]  text-[14px]'>
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
						type='button'
						className='w-[48%] h-[45px] rounded-md bg-[#eff1f4] flex items-center justify-center gap-[10px]'>
						<FaFacebook className='text-[#1877F2] w-[20px] h-[20px]' />
						<p className='text-[var(--passive-color)] font-semibold text-[13px]'>
							Facebook
						</p>
					</button>
					<button
						type='button'
						className='w-[48%] h-[45px] rounded-md bg-[#eff1f4] flex items-center justify-center gap-[10px]'>
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
					<p className='w-full text-center mt-[20px] text-[13px] mb-[20px]  opacity-60'>
						Already have an account?{' '}
						<Link
							href='/signIn'
							className='font-semibold opacity-1 text-[#35308b]'>
							Login
						</Link>
					</p>
				</div>
			</form>
			<div className='g-recaptcha' data-sitekey='6LeVGR4oAAAAAC7F-JpiBuKqRP_McObFu3G8ApXR'></div>
		</main>
	);
}
