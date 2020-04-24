import React from 'react'
import Degree from "./Degree";
import SignIcon from "./SignIcon";
import Arc from "../Arc";

const ZodiacArc = ({sign, innerRadius, outerRadius, start, end, correction = 0}) => {
  const degrees = [...Array(end - start).keys()].map(value =>
    <Degree key={start + value} angle={start + value - correction + correction % 30} radius={outerRadius} correction={correction}/>
  )

  return (
    <g>
      <Arc
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        start={start-correction}
        end={end-correction}
        LegendComponent={({...props}) => <SignIcon sign={sign} width={30} {...props} />}
      />
      {degrees}
    </g>
  )
}

export default ZodiacArc
