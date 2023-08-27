import useTranslation from 'next-translate/useTranslation';
import styles from './navbarButton.module.scss';
import Link from 'next/link';
import { INavbarButton } from '@/components/common/navbar/navbar.interfaces';

export function NavbarButton({
	isPage,
	link,
	name,
	setIsOpen
}: INavbarButton): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<>
			{isPage && link ? (
				<Link href={link} className={styles.navbarItemLink} aria-current="page">
					{t(name)}
				</Link>
			) : (
				<div
					className={styles.navbarItemBtn}
					onClick={() => setIsOpen && setIsOpen(true)}
				>
					{t(name)}
				</div>
			)}
		</>
	);
}
