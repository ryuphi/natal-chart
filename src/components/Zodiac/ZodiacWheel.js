import React from 'react'
import ZodiacArc from "./ZodiacArc"
import Degree from "./Degree";

const ZodiacWheel = ({radius, ascendant}) => {
  const signs = [...Array(12).keys()].map(
    index => <ZodiacArc
      key={index}
      sign={(ascendant.sign + index) <= 12 ? (ascendant.sign + index) : (ascendant.sign + index) % 12}
      innerRadius={radius * .8}
      outerRadius={radius}
      start={30 * index - 1 - ascendant.position.degrees}
      end={30 * (index+1) - 1 - ascendant.position.degrees}/>
  )

  return (
    <g id='arcs-group'>
      <circle fill={'none'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius*.8}/>
      <circle fill={'none'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius}/>
      <g>
        {[...Array(360).keys()].map(angle => <Degree angle={angle} radius={-radius} correction={ascendant.position.degrees}/>)}
      </g>

      {signs}
    </g>
  )
}

export default ZodiacWheel
