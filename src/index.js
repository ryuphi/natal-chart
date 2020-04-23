import React from "react"
import {render} from "react-dom"
import NatalChart from "./components/Charts/NatalChart"

const App = () => (
  <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <NatalChart size={800}/>
  </div>
);

render(<App/>, document.getElementById("root"));
