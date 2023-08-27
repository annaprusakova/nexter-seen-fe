import { useRouter } from 'next/router';
import styles from './languageSelector.module.scss';
import { languages } from '@/data/languages';

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
		<div className="relative inline-block">
			<select className={styles.select} onChange={onSelectChange}>
				{languages.map((elem, key) => (
					<option key={key} value={elem.code}>
						{elem.name}
					</option>
				))}
			</select>
		</div>
	);
}
