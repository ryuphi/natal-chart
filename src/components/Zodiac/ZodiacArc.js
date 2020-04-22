import React from 'react'
import * as d3 from 'd3';
import Degree from "./Degree";

const ZodiacArc = ({sign = 0, radius, start, end, correction = 0}) => {

  const arc = d3.arc();

  const d = arc({
    innerRadius: radius * .8,
    outerRadius: radius,
    startAngle: 2 * Math.PI - 2 * Math.PI * (start - correction)/ 360,
    endAngle: 2 * Math.PI - 2 * Math.PI * (end - correction) / 360,
  })

  const degrees = [...Array(30).keys()].map(value =>
    <Degree key={value} angle={start - value} radius={radius} correction={correction}/>
  )

  return (
    <g>
      <path stroke={'rgba(0, 0, 0, .06)'} fill={'rgba(0, 0, 0, .05)'} strokeWidth={1} d={d}/>
      {degrees}
      <image
        width={30}
        x={-15 + Math.cos(2 * Math.PI - Math.PI * (start + 15 - correction + 180) / 180) * radius * 0.92}
        y={-15 + Math.sin(2 * Math.PI - Math.PI * (start + 15 - correction + 180) / 180) * radius * 0.92}
        xlinkHref={`/astrology-icons/signs/${(sign + 1).toString().padStart(2, '0')}.svg`}
      />
    </g>
  )
}

export default ZodiacArc
