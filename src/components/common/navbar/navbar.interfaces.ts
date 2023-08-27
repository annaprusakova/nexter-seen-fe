export interface INavbarItem {
	link: string | null;
	name: string;
	setIsOpen?: (value: boolean) => void;
}

export interface INavbarButton {
	isPage: boolean;
	link: string | null;
	name: string;
	setIsOpen?: (value: boolean) => void;
}

export interface IMobileMenu {
	isMenuOpen: boolean;
	setIsLoginOpen: (value: boolean) => void;
	setIsSignUpOpen: (value: boolean) => void;
}
