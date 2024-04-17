import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
	email: Yup.string()
		.matches(/^\S*$/, 'Whitespace is not allowed')
		.email('Invalid email')
		.required('Required'),
	password: Yup.string().required('Required')
});
