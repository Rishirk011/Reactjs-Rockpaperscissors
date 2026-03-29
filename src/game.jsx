import { useState } from "react";
import Popup from "./popup";

let choices = [
    { name: "Rock", img: "https://i.imgur.com/TONXH9s.png" },

    { name: "Paper", img: "https://i.imgur.com/t2154qR.png" },

    { name: "Scissors", img: "https://i.imgur.com/SXstPKk.png" },
];

function Game({setStart}){
    let [display,setDisplay]= useState(true);

    let [points,setPoints]=useState(0);

    let[result,setResult]=useState(null);

    function handleLogic(name){

    let compMove = Math.floor(Math.random() * 3);
    let computerName = choices[compMove].name;

    setDisplay(false);

    if (name === computerName) {
        setResult("It's a Tie! 🤝");
    } 
    else if (
    (name === "Rock" && computerName === "Scissors") ||
    (name === "Paper" && computerName === "Rock") ||
    (name === "Scissors" && computerName === "Paper")
    ) {
        setResult("You Win! 🎉");
        setPoints(points+1);

    } 
    else {
        setResult("You Lose! 💀");

    }    
}

  return( display?<div className="game">
        <div className="player">
          <h1>player</h1>
            {choices.map(({name,img},index)=>(
              <p key={index}>
                  <img src={img} alt="" onClick={()=>handleLogic(name)}/>
                  {name}
              </p>
            ))}
        </div>
        <div className="computer">
          <h1>computer</h1>
            <p>
                  <img
                    src="https://i.imgur.com/CyvHqQH.png"
                    alt=""
                    width="200px"
                    height="200px"
                  />
              </p>
        </div>
      </div>:<Popup result={result} setDisplay={setDisplay} points={points} setStart={setStart}
      setPoints={setPoints}/>
  ) 
} 


export default Game;