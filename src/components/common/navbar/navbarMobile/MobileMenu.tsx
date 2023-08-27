import { NavbarItem } from '@/components/common/navbar/navbarItem/NavbarItem';
import styles from './navbarMobile.module.scss';
import { navbarItemsForNoLoginUser } from '@/data/navbar';
import { IMobileMenu } from '@/components/common/navbar/navbar.interfaces';

export function MobileMenu({
	isMenuOpen,
	setIsLoginOpen,
	setIsSignUpOpen
}: IMobileMenu): JSX.Element {
	return (
		<div className="md:hidden">
			{isMenuOpen && (
				<div className={styles.mobileMenu}>
					{navbarItemsForNoLoginUser.map((elem, key) => (
						<NavbarItem
							key={key}
							link={elem.route}
							name={elem.name}
							setIsOpen={
								elem.name === 'signIn' ? setIsLoginOpen : setIsSignUpOpen
							}
						/>
					))}
				</div>
			)}
		</div>
	);
}
