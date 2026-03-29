import { useState,createContext, use } from "react";
import "./style.css"
import Game from "./game";

function App(){ 
  let [start,setStart]=useState(false);
  return (
    <div className="App">

      {start? <div><Game setStart={setStart}/></div>: 
      
      <div className="intro">
        <div className="introthings">
          <h1>Rock Paper Scissors</h1>
          <button onClick={()=>{setStart(true)}}>start</button>
        </div>
      </div>}
      
    </div>
  )
}

export default App;