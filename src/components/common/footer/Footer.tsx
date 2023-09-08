import useTranslation from 'next-translate/useTranslation';
import styles from './footer.module.scss';

export function Footer(): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<div className="bg-main-color">
			<div className={styles.footerWrapper}>
				<div className="text-center">
					<h3 className="text-3xl mb-3">{t('Download our app')}</h3>
					<p> Stay fit. All day, every day. </p>
					<div className="flex justify-center my-10">
						<div className={styles.appGoogleWrapper}>
							<img
								src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
								className={styles.appLogo}
								alt={'google play'}
							/>
							<div className={styles.storeText}>
								<p className={styles.downloadOn}>{t('Download on')}</p>
								<p className={styles.store}> Google Play Store </p>
							</div>
						</div>
						<div className={styles.appAppleWrapper}>
							<img
								src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
								className={styles.appLogo}
								alt={'apple play'}
							/>
							<div className={styles.storeText}>
								<p className={styles.downloadOn}>{t('Download on')}</p>
								<p className={styles.store}> Apple Store </p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.infoWrapper}>
					<p className={styles.copyright}> &copy; Nexter Seen, 2023. </p>
					<div className="order-1 md:order-2">
						<span className="px-2">About us</span>
						<span className="px-2 border-l">Contact us</span>
						<span className="px-2 border-l">Privacy Policy</span>
					</div>
				</div>
			</div>
		</div>
	);
}
