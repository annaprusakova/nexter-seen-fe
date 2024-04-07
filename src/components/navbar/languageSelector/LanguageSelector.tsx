import { languages } from '@/data/languages';
import styles from './languageSelector.module.scss';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export function LanguageSelector() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const pathname = usePathname();
	const localActive = useLocale();

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
		const updatedPathname = pathname.replace(`/${localActive}`, '');
		startTransition(() => {
			router.replace(`/${nextLocale}${updatedPathname}`);
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
