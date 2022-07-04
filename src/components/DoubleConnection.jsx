import {Connection} from './Connection'

export const DoubleConnection = ({points, forward}) => {
  
  const points1 = JSON.parse(JSON.stringify(points))
  const points2 = JSON.parse(JSON.stringify(points))

  points1[0].x -= 5
  points2[0].x += 5
  points1[1].y += 5
  points2[1].y -= 5
  points1[1].x -= 5
  points2[1].x += 5
  points1[2].y += 5
  points2[2].y -= 5
  points1[2].x -= 5
  points2[2].x += 5
  points1[3].x -= 5
  points2[3].x += 5

  return (
    <>
      <Connection points={points1} color = 'black' time={150} signalColor = 'red'    reverse={true} signal = {!forward}/>	
      <Connection points={points2} color = 'black' time={150}  signalColor = 'yellow' reverse={false} signal = {forward}/>	
    </>
    )
}