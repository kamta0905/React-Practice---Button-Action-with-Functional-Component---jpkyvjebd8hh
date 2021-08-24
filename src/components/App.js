import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(true);
  return (
    
    <div id="main">
       {show ? null : <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
            <button id="click" onClick={function name() { setShow(false) }} >
                Click me
            </button>
    </div>
  );
}


export default App;
