import {AbsoluteFill} from 'remotion'
import {Sequence} 		from 'remotion'
import {Component} 		from './components/Component'
import {Signal} 			from './components/Signal'

export const ComponentStructure = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'gray'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">
						<Signal x1 = {600} y1 = {500} x2 = {1200} y2 = {500}/>	
						<Component x={400} y={400} height={200} width={200}/>	
						<Component x={1200} y={400} height={200} width={200}/>
					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}
