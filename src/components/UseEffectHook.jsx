export const UseEffectHook = ({x, y, width, height, bump=1}) => {
  
  return(
    <>
      <rect x={x-width/2 *bump } y={y-height/2 *bump } width={width  *bump} height={height *bump } fill="#4b66a0" stroke="black" strokeWidth={5}  rx = {10} ry = {10}/>
      <text x={x-width/2 +10} y={y-height/2+35} style = {{fontSize: '2rem', fontFamily: 'Verdana'}}>useEffect</text>
    </>
  )
}