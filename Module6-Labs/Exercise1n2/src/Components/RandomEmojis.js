
import {useState} from "react";

const listEmoji = ['😊', '😅', '🙂', '💩', '😞'];

function RandomEmojis(props){

    

    const [mood, setMood] = useState(listEmoji[0])

    function ChangeEmojis(){
      return  listEmoji[Math.floor(Math.random()*listEmoji.length)]

    }
    return(
        <div>
      <h1>{mood}</h1>
      <button onClick = {ChangeEmojis}>Change Emojis</button>
      </div>
    )
  }
  
  export default RandomEmojis;  