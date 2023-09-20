import FormHeader from '@/components/shared/formHeader';
import LoginForm from '@/components/signIn/loginForm';

export default function SignIn() {
	return (
		<main className='bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]'>
			<FormHeader
				title='Hi, Wellcome Back!'
				subtitle="Hello again, you've been missed!"
			/>
			<LoginForm />
			{/* <script src="https://www.google.com/recaptcha/api.js?render=6LeVGR4oAAAAAC7F-JpiBuKqRP_McObFu3G8ApXR" async defer ></script> */}
		</main>
	);
}
