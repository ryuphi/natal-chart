import React from "react";

const Horizon = ({radius}) => {
  const pointInCircle = (angleInDegree, r) => {
    return {
      x: r * Math.cos(2 * Math.PI - angleInDegree * 2 * Math.PI / 360),
      y: r * Math.sin(2 * Math.PI - angleInDegree * 2 * Math.PI / 360),
    }
  }

  const color = 'rgba(0,0,0)'
  const ascStart = pointInCircle(180, radius * .3)
  const ascEnd = pointInCircle(180, radius * .8 - 10)

  const descStart = pointInCircle(0, radius * .3)
  const descEnd = pointInCircle(0, radius * .8)

  return (
    <g>
      <defs>
        <marker
          id="arrow"
          markerUnits="strokeWidth"
          markerWidth="12"
          markerHeight="12"
          viewBox="0 0 12 12"
          refX="6"
          refY="6"
          orient="auto">
            <path d="M2,2 L10,6 L2,10 L6,6 L2,2" fill={color}/>
        </marker>
      </defs>
        <line
          stroke={color}
          strokeWidth={2}
          x1={ascStart.x}
          y1={ascStart.y}
          x2={ascEnd.x}
          y2={ascEnd.y}
          markerEnd={'url(#arrow)'}
        />
        <text x={ascEnd.x + 10} y={ascEnd.y - 2} fontSize={'10px'}>ASC</text>
        <line
          stroke={color}
          strokeWidth={2}
          x1={descStart.x}
          y1={descStart.y}
          x2={descEnd.x}
          y2={descEnd.y}
        />
        <text x={descEnd.x - 20} y={descEnd.y - 2} fontSize={'10px'}>DC</text>
    </g>
  )
}

export default Horizon
