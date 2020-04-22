import React from 'react'
import ZodiacArc from "./ZodiacArc"

const ZodiacWheel = ({size}) => {
  const radius = (size / 2) - 10
  const ascendant = (273 - 273%30)/30%11;

  const signs = [...Array(12).keys()].map(
    value => <ZodiacArc sign={(ascendant+value)%12} radius={radius} start={30 * value} end={30 * (value + 1)} correction={3}/>
  )

  return (
    <svg width={size} height={size}>
      <g id='arcs-group' style={{
        transform: "translate(50%, 50%)"
      }}>
        {signs}
      </g>
    </svg>
  )
}

export default ZodiacWheel
