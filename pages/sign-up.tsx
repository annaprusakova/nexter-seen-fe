import { SignUpPage } from '@/components/pages/signup/SignUpPage';
import Head from 'next/head';

export default function SignUp() {
	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<main>
				<SignUpPage />
			</main>
		</>
	);
}
