import { useRouter } from 'next/router';
import { languages } from '@/data/languages';
import styles from './languageSelector.module.scss';

export function LanguageSelector(): JSX.Element {
	const router = useRouter();

	const onSelectChange = (e: any) => {
		const locale = e.target.value;
		router.push(router.asPath, router.asPath, {
			locale,
			scroll: false
		});
	};

	return (
		<div className={styles.languageWrapper}>
			<select className={styles.selector} onChange={onSelectChange}>
				{languages.map((elem, key) => (
					<option key={key} value={elem.code}>
						{elem.name}
					</option>
				))}
			</select>
		</div>
	);
}
