'use client';

import { useTranslations } from 'next-intl';
import Logo from '../../../../public/mini_logo.svg';
import Image from 'next/image';
import { TextInput } from '@/components/ui/textInput/TextInput';
import { useFormik } from 'formik';
import { PasswordInput } from '@/components/ui/passwordInput/PasswordInput';
import { Button } from '@/components/ui/button/Button';
import { Register } from '@/dto/Register';
import { RegisterValidation } from '@/validation/register.validation';

export default function RegisterCard() {
	const t = useTranslations('Register');

	const handleRegister = () => {
		// console.log(values);
	};
	const formik = useFormik<Register>({
		initialValues: {
			email: '',
			username: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema: RegisterValidation,
		onSubmit: handleRegister
	});

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body gap-0">
				<div className="flex flex-col items-center justify-around">
					<Image src={Logo} alt={'logo'} width={50} height={50} />
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
						{t('registerTitle')}
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
				<TextInput
					value={formik.values.username}
					placeholder={t('enterYourUsername')}
					field={'username'}
					label={t('username')}
					onChange={e => formik.handleChange(e)}
					error={formik.errors.username}
				/>
				<PasswordInput
					value={formik.values.password}
					placeholder={t('enterYourPassword')}
					label={t('password')}
					error={formik.errors.password}
					field={'password'}
					onChange={formik.handleChange}
				/>
				<PasswordInput
					value={formik.values.confirmPassword}
					placeholder={t('confirmYourPassword')}
					label={t('confirmPassword')}
					error={formik.errors.confirmPassword}
					field={'confirmPassword'}
					onChange={formik.handleChange}
				/>
				<Button
					text={t('createAccount')}
					onClick={formik.submitForm}
					className="mt-6"
				/>
			</div>
		</div>
	);
}
