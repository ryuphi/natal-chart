import React, {useState} from "react"
import ZodiacWheel from "../Zodiac/ZodiacWheel"
import Houses from "../Houses/Houses"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import Astro from "../Astros/Astro";

const NatalChart = ({horoscope}) => {
  const {width, height} = useWindowDimensions()
  const chartDimensions = {
    width: width * .9,
    height: height * .9,
  }

  const radius = (chartDimensions.width / 2) - chartDimensions.width * .20
  console.log(horoscope)
  return (
    <>
      <svg width={chartDimensions.width} height={chartDimensions.height} >
        <g style={{transform: "translate(50%, 50%)"}}>
          <ZodiacWheel ascendant={horoscope.axes.asc} radius={radius} />
          <Houses houses={horoscope.houses} ascendantDegrees={horoscope.axes.asc.position.longitude} radius={radius} />
          {Array.from(Object.values(horoscope.astros)).map(astro => <Astro name={astro.name} degrees={astro.position.longitude - horoscope.axes.asc.position.longitude} radius={radius}/>)}
        </g>
      </svg>
    </>
  )
}

export default NatalChart
