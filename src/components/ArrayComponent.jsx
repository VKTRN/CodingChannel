export const ArrayComponent = ({cells, x, y}) => {
  
  return(
    <>
      <rect x={x} y={y-20} width={260} height={35} fill="#8d7ff8"/>
      <text x={x} y={y-10} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'black'}}>cells</text>
      {
        cells.map((cell, index) => {

          const xi = x + index * 27

          return (
            <>
              <rect x={xi} y={y} width={27} height={27} fill="purple" stroke="black" strokeWidth={5}/>
              <text x={xi+7} y={y+20} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{cell}</text>
              
            </>
          )
        })
      }
    </>
  )
}