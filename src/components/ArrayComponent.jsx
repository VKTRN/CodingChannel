export const ArrayComponent = ({name, array, x, y}) => {
  
  return(
    <>
      <rect x={x+2.5} y={y} width={260-5} height={70} fill="#a0d7ff"/>
      <text x={x+6} y={y+25} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'black'}}>{name}</text>
      {
        array.map((cell, index) => {

          const xi = x + index * 27 + 8

          return (
            <>
              <rect x={xi} y={y+35} width={27} height={27} fill="purple" stroke="black" strokeWidth={5}/>
              <text x={xi+7} y={y+55} color = 'white' style={{fontSize: '25px', fontFamily: 'Verdana', fill: 'white'}}>{cell}</text>
            </>
          )
        })
      }
    </>
  )
}