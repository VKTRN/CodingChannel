import {useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion';
import {Easing} from 'remotion';
import {signalLength} from '../constants';
import {clone, getTotalLength} from '../utils/util';

export const Connection = ({points, color='black', signalColor = 'yellow', velocity = 5, reverse = false, signal = true, t0 =0, signalLength = 100}) => {

  const frame           = useCurrentFrame()

  const lengths          = getLengths(points)
  const length          = lengths.reduce((acc, curr) => acc + curr)
  const signalFrames    = signalLength / velocity
  const totalFrames     = length / velocity + signalFrames
  const t1 = 6
  const r1              = linear(frame, t0, t0+totalFrames - signalFrames)
  const r2              = linear(frame, t0+signalFrames, t0+totalFrames)
  const r3              = linear(frame, t1, t1+totalFrames - signalFrames)
  const r4              = linear(frame, t1+signalFrames, t1+totalFrames)
  const pointsReversed  = points.slice(0).reverse()


  const interpolation1  = reverse? getInterpolation(pointsReversed, r1) : getInterpolation(points, r1)
  // const interpolation2  = reverse? getInterpolation(pointsReversed, r2) : getInterpolation(points, r2)

  // const interpolation3  = reverse? getInterpolation(pointsReversed, r3) : getInterpolation(points, r3)
  // const interpolation4  = reverse? getInterpolation(pointsReversed, r4) : getInterpolation(points, r4)
  
  return(
    <>
     <polyline id="eins" points={getPolyline(points)} fill = 'none' stroke = {color} strokeWidth = {5}/>
     {signal && <polyline id="eins" points={getPolyline(interpolation1)} fill = 'none' stroke = {signalColor} strokeWidth = {5}/>}
     {/* {signal && <polyline id="eins" points={getPolyline(interpolation2)} fill = 'none' stroke = {color} strokeWidth = {5}/>} */}

    </> 
  )
}

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

const getLength = (p1, p2) => {
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

// a function that takes an array of points and returns an array of lengths between the points
const getLengths = (points) => {
  let lengths = []
  for (let i = 0; i < points.length - 1; i++) {
    lengths.push(getLength(points[i], points[i + 1]))
  }
  return lengths
}

// a function that takes an array of lengths and another length and the lengths from the array from this new length, until the length is reached.
const getIndex = (lengths, length) => {
  let index = 0
	// const length = lengths.reduce((acc, curr) => acc + curr)
  let remainingLength = length * 1
  for (let i = 0; i < lengths.length; i++) {
    console.log(i)
    if (remainingLength < lengths[i]) {
      index = i
      break
    }
    remainingLength -= lengths[i]
  }

  return {index: index, remainingLength: remainingLength}
}


const getInterpolation = (points, fraction) => {
  
  const lengths     = getLengths(points)
  const totalLength = getTotalLength(points)

  const pathToEnd   = fraction * totalLength
  const {index, remainingLength} = getIndex(lengths, pathToEnd)
  const signal = points.slice(0, index+1)

  console.log(remainingLength, index)

  if(index<signal.length){
    const p0   = signal[index]
    const dx   = lengths[index]
    const dp_  = subtract(points[index+1],points[index])
    const dp   = multiply(dp_, remainingLength/dx)
    const pEnd = add(p0, dp)
    signal.push(pEnd)
  }
  else{signal.push(points[index])}


  const newSignal = []
  let remaining = signalLength

  const lengths2 = getLengths(signal)
  let i2 = signal.length

  while(remaining > 0){
    i2--
    if(i2 === 0) {break};
    newSignal.unshift(signal[i2])
    if(remaining <= lengths2[i2-1]) {break}
    remaining = remaining - lengths2[i2-1];
  }
  
  if(i2 > 0){
    const p1  = signal[i2]
    const dx2 = lengths2[i2-1]
    const dp2_  = subtract(signal[i2-1],signal[i2])
    const dp2   = multiply(dp2_, remaining/dx2)
    const pStart = add(p1, dp2)
    newSignal.unshift(pStart)
  }
  else{
    newSignal.unshift(signal[0])
  }

	return newSignal
}

const getPolyline = (points) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}

const add = (p1, p2) => {
  return {x: p1.x+p2.x, y: p1.y+p2.y}
}

const subtract = (p1, p2) => {
  return {x: p1.x-p2.x, y: p1.y-p2.y}
}

const multiply = (p,c) => {
  return {x: p.x*c, y: p.y*c}
}

