import {generatePointsX}			from '../utils/propsGenerators'
import {generateConnections}	from '../utils/propsGenerators'
import {app}									from '../props/components'
import {grid}									from '../props/components'
import {score}								from '../props/components'
import {Cells}								from '../props/components'

const cellsAppToGrid		= {}
const turnAppToGrid			= {}
const scoreAppToScore		= {}

cellsAppToGrid.color		= 'darkred'
turnAppToGrid.color			=	'darkred'
scoreAppToScore.color		=	'darkred'
const cellsGridToCellsColor		=	'darkred'

scoreAppToScore.points	= generatePointsX(app.states[0].props.connection, score.props[0], .5)
cellsAppToGrid.points		= generatePointsX(app.states[1].props.connection, grid.props[0],  .50)
turnAppToGrid.points		= generatePointsX(app.states[2].props.connection, grid.props[1],  .44)

scoreAppToScore.signals = [
	{t0:0,  color: "red"},
	{t0:11, color: "lime"},
	{t0:22, color: "yellow"}
]

cellsAppToGrid.signals = [
	{t0:0,  color: "red"},
	{t0:30, color: "lime"},
	{t0:60, color: "yellow"}
]

const cellsGridToCellsSignals = [
	{t0:0,  color: "red"},
	{t0:30, color: "lime"},
	{t0:60, color: "yellow"}
]

const cellsGridToCells	= generateConnections(grid.output, Cells, .50, cellsGridToCellsSignals, cellsGridToCellsColor)

export {cellsAppToGrid}
export {turnAppToGrid}
export {scoreAppToScore}
export {cellsGridToCells}