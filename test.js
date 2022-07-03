
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

const getInterpolation = (points, index, remainingLength, lengths) => {
	const interpolation = points.slice(0, index)
	const x = points[index].x + remainingLength * (points[index + 1].x - points[index].x) / lengths[index]
	const y = points[index].y + remainingLength * (points[index + 1].y - points[index].y) / lengths[index]
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

const points = [
	{x: 0, y: 0},
	{x: 1, y: 0},
	{x: 2, y: 0},
	{x: 3, y: 0},
	{x: 4, y: 0},
	{x: 5, y: 0},
	{x: 6, y: 0},
	{x: 7, y: 0},
	{x: 8, y: 0},
	{x: 9, y: 0},
	{x: 10, y: 0},
]

const lengths 								 = getLengths(points)
const {index, remainingLength} = getIndex(lengths, 0.55)
const interpolation 					 = getInterpolation(points, index, remainingLength, lengths)

const polyline = getPolyline(interpolation)

console.log([1,2,3,4,5,6].slice(0,1))

