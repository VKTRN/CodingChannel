export const ObjectComponent = ({name, item, x, y}) => {
  
  // get the keys of the object
  const keys = Object.keys(item)

  return(
    <>
      <rect x={x+2.5} y={y} width={260-5} height={70} fill="#8d92ff"/>
      <text x={x+6} y={y+25} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'black'}}>{name}</text>
      {keys.map((key, index) => {
        const xi = x + 2*index * 27 + 8
        return (
          <>
            <rect x={xi} y={y+32} width={27*2} height={32} fill="purple" stroke="black" strokeWidth={5}/>
            <text x={xi+7} y={y+56} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{key}:</text>
            <text x={xi+34} y={y+56} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{item[key]}</text>
          </>
        )
      })}
    </>
  )
}