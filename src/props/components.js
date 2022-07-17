import {getComponentComputed} from '../utils/propsGenerators'
import {states}               from './states'

const appComponent = {
  name: 'App',
  x: 200,
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
  states: ['', '', ''],
  nProps: 2
}

const scoreComponent = {
  name: 'Score',
  x: 1100,
  y: 200,
  width: 260,
  states: ['', '', ''],
  nProps: 1
}

export const app   = getComponentComputed(appComponent)
// export const grid  = getComponentComputed(gridComponent)
// export const score = getComponentComputed(scoreComponent)