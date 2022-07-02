import {useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion';
import {Easing} from 'remotion';

export const ease = (frame, start, end) => {
  const r = interpolate(frame, [start, end], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  
  return r
}

export const Signal = ({x1, y1, x2, y2}) => {
  
  const frame  = useCurrentFrame()
  const r1      = ease(frame, 30, 60)
  const r2      = ease(frame, 55, 85)
  const length = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
  
  return(
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth={5}/>
      <line x1={x1 + length * r2} y1={y1} x2={x1 + length * r1} y2={y2} stroke="yellow" strokeWidth={5}/>
    </>
  )
}