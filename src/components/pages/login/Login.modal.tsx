import {
	TextInput,
	PasswordInput,
	Heading,
	Button,
	TextLink,
	Modal
} from '@/components/common';
import { SIZE } from '@/components/common/heading/heading.interfaces';
import styles from './login.module.scss';
import { Formik, FormikProps } from 'formik';
import { LoginRequest } from '@/dto/request/LoginRequest';
import { pages } from '@/data/pages';
import { LoginValidation } from '@/validation/login.validation';
import useTranslation from 'next-translate/useTranslation';
import { ILoginPopUp } from '@/components/pages/login/loginModal.interfaces';

export function LoginModal({ isOpen, onClose }: ILoginPopUp): JSX.Element {
	const { t } = useTranslation('common');
	const initValues: LoginRequest = {
		email: '',
		password: '',
		isRemember: false
	};

	const handleLogin = () => {
		//test
		localStorage.setItem('isLogin', 'true');
		onClose();
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
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
					</div>
				)}
			/>
		</Modal>
	);
}
