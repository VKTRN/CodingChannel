import {Connection} from './Connection'

export const DoubleConnection = ({points, forward, t0, velocity, signalLength, direction}) => {
  
  const points1 = JSON.parse(JSON.stringify(points))
  const points2 = JSON.parse(JSON.stringify(points))

  console.log(points[3].x < points[0].x)

  const c = (points[3].x < points[0].x) ? -1 : 1

  if(direction === 'y') {
    points1[0].x -= 5
    points2[0].x += 5
    points1[1].y += 5 * c
    points2[1].y -= 5 * c
    points1[1].x -= 5
    points2[1].x += 5
    points1[2].y += 5 * c
    points2[2].y -= 5 * c
    points1[2].x -= 5
    points2[2].x += 5
    points1[3].x -= 5
    points2[3].x += 5
  }
  else {
    points1[0].y -= 5
    points2[0].y += 5
    points1[1].x += 5 * c
    points2[1].x -= 5 * c
    points1[1].y -= 5
    points2[1].y += 5
    points1[2].x += 5 * c
    points2[2].x -= 5 * c
    points1[2].y -= 5
    points2[2].y += 5
    points1[3].y -= 5
    points2[3].y += 5
  }  

  return (
    <>
      <Connection points={points2} color = 'black' totalFrames={150} signalColor = 'red'    reverse={true} signal = {!forward} t0 = {t0} velocity = {velocity} signalLength = {signalLength}/>	
      <Connection points={points1} color = 'black' totalFrames={150}  signalColor = 'yellow' reverse={false} signal = {forward} t0 = {t0} velocity = {velocity} signalLength = {signalLength}/>	
    </>
    )
}