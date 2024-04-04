import styles from './home.module.scss';
import { ColorBlock } from '@/components/ui/colorBlock/ColorBlock';

export function HomeBlockColor(): JSX.Element {
	return (
		<ColorBlock>
			<div className={styles.childWrapper}>
				<div className="text-center">
					<h1 className={styles.boldText}>
						Discover your next favorite movie or TV show
					</h1>
					<p className={styles.text}>
						Search for the latest releases, explore upcoming movies, and find
						trending TV shows. Your entertainment journey starts here.
					</p>
				</div>
			</div>
		</ColorBlock>
	);
}
