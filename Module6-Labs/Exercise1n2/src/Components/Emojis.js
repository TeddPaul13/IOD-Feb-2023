

import {useState} from "react";

const happy = '😊';
const laugh = '😂';

function Emojis(props){
    const [mood, setMood] = useState(happy)

    function ChangeMood(){
      if(mood === happy){
        setMood(laugh)
      }else{
        setMood(happy)
      }
    }
    return(
        <div>
      <h1>{mood}</h1>
      <button onClick = {ChangeMood}>Change Mood</button>
      </div>
    )
  }
  
  export default Emojis;  