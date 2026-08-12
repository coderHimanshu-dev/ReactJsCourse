import React, { useReducer } from "react";

const intialState = { Count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, Count : state.Count + 1}
      break;
      case 'decrement' : 
      return {...state, Count : state.Count - 1}
      break;
      case 'reset': 
      return {...state, Count : 0}
    default:
      return state;
      break;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <h1>Count : {state.Count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({type :  'decrement'})}>decrement</button>
      <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  );
};

export default Counter;
