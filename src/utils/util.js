// a function that receives an array of points and returns the length of the path

export const getTotalLength = (points) => {
  let length = 0
  for (let i = 0; i < points.length - 1; i++) {
    length += Math.sqrt(Math.pow(points[i + 1].x - points[i].x, 2) + Math.pow(points[i + 1].y - points[i].y, 2))
  }
  return length
}