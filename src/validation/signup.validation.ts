import * as Yup from 'yup';

export const SignupValidation = Yup.object().shape({
	email: Yup.string().email('Wrong email type').required('Required'),
	username: Yup.string().required('Required'),
	password: Yup.string()
		.required('Required')
		.min(8, 'Should be at least 8 characters'),
	confirmPassword: Yup.string().test(
		'passwords-match',
		'Passwords must match',
		function (value) {
			return this.parent.password === value;
		}
	)
});
