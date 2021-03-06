import {generatePointsX} from '../utils/propsGenerators'
import {generateConnections} from '../utils/propsGenerators'
import {app}             from '../props/components'
import {grid}            from '../props/components'
import {score}           from '../props/components'
import {Cells}           from '../props/components'

export const cellsAppToGrid   = generatePointsX(app.states[1].props.connection, grid.props[0],  .50)
export const turnAppToGrid    = generatePointsX(app.states[2].props.connection, grid.props[1],  .44)
export const scoreAppToScore  = generatePointsX(app.states[0].props.connection, score.props[0], .45)
export const cellsGridToCells = generateConnections(grid.output, Cells, .50) 
