import React from 'react'
import AstroIcon from "./AstroIcon";
import usePositionInCircle from "../../hooks/usePositionInCircle";

const Astro = ({name, degrees, radius}) => {
  const iconPosition = usePositionInCircle(degrees, radius * .7)
  const outerDotPosition = usePositionInCircle(degrees, radius * .8)
  const innerDotPosition = usePositionInCircle(degrees, radius * .25)

  return (
    <g>
      <AstroIcon astro={name} width={40} x={iconPosition.x} y={iconPosition.y}/>
      <circle r={2} fill={'black'} cx={innerDotPosition.x} cy={innerDotPosition.y}/>
      <circle r={3} fill={'black'} cx={outerDotPosition.x} cy={outerDotPosition.y}/>
    </g>
  )
}

export default Astro
