import {Composition} from 'remotion';
import {ComponentStructure} from './ComponentStructure';

export const RemotionVideo = () => {
	return (
		<Composition
			id="ComponentStructure"
			component={ComponentStructure}
			durationInFrames={150}
			fps={60}
			width={1920}
			height={1080}
		/>
	)
}
