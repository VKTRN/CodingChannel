import {ObjectComponent}      from '../components/ObjectComponent'
import {ArrayComponent}       from '../components/ArrayComponent'
import {ValueComponent}       from '../components/ValueComponent'

export const states = {
  score: {
    component: ObjectComponent,
    props: {
      name: 'Score',
      item: {x: 7, o: 3},
    }
  },
  cells: {
    component: ArrayComponent,
    props: {
      name: 'Cells',
      array: ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
    }
  },
  turn: {
    component: ValueComponent,
    props: {
      name: 'Turn',
      value: 'x'
    }
  }
}