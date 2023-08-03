//MODULE 7 EXERCISE 1;

import { useEffect, useState } from "react";

function Greetings(){

  const [name, setName] = useState("default")

function SendGreeting(){
  setName("Teddy")
}
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello {name} </h2>
        <button onClick={SendGreeting}> Change Name</button>
      </header>
    </div>
  );
}
  
export default Greetings;