import Link from "next/link";

export default function Card4() {
	return (
		<div className='card w-full h-full flex flex-col items-center justify-center relative'>
			<div className=' p-[20px] absolute bottom-[10px]'>
				<h1
					className='font-black text-[32px] w-[70%]'
					style={{ lineHeight: '40px' }}
				>
					Wellcome to Explora
				</h1>
				<p className='font-light text-[16px] mt-[10px] text-[#5a5a5a] text-[13px]'>
					Please login to your account or create new account to continue
				</p>
				<Link href='/signUp'><button className="w-full h-[45px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mb-3 mt-[20%] font-semibold text-[13px]">Create account</button></Link>
				<p className="w-full text-center mt-[10px] text-[13px]">Already have an account? <Link href='/signIn' className="font-semibold">Login</Link></p>
			</div>
		</div>
	);
}
