import React from 'react'
import AstroIcon from "./AstroIcon";
import usePositionInCircle from "../../hooks/usePositionInCircle";

const Astro = ({name, degrees, radius}) => {
  const iconPosition = usePositionInCircle(degrees, radius)

  return (
    <g>
      <AstroIcon astro={name} width={25} x={iconPosition.x} y={iconPosition.y}/>
    </g>
  )
}

export default Astro
