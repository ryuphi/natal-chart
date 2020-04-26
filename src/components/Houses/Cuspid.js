import React from "react";

const Cuspid = ({radius, angle, bolder = false}) => {
  const pointInCircle = (angleInDegree, r) => {
    return {
      x: r * Math.cos((180-angleInDegree) * Math.PI / 180),
      y: r * Math.sin((180-angleInDegree) * Math.PI / 180),
    }
  }

  const color = bolder ? 'rgba(0,0,0,.7)' : 'rgba(0,0,0,.08)'
  const start = pointInCircle(angle, radius * .25)
  const end = pointInCircle(angle, radius * .8)

  return (
    <g>
      <line
        stroke={color}
        strokeWidth={bolder ? 3 : 2}
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
      />
    </g>
  )
}

export default Cuspid
