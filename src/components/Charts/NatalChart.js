import React from "react"
import ZodiacWheel from "../Zodiac/ZodiacWheel"
import {data} from '../data4.json'
import Houses from "../Houses/Houses";

const NatalChart = ({size}) => {
  const radius = (size / 2) - 50
  return (
    <svg width={size} height={size} >
      <g style={{transform: "translate(50%, 50%)"}}>
        <ZodiacWheel ascendant={data.axes.asc} radius={radius} />
        <Houses houses={data.houses} ascendantDegrees={data.axes.asc.position.longitude} radius={radius}/>
      </g>
    </svg>
  )
}

export default NatalChart
