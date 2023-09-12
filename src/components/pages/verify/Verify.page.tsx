import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { verifyRequest } from '@/api/user.api';
import { useSnackbar } from 'notistack';

export function VerifyPage(): JSX.Element {
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const token = router.query.verifyToken;
	const verifyUser = async () => {
		const response = await verifyRequest(token as string);
		if (response && response.status === 201) {
			enqueueSnackbar(response.data.message, { variant: 'success' });
			router.push('/login');
		} else {
			enqueueSnackbar('Something went wrong', { variant: 'error' });
		}
	};
	useEffect(() => {
		verifyUser();
	}, [router.isReady]);

	return <div></div>;
}
