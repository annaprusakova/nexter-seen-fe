import { languages } from '@/data/languages';
import styles from './languageSelector.module.scss';

export function LanguageSelector() {
	const onSelectChange = () => {};

	return (
		<div className={styles.languageWrapper}>
			<select
				className="select select-primary bg-base-white"
				onChange={onSelectChange}
			>
				{languages.map((elem, key) => (
					<option key={key} value={elem.code}>
						{elem.name}
					</option>
				))}
			</select>
		</div>
	);
}
