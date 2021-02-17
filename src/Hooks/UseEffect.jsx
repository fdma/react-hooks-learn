import { useState, useEffect } from "react";
//Хук эффекта даёт возможность выполнять побочные эффекты в функциональном компоненте
//эффектами в React-компонентах могут быть: загрузка данных,
//оформление подписки и изменение DOM вручную.
function UseEffect() {
    //при помощи хука эффекта я меняю тайтл
    useEffect(() => {
        document.title = `Вы нажали ${count}`;
    });
    const [count, setCount] = useState(0);
    return (
        <div className="UseState">
            <h1>Click {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count * 2)}>*</button>
            <button onClick={() => setCount(count / 2)}>/</button>
        </div>
    );
}

export default UseEffect;