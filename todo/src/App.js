import React, { useState } from "react";
import logo from "./logo.svg";
import TodoItems from "./components/TodoItems";
import { useDarkMode } from "./components/MyMode";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <h1 className="header bg-primary m-3 p-3">
        Reducer TODO
        <span className="dark-mode__toggle bg-info float-right">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </span>
      </h1>
      <TodoItems />
    </div>
  );
}

export default App;
