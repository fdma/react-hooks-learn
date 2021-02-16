import {useState} from "react";
//useState — это новый способ использовать те же возможности, что даёт this.state в классах
function UseState() {
  //Здесь объявляется переменная состояния(state) и изменения состояния(setState). 
  //В setState передаем исходное состояние - 0
  const [count, setCount] = useState(0);
  return (
    <div className="UseState">
      <h1>Click {count}</h1>
      {/* При клике на кнопку я меняю переменную состояния state.count при помощи setCount */}
       {/* Получился небольшой псевдо-калькулятор */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count * 2)}>*</button>
      <button onClick={() => setCount(count / 2)}>/</button>
    </div>
  );
}

export default UseState;
