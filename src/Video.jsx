import {Composition} from 'remotion';
import {App} from './App';

export const RemotionVideo = () => {
	return (
		<Composition
			id="ComponentStructure"
			component={App}
			durationInFrames={500}
			fps={60}
			width={1920}
			height={1080}
		/>
	)
}
