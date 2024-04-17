import cn from 'classnames';
import { NavMenuProps } from '@/components/navbar/navbar.interfaces';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavMenu({ menuList }: NavMenuProps) {
	const t = useTranslations('Navigation');
	const localActive = useLocale();
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? '' : `${localActive}/`;

	return (
		<>
			{menuList.map(item => (
				<Link
					key={item.name}
					href={`${pathname}${item.href}`}
					className={cn(
						item.current
							? 'bg-primary text-white'
							: 'text-neutral hover:bg-primary hover:text-white',
						'rounded-md px-3 py-2 text-sm font-medium'
					)}
					aria-current={item.current ? 'page' : undefined}
				>
					{t(item.name)}
				</Link>
			))}
		</>
	);
}
