import React from 'react'
import ZodiacArc from "./ZodiacArc"

const ZodiacWheel = ({size}) => {
  const radius = (size / 2) - 10

  return(
    <svg width={size} height={size}>
      <g id='arcs-group' style={{
        transform: "translate(50%, 50%)"
      }}>
        <ZodiacArc radius={radius} start={0} end={30}/>
        <ZodiacArc radius={radius} start={30} end={60}/>
        <ZodiacArc radius={radius} start={60} end={90}/>
        <ZodiacArc radius={radius} start={90} end={120}/>
        <ZodiacArc radius={radius} start={120} end={150}/>
        <ZodiacArc radius={radius} start={150} end={180}/>
        <ZodiacArc radius={radius} start={180} end={210}/>
        <ZodiacArc radius={radius} start={210} end={240}/>
        <ZodiacArc radius={radius} start={240} end={270}/>
        <ZodiacArc radius={radius} start={270} end={300}/>
        <ZodiacArc radius={radius} start={300} end={330}/>
        <ZodiacArc radius={radius} start={330} end={360}/>
      </g>
    </svg>
  )
}

export default ZodiacWheel
