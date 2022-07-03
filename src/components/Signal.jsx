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

export const linear = (frame, start, end) => {
  const r = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  
  return r
}

export const Signal = ({points}) => {
  
  const frame  = useCurrentFrame()
  const r1      = linear(frame, 0, 120)
  const r2      = linear(frame, 30, 150)

  const interpolation1 = getInterpolation(points, r1)
  const interpolation2 = getInterpolation(points, r2)


  
  return(
    // svg of a polygonal chain

    <>
     <polyline id="eins" points={getPolyline(points)} fill = 'none' stroke = "black" strokeWidth = {5}/>
     <polyline id="eins" points={getPolyline(interpolation1)} fill = 'none' stroke = "yellow" strokeWidth = {5}/>
     <polyline id="eins" points={getPolyline(interpolation2)} fill = 'none' stroke = "black" strokeWidth = {5}/>
    </> 
  )
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
const getIndex = (lengths, fraction) => {
  let index = 0
	const length = lengths.reduce((acc, curr) => acc + curr)
  let remainingLength = length * fraction
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
  const {index, remainingLength} = getIndex(lengths, fraction)
	const interpolation = points.slice(0, index+1)
  console.log(remainingLength)
	const x = points[index].x + (points[index + 1].x - points[index].x) *(lengths[index] - remainingLength)/ lengths[index]
  const y = points[index].y + (points[index + 1].y - points[index].y) *(lengths[index] - remainingLength)/ lengths[index]
  const lastPoint = {x: x, y: y}
	interpolation.push(lastPoint)

	return interpolation

}

const getPolyline = (points) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}

// const lengths 								 = getLengths(points)
// const {index, remainingLength} = getIndex(lengths, 0.55)
// const interpolation 					 = getInterpolation(points, index, remainingLength, lengths)




