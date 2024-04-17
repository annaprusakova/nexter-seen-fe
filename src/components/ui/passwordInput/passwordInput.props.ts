import { ChangeEvent } from 'react';

export type PasswordInputProps = {
	value: string;
	field: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	label: string;
	placeholder: string;
	error: string | undefined;
};
