import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

// @ts-ignore
export const DemoText =({titre}) =>{
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const opacity = interpolate(frame, [0, 30], [0, 1]);


	return (
		<div style={{
			position: 'absolute',
			width: videoConfig.width,
			height: videoConfig.height,fontSize: 50
		}}>
			<div style={{textAlign : "center",
				marginTop : "20%" ,
				fontSize : 200 ,
				opacity,}}>
				{titre}
			</div>
		</div>
	)

}