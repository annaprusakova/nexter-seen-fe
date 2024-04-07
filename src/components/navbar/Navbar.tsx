'use client';

import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import cn from 'classnames';
import Logo from '../../../public/mini_logo.svg';
import Image from 'next/image';
import { LanguageSelector } from '@/components/navbar/languageSelector/LanguageSelector';
import NavMenu from '@/components/navbar/NavMenu';
import { navigationMain, navigationNotUser } from '@/data/navMenuData';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/16/solid';
import NavMenuMobile from '@/components/navbar/NavMenuMobile';
import styles from './navbar.module.scss';

export default function Navbar() {
	const isLogin = false;
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isMobileMenuOpen) {
			const body = document.body;
			body.classList.toggle('overflow-hidden');
		} else {
			const body = document.body;
			body.classList.toggle('overflow-hidden', false);
		}
	}, [isMobileMenuOpen]);

	return (
		<Disclosure
			as="nav"
			className={`${isMobileMenuOpen ? 'bg-base-100' : 'bg-transparent'} absolute inset-x-0 top-0 z-50`}
		>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button
									className={styles.mobileMenuButton}
									onClick={() => {
										setIsMobileMenuOpen(!open);
									}}
								>
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<div className="block h-6 w-6" aria-hidden="true">
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										</div>
									) : (
										<div className="block h-6 w-6" aria-hidden="true">
											<Bars4Icon className="block h-6 w-6" aria-hidden="true" />
										</div>
									)}
								</Disclosure.Button>
							</div>
							<div className={styles.logoWrapper}>
								<a
									href={'/'}
									className="flex flex-shrink-0 items-center cursor-pointer"
								>
									<Image className="h-8 w-auto" src={Logo} alt="Logo" />
								</a>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										<NavMenu menuList={navigationMain} />
									</div>
								</div>
							</div>
							<div className={styles.profileWrapper}>
								{/* Profile dropdown */}
								{isLogin ? (
									<Menu as="div" className="relative ml-3 mr-3">
										<div>
											<Menu.Button className={styles.profileMenuButton}>
												<span className="absolute -inset-1.5" />
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full"
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className={styles.profileMenuItems}>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={cn(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700'
															)}
														>
															Your Profile
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={cn(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700'
															)}
														>
															Settings
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={cn(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700'
															)}
														>
															Sign out
														</a>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								) : (
									<div className="hidden sm:ml-6 sm:block mr-3">
										<div className="flex space-x-4">
											<NavMenu menuList={navigationNotUser} />
										</div>
									</div>
								)}
								<div className={'hidden sm:block'}>
									<LanguageSelector />
								</div>
							</div>
						</div>
					</div>
					<NavMenuMobile menuList={[...navigationMain, ...navigationNotUser]} />
				</>
			)}
		</Disclosure>
	);
}
