import React from "react";

const Axis = ({radius, startAngle, endAngle, startLegend = '', endLegend = '', bolder = false ,withArrow = false}) => {
  const pointInCircle = (angleInDegree, r) => {
    return {
      x: r * Math.cos(2 * Math.PI - angleInDegree * 2 * Math.PI / 360),
      y: -r * Math.sin(2 * Math.PI - angleInDegree * 2 * Math.PI / 360),
    }
  }

  const color = bolder ? 'rgba(0,0,0,.7)' : 'rgba(0,0,0,.08)'
  const ascStart = pointInCircle(startAngle, radius * .25)
  const ascEnd = pointInCircle(startAngle, radius * .8 - (withArrow ? 10 : 0))

  const descStart = pointInCircle(endAngle, radius * .25)
  const descEnd = pointInCircle(endAngle, radius * .8)

  return (
    <g>
      <defs>
        <marker
          id="arrow"
          markerUnits="strokeWidth"
          markerWidth="6"
          markerHeight="6"
          viewBox="0 0 12 12"
          refX="6"
          refY="6"
          orient="auto">
          <path d="M2,2 L10,6 L2,10 L6,6 L2,2" fill={color}/>
        </marker>
      </defs>
      <line
        stroke={color}
        strokeWidth={bolder ? 3 : 2}
        x1={ascStart.x}
        y1={ascStart.y}
        x2={ascEnd.x}
        y2={ascEnd.y}
        markerEnd={withArrow ? 'url(#arrow)' : ''}
      />
      {/*<text x={ascStart.x -20} y={ascStart.y - 5} fontSize={'10px'} fontFamily={'sans-serif'} fill={'red'}>{startLegend}</text>*/}
      <line
        stroke={color}
        strokeWidth={bolder ? 3 : 2}
        x1={descStart.x}
        y1={descStart.y}
        x2={descEnd.x}
        y2={descEnd.y}
      />
      {/*<text x={descStart.x} y={descStart.y + 15} fontSize={'10px'} fontFamily={'sans-serif'} fill={'red'}>{endLegend}</text>*/}
    </g>
  )
}

export default Axis
