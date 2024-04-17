import { ColorBlock } from '@/components/ui/colorBlock/ColorBlock';
import styles from './register.module.scss';
import RegisterCard from '@/app/[locale]/register/RegisterCard';

export default function RegisterPage() {
	return (
		<>
			<ColorBlock>
				<div className={styles.childWrapper}>
					<RegisterCard />
				</div>
			</ColorBlock>
		</>
	);
}
