import {AbsoluteFill} 		from 'remotion'
import {Sequence} 				from 'remotion'
import {Component} 				from './components/Component'
import {Connection} 			from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'
import {ArrayComponent}   from './components/ArrayComponent'
import {ObjectComponent}  from './components/ObjectComponent'
import {ValueComponent} 	from './components/ValueComponent'

const point = (x, y) => {
	return {x, y}
}

export const ComponentStructure = () => {

	const app = {x: 200, y: 540, width: 260, height: 300}
	const grid = {x: 800, y: 700, width: 260, height: 200}
	const score = {x: 800, y: 200, width: 200, height: 200}

	// an array of numbers increasing by 50
	const ys = Array.from({length: 9}, (_, i) => i * 100 + 100)
	const Cells = ys.map(y => ({x: 1400, y: y, width: 150, height: 80}))

	const gridToCells = Cells.map((cell, index) => {
		const p1 = point(grid.x + grid.width /2, grid.y)
		const p2 = point(cell.x - cell.width /2, cell.y)
		const points = generatePointsX(p1, p2, .5)
		return points
	} )


	const appToGrid = generatePointsX(point(app.x + app.width / 2, app.y) , {x: grid.x - grid.width / 2, y: grid.y}, .5)
	const appToScore = generatePointsX({x: appToGrid[1].x + 5, y: appToGrid[1].y - 5}, {x: score.x - score.width/2, y: score.y}, 0)


	const cells = ['x', 'o','x','','o', 'x','','','']

	return (
		<AbsoluteFill style={{backgroundColor: 'rgb(90, 157, 224)'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">
						<DoubleConnection points = {appToGrid} forward = {true} t0 = {0} velocity = {10} signalLength = {100} direction = 'x'/>
						<Connection points = {appToScore} t0={19} velocity = {10} signalLength = {100}/>
						<Component name = {'App'} {...app}/>	
						<Component name = {'Grid'} {...grid}/>
						<Component name = {'Score'} {...score}/>

						{
							Cells.map((cell, i) => {
								return (
									<>
										{/* <Connection points = {gridToCells[i]} t0={73} velocity = {10} signalLength = {100}/> */}
										<DoubleConnection points = {gridToCells[i]} forward = {true} t0 = {76} velocity = {10} signalLength = {100} direction = 'x'/>
										<Component name = {''} {...cell}/>
										<ValueComponent x={cell.x - cell.width/2 + 8} y={cell.y} value = {cells[i]} name = {`cells[${i}]`}/>

									</>
								)
							}
							)
						}

						<ArrayComponent x={app.x - app.width/2 + 8} y={app.y-30} cells={cells}/>
						<ArrayComponent x={grid.x - grid.width/2 + 8} y={grid.y+60} cells={cells}/>
						<ObjectComponent x={app.x - app.width/2 + 8} y={app.y+40} item = {{x: 7, o: 3}}/>
						<ObjectComponent x={score.x - score.width/2 + 8} y={score.y+55} item = {{x: 7, o: 3}}/>
						<ValueComponent x={app.x - app.width/2 + 8} y={app.y+110} name = 'turn' value = {'x'}/>
						
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


