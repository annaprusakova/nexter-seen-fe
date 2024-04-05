import Poster from '../../../public/poster.png';
import Poster2 from '../../../public/poster2.png';
import { HomeBlockColor } from '@/components/home/HomeBlockColor';
import { HomeBlockImage } from '@/components/home/HomeBlockImage';

export default function Home() {
	return (
		<>
			<HomeBlockColor />
			<HomeBlockImage image={Poster} />
			<HomeBlockColor />
			<HomeBlockImage image={Poster2} />
		</>
	);
}
