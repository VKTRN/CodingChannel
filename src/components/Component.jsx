export const Component = ({name, x, y, width, height}) => {
  return(
    <>
      <text x={x-width/2 +10} y={y-height/2+35} style = {{fontSize: '2rem', fontFamily: 'Verdana'}}>{name}</text>
      <rect x={x-width/2} y={y-height/2} width={width} height={height} fill="transparent" stroke="black" strokeWidth={5}/>
    </>

  )
}