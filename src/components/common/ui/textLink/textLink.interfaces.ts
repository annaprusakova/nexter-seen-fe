import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITextLink
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	link: string;
	text: string;
}
