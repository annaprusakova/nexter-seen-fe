import styles from './textInput.module.scss';
import { TextInputProps } from './textInput.props';
import cn from 'classnames';

export function TextInput({
	value,
	field,
	onChange,
	label,
	placeholder,
	error
}: TextInputProps) {
	return (
		<div className={styles.inputWrapper}>
			<label className={styles.inputLabel}>
				<div className="label">
					<span>{label}</span>
				</div>
			</label>
			<input
				id={field}
				value={value}
				onChange={event => onChange(event)}
				placeholder={placeholder}
				className={cn('input input-bordered input-primary', styles.input, {
					[styles.error]: Boolean(error)
				})}
			/>
			{Boolean(error) && <span className={styles.inputError}>{error}</span>}
		</div>
	);
}
