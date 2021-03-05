import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={620}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Fofana Mao Ibrahime',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
