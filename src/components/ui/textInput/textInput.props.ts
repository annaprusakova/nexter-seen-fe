import { ChangeEvent } from 'react';

export type TextInputProps = {
	value: string;
	field: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	label: string;
	placeholder: string;
	error: string | undefined;
};
