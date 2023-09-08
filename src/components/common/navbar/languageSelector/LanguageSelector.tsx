import { useRouter } from 'next/router';
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
		<div className="relative w-40 mr-5">
			<select
				className="select select-ghost-error bg-transparent text-main-dark"
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
