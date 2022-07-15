export const Component = ({name, x, y, width, height, bump=1}) => {
  
  return(
    <>
      <rect x={x*bump } y={y*bump } width={width  *bump} height={height *bump } fill="#342144" stroke="black" strokeWidth={5}  rx = {10} ry = {10}/>
      <text x={x +10} y={y+35} style = {{fontSize: '2rem', fontFamily: 'Verdana'}}>{name}</text>
    </>
  )
}