import cn from 'classnames';
import { IButton } from '@/components/ui/button/button.interfaces';

export function Button({ text, onClick, className }: IButton): JSX.Element {
	return (
		<button
			className={cn(
				'btn btn-outline hover:bg-primary hover:border-primary',
				className
			)}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
