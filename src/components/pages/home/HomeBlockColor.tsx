import styles from './home.module.scss';

export function HomeBlockColor(): JSX.Element {
	return (
		<div className={styles.homeColorWrapper}>
			<div className={styles.clipWrapperTop}>
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className={styles.clipTop}
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
					/>
				</div>
				<div className={styles.textWrapper}>
					<div className="text-center">
						<h1 className={styles.boldText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</h1>
						<p className={styles.text}>
							Venenatis tellus in metus vulputate. Nec feugiat in fermentum
							posuere. Dui vivamus arcu felis bibendum ut.
						</p>
					</div>
				</div>
				<div className={styles.clipWrapperBottom} aria-hidden="true">
					<div
						className={styles.clipBottom}
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
					/>
				</div>
			</div>
		</div>
	);
}
