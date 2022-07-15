import {AbsoluteFill} 		from 'remotion'
import {Sequence} 				from 'remotion'
import {Component} 				from './components/Component'
import {Connection} 			from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'
import {ArrayComponent}   from './components/ArrayComponent'
import {ObjectComponent}  from './components/ObjectComponent'
import {ValueComponent} 	from './components/ValueComponent'
import {bump} from './utils/interpolation.js'
import {useCurrentFrame} from 'remotion';
import {UseEffectHook} from './components/UseEffectHook'
import {app} from './componentObjects.js'

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

const point = (x, y) => {
	return {x, y}
}

// const app 					= {x: 200, y: 540, width: 260, height: 300}
const grid 					= {x: 800, y: 700, width: 260, height: 200}
const score 				= {x: 800, y: 200, width: 200, height: 200}
const useEffectHook = {x: 700, y: 450, width: 180, height: 180}

const ys = Array.from({length: 9}, (_, i) => i * 100 + 100)
const Cells = ys.map(y => ({x: 1400, y: y, width: 150, height: 80}))

const gridToCells = Cells.map((cell, index) => {
	const p1 = point(grid.x + grid.width /2, grid.y)
	const p2 = point(cell.x - cell.width /2, cell.y)
	const points = generatePointsX(p1, p2, .5)
	return points
} )


export const ComponentStructure = () => {

	const appToGrid  = generatePointsX(app.slots.cells.connection , {x: grid.x, y: grid.y}, .5)
	const appToScore = generatePointsX(app.slots.score.connection, {x: score.x, y: score.y}, .45)
	const turnToGrid = generatePointsX(app.slots.turn.connection, point(grid.x, grid.y+15), .455)

	const cells = ['x', 'o','x','','o', 'x','','','']
	const frame = useCurrentFrame()
	const bumps =	[176, 166, 156, 146, 136, 126, 116, 126, 136]

	return (
		<AbsoluteFill style={{backgroundColor: 'rgb(90, 157, 224)'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">


						{
							Cells.map((cell, i) => {

								const turnPoints = gridToCells[i].map((point, j) => {
									if (j === 0 || j === gridToCells[i].length - 1) {
										return {x: point.x, y: point.y + 15}
									}
									else{
										return {x: point.x - 15, y: point.y + 15}
									}	
								}
								) 

								return (
									<>
										{/* <Connection points = {gridToCells[i]} t0={73} velocity = {10} signalLength = {100}/> */}
										<DoubleConnection points = {gridToCells[i]} forward = {true} t0 = {76} velocity = {10} signalLength = {100} direction = 'x'/>
										<Connection color = 'darkred' points = {turnPoints} t0={65} velocity = {10} signalLength = {100}/>
										<Component name = {''} {...cell} bump = {bump(frame, bumps[i], bumps[i]+20)}/>
										<ValueComponent x={cell.x - cell.width/2 + 8} y={cell.y} value = {cells[i]} name = {`cells[${i}]`}/>
									</>
								)
							}
							)
						}


						<DoubleConnection points = {appToGrid} forward = {true} t0 = {0} velocity = {10} signalLength = {100} direction = 'x'/>
						<Connection color = 'purple' points = {appToScore} t0={19} velocity = {10} signalLength = {100}/>
						<Connection color = 'darkred' points = {turnToGrid} t0={0} velocity = {10} signalLength = {100}/>
						
						<Component name = {'App'} {...app}/>	
						<Component name = {'Grid'} {...grid} bump = {bump(frame, 50, 70)}/>
						<Component name = {'Score'} {...score} bump = {bump(frame, 72, 92)}/>
						<UseEffectHook {...useEffectHook}/>

						<ObjectComponent x={app.slots.score.position.x}  y={app.slots.score.position.y} item = {{x: 7, o: 3}}/>
						<ArrayComponent  x={app.slots.cells.position.x}  y={app.slots.cells.position.y} cells={cells}/>
						<ValueComponent  x={app.slots.turn.position.x}   y={app.slots.turn.position.y} name = 'turn' value = {'x'}/>
					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}

// a function that takes two points as input. One represents the start point and the other the end point.
// The function generates an array containing four points. The first point is the start point. The last point is the end point.
// The second point has the same x-coordinate as the start point and the y-coordinate is the average of the y-coordinates of the start and end point.
// The third point has the same x-coordinate as the end point and the y-coordinate is the average of the y-coordinates of the start and end point.




