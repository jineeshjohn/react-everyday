import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Counter from "./counter";
import TodoApp from "./todo";

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
