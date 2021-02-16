import {useState} from "react";
import './App.css';
import UseState from "./Hooks/UseState";
function App() {
  return (
    <div className="App">
      <h1>Хуки позволяют повторно использовать логику состояния, не затрагивая дерево компонентов</h1>
      <UseState />
    </div>
  );
}

export default App;
