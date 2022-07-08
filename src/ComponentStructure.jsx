import {AbsoluteFill} 		from 'remotion'
import {Sequence} 				from 'remotion'
import {Component} 				from './components/Component'
import {Connection} 			from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'
import {Array} 						from './components/Array'
import {ObjectComponent}  from './components/ObjectComponent'
import {ValueComponent} 	from './components/ValueComponent'

export const ComponentStructure = () => {

	const app = {x: 960, y: 200, width: 260, height: 300}
	const grid = {x: app.x-400, y: 550, width: 200, height: 200}
	const score = {x: app.x+400, y: 550, width: 200, height: 200}

	const appToGrid = generatePoints({x: app.x, y: app.y + app.height / 2}, {x: grid.x, y: grid.y - grid.height/2}, .5)
	const appToScore = generatePoints({x: appToGrid[1].x + 5, y: appToGrid[1].y + 5}, {x: score.x, y: score.y - score.height/2}, 0)

	const cells = ['x', 'o','x','','o', 'x','','','']

	return (
		<AbsoluteFill style={{backgroundColor: 'rgb(90, 157, 224)'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">
						{/* <Connection points={points} color = 'black' time={150} signalColor = 'red' signal = {true} reverse={true}/>	 */}
						<DoubleConnection points = {appToGrid} forward = {true}/>
						<Connection points = {appToScore} dt={13} time = {150}/>
						<Component name = {'App'} {...app}/>	
						<Component name = {'Grid'} {...grid}/>
						<Component name = {'Score'} {...score}/>
						{/* <Array x={278} y={315} cells={cells}/> */}
						{/* <ObjectComponent x={278} y={240} item = {{x: 7, o: 3}}/> */}
						{/* <ValueComponent x={278} y={170} item = {'x'}/> */}
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
