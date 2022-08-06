export const getTotalLength = (points) => {
  let length = 0
  for (let i = 0; i < points.length - 1; i++) {
    length += Math.sqrt(Math.pow(points[i + 1].x - points[i].x, 2) + Math.pow(points[i + 1].y - points[i].y, 2))
  }
  return length
}

export const getDoubleConnection = (connection) => {
  const connection1 = clone(connection)
  const connection2 = clone(connection)

  const c = (connection.points[3].x < connection.points[0].x) ? -1 : 1

  if(false) {
    connection1.points[0].x -= 5
    connection2.points[0].x += 5
    connection1.points[1].y += 5 * c
    connection2.points[1].y -= 5 * c
    connection1.points[1].x -= 5
    connection2.points[1].x += 5
    connection1.points[2].y += 5 * c
    connection2.points[2].y -= 5 * c
    connection1.points[2].x -= 5
    connection2.points[2].x += 5
    connection1.points[3].x -= 5
    connection2.points[3].x += 5
  }
  else {
    connection1.points[0].y -= 5
    connection2.points[0].y += 5
    connection1.points[1].x += 5 * c
    connection2.points[1].x -= 5 * c
    connection1.points[1].y -= 5
    connection2.points[1].y += 5
    connection1.points[2].x += 5 * c
    connection2.points[2].x -= 5 * c
    connection1.points[2].y -= 5
    connection2.points[2].y += 5
    connection1.points[3].y -= 5
    connection2.points[3].y += 5
  }  

  return {connection1, connection2}
}

export const range = (end) => {
  const arr = []
  for (let i = 0; i < end; i++) {
    arr.push(i)
  }
  return arr
}

export const ones = (end) => {
  const arr = []
  for (let i = 0; i < end; i++) {
    arr.push(1)
  }
  return arr
}

export const clone = (x) => JSON.parse(JSON.stringify(x))

export const maximum = (a,b) => a.map((x,i) => Math.max(x,b[i]))

