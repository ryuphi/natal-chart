import React from "react"
import Axis from "../Axes/Axis"
import ZodiacWheel from "../Zodiac/ZodiacWheel"
import {data} from '../data.json'
import Houses from "../Houses/Houses";

const NatalChart = ({size}) => {
  const radius = (size / 2) - 50

  console.log(data)

  const ascendantSign0Deg = data.axes.asc.sign * 30 - 30;

  const calculateCuspidPosition = (sign, cuspidDegrees) => 30 * sign - 30 - cuspidDegrees - ascendantSign0Deg

  const two = 0 - data.houses[1].position.degrees + data.axes.asc.position.degrees
  const three = -30 - data.houses[2].position.degrees + data.axes.asc.position.degrees
  const ic = -60 - data.houses[3].position.degrees + data.axes.asc.position.degrees
  const five = -90 - data.houses[4].position.degrees + data.axes.asc.position.degrees
  const six = -120 - data.houses[5].position.degrees + data.axes.asc.position.degrees

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
