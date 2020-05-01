import React from "react"
import ZodiacWheel from "../Zodiac/ZodiacWheel"
import {data} from '../data.json'
import Houses from "../Houses/Houses"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const NatalChart = () => {
  const {width, height} = useWindowDimensions()
  const chartDimensions = {
    width: width * .9,
    height: height * .9,
  }
  const radius = (chartDimensions.width / 2) - chartDimensions.width * .15

  return (
    <svg width={chartDimensions.width} height={chartDimensions.height} >
      <g style={{transform: "translate(50%, 50%)"}}>
        <ZodiacWheel ascendant={data.axes.asc} radius={radius} />
        <Houses houses={data.houses} ascendantDegrees={data.axes.asc.position.longitude} radius={radius} />
      </g>

    </svg>
  )
}

export default NatalChart
