import {useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion';
import {Easing} from 'remotion';
import {signalLength} from '../constants';
import {clone} from '../utils/util';

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
    remainingLength -= lengths[i]
    if (remainingLength < 0) {
      index = i
      break
    }
  }

  return {index: index, remainingLength: -remainingLength}
}

const getInterpolation = (points, fraction) => {
  if(fraction === 1) return points
  const lengths 								 = getLengths(points)
  const length = lengths.reduce((acc, curr) => acc + curr)
  const lEnd = Math.min(length*fraction, length)
  const lStart = Math.max(lEnd - signalLength, 0)
  const {index:indexEnd,remainingLength: remainingLengthEnd} = getIndex(lengths, lEnd)
  const {index:indexStart,remainingLength: remainingLengthStart} = getIndex(clone(lengths).reverse(), lStart)
	const interpolation = points.slice(indexStart+1, indexEnd+1)
  
  
	const x2 = points[indexEnd].x + (points[indexEnd + 1].x - points[indexEnd].x) *(lengths[indexEnd] - remainingLengthEnd)/ lengths[indexEnd]
  const y2 = points[indexEnd].y + (points[indexEnd + 1].y - points[indexEnd].y) *(lengths[indexEnd] - remainingLengthEnd)/ lengths[indexEnd]
  
  let x1 = 0
  let y1 = 0
  
  if(true){
    x1 = points[indexStart+1].x + (-points[indexStart + 1].x + points[indexStart].x) *(remainingLengthStart)/ clone(lengths)[indexStart]
    y1 = points[indexStart+1].y + (-points[indexStart + 1].y + points[indexStart].y) *(remainingLengthStart)/ clone(lengths)[indexStart]
    const firstPoint = {x: x1, y: y1}
    interpolation.unshift(firstPoint)
  }
  
  
  const lastPoint = {x: x2, y: y2}
	interpolation.push(lastPoint)
  console.log(indexStart, indexEnd, remainingLengthStart, remainingLengthEnd, interpolation)

	return interpolation

}

const getPolyline = (points) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}




