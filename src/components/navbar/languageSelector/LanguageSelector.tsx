import { languages } from '@/data/languages';
import styles from './languageSelector.module.scss';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export function LanguageSelector() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localActive = useLocale();

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
		startTransition(() => {
			router.replace(`/${nextLocale}`);
		});
	};

	return (
		<div className={styles.languageWrapper}>
			<select
				className="select select-primary bg-base-white"
				onChange={onSelectChange}
				defaultValue={localActive}
				disabled={isPending}
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
