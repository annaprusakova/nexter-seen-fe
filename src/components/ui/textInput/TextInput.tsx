import styles from './textInput.module.scss';
import { ITextInput } from './textInput.interfaces';
import cn from 'classnames';

export function TextInput({
	value,
	field,
	onChange,
	label,
	placeholder,
	error
}: ITextInput): JSX.Element {
	return (
		<div
			className={cn(styles.inputWrapper, { [styles.error]: Boolean(error) })}
		>
			<label className={styles.inputLabel}>
				<div className="label">
					<span>{label}</span>
				</div>
			</label>
			<input
				value={value}
				onChange={event => onChange(field, event.target.value)}
				placeholder={placeholder}
				className={cn('input input-bordered', styles.input, {
					[styles.error]: Boolean(error)
				})}
			/>
			{Boolean(error) && <span className={styles.inputError}>{error}</span>}
		</div>
	);
}
