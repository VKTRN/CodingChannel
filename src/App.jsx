import {AbsoluteFill}			from 'remotion'
import {Sequence}					from 'remotion'
import {useCurrentFrame}	from 'remotion'

import {Component}				from './components/Component'
import {ComponentArray}		from './components/ComponentArray'
import {ConnectionArray}	from './components/ConnectionArray'
import {Connection}				from './components/Connection'
import {DoubleConnection}	from './components/DoubleConnection'

import {app}							from './props/components.js'
import {grid}							from './props/bumps.js'
import {score}						from './props/bumps.js'
import {Cells}						from './props/components.js'

import {cellsAppToGrid}		from './props/connections.js'
import {turnAppToGrid}		from './props/connections.js'
import {scoreAppToScore}	from './props/connections.js'
import {cellsGridToCells}	from './props/connections.js'

import {signalLength}			from './constants.js'
import {signalVelocity}		from './constants.js'

import {getTotalLength}		from './utils/util.js'
import {bump}							from './utils/interpolation.js'

export const App = () => {

	console.log(score)

	const frame = useCurrentFrame()
	
	return (
		<AbsoluteFill style={{backgroundColor: '#5a9de0'}}>
			<Sequence from={0}>
				<svg width="1920" height="1080">
					<DoubleConnection	connection = {cellsAppToGrid}/>
					<Connection {...turnAppToGrid}/>
					<Connection	{...scoreAppToScore}/>
					{/* <ConnectionArray	pointsArray = {cellsGridToCells.points}/> */}
					
					<Component  {...app}/>	
					<Component  {...grid}  bump = {bump(frame, getTotalLength(cellsAppToGrid.points)/signalVelocity)}/>
					<Component  {...score}/>
					{/* <ComponentArray components = {Cells}/> */}
				</svg>
			</Sequence>
		</AbsoluteFill>
	)
}