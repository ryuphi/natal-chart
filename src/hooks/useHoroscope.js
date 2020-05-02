import axios from "axios";
import {useEffect, useState} from "react";

/**
 * @param {Date} date
 * @return {string}
 */
const serializeDate = (date) => `${date.getUTCFullYear()}-${(date.getUTCMonth()+1).toString().padStart(2,0)}-${date.getUTCDate().toString().padStart(2,0)}T${date.getUTCHours().toString().padStart(2,0)}:${date.getUTCMinutes().toString().padStart(2,0)}:${date.getUTCSeconds().toString().padStart(2,0)}-00:00`

const useHoroscope = (date, latitude, longitude) => {
  const [horoscope,  setHoroscope] = useState(null)

  useEffect( () => {
    const getHoroscope = async (time, position) => {
      const response = await axios.get('https://dev-astrology-api.herokuapp.com/horoscope', {
        params: {
          time: serializeDate(time),
          latitude: position.latitude,
          longitude: position.longitude
        }
      })

      setHoroscope(response.data.data)
    }

    getHoroscope(date, {longitude, latitude})
  }, [date, longitude, latitude])

  return horoscope
}

export default useHoroscope
