import React, { useState } from "react";

const Usestate = () => {
  const  [count, setCount] = useState(0);

 function increment(){
  if(count < 30)
  setCount(count + 1)
 }

  function decrement(){
    if(count > 0){
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>Hello, Himanshu</h1>
      <h2>counter</h2>
      <h1>Count : {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Usestate;
