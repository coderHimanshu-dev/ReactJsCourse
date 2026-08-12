import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    if (num < 100) setNum(num + 1);
  };
  const decrement = () => {
    if (num > 0) setNum(num - 1);
  };

  return (
    <div>
      <h1>Counter : </h1>
      <hr />
      <h1>Count : {num}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decreament</button>
    </div>
  );
};

export default Counter;
