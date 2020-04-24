import React from 'react'
import ZodiacArc from "./ZodiacArc"

const ZodiacWheel = ({radius, ascendantSign, ascendantDegrees}) => {
  const signs = [...Array(12).keys()].map(
    value => <ZodiacArc
      key={value}
      sign={(ascendantSign+value)%12}
      innerRadius={radius * .8}
      outerRadius={radius}
      start={30 * value}
      end={30 * (value + 1)}
      correction={ascendantDegrees + ascendantSign * 30}/>
  )

  return (
    <g id='arcs-group'>
      <circle fill={'none'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius*.8}/>
      <circle fill={'none'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius}/>
      {signs}
    </g>
  )
}

export default ZodiacWheel
