const getComponentComputed = (component) => {
  
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
    slots: {},
    props: [],
  }

  component.states.forEach((state, index) => {
    const slots = JSON.parse(JSON.stringify(computed.slots))
    
    const x = computed.left
    const y = computed.top + index * 70 + 90
    const position = {x, y}
    const connection = {x: computed.right, y: y+35}
    slots[state] = {position, connection}

    computed.slots = slots
  })

  for (let i = 0; i < component.nProps; i++) {
    
    if(component.nProps === 1) {
      const x = component.x
      const y = component.y + height/2
      const position = {x, y}
      computed.props.push(position)
      break
    }
    
    
    const l = 60
    const c = l/(component.nProps-1)
    const x = component.x
    const y = component.y + height/2 - l/2 + i*c
    const position = {x, y}
    computed.props.push(position)
  }

  return computed

}

const appComponent = {
  name: 'App',
  x: 200,
  y:200,
  width: 260,
  states: ['score', 'cells', 'turn'],
  nProps: 0
}

const gridComponent = {
  name: 'Grid',
  x: 700,
  y:600,
  width: 260,
  states: ['', '', ''],
  nProps: 2
}

const scoreComponent = {
  name: 'Score',
  x: 700,
  y: 100,
  width: 260,
  states: ['', '', ''],
  nProps: 1
}

export const app   = getComponentComputed(appComponent)
export const grid  = getComponentComputed(gridComponent)
export const score = getComponentComputed(scoreComponent)
