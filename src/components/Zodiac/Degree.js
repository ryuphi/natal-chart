import React, {useEffect, useState} from "react";

const Degree = ({angle, radius, correction = 0}) => {
  const [startPoint, setStartPoint] = useState({x: 0, y: 0})
  const [endPoint, setEndPoint] = useState({x: 0, y: 0})
  const [stroke, setStroke] = useState('rgba(0,0,0, .3)')

  useEffect(() => {
    const calculateStroke = (angleInDegree) => {
      let color;
      switch (angleInDegree % 10) {
        case 0:
          color =  'rgba(0, 0, 0, .7)'
          break
        case 5:
          color =  'rgba(0, 0, 0, .5)'
          break;
        default:
          color =  'rgba(0, 0, 0, .3)'
      }
      return color
    }

    const lineStartPoint = (angleInDegree) => {
      return {
        x: radius * .8 * Math.cos((Math.PI/180) - ((angleInDegree-correction) * Math.PI / 180)),
        y: radius * .8 * Math.sin((Math.PI/180) - ((angleInDegree-correction) * Math.PI / 180)),
      }
    }

    const lineEndPoint = (angleInDegree) => {
      let large;

      switch (Math.abs(angleInDegree % 10)) {
        case 0: {
          large = radius * .87
          break
        }
        case 5: {
          large = radius * .85
          break;
        }
        default: {
          large = radius * .83
        }
      }
      return {
        x: large * Math.cos((Math.PI/180) - ((angleInDegree - correction) * Math.PI / 180)),
        y: large * Math.sin((Math.PI/180) - ((angleInDegree - correction) * Math.PI / 180)),
      }
    }

    setEndPoint(lineEndPoint( angle))
    setStartPoint(lineStartPoint(angle))
    setStroke(calculateStroke(angle))
  }, [angle, radius, correction])

  return <line strokeWidth={1} stroke={stroke} x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y}/>
}

export default Degree
