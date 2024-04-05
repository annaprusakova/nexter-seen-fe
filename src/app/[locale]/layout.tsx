import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/navbar/Navbar';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nexter Seen',
	description: 'Generated by create next app'
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}

export default function RootLayout({
	children,
	params: { locale }
}: Readonly<RootLayoutProps>) {
	const messages = useMessages();

	return (
		<html lang={locale} suppressHydrationWarning={true}>
			<body className={inter.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<main className="flex min-h-screen flex-col">
						<Navbar />
						{children}
					</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}