import React from 'react'
import SignIcon from "./SignIcon";
import Arc from "../Arc";

const ZodiacArc = ({sign, innerRadius, outerRadius, start, end}) => {
  return (
    <Arc
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      start={start}
      end={end}
      LegendComponent={({...props}) => <SignIcon sign={sign} width={30} {...props} />}
    />
  )
}

export default ZodiacArc
