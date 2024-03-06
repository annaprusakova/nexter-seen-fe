import Head from 'next/head';
import { ILayout } from '@/components/common/layout/layout.interfaces';
import { Navbar } from '@/components/common/navbar/Navbar';

export function Layout({ title, children }: ILayout): JSX.Element {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main>
				<Navbar />
				{children}
			</main>
		</>
	);
}
