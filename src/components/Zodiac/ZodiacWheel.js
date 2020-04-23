import React from 'react'
import ZodiacArc from "./ZodiacArc"
import Axis from "../Axes/Axis"

const ZodiacWheel = ({size}) => {
  const radius = (size / 2) - 50
  const ascendant = 272.54083333
  const ascendantDegrees = ascendant%30
  const ascendantSign = (ascendant - ascendantDegrees)/30%11;

  const ic = 104.97833333
  const mc = 180 + ic

  const signs = [...Array(12).keys()].map(
    value => <ZodiacArc sign={(ascendantSign+value)%12} radius={radius} start={30 * value} end={30 * (value + 1)} correction={ascendantDegrees}/>
  )

  return (
    <div>
      <svg width={size} height={size} >
        <g style={{
          transform: "translate(50%, 50%)"
        }}>
          <g id='arcs-group'>
            {signs}
          </g>
          <g id='axes-group' >
            <Axis radius={radius} startAngle={180} endAngle={0} startLegend={'ASC'} endLegend={'DC'} />
            <Axis radius={radius} startAngle={mc} endAngle={ic} startLegend={'MC'} endLegend={'IC'} />
          </g>
          <circle fill={'none'} stroke={'black'} strokeWidth={.3} r={radius*.3}/>
        </g>
      </svg>
    </div>
  )
}

export default ZodiacWheel
