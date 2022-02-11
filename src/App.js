import { useState } from "react";
import sentence from "./sentence";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  // const [button, setButton] = useState(true);
  const [sentence, setSentence] = useState(false);
  return (
    <div className="App">
      <h1>{login === true ? "welcome back!" : "Please Login"}</h1>

      {!login && (
        <button
          onClick={() => {
            setLogin(true);
            setButton(false);
            setSentence(true);
          }}
        >
          login
        </button>
      )}

      {Login && (
        <button
          onClick={() => {
            setLogin(false);
            setButton(true);
            setButton(false);
          }}
        >
          logout
        </button>
      )}

      <button>btn</button>

      {!sentence ? <sentence /> : ""}
    </div>
  );
}

export default App;

// {toggleBTN && bottom}
