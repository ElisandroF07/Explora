import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


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

				<body className={inter.className}>
					{children}
					<script
						src='https://apis.google.com/js/api:client.js'
						async
						defer></script>
				</body>

		</html>
	);
}
