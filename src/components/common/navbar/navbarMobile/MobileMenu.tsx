import styles from './navbarMobile.module.scss';
import { navbarItemsForNoLoginUser } from '@/data/navbar';
import { IMobileMenu } from '@/components/common/navbar/navbar.interfaces';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import MiniLogo from '../../../../../public/mini_logo.svg';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LanguageSelector } from '@/components/common/navbar/languageSelector/LanguageSelector';
import useTranslation from 'next-translate/useTranslation';

export function MobileMenu({
	mobileMenuOpen,
	setMobileMenuOpen
}: IMobileMenu): JSX.Element {
	const { t } = useTranslation('common');
	return (
		<Dialog
			as="div"
			className={styles.dialog}
			open={mobileMenuOpen}
			onClose={setMobileMenuOpen}
		>
			<div className={styles.dialogPanelWrapper} />
			<Dialog.Panel className={styles.dialogWrapper}>
				<div className={styles.logo}>
					<a href="#" className="-m-1.5 p-1.5">
						<Image className={styles.logoImg} src={MiniLogo} alt={'logo'} />
					</a>
					<button
						type="button"
						className={styles.closeButton}
						onClick={() => setMobileMenuOpen(false)}
					>
						<span className="sr-only">Close menu</span>
						<XMarkIcon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="mt-6 flow-root">
					<div className="-my-6">
						<div className="">
							{navbarItemsForNoLoginUser.map(item => (
								<a href={item.route} key={item.name} className={styles.navItem}>
									{t(`${item.name}`)}
								</a>
							))}
						</div>
						<div className="mb-4">
							<a href="/login" className={styles.navLogin}>
								{t('signIn')}
							</a>
						</div>
						<LanguageSelector />
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
}
