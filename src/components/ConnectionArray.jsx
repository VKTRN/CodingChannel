import {Connection} from './Connection'

export const ConnectionArray = ({connections}) => {
  return (
    <>
    	{
        connections.map((connection) => {
          return (
            <Connection {...connection}/>
        )})
      }
    </>
  )
}