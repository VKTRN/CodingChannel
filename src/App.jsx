import {AbsoluteFill} 		from 'remotion'
import {Sequence} 				from 'remotion'
import {Component} 				from './components/Component'
import {ComponentArray}   from './components/ComponentArray'
import {Connection} 			from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'
import {bump} 					  from './utils/interpolation.js'
import {useCurrentFrame}  from 'remotion';
import {UseEffectHook} 		from './components/UseEffectHook'
import {app} 							from './props/components.js'
import {grid} 						from './props/components.js'
import {score} 						from './props/components.js'
import {Cells} 						from './props/components.js'
import {cellsAppToGrid}   from './props/connections.js'
import {turnAppToGrid}    from './props/connections.js'
import {scoreAppToScore}  from './props/connections.js'
import {getTotalLength}   from './utils/util.js'

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
						<DoubleConnection points = {cellsAppToGrid} forward = {true} t0 = {0} velocity = {10} signalLength = {100} direction = 'x'/>
						<Connection  			points = {turnAppToGrid} color='darkred' t0={0} velocity = {10} signalLength = {100}/>
						<Connection  			points = {scoreAppToScore} color='purple' t0={0} velocity = {10} signalLength = {100}/>
						
						<Component name = {'App'} {...app}/>	
						<Component name = {'Grid'} {...grid} 	 bump = {bump(frame, getTotalLength(cellsAppToGrid)/10)}/>
						<Component name = {'Score'} {...score} bump = {bump(frame, getTotalLength(scoreAppToScore)/10)}/>
						<ComponentArray components = {Cells}/>
					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}