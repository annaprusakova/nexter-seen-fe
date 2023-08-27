import { Modal } from '@/components/common/modal/Modal';
import { ISignUpModal } from '@/components/pages/signup/signUpModal';
import { SingUpRequest } from '@/dto/request/SingUpRequest';
import { Formik, FormikProps } from 'formik';
import styles from './signUp.module.scss';

import { SignupValidation } from '@/validation/signup.validation';
import useTranslation from 'next-translate/useTranslation';
import { Button, Heading, PasswordInput, TextInput } from '@/components/common';
import { SIZE } from '@/components/common/heading/heading.interfaces';
import { signUpRequest } from '@/api/user.api';
import { useState } from 'react';

export function SignUpModal({ isOpen, onClose }: ISignUpModal): JSX.Element {
	const { t } = useTranslation('common');
	const [resultMessage, setResultMessage] = useState<string | undefined>(
		undefined
	);
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
				setResultMessage(response.data.message);
			} else if (response.status === 409) {
				setResultMessage(response.data.message);
			}
		} else {
			setResultMessage('Something went wrong');
		}
	};

	const handleCloseModal = () => {
		onClose();
		setResultMessage(undefined);
	};

	return (
		<Modal isOpen={isOpen} onClose={handleCloseModal}>
			{resultMessage ? (
				<Heading size={SIZE.H2} text={resultMessage} />
			) : (
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
						</div>
					)}
				/>
			)}
		</Modal>
	);
}
