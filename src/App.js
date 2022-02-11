import { useState } from "react";
import "./App.css";

function App() {
  const [Login, setLogin] = useState(false);
  const [button,setButton] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        &nbsp;
        <h1>{Login?'welcome back!':'Please Login'}</h1>

        <div className="backgroundStyle">
        {button&&<button onClick={() => {
          setLogin(true);
          setButton(false)
        }}>login</button>}
        
        {!button&&<button onClick={() => {
          setLogin(false)
          setButton(true)
          }}>logout</button>}
        </div>

         
      </header>
    </div>
  );
}

export default App;

// {toggleBTN && bottom}