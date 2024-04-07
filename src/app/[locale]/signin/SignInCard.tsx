'use client';

import { useTranslations } from 'next-intl';
import Logo from '../../../../public/mini_logo.svg';
import Image from 'next/image';

export default function SignInCard() {
	const t = useTranslations('Signin');

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body">
				<div className="flex flex-col items-center justify-around">
					<Image src={Logo} alt={'logo'} width={50} height={50} />
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
						{t('signinTitle')}
					</h2>
				</div>
				{/*<TextInput*/}
				{/*	value={''}*/}
				{/*	placeholder={t('enterYourEmail')}*/}
				{/*	field={'email'}*/}
				{/*	label={t('email')}*/}
				{/*	onChange={() => console.log('')}*/}
				{/*	error={''}*/}
				{/*/>*/}
			</div>
		</div>
	);
}
