import { useState } from "react"

export default function Header(){
//Any data can be STATE var/num/etc when state changes REACT updates-Whole Concept//
//Example of message/button State//
//Short Circuting//
    const [message, setMessage] = useState("Welcome!");
    const [isShown, setIsShown] = useState(false);

    function handleClick(){
        if(!isShown){
            setMessage("This is an example of state being updated")
            setIsShown(true)
        } else{
            setMessage("Welcome!")
            setIsShown(false)
        }
    }

   return (
     <>
       <div>
         <h1>Demo on State & Props</h1>
       </div>
       <p>{message}</p>
       <button className="btn" onClick={handleClick}>{!isShown ? "Show MOTD" : "HideMOTD"}</button>
       
     </>
   );
}