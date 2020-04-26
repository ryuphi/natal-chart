import React from "react";
import Arc from "../Arc";
import Cuspid from "./Cuspid";
import HouseIcon from "./HouseIcon";

const Houses = ({houses, ascendantDegrees, radius}) => {
  const twelveRange = [...Array(12).keys()]

  const Legend = ({...props}) => <HouseIcon sign={props.sign} width={15} stroke={'rgba(0,0,0,.5)'} {...props} />

  const houseArcs = twelveRange.map(
    value => {
      return (
        <g>
          <Arc
            house={houses[value]}
            fill={'none'}
            stroke={'none'}
            innerRadius={(radius) * .25}
            outerRadius={(radius) * .32}
            start={(houses[value].position.longitude - ascendantDegrees)}
            end={(houses[value].sign === 12 ? -360 : 0) + (houses[value + 1] ? houses[value + 1].position.longitude - ascendantDegrees : houses[0].position.longitude - ascendantDegrees)}
            LegendComponent={(props) => <Legend sign={value + 1} {...props} />}
          />
        </g>
      )
    }
  )
  const cuspids = twelveRange.map(
    index => <Cuspid radius={radius} bolder={[0,3,6,9].includes(index)} angle={(houses[index].position.longitude - ascendantDegrees)}/>
  )

  return (
    <g id='houses'>
      <circle id={'houses-wheel-inner-circle'} fill={'rgba(0,0,0,.05)'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'}
              r={radius * .32}/>
      <circle id={'houses-wheel-outer-circle'} fill={'white'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'}
              r={radius * .25}/>

      {houseArcs}
      {cuspids}
    </g>
  )
}

export default Houses
