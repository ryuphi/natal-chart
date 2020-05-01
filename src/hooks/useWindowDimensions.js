import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {width, height}
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    const handlerResize = () => setWindowDimensions(getWindowDimensions())

    window.addEventListener('resize', handlerResize)

    return () => {
      window.removeEventListener('resize', handlerResize)
    }
  }, [])

  return windowDimensions
}

export default useWindowDimensions
