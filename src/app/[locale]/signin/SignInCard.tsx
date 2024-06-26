'use client';

import { useTranslations } from 'next-intl';
import Logo from '../../../../public/mini_logo.svg';
import Image from 'next/image';
import { TextInput } from '@/components/ui/textInput/TextInput';
import { useFormik } from 'formik';
import { Login } from '@/dto/Login';
import { PasswordInput } from '@/components/ui/passwordInput/PasswordInput';
import { Button } from '@/components/ui/button/Button';
import { LoginValidation } from '@/validation/login.validation';

export default function SignInCard() {
	const t = useTranslations('Signin');

	const handleLogin = () => {
		// console.log(values);
	};
	const formik = useFormik<Login>({
		initialValues: { email: '', password: '' },
		validationSchema: LoginValidation,
		onSubmit: handleLogin
	});

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body gap-0">
				<div className="flex flex-col items-center justify-around">
					<Image src={Logo} alt={'logo'} width={50} height={50} />
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
						{t('signinTitle')}
					</h2>
				</div>
				<TextInput
					value={formik.values.email}
					placeholder={t('enterYourEmail')}
					field={'email'}
					label={t('email')}
					onChange={e => formik.handleChange(e)}
					error={formik.errors.email}
				/>
				<PasswordInput
					value={formik.values.password}
					placeholder={'Password'}
					label={t('password')}
					error={formik.errors.password}
					field={'password'}
					onChange={formik.handleChange}
				/>
				<Button
					text={t('signIn')}
					onClick={formik.submitForm}
					className="mt-6"
				/>
			</div>
		</div>
	);
}
