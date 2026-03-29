import { useState } from "react";
import ReactDOM from "react-dom";

function Popup({result,setDisplay,points,setStart,setPoints}){
    
    function closePopup(){
        setDisplay(true);
        if(points===5){
            setStart(false);
            setPoints(0);
        }
    }
    return (
        ReactDOM.createPortal(
        <div className="popup">
            
            <div className="popupContent">

                <h1>{result}</h1>
                
                {points !== 5?<h1>points: {points}</h1>: <h1>GameOver</h1> }
                
                
                <button onClick={closePopup}>
                    {points !==1? "close": "Return to start"}</button>
            </div>

        </div>,document.querySelector("#popup") 
        )
    )

}

export default Popup;