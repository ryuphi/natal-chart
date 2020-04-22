import React from 'react'
import * as d3 from 'd3';
import Degree from "./Degree";

const ZodiacArc = ({radius, start, end}) => {

  const arc = d3.arc();

  const d = arc({
    innerRadius: radius * .8,
    outerRadius: radius,
    startAngle: (Math.PI / 180) - (((start) * Math.PI) / 180),
    endAngle: (Math.PI / 180) - (((end) * Math.PI) / 180),
  })

  const degrees = [...Array(30).keys()].map(value =>
    <Degree key={value} angle={start - value} radius={radius}/>
  )

  return(
    <g>
      <path stroke={'rgba(0, 0, 0, .06)'} fill={'rgba(0, 0, 0, .05)'} strokeWidth={1} d={d} />
      { degrees }
    </g>
  )
}

export default ZodiacArc
