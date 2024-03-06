import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SnackbarProvider autoHideDuration={3000}>
			<Component {...pageProps} />
		</SnackbarProvider>
	);
}
