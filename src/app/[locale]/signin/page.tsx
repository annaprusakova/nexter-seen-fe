import { ColorBlock } from '@/components/ui/colorBlock/ColorBlock';
import styles from './signin.module.scss';
import SignInCard from '@/app/[locale]/signin/SignInCard';

export default function SignInPage() {
	return (
		<>
			<ColorBlock>
				<div className={styles.childWrapper}>
					<SignInCard />
				</div>
			</ColorBlock>
		</>
	);
}
