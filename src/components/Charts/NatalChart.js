import React from "react"
import ZodiacWheel from "../Zodiac/ZodiacWheel"
import {data} from '../data.json'
import Houses from "../Houses/Houses";

const NatalChart = ({size}) => {
  const radius = (size / 2) - 50
  const signs = data.houses.flatMap((house)=> house.sign)

  return (
    <svg width={size} height={size} >
      <g style={{transform: "translate(50%, 50%)"}}>
        <ZodiacWheel ascendant={data.axes.asc} radius={radius} sortedSigned={signs}/>
        <Houses houses={data.houses} ascendantDegrees={data.axes.asc.position.longitude} radius={radius}/>
      </g>

    </svg>
  )
}

export default NatalChart
