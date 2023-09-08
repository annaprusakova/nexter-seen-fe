import styles from './navbar.module.scss';
import MiniLogo from '../../../../public/mini_logo.svg';
import Image from 'next/image';
import { MobileMenu } from '@/components/common/navbar/navbarMobile/MobileMenu';
import { navbarItemsForNoLoginUser } from '@/data/navbar';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { LanguageSelector } from '@/components/common/navbar/languageSelector/LanguageSelector';
import useTranslation from 'next-translate/useTranslation';

export function Navbar(): JSX.Element {
	const { t } = useTranslation('common');
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
	return (
		<header className={styles.navbarWrapper}>
			<nav className={styles.nav} aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image className={styles.logoImg} src={MiniLogo} alt={'logo'} />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className={styles.mobileButton}
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className={styles.navItems}>
					{navbarItemsForNoLoginUser.map(item => (
						<a key={item.name} href={item.route} className={styles.navItem}>
							{t(`${item.name}`)}
						</a>
					))}
				</div>
				<div className={styles.rightSection}>
					<LanguageSelector />
					<a href="/login" className={styles.navItem}>
						{t('signIn')}
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			<MobileMenu
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
		</header>
	);
}
