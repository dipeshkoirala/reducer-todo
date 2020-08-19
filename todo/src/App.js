import React from "react";
import logo from "./logo.svg";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header bg-primary m-3 p-3">Reducer TODO</h1>
      <TodoItems />
    </div>
  );
}

export default App;
