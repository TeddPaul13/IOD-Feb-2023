
import {useState} from "react";
import Emojis from'./Components/Emojis.js'; //Exercise 3
import Calculator from'./Components/Calculator.js' //Exercise 4
import App1 from'./Components/Helloword.js'  // Exercise 1 
 
function Greeting(props){
  return(
    <h1>Hello, {props.name}</h1>
  )
}

function App() {
  const [student, setStudent] = useState({name: "default"})

  return (
    <div className="App">
      <header className="App-header">
        <App1/>
        <Greeting name = {student.name}/>

        <button onClick = {() => {setStudent({name: "Teddy"})}}>Change Student</button> {/**Exercise 2 */}
        <Emojis/>

        <Calculator/>
        
        
      </header>
    </div>
  );
}


export default App;
