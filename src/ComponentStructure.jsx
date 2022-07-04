import {AbsoluteFill} 		from 'remotion'
import {Sequence} 				from 'remotion'
import {Component} 				from './components/Component'
import {Connection} 			from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'

export const ComponentStructure = () => {


	const points = generatePoints({x: 400, y: 300}, {x: 1200, y: 700}, .5)

	return (
		<AbsoluteFill style={{backgroundColor: 'rgb(90, 157, 224)'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">
						{/* <Connection points={points} color = 'black' time={150} signalColor = 'red' signal = {true} reverse={true}/>	 */}
						<DoubleConnection points = {points} forward = {true}/>
						<Component name = {'App'} x={400} y={200} height={200} width={200}/>	
						<Component name = {'Grid'} x={1200} y={800} height={200} width={200}/>
					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}

// a function that takes two points as input. One represents the start point and the other the end point.
// The function generates an array containing four points. The first point is the start point. The last point is the end point.
// The second point has the same x-coordinate as the start point and the y-coordinate is the average of the y-coordinates of the start and end point.
// The third point has the same x-coordinate as the end point and the y-coordinate is the average of the y-coordinates of the start and end point.

const generatePoints = (start, end, offset) => {
	const midY = start.y + (end.y - start.y) * offset
	const points = []
	points.push(start)
	points.push({x: start.x, y: midY})
	points.push({x: end.x, y: midY})
	points.push(end)
	return points
}
