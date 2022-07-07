export const ValueComponent = ({item, x, y}) => {

  return(
    <>
      <text x={x} y={y-10} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'black'}}>turn</text>
      <rect x={x} y={y} width={27} height={32} fill="purple" stroke="black" strokeWidth={5}/>
      <text x={x+7} y={y+24} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{item}</text>
    </>
  )
}