'use client';

import { useEffect } from 'react';
import useUserStore from '@/contexts/stores/userStore';
import FormHeader from '@/components/shared/formHeader';
import SignUpForm from '@/components/signUp/signUpForm';
import { json } from 'stream/consumers';

const CLIENT_ID =
	'389948282812-dql26j7qvn78161n76ncn15tp8r0n0vb.apps.googleusercontent.com';

declare global {
	interface Window {
		gapi: any;
	}
}

type userDataType = {
	[key: string]: string
}

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
					updateFirstName(googleUser.getBasicProfile().getGivenName());
					updateLastName(googleUser.getBasicProfile().getFamilyName());
					updateEmail(googleUser.getBasicProfile().getEmail());
					updatePictureUrl(googleUser.getBasicProfile().getImageUrl());
					updateGoogleId(googleUser.getBasicProfile().getId());

					const currentUser:userDataType = {
						firstName: googleUser.getBasicProfile().getGivenName(),
						lastName: googleUser.getBasicProfile().getFamilyName(),
						pictureUrl: googleUser.getBasicProfile().getImageUrl(),
						email: googleUser.getBasicProfile().getEmail(),
						googleId: googleUser.getBasicProfile().getId()
					}

					localStorage.setItem('currentUser', JSON.stringify(currentUser))
					
					let linkToDashboard = document.getElementById(
						'linkToDashboard'
					) as HTMLLinkElement;
					linkToDashboard?.click();
				},
				(error: any) => {
					console.log(error);
				}
			);
		});
	}, []);

	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<FormHeader
				title='Create Account'
				subtitle='Connect with your friends today!'
			/>
			<SignUpForm />
			<script
				src='https://apis.google.com/js/api:client.js'
				async
				defer></script>
		</main>
	);
}
