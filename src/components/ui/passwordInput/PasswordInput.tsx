import cn from 'classnames';
import { PasswordInputProps } from '@/components/ui/passwordInput/passwordInput.props';
import styles from './passwordInput.module.scss';
import { EyeIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { EyeCloseIcon } from '@storybook/icons';

export function PasswordInput({
	value,
	field,
	onChange,
	label,
	placeholder,
	error
}: PasswordInputProps) {
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleIcon = () => {
		setOpen(!isOpen);
	};
	return (
		<div className={styles.inputWrapper}>
			<label className={styles.inputLabel}>
				<div className="label">
					<span>{label}</span>
				</div>
			</label>
			<label className="input input-bordered input-primary flex items-center gap-2">
				<input
					id={field}
					type={isOpen ? 'text' : 'password'}
					value={value}
					onChange={event => onChange(event)}
					placeholder={placeholder}
					className={cn('grow', styles.input, {
						[styles.error]: Boolean(error)
					})}
				/>
				{isOpen ? (
					<EyeCloseIcon className={styles.icon} onClick={handleIcon} />
				) : (
					<EyeIcon className={styles.icon} onClick={handleIcon} />
				)}
			</label>
			{Boolean(error) && <span className={styles.inputError}>{error}</span>}
		</div>
	);
}
