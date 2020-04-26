import React from "react";
import Axis from "../Axes/Axis";
import SignIcon from "../Zodiac/SignIcon";
import Arc from "../Arc";

const Houses = ({houses, ascendantDegrees, radius}) => {
  const houseArcs = [...Array(12).keys()].map(
    value => <Arc
      house={houses[value]}
      fill={'none'}
      stroke={'none'}
      innerRadius={(radius) * .25}
      outerRadius={(radius) * .32}
      start={(houses[value].position.longitude - ascendantDegrees)}
      end={(houses[value].sign === 12 ? -360 : 0) + (houses[value + 1] ? houses[value + 1].position.longitude - ascendantDegrees : houses[0].position.longitude - ascendantDegrees)}
      LegendComponent={({...props}) => {
        return (
          <SignIcon sign={houses[(value)%12].sign-1} width={12} {...props} />
        )
      }}
    />
  )

  return (
    <g id='houses' >
      <circle fill={'rgba(0,0,0,.05)'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius*.32}/>
      <circle fill={'white'} strokeWidth={1} stroke={'rgba(0,0,0,.5)'} r={radius*.25}/>

      {/*{houses.map((house, index) => {*/}
      {/*  return <Axis*/}
      {/*    radius={radius}*/}
      {/*    startAngle={house.position.longitude}*/}
      {/*    endAngle={house.position.longitude+180}*/}
      {/*    bolder={[0,3,6,9].includes(index)} />*/}
      {/*  })*/}
      {/*}*/}

      {houseArcs}

      {/*<text*/}
      {/*  x={pointInCircle((one + two)/2, radius*.27).x}*/}
      {/*  y={pointInCircle((one + two)/2, radius*.27).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  7*/}
      {/*</text>*/}
      {/*<text*/}
      {/*  x={pointInCircle((two + 360 + one)/2, radius*.3).x}*/}
      {/*  y={pointInCircle((two + 360 + one)/2, radius*.3).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  1*/}
      {/*</text>*/}

      {/*<text*/}
      {/*  x={pointInCircle((two + three)/2, radius*.27).x}*/}
      {/*  y={pointInCircle((two + three)/2, radius*.27).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  8*/}
      {/*</text>*/}
      {/*<text*/}
      {/*  x={pointInCircle((two + 360 + three)/2, radius*.3).x}*/}
      {/*  y={pointInCircle((two + 360 + three)/2, radius*.3).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  2*/}
      {/*</text>*/}

      {/*<text*/}
      {/*  x={pointInCircle((three + ic)/2, radius*.27).x}*/}
      {/*  y={pointInCircle((three + ic)/2, radius*.27).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  9*/}
      {/*</text>*/}
      {/*<text*/}
      {/*  x={pointInCircle((three + ic + 360)/2, radius*.3).x}*/}
      {/*  y={pointInCircle((three + ic + 360)/2, radius*.3).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  3*/}
      {/*</text>*/}

      {/*<text*/}
      {/*  x={pointInCircle((five + ic)/2, radius*.27).x}*/}
      {/*  y={pointInCircle((five + ic)/2, radius*.27).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  10*/}
      {/*</text>*/}
      {/*<text*/}
      {/*  x={pointInCircle((five + ic + 360)/2, radius*.3).x}*/}
      {/*  y={pointInCircle((five + ic + 360)/2, radius*.3).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  4*/}
      {/*</text>*/}

      {/*<text*/}
      {/*  x={pointInCircle((five + six)/2, radius*.27).x}*/}
      {/*  y={pointInCircle((five + six)/2, radius*.27).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  11*/}
      {/*</text>*/}
      {/*<text*/}
      {/*  x={pointInCircle((five + six + 360)/2, radius*.3).x}*/}
      {/*  y={pointInCircle((five + six + 360)/2, radius*.3).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  5*/}
      {/*</text>*/}

      {/*<text*/}
      {/*  x={pointInCircle((one + 180 + six)/2, radius*.27).x}*/}
      {/*  y={pointInCircle((one + 180 + six)/2, radius*.27).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  6*/}
      {/*</text>*/}
      {/*<text*/}
      {/*  x={pointInCircle((one + 180 + six + 360)/2, radius*.3).x}*/}
      {/*  y={pointInCircle((one + 180 + six + 360)/2, radius*.3).y}*/}
      {/*  radius={radius*.3}>*/}
      {/*  12*/}
      {/*</text>*/}
    </g>
  )
}

export default Houses
