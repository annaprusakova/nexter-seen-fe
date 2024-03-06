export interface ICheckbox {
	value: boolean;
	text: string;
	field: string;
	onChange: (field: string, value: boolean) => void;
}
