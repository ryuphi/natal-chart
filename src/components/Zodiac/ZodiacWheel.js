import React from 'react'
import ZodiacArc from "./ZodiacArc"
import Degree from "./Degree";

const ZodiacWheel = ({radius, ascendant}) => {
  const signs = [...Array(12).keys()].map(
    index => <ZodiacArc
      key={index}
      sign={(ascendant.sign - 1 + index) % 12}
      innerRadius={radius * .8}
      outerRadius={radius}
      start={30 * index - ascendant.position.degrees}
      end={30 * (index+1) - ascendant.position.degrees}/>
  )

  return (
    <g id='arcs-group'>
      <circle fill={'none'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius*.8}/>
      <circle fill={'none'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius}/>

      {[...Array(360).keys()].map(angle => <Degree angle={angle} radius={-radius} correction={ascendant.position.longitude}/>)}

      {signs}
    </g>
  )
}

export default ZodiacWheel
