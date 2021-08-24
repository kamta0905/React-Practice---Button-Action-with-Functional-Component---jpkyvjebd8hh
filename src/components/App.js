import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    
    <div id="main">
      // Do not alter the main div
     <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy </p>
      <button id="click" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default App;
