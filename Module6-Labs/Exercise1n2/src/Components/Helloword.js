


function Greeting(props){
  return(
    <h1>Hello, {props.name}</h1>
  )
}

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Teddy"/>
      </header>
    </div>
  );
}



export default App1;