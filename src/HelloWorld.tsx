import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {DemoText} from './HelloWorld/DemoText';
import {DemoImage} from './HelloWorld/DemoImage';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={150}>
					<Sequence from={0} durationInFrames={150}>
						<Logo transitionStart={transitionStart} />
					</Sequence>
					<Sequence from={transitionStart + 10} durationInFrames={Infinity}>
						<Title titleText={titleText} titleColor={titleColor} />
					</Sequence>
					<Sequence from={transitionStart + 50} durationInFrames={Infinity}>
						<Subtitle />
					</Sequence>
				</Sequence>
				<Sequence from={150} durationInFrames={20}>
					<DemoText titre="Demo"/>
				</Sequence>
				<Sequence from={170} durationInFrames={400}>
					<DemoImage/>
				</Sequence>
				<Sequence from={570} durationInFrames={50}>
					<DemoText titre="Bye 👋.️"/>
				</Sequence>
			</div>
		</div>
	);
};
