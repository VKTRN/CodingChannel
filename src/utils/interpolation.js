import {interpolate} from 'remotion'
import {Easing}      from 'remotion'

export const ease = (frame, start, end) => {
  const r = interpolate(frame, [start, end], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  
  return r
}

export const linear = (frame, start, end) => {
  const r = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  
  return r
}

export const bump = (frame, start, end) => {
  let r = 1

  if (frame < start) {return r}
  if (frame > end) {return r}

  const dx = (end - start) / 2
  
  const a = (end + start) / 2
  const b = .1

  const m = b/(dx*dx)


  r = r - m*(frame - a)*(frame - a) + b

  return r
}