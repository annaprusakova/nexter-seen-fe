import Head from 'next/head';
import { VerifyPage } from '@/components/pages/verify/Verify.page';

export default function VerifyToken() {
	return (
		<>
			<Head>
				<title>Verify</title>
			</Head>
			<main>
				<VerifyPage />
			</main>
		</>
	);
}
