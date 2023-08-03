import { useState } from "react";
import Greetings from "./components/Greetings";
import MyClock from "./components/Clock";

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  //const [student, setStudent] = useState({name: "default"})

  return (
    <div className="App">
      <header className="App-header">
        <Greetings /> {/**Module 7 Exercise 1*/}
        
        {/* <Greeting name = {student.name}/>
        <button onClick = {() => {setStudent({name: "Teddy"})}}>Change Student</button> * MODULE 6 EXERCISE 2*/}
      </header>

      <div>
        <MyClock />
      </div>
    </div>
  );
}

export default App;
