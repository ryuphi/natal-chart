import React from "react";
import {render} from "react-dom";
import ZodiacWheel from "./components/Zodiac/ZodiacWheel";

const App = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <ZodiacWheel size={800}/>
  </div>
);

render(<App/>, document.getElementById("root"));
