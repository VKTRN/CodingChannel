export const getComponentComputed = (component) => {
  
  const height = component.states.length * 70 + 110

  const computed = {
    name: component.name,
    x: component.x,
    y: component.y,
    left: component.x,
    top: component.y,
    width: component.width,
    height: height,
    right: component.x + component.width,
    bottom: component.y + height,
    states: component.states,
    slots: {},
    props: [],
  }

  component.states.forEach((state, index) => {
    const slots = JSON.parse(JSON.stringify(computed.slots))
    
    const x = computed.left
    const y = computed.top + index * 70 + 90
    // const position = {x, y}
    const connection = {x: computed.right, y: y+35}




    computed.states[index].props.x = x
    computed.states[index].props.y = y
    computed.states[index].props.connection = connection

    // slots[state] = {position, connection}
    // computed.slots = slots

  })

  for (let i = 0; i < component.nProps; i++) {
    
    if(component.nProps === 1) {
      const x = component.x
      const y = component.y + height/2
      const position = {x, y}
      computed.props.push(position)
      break
    }
    
    const d = 10
    const l = 2*d*(component.nProps-1)
    const c = l/(component.nProps-1)
    const x = component.x
    const y = component.y + height/2 - l/2 + i*c
    const position = {x, y}
    computed.props.push(position)
  }

  return computed

}

export const generatePointsY = (start, end, offset) => {
	const midY = start.y + (end.y - start.y) * offset
	const points = []
	points.push(start)
	points.push({x: start.x, y: midY})
	points.push({x: end.x, y: midY})
	points.push(end)
	return points
}

export const generatePointsX = (start, end, offset) => {
	const midX = start.x + (end.x - start.x) * offset
	const points = []
	points.push(start)
	points.push({x: midX, y: start.y})
	points.push({x: midX, y: end.y})
	points.push(end)
	return points
}