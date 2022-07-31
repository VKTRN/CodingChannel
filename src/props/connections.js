import {generatePointsX} from '../utils/propsGenerators'
import {generateConnections} from '../utils/propsGenerators'
import {app}             from '../props/components'
import {grid}            from '../props/components'
import {score}           from '../props/components'
import {Cells}           from '../props/components'

const cellsAppToGrid   = {}
const turnAppToGrid    = {}
const scoreAppToScore  = {}
const cellsGridToCells = {}

scoreAppToScore.points  = generatePointsX(app.states[0].props.connection, score.props[0], .5)
cellsAppToGrid.points   = generatePointsX(app.states[1].props.connection, grid.props[0],  .50)
turnAppToGrid.points    = generatePointsX(app.states[2].props.connection, grid.props[1],  .44)
cellsGridToCells.points = generateConnections(grid.output, Cells, .50) 

cellsAppToGrid.signals = [
    {t0:0, color: "red"}, 
    {t0:30, color: "green"}, 
    {t0:60, color: "yellow"}
]

export {cellsAppToGrid}
export {turnAppToGrid}
export {scoreAppToScore}
export {cellsGridToCells}