import {Connection}           from './Connection'
import {getDoubleConnection}  from '../utils/util'

export const DoubleConnection = ({connection}) => {

  const {connection1, connection2} = getDoubleConnection(connection)

  return (
    <>
      <Connection {...connection1}/>	
      <Connection {...connection2}/>	
    </>
    )
}
