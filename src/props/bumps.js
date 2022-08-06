import {grid}             from '../props/components'
import {score}            from '../props/components'
import {scoreAppToScore}  from '../props/connections'
import {cellsAppToGrid}   from '../props/connections'
import {getTotalLength}   from '../utils/util'
import {range}            from '../utils/util'
import {signalVelocity}   from '../constants'
import {durationInFrames} from '../constants'
import {bump}             from '../utils/interpolation'

const getBumps = (connection) => {
  
  const travelTime = getTotalLength(connection.points)/signalVelocity
  const bumpFrames = connection.signals.map(signal => signal.t0 + travelTime)
  const frames = range(durationInFrames)
  const bumps = []

  frames.forEach(frame => {
    const b = bumpFrames.map(bumpFrame => bump(frame, bumpFrame))
    const value = Math.max(...b)
    bumps.push(value)
  })

  return bumps
}

score.bumps = getBumps(scoreAppToScore)
grid.bumps  = getBumps(cellsAppToGrid)

export {score}
export {grid}



