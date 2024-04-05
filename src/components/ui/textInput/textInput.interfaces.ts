export interface ITextInput {
	value: string;
	field: string;
	onChange: (filed: string, value: string) => void;
	label: string;
	placeholder: string;
	error: string | undefined;
}
