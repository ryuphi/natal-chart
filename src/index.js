import React from "react"
import {render} from "react-dom"
import NatalChart from "./components/Charts/NatalChart"

const style = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const App = () => (
  <div style={style}>
    <NatalChart/>
  </div>
);

render(<App/>, document.getElementById("root"));
