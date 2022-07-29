import {AbsoluteFill} 	  from 'remotion'
import {Sequence} 		  from 'remotion'
import {useCurrentFrame}  from 'remotion';

import {Component}   	  from './components/Component'
import {ComponentArray}   from './components/ComponentArray'
import {ConnectionArray}  from './components/ConnectionArray'
import {Connection} 	  from './components/Connection'
import {DoubleConnection} from './components/DoubleConnection'

import {app}			  from './props/components.js'
import {grid}			  from './props/components.js'
import {score} 			  from './props/components.js'
import {Cells} 			  from './props/components.js'

import {cellsAppToGrid}   from './props/connections.js'
import {turnAppToGrid}    from './props/connections.js'
import {scoreAppToScore}  from './props/connections.js'
import {cellsGridToCells} from './props/connections.js'

import {signalLength}     from './constants.js'
import {signalVelocity}   from './constants.js'

import {getTotalLength}   from './utils/util.js'
import {bump} 			  from './utils/interpolation.js'

export const App = () => {

	const frame = useCurrentFrame()

	return (
		<AbsoluteFill style={{backgroundColor: '#5a9de0'}}>
				<Sequence from={0}>
					<svg width="1920" height="1080">
						<DoubleConnection points = {cellsAppToGrid.points} forward = {true} t0={0} velocity = {signalVelocity} signalLength = {signalLength} direction = 'x'/>
						<Connection  			points = {turnAppToGrid.points}   color='darkred' t0={0} velocity = {signalVelocity} signalLength = {signalLength}/>
						<Connection  			points = {scoreAppToScore.points} color='purple'  t0={0} velocity = {signalVelocity} signalLength = {signalLength}/>
						<ConnectionArray pointsArray = {cellsGridToCells.points}/>
						
						<Component  {...app}/>	
						<Component  {...grid}  bump = {bump(frame, getTotalLength(cellsAppToGrid.points)/signalVelocity)}/>
						<Component  {...score} bump = {bump(frame, getTotalLength(scoreAppToScore.points)/signalVelocity)}/>
						<ComponentArray components = {Cells}/>
					</svg>
				</Sequence>
		</AbsoluteFill>
	)
}