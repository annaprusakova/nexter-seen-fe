import { Modal } from '@/components/common/modal/Modal';
import { SingUpRequest } from '@/dto/request/SingUpRequest';
import { Formik, FormikProps } from 'formik';
import styles from './signUp.module.scss';

import { SignupValidation } from '@/validation/signup.validation';
import useTranslation from 'next-translate/useTranslation';
import { Button, Heading, PasswordInput, TextInput } from '@/components/common';
import { SIZE } from '@/components/common/heading/heading.interfaces';
import { signUpRequest } from '@/api/user.api';
import Image from 'next/image';
import MiniLogo from '../../../../public/mini_logo.svg';
import Poster from '../../../../public/poster.png';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

export function SignUpPage(): JSX.Element {
	const { t } = useTranslation('common');
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();

	const initValues: SingUpRequest = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		confirmPassword: ''
	};
	const handleSignUp = async (values: SingUpRequest) => {
		const requestBody = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			username: values.username,
			password: values.password
		};
		const response = await signUpRequest(requestBody);
		if (response) {
			if (response.status === 201) {
				enqueueSnackbar(response.data.message, { variant: 'success' });
				router.push('/login');
			} else if (response.response.status === 409) {
				enqueueSnackbar(response.response.data, { variant: 'error' });
			}
		} else {
			enqueueSnackbar('Something went wrong', { variant: 'error' });
		}
	};

	return (
		<div className="relative">
			<Image src={Poster} alt={'Poster'} className={'h-[100vh] w-full'} />
			<div
				className={
					'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]'
				}
			>
				<Modal>
					<a href={'/'}>
						<Image
							className={'absolute left-5 top-5 w-10 mb-3'}
							src={MiniLogo}
							alt={'logo'}
						/>
					</a>
					<Formik
						initialValues={initValues}
						onSubmit={handleSignUp}
						validateOnBlur={false}
						validateOnChange={false}
						validationSchema={SignupValidation}
						component={({
							values,
							setFieldValue,
							submitForm,
							errors
						}: FormikProps<SingUpRequest>): JSX.Element => (
							<div className={styles.signUpWrapper}>
								<div className={styles.welcomeTitle}>{t('welcome')}</div>
								<Heading size={SIZE.H2} text={t('signUp')} />
								<div className={styles.inputWrapper}>
									<TextInput
										field={'firstName'}
										value={values.firstName}
										onChange={setFieldValue}
										label={t('firstName')}
										placeholder={t('enterYourFirstName')}
										error={errors.firstName}
									/>
									<TextInput
										field={'lastName'}
										value={values.lastName}
										onChange={setFieldValue}
										label={t('lastName')}
										placeholder={t('enterYourLastName')}
										error={errors.lastName}
									/>
									<TextInput
										field={'username'}
										value={values.username}
										onChange={setFieldValue}
										label={t('username')}
										placeholder={t('enterYourUsername')}
										error={errors.username}
									/>
									<TextInput
										field={'email'}
										value={values.email}
										onChange={setFieldValue}
										label={t('email')}
										placeholder={t('enterYourEmail')}
										error={errors.email}
									/>
									<PasswordInput
										field={'password'}
										value={values.password}
										onChange={setFieldValue}
										error={errors.password}
									/>
									<PasswordInput
										field={'confirmPassword'}
										value={values.confirmPassword}
										onChange={setFieldValue}
										error={errors.confirmPassword}
									/>
								</div>
								<Button text={t('register')} onClick={submitForm} />
								<a
									href={'/login'}
									className={
										'text-sm font-semibold leading-6 text-main-dark mx-auto hover:text-main-color'
									}
								>
									{t('signIn')}
								</a>
							</div>
						)}
					/>
				</Modal>
			</div>
		</div>
	);
}
