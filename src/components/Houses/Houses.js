import React from "react";
import Axis from "../Axes/Axis";

const Houses = ({houses, ascendantDegrees, radius}) => {
  const one = 0 - houses[0].position.degrees + ascendantDegrees
  const two = 0 - houses[1].position.degrees + ascendantDegrees
  const three = -30 - houses[2].position.degrees + ascendantDegrees
  const ic = -60 - houses[3].position.degrees + ascendantDegrees
  const five = -90 - houses[4].position.degrees + ascendantDegrees
  const six = -120 - houses[5].position.degrees + ascendantDegrees

  const pointInCircle = (angleInDegree, r) => {
    return {
      x: r * Math.cos(2 * Math.PI - angleInDegree * 2 * Math.PI / 360),
      y: -r * Math.sin(2 * Math.PI - angleInDegree * 2 * Math.PI / 360),
    }
  }

  return (
    <g id='houses' >
      <circle fill={'rgba(0,0,0,.05)'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius*.32}/>
      <circle fill={'white'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius*.25}/>

      <Axis radius={radius} startAngle={180} endAngle={0} bolder={true}/>
      <Axis radius={radius} startAngle={two} endAngle={two +180} />
      <Axis radius={radius} startAngle={three} endAngle={three + 180} />
      <Axis radius={radius} startAngle={ic} endAngle={ic + 180} bolder={true}/>
      <Axis radius={radius} startAngle={five} endAngle={five + 180} />
      <Axis radius={radius} startAngle={six} endAngle={six + 180} />

      <text
        x={pointInCircle((one + two)/2, radius*.27).x}
        y={pointInCircle((one + two)/2, radius*.27).y}
        radius={radius*.3}>
        7
      </text>
      <text
        x={pointInCircle((two + 360 + one)/2, radius*.3).x}
        y={pointInCircle((two + 360 + one)/2, radius*.3).y}
        radius={radius*.3}>
        1
      </text>

      <text
        x={pointInCircle((two + three)/2, radius*.27).x}
        y={pointInCircle((two + three)/2, radius*.27).y}
        radius={radius*.3}>
        8
      </text>
      <text
        x={pointInCircle((two + 360 + three)/2, radius*.3).x}
        y={pointInCircle((two + 360 + three)/2, radius*.3).y}
        radius={radius*.3}>
        2
      </text>

      <text
        x={pointInCircle((three + ic)/2, radius*.27).x}
        y={pointInCircle((three + ic)/2, radius*.27).y}
        radius={radius*.3}>
        9
      </text>
      <text
        x={pointInCircle((three + ic + 360)/2, radius*.3).x}
        y={pointInCircle((three + ic + 360)/2, radius*.3).y}
        radius={radius*.3}>
        3
      </text>

      <text
        x={pointInCircle((five + ic)/2, radius*.27).x}
        y={pointInCircle((five + ic)/2, radius*.27).y}
        radius={radius*.3}>
        10
      </text>
      <text
        x={pointInCircle((five + ic + 360)/2, radius*.3).x}
        y={pointInCircle((five + ic + 360)/2, radius*.3).y}
        radius={radius*.3}>
        4
      </text>

      <text
        x={pointInCircle((five + six)/2, radius*.27).x}
        y={pointInCircle((five + six)/2, radius*.27).y}
        radius={radius*.3}>
        11
      </text>
      <text
        x={pointInCircle((five + six + 360)/2, radius*.3).x}
        y={pointInCircle((five + six + 360)/2, radius*.3).y}
        radius={radius*.3}>
        5
      </text>

      <text
        x={pointInCircle((one + 180 + six)/2, radius*.27).x}
        y={pointInCircle((one + 180 + six)/2, radius*.27).y}
        radius={radius*.3}>
        6
      </text>
      <text
        x={pointInCircle((one + 180 + six + 360)/2, radius*.3).x}
        y={pointInCircle((one + 180 + six + 360)/2, radius*.3).y}
        radius={radius*.3}>
        12
      </text>
    </g>
  )
}

export default Houses
