import * as Yup from 'yup';

export const RegisterValidation = Yup.object().shape({
	email: Yup.string()
		.matches(/^\S*$/, 'Whitespace is not allowed')
		.email('Invalid email')
		.required('Required'),
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
	confirmPassword: Yup.string().test(
		'passwords-match',
		'Passwords must match',
		function (value) {
			return this.parent.password === value;
		}
	)
});
