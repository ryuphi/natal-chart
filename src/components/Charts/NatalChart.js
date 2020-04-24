import React from "react"
import ZodiacWheel from "../Zodiac/ZodiacWheel"
import {data} from '../data.json'
import Houses from "../Houses/Houses";

const NatalChart = ({size}) => {
  const radius = (size / 2) - 50
  return (
    <svg width={size} height={size} >
      <g style={{transform: "translate(50%, 50%)"}}>
        <ZodiacWheel ascendantDegrees={data.axes.asc.position.degrees} ascendantSign={data.axes.asc.sign - 1} radius={radius} />
        <Houses houses={data.houses} ascendantDegrees={data.axes.asc.position.degrees} radius={radius}/>
      </g>
    </svg>
  )
}

export default NatalChart
