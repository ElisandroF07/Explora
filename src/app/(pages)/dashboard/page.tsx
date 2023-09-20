import Header from '@/components/dashboard/header';
import Cooming from '@/components/dashboard/cooming';

export default function Dashboard() {
	
	return (
		<div className='card w-full h-full flex flex-col items-center pt-[25px] p-[15px] relative'>
			<Header/>
			<Cooming />
		</div>
	);
}
