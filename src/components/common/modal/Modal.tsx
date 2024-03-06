import styles from './modal.module.scss';
import { IModal } from '@/components/common/modal/modal.interfaces';

export function Modal({ children }: IModal): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.card}>
					<div className={styles.fileds}>{children}</div>
				</div>
			</div>
		</div>
	);
}
