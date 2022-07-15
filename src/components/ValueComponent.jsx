export const ValueComponent = ({name, value, x, y}) => {

  return(
    <>
      <rect x={x+2.5} y={y} width={260-5} height={70} fill="#8d92ff"/>
      <text x={x+8} y={y+24} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'black'}}>{name}</text>
      <rect x={x+8} y={y+32} width={27} height={32} fill="purple" stroke="black" strokeWidth={5}/>
      <text x={x+14} y={y+54} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{value}</text>
    </>
  )
}