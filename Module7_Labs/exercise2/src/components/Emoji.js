import { useContext } from 'react'
import { EmojiContext } from './EmojiContext';
import { useState } from "react";
const happy = "😊";
//const laugh = "😂";
const emojiArray = ["🥳", "🤮", "😎","🤬", "😈"]; 

function Emoji() {
  const [mood, setMood] = useState(happy);
  const {emoji, setEmoji} = useContext(EmojiContext);

  function RandomMood() {
    const emojiArray2 = [...emojiArray]; //NEW ARRAY
    emojiArray2.splice(emojiArray.indexOf(mood), 1); //remove the current mood from the array
    
    let thisIndex = Math.floor(Math.random() * (emojiArray2.length-1)); //ROLL THE DICE
    
    const thismood = emojiArray2[thisIndex]; //UPDATING THE EMOJI
    setMood(thismood);
    setEmoji(thismood);
  }
  return (
    <div>
      <h1>{mood}</h1>
      <button onClick={RandomMood}>Change Mood</button>
    </div>
  );
}
export default Emoji;