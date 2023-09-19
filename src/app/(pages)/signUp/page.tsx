'use client';

import { FaFacebook } from 'react-icons/fa6';
import google from '@/assets/images/googleLogo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import useUserStore from '@/contexts/stores/userStore';

const CLIENT_ID =
	'389948282812-dql26j7qvn78161n76ncn15tp8r0n0vb.apps.googleusercontent.com';

const createUserSchema = z.object({
	name: z
		.string()
		.nonempty('Username is required')
		.transform((name) => {
			return name
				.trim()
				.split(' ')
				.map((word) => {
					return word[0].toLocaleUpperCase().concat(word.substring(1));
				});
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

// declare global {
// 	interface Window {
// 		gapi?: any;
// 	}
// }

declare global {
    interface Window {
        gapi:any;
    }
}




type CreateUserFormData = z.infer<typeof createUserSchema>;

export default function SignUp() {
	const firstName = useUserStore((state) => state.firstName);
	const updateFirstName = useUserStore((state) => state.updateFirstName);

	const lastName = useUserStore((state) => state.lastName);
	const updateLastName = useUserStore((state) => state.updateLastName);

	const pictureUrl = useUserStore((state) => state.pictureUrl);
	const updatePictureUrl = useUserStore((state) => state.updatePictureUrl);

	const email = useUserStore((state) => state.email);
	const updateEmail = useUserStore((state) => state.updateEmail);

	const googleId = useUserStore((state) => state.googleId);
	const updateGoogleId = useUserStore((state) => state.updateGoogleId);

	useEffect(() => {
		/* global gapi */
		window.gapi?.load('client:auth2', () => {
			const auth2 = window.gapi.auth2.init({
				clientId: CLIENT_ID,
				scope: 'profile email',
				plugin_name: 'hello',
			});
			auth2.attachClickHandler(
				document.getElementById('customGoogleSignInButton'),
				{},
				(googleUser: any) => {
					console.log(googleUser.getBasicProfile());
					updateFirstName(googleUser.getBasicProfile().getGivenName());
					updateLastName(googleUser.getBasicProfile().getFamilyName);
					updateEmail(googleUser.getBasicProfile().getEmail());
					updatePictureUrl(googleUser.getBasicProfile().RT);
					updateGoogleId(googleUser.getBasicProfile().getId());
					let modal = document.getElementById('modal') as HTMLElement;
					setTimeout(()=>{
						modal.style.display = 'flex'
					}, 200)
				},
				(error: any) => {
					console.log(error);
				}
			);
		});

	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateUserFormData>({
		resolver: zodResolver(createUserSchema),
	});

	function createUser(data: any) {
		console.log(data);
	}

	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<div
				id='modal'
				style={{ display: 'none' }}
				className=' absolute top-0 left-0 w-full h-full bg-[#00000050] z-40 flex items-center justify-center'>
				<div className='pt-[40px] w-[80%] opacity-1 flex-col h-[400px] rounded-lg bg-white flex items-center justify-center'>
					<Image
						src={pictureUrl}
						alt='image'
						width={200}
						height={200}
						className=' rounded-full bg-red mb-[30px]'
					/>
					<h1
						className='font-bold text-[24px] w-[100%]'
						style={{ lineHeight: '20px' }}>
						Wellcome {firstName}
					</h1>
					<Link href='/build'>
						<button className='w-[65vw] h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mb-3 mt-[10%]  text-[14px]'>
							Back To Home
						</button>
					</Link>
				</div>
			</div>
			<div>
				<h1
					className='font-bold text-[24px] w-[70%] '
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
						className='input w-full h-[45px] bg-[#f4f4f5] outline-none rounded-lg pl-[20px]'
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
						className='input w-full h-[45px] bg-[#f4f4f5] outline-none rounded-lg pl-[20px]'
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
						className='input w-full h-[45px] bg-[#f4f4f5] outline-none rounded-lg pl-[20px]'
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
						className='w-[48%] h-[45px] rounded-md bg-[#f4f4f5] flex items-center justify-center gap-[10px]'>
						<FaFacebook className='text-[#1877F2] w-[20px] h-[20px]' />
						<p className='text-[var(--passive-color)] font-semibold text-[13px]'>
							Facebook
						</p>
					</button>
					<button
						id='customGoogleSignInButton'
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
			<script
				src='https://www.google.com/recaptcha/api.js?render=6LeVGR4oAAAAAC7F-JpiBuKqRP_McObFu3G8ApXR'
				async
				defer></script>
			<script
				src='https://apis.google.com/js/api:client.js'
				async
				defer></script>
		</main>
	);
}
