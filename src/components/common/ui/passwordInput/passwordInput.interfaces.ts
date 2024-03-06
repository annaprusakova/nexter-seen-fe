export interface IPasswordInput {
	value: string;
	field: string;
	onChange: (filed: string, value: string) => void;
	error: string | undefined;
}
