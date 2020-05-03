import React from 'react'
import usePositionInCircle from "../../hooks/usePositionInCircle";

const AstroDot = ({degrees, radius}) => {
  const dotPosition = usePositionInCircle(degrees, radius)

  return <circle r={1.5} fill={'red'} cx={dotPosition.x} cy={dotPosition.y}/>
}

export default AstroDot
