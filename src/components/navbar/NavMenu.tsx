import cn from 'classnames';
import { NavMenuProps } from '@/components/navbar/navbar.interfaces';
import { useLocale, useTranslations } from 'next-intl';

export default function NavMenu({ menuList }: NavMenuProps) {
	const t = useTranslations('Navigation');
	const localActive = useLocale();

	return (
		<>
			{menuList.map(item => (
				<a
					key={item.name}
					href={`${localActive}/${item.href}`}
					className={cn(
						item.current
							? 'bg-primary text-white'
							: 'text-neutral hover:bg-primary hover:text-white',
						'rounded-md px-3 py-2 text-sm font-medium'
					)}
					aria-current={item.current ? 'page' : undefined}
				>
					{t(item.name)}
				</a>
			))}
		</>
	);
}
