export const Component = ({name, x, y, width, height, states, bump=1}) => {
  
  return(
    <>
      <rect x={x - width*(bump-1)/2 } y={y - height*(bump-1)/2} width={width  *bump} height={height *bump } fill="#c296e6" stroke="black" strokeWidth={5}  rx = {10} ry = {10}/>
      <text x={x +10} y={y+35} style = {{fontSize: '2rem', fontFamily: 'Verdana'}}>{name}</text>
      {states.map((state, index) => {
        const SlotComponent = state.component
        return <SlotComponent {...state.props}/>
      })}
    </>
  )
}