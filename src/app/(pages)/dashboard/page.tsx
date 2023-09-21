'use client';

import Header from '@/components/dashboard/header';
import Cooming from '@/components/dashboard/cooming';
import { QueryClientProvider, QueryClient } from 'react-query';
import '@/styles/cardMentor.css';

const queryClient = new QueryClient();

export default function Dashboard() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='card w-full h-full flex flex-col items-center pt-[25px] p-[15px] relative'>
				<Header />
				<Cooming />
			</div>
		</QueryClientProvider>
	);
}
