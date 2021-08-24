import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      // Do not alter the main div
     <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default App;
