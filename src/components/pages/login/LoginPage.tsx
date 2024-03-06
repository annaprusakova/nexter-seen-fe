import {
	TextInput,
	PasswordInput,
	Heading,
	Button,
	TextLink,
	Modal
} from '@/components/common';
import { SIZE } from '@/components/common/ui/heading/heading.interfaces';
import styles from './login.module.scss';
import { Formik, FormikProps } from 'formik';
import { LoginRequest } from '@/dto/request/LoginRequest';
import { pages } from '@/data/pages';
import { LoginValidation } from '@/validation/login.validation';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Poster from '../../../../public/poster.png';
import MiniLogo from '../../../../public/mini_logo.svg';

export function LoginPage(): JSX.Element {
	const { t } = useTranslation('common');
	const initValues: LoginRequest = {
		email: '',
		password: '',
		isRemember: false
	};

	const handleLogin = () => {
		//test
		localStorage.setItem('isLogin', 'true');
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
						onSubmit={handleLogin}
						validateOnBlur={false}
						validateOnChange={false}
						validationSchema={LoginValidation}
						component={({
							values,
							setFieldValue,
							submitForm,
							errors
						}: FormikProps<LoginRequest>): JSX.Element => (
							<div className={styles.loginWrapper}>
								<div className={styles.welcomeTitle}>{t('welcome')}</div>
								<Heading size={SIZE.H2} text={t('signIn')} />
								<div className={styles.inputWrapper}>
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
								</div>
								<div className={styles.forgotWrapper}>
									<TextLink link={pages[0].route} text={t('forgotPassword')} />
								</div>
								<Button text={t('signIn')} onClick={submitForm} />
								<a
									href={'/sign-up'}
									className={
										'text-sm font-semibold leading-6 text-main-dark mx-auto hover:text-main-color'
									}
								>
									{t('signUp')}
								</a>
							</div>
						)}
					/>
				</Modal>
			</div>
		</div>
	);
}
