import Poster from '../../../../public/poster.png';
import Poster2 from '../../../../public/poster2.png';
import { HomeBlockColor } from '@/components/pages/home/HomeBlockColor';
import { HomeBlockImage } from '@/components/pages/home/HomeBlockImage';

export function HomePage(): JSX.Element {
	return (
		<>
			<HomeBlockColor />
			<HomeBlockImage image={Poster} />
			<HomeBlockColor />
			<HomeBlockImage image={Poster2} />
		</>
	);
}
