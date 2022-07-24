import {Connection} from './Connection'
import {signalLength} from '../constants'
import {signalVelocity} from '../constants'

export const ConnectionArray = ({pointsArray}) => {
  return (
    <>
    	{
        pointsArray.map((points, i) => {
          return (
            <Connection color = 'darkred' points = {points} t0={0} velocity = {signalVelocity} signalLength = {signalLength}/>
        )})
      }
    </>
  )
}

{/* <Connection points = {gridToCells[i]} t0={73} velocity = {10} signalLength = {100}/>
<DoubleConnection points = {gridToCells[i]} forward = {true} t0 = {76} velocity = {10} signalLength = {100} direction = 'x'/>
<Connection color = 'darkred' points = {turnPoints} t0={65} velocity = {10} signalLength = {100}/>
<Component name = {''} {...cell} bump = {bump(frame, bumps[i], bumps[i]+20)}/>
<ValueComponent x={cell.x - cell.width/2 + 8} y={cell.y} value = {cells[i]} name = {`cells[${i}]`}/> */}