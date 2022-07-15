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
    right: component.x+component.width,
    bottom: component.y+height,
    slots: {},
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

  return computed

}

const appComponent = {
  name: 'App',
  x: 200,
  y:400,
  width: 260,
  states: ['score', 'cells', 'turn'],
}

const gridComponent = {
  name: 'Grid',
  x: 500,
  y:800,
  width: 260,
  states: ['', '', ''],
}


export const app = getComponentComputed(appComponent)
export const grid = getComponentComputed(gridComponent)
