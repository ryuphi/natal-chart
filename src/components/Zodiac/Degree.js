import React, {useEffect, useState} from "react";

const Degree = ({angle, radius}) => {
  const [startPoint, setStartPoint] = useState({x: 0, y: 0})
  const [endPoint, setEndPoint] = useState({x: 0, y: 0})
  const [stroke, setStroke] = useState('rgba(0,0,0, .3)')

  useEffect(() => {
    const calculateStroke = (angleInDegree) => {
      return angleInDegree % 5 ? 'rgba(0, 0, 0, .3)' : 'rgba(0, 0, 0, .5)'
    }

    const lineStartPoint = (angleInDegree) => {
      return {
        x: radius * .8 * Math.cos(2 * Math.PI - (angleInDegree * 2 * Math.PI / 360)),
        y: radius * .8 * Math.sin(2 * Math.PI - (angleInDegree * 2 * Math.PI / 360)),
      }
    }

    const lineEndPoint = (angleInDegree) => {
      let large;
      switch (angleInDegree % 10) {
        case 0:
          large = radius * .86
          break
        case 5:
          large = radius * .83
          break;
        default:
          large = radius * .81
      }
      return {
        x: large * Math.cos(2 * Math.PI - (angleInDegree * 2 * Math.PI / 360)),
        y: large * Math.sin(2 * Math.PI - (angleInDegree * 2 * Math.PI / 360)),
      }
    }

    setEndPoint(lineEndPoint(angle))
    setStartPoint(lineStartPoint(angle))
    setStroke(calculateStroke(angle))
  }, [angle, radius])

  return <line strokeWidth={1} stroke={stroke} x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y}/>
}

export default Degree
