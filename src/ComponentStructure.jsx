import {AbsoluteFill} 		from 'remotion'
import {Sequence} 				from 'remotion'
import {Component} 				from './components/Component'
import {Connection} 			from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'
import {Array} 						from './components/Array'
import {ObjectComponent}  from './components/ObjectComponent'
import {ValueComponent} 	from './components/ValueComponent'

const point = (x, y) => {
	return {x, y}
}

export const ComponentStructure = () => {

	const app = {x: 200, y: 540, width: 260, height: 300}
	const grid = {x: app.x+600, y: 700, width: 200, height: 200}
	const score = {x: app.x+600, y: 200, width: 200, height: 200}

	const appToGrid = generatePointsX(point(app.x + app.width / 2, app.y) , {x: grid.x - grid.width / 2, y: grid.y}, .5)
	const appToScore = generatePointsX({x: appToGrid[1].x + 5, y: appToGrid[1].y - 5}, {x: score.x - score.width/2, y: score.y}, 0)


	const cells = ['x', 'o','x','','o', 'x','','','']

	return (
		<AbsoluteFill style={{backgroundColor: 'rgb(90, 157, 224)'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">
						<DoubleConnection points = {appToGrid} forward = {true} t0 = {0} velocity = {10} signalLength = {200} direction = 'x'/>
						<Connection points = {appToScore} t0={19} velocity = {10} signalLength = {200}/>
						<Component name = {'App'} {...app}/>	
						<Component name = {'Grid'} {...grid}/>
						<Component name = {'Score'} {...score}/>
						{/* <Array x={app.x - app.width/2 + 8} y={315} cells={cells}/> */}
						{/* <ObjectComponent x={app.x - app.width/2 + 8} y={240} item = {{x: 7, o: 3}}/> */}
						{/* <ValueComponent x={app.x - app.width/2 + 8} y={170} item = {'x'}/> */}
					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}

// a function that takes two points as input. One represents the start point and the other the end point.
// The function generates an array containing four points. The first point is the start point. The last point is the end point.
// The second point has the same x-coordinate as the start point and the y-coordinate is the average of the y-coordinates of the start and end point.
// The third point has the same x-coordinate as the end point and the y-coordinate is the average of the y-coordinates of the start and end point.

const generatePointsY = (start, end, offset) => {
	const midY = start.y + (end.y - start.y) * offset
	const points = []
	points.push(start)
	points.push({x: start.x, y: midY})
	points.push({x: end.x, y: midY})
	points.push(end)
	return points
}

const generatePointsX = (start, end, offset) => {
	const midX = start.x + (end.x - start.x) * offset
	const points = []
	points.push(start)
	points.push({x: midX, y: start.y})
	points.push({x: midX, y: end.y})
	points.push(end)
	return points
}


