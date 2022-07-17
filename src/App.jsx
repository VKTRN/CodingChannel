import {AbsoluteFill} 		from 'remotion'
import {Sequence} 				from 'remotion'
import {Component} 				from './components/Component'
import {Connection} 			from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'
import {ArrayComponent}   from './components/ArrayComponent'
import {ObjectComponent}  from './components/ObjectComponent'
import {ValueComponent} 	from './components/ValueComponent'
import {bump} 					  from './utils/interpolation.js'
import {useCurrentFrame}  from 'remotion';
import {UseEffectHook} 		from './components/UseEffectHook'
import {app} 							from './props/components.js'
// import {grid} 						from './props/components.js'
// import {score} 						from './props/components.js'
import {cellsAppToGrid} from './props/connections.js'
import {turnAppToGrid} from './props/connections.js'
import {scoreAppToScore} from './props/connections.js'

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

console.log(app)

// const useEffectHook = {x: 700, y: 450, width: 180, height: 180}

// const ys    = Array.from({length: 9}, (_, i) => i * 100 + 100)
// const Cells = ys.map(y => ({x: 1400, y: y, width: 150, height: 80}))

// const gridToCells = Cells.map((cell, index) => {
// 	const p1 = point(grid.x + grid.width /2, grid.y)
// 	const p2 = point(cell.x - cell.width /2, cell.y)
// 	const points = generatePointsX(p1, p2, .5)
// 	return points
// } )


export const App = () => {

	const cells = ['x', 'o','x','','o', 'x','','','']
	const frame = useCurrentFrame()
	const bumps =	[176, 166, 156, 146, 136, 126, 116, 126, 136]

	return (
		<AbsoluteFill style={{backgroundColor: 'rgb(90, 157, 224)'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">


						{/* {
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
										<Connection points = {gridToCells[i]} t0={73} velocity = {10} signalLength = {100}/>
										<DoubleConnection points = {gridToCells[i]} forward = {true} t0 = {76} velocity = {10} signalLength = {100} direction = 'x'/>
										<Connection color = 'darkred' points = {turnPoints} t0={65} velocity = {10} signalLength = {100}/>
										<Component name = {''} {...cell} bump = {bump(frame, bumps[i], bumps[i]+20)}/>
										<ValueComponent x={cell.x - cell.width/2 + 8} y={cell.y} value = {cells[i]} name = {`cells[${i}]`}/>
									</>
								)
							}
							)
						} */}


						{/* <DoubleConnection points = {cellsAppToGrid} forward = {true} t0 = {0} velocity = {10} signalLength = {100} direction = 'x'/> */}
						{/* <Connection  			points = {turnAppToGrid} color='darkred' t0={0} velocity = {10} signalLength = {100}/> */}
						{/* <Connection  			points = {scoreAppToScore} color='purple' t0={19} velocity = {10} signalLength = {100}/> */}
						
						<Component name = {'App'} {...app}/>	
						{/* <Component name = {'Grid'} {...grid} bump = {bump(frame, 50, 70)}/> */}
						{/* <Component name = {'Score'} {...score} bump = {bump(frame, 72, 92)}/> */}
						
						{/* <UseEffectHook {...useEffectHook}/> */}

					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}

// a function that takes two points as input. One represents the start point and the other the end point.
// The function generates an array containing four points. The first point is the start point. The last point is the end point.
// The second point has the same x-coordinate as the start point and the y-coordinate is the average of the y-coordinates of the start and end point.
// The third point has the same x-coordinate as the end point and the y-coordinate is the average of the y-coordinates of the start and end point.



