"use client"

import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import '@/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Explora',
	description: 'Explora Application',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt'>
			<Head>
				<link
					rel='stylesheet'
					type='text/css'
					href='/nprogress.css'
				/>
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
