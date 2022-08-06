import {useCurrentFrame}	from 'remotion'
import {durationInFrames}	from '../constants'
import {ones} from '../utils/util'

export const Component = ({name, x, y, width, height, states, bumps=ones(durationInFrames)}) => {
  
  const frame = useCurrentFrame()
  const s     = bumps[frame]

  return(
    <>
      <rect x={x - width*(s-1)/2 } y={y - height*(s-1)/2} width={width  *s} height={height *s } fill="#c296e6" stroke="black" strokeWidth={5}  rx = {10} ry = {10}/>
      <text x={x +10} y={y+35} style = {{fontSize: '2rem', fontFamily: 'Verdana'}}>{name}</text>
      {states.map((state) => {
        const SlotComponent = state.component
        return <SlotComponent {...state.props}/>
      })}
    </>
  )
}