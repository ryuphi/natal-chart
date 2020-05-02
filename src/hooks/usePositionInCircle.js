import {useState, useEffect} from 'react'

const positionInCircle = (degrees, r) => {
  return {
    x: r * Math.cos(Math.PI * (180-degrees) / 180),
    y: r * Math.sin( Math.PI * (180-degrees) / 180)
  }
}

const usePositionInCircle = (degrees, radius) => {
  const [position, setPosition] = useState(positionInCircle(0, 0))

  useEffect(() => {
    setPosition(positionInCircle(degrees, radius))
  }, [degrees, radius])

  return position
}

export default usePositionInCircle

