import React, {useState} from "react"
import {render} from "react-dom"
import taildwind from './assets/tailwind.css'
import NatalChart from "./components/Charts/NatalChart"
import useHoroscope from "./hooks/useHoroscope";
import SpinnerLoading from "./components/Loading/Loading";

const App = () => {
  const [date] = useState(new Date())
  const horoscope = useHoroscope(date, '-33.41167','-70.66647')

  return <div className={'flex justify-center items-center h-screen w-full'}>
    {horoscope.loading && <SpinnerLoading/>}
    {horoscope.error && <div>Hubo un error al cargar los datos</div>}
    {horoscope.data && <NatalChart horoscope={horoscope.data}/>}
  </div>
};

render(<App/>, document.getElementById("root"));
