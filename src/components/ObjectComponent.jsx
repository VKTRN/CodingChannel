export const ObjectComponent = ({item, x, y}) => {
  
  // get the keys of the object
  const keys = Object.keys(item)

  return(
    <>
      <text x={x} y={y-10} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'black'}}>score</text>
      {keys.map((key, index) => {
        const xi = x + 2*index * 27
        return (
          <>
            <rect x={xi} y={y} width={27*2} height={32} fill="purple" stroke="black" strokeWidth={5}/>
            <text x={xi+7} y={y+24} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{key}:</text>
            <text x={xi+34} y={y+24} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{item[key]}</text>
          </>
        )
      })}
    </>
  )
}