import {useState} from "react";
import UseEffect from "./Hooks/UseEffect";
import './App.css';
import UseState from "./Hooks/UseState";
function App() {
  return (
    <div className="App">
      <h1>Хуки позволяют повторно использовать логику состояния, не затрагивая дерево компонентов</h1>
      {/* <UseState /> */}
      <UseEffect/>


    <a href="https://ru.reactjs.org/">Дока Реакта</a>
    </div>
  );
}

export default App;