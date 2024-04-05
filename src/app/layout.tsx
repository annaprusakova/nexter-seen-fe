import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nexter Seen',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<main className="flex min-h-screen flex-col">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
