import * as d3 from "d3";
import React from "react";

const Arc = ({innerRadius, outerRadius, start, end, LegendComponent}) => {
  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(2 * Math.PI - 2 * Math.PI * (start)/ 360)
    .endAngle(2 * Math.PI - 2 * Math.PI * (end) / 360)

  const d = arc()
  const centroid = arc.innerRadius(innerRadius).centroid()

  return (
    <>
      <path stroke={'rgba(0, 0, 0, .06)'} fill={'rgba(0, 0, 0, .05)'} strokeWidth={1} d={d}/>
      <LegendComponent x={centroid[0]} y={centroid[1]} />
    </>
  )
}

export default Arc
