import React from 'react'
import ZodiacArc from "./ZodiacArc"
import Horizon from "../Axes/Horizon";

const ZodiacWheel = ({size}) => {
  const radius = (size / 2) - 50
  const ascendant = 112
  const ascendantDegrees = ascendant%30
  const ascendantSign = (ascendant - ascendantDegrees)/30%11;

  const signs = [...Array(12).keys()].map(
    value => <ZodiacArc sign={(ascendantSign+value)%12} radius={radius} start={30 * value} end={30 * (value + 1)} correction={ascendantDegrees}/>
  )

  return (
    <div>
      <svg width={size} height={size}>
        <g id='arcs-group' style={{
          transform: "translate(50%, 50%)"
        }}>
          {signs}
        </g>
        <g id='axes-group' style={{
          transform: "translate(50%, 50%)"
        }}>
          <Horizon radius={radius}/>
        </g>
      </svg>
    </div>
  )
}

export default ZodiacWheel
