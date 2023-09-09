export default function Card4() {
	return (
		<div className='card w-full h-full flex flex-col items-center justify-center'>
			<div className='-translate-y-[30px]'>
			</div>
			<div className=' px-[20px] py-[20px] mt-[40px]'>
				<h1
					className='font-extrabold text-[32px] w-[70%]'
					style={{ lineHeight: '40px' }}
				>
					Wellcome to explora
				</h1>
				<p className='font-light text-[16px] mt-[10px] text-[#888]'>
					Please login to your account or create new account to continue
				</p>
			</div>
			<button className="w-[90%] h-[40px] rounded-md bg-[var(--background-body)] text-[var(--foreground)] mb-3 mt-[80%]">Login</button>
			<button className="w-[90%] h-[40px] rounded-md text-[var(--passive-color)]" style={{border: '1px solid var(--background-body)'}}>Create account</button>
		</div>
	);
}
