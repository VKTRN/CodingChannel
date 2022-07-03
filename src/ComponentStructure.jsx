import {AbsoluteFill} from 'remotion'
import {Sequence} 		from 'remotion'
import {Component} 		from './components/Component'
import {Signal} 			from './components/Signal'

export const ComponentStructure = () => {

	const points = [
		{x: 10, y: 10},
		{x: 110, y: 10},
		{x: 110, y: 110},
		{x: 210, y: 110},
		{x: 210, y: 210},
		{x: 310, y: 210},
		{x: 310, y: 310},
		{x: 410, y: 310},
		{x: 410, y: 410},
		{x: 510, y: 410},
		{x: 510, y: 510},
		{x: 610, y: 510},
		{x: 610, y: 610},
		{x: 710, y: 610},
		{x: 710, y: 710},
		{x: 810, y: 710},
		{x: 810, y: 810},
		{x: 910, y: 810},
		{x: 910, y: 910},
		{x: 1010, y: 910},
		
	]

	return (
		<AbsoluteFill style={{backgroundColor: 'gray'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">
						<Signal points = {points}/>	
						{/* <Component x={400} y={400} height={200} width={200}/>	 */}
						{/* <Component x={1200} y={400} height={200} width={200}/> */}
					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}
