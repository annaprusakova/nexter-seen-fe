import { Disclosure } from '@headlessui/react';
import { useLocale, useTranslations } from 'next-intl';
import { NavMenuProps } from '@/components/navbar/navbar.interfaces';
import cn from 'classnames';
import { LanguageSelector } from '@/components/navbar/languageSelector/LanguageSelector';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavMenuMobile({ menuList }: NavMenuProps) {
	const t = useTranslations('Navigation');
	const localActive = useLocale();
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? '' : `${localActive}/`;

	return (
		<Disclosure.Panel className="sm:hidden bg-base-100 h-screen">
			{menuList.map(item => (
				<Disclosure.Button
					key={item.name}
					as="a"
					href={`${pathname}${item.href}`}
					className={cn(
						item.current
							? 'bg-primary text-white'
							: 'text-neutral hover:bg-primary hover:text-white',
						'block rounded-md px-3 py-2 text-base font-medium'
					)}
					aria-current={item.current ? 'page' : undefined}
				>
					{t(item.name)}
				</Disclosure.Button>
			))}
			<div className="divider" />
			<div className="px-3 py-2">
				<LanguageSelector />
			</div>
		</Disclosure.Panel>
	);
}
