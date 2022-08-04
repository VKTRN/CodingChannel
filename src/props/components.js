import {getComponentComputed}  from '../utils/propsGenerators'
import {getComponentsComputed} from '../utils/propsGenerators'
import {states}                from './states'

const appComponent = {
  name: 'App',
  x: 100,
  y:200,
  width: 260,
  states: [states.score, states.cells, states.turn],
  nProps: 0
}

const gridComponent = {
  name: 'Grid',
  x: 700,
  y:600,
  width: 260,
  states: [],
  nProps: 2
}

const scoreComponent = {
  name: 'Score',
  x: 700,
  y: 100,
  width: 260,
  states: [],
  nProps: 1
}

const cellComponents = {
  name: 'Cell',
  x:1300,
  y:65,
  width: 150,
  height: 80,
  states: [],
  nProps: 1,
  n: 9
}

export const Cells = getComponentsComputed(cellComponents)
export const app   = getComponentComputed(appComponent)
export const grid  = getComponentComputed(gridComponent)
export const score = getComponentComputed(scoreComponent)