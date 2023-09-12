import { LoginPage } from '@/components/pages/login/LoginPage';
import Head from 'next/head';

export default function Login() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main>
				<LoginPage />
			</main>
		</>
	);
}
