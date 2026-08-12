import React from "react";
import { useRef } from "react";

const App = () => {
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Himanshu";
  };

  const inputElement = useRef(1);
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & write Himanshu</button>
    </div>
  );
};

export default App;
