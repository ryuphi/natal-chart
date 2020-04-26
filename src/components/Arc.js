import * as d3 from "d3";
import React from "react";

const Arc = ({innerRadius, outerRadius, start, end, LegendComponent, fill = 'rgba(0, 0, 0, .05)', stroke = 'rgba(0, 0, 0, .06)'}) => {
  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(Math.PI * (270-start)/ 180)
    .endAngle(Math.PI * (270-end) / 180)

  const d = arc()
  const centroid = arc.innerRadius(innerRadius).centroid()

  return (
    <>
      <path stroke={stroke} fill={fill} strokeWidth={1} d={d}/>
      <LegendComponent x={centroid[0]} y={centroid[1]} />
    </>
  )
}

export default Arc
