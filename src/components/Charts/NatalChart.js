import React from "react"
import ZodiacWheel from "../Zodiac/ZodiacWheel"
import Houses from "../Houses/Houses"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import Astro from "../Astros/Astro";
import AstroDot from "../Astros/AstroDot";
import SortedAstros from "../Astros/SortedAstros";

const NatalChart = ({horoscope}) => {
  const {width, height} = useWindowDimensions()
  const chartDimensions = {
    width: width * .9,
    height: height * .9,
  }

  const radius = (chartDimensions.width / 2) - chartDimensions.width * .20

  Array.from(Object.values(horoscope.astros)).map(astro => {
    astro.position.longitude -= horoscope.axes.asc.position.longitude
    return astro
  })

  const astros = Array.from(JSON.parse(JSON.stringify(Object.values(horoscope.astros))))

  return (
    <>
      <svg width={chartDimensions.width} height={chartDimensions.height} >
        <g style={{transform: "translate(50%, 50%)"}}>
          <ZodiacWheel ascendant={horoscope.axes.asc} radius={radius} />
          <Houses houses={horoscope.houses} ascendantDegrees={horoscope.axes.asc.position.longitude} radius={radius} />
          <SortedAstros astros={astros}>
            {
              (astros) => (
                astros
                  .map(astro => (
                    <Astro
                      key={astro.name}
                      name={astro.name}
                      degrees={astro.position.longitude}
                      radius={astro.radius ? astro.radius: radius  * .7}/>
                  ))
              )
            }
          </SortedAstros>
          {Array.from(Object.values(horoscope.astros)).map(astro => <AstroDot key={astro.name} degrees={astro.position.longitude} radius={radius * .8}/>)}
          {Array.from(Object.values(horoscope.astros)).map(astro => <AstroDot key={astro.name} degrees={astro.position.longitude} radius={radius * .25}/>)}
        </g>
      </svg>
    </>
  )
}

export default NatalChart
